const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      }
    }
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  module: {
    rules: [
    {
       test: /\.scss$/,
       loaders: ['style-loader', 'css-loader', 'sass-loader'],
       include: path.resolve(__dirname, '../')
    },
    {  test: /\.css$/,
       loader: 'style-loader!css-loader',
       include: __dirname
    },
    {
       test: /\.(woff|woff2)$/,
       use: {
         loader: 'url-loader',
         options: {
           name: 'fonts/[hash].[ext]',
           limit: 5000,
           mimetype: 'application/font-woff'
         }
        }
    },
    {
      test: /\.(ttf|eot|svg|png)$/,
      use: {
         loader: 'file-loader',
         options: {
           name: 'fonts/[hash].[ext]'
         }
      }
    }
  ]
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    );
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
}
