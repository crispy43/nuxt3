import BasicButton from '~/components/atoms/BasicButton.vue';

export default {
  title: 'Atoms/Buttons/BasicButton',
  component: BasicButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'base',
          'primary',
          'secondary',
          'accent',
          'ghost',
          'outline',
        ],
      },
    },
    size: {
      control: { type: 'select', options: ['lg', 'md', 'sm', 'xs'] },
    },
  },
};

const Template = args => ({
  components: { BasicButton },
  setup() { return { args }; },
  template: `
<div class="w-full h-screen bg-white">
  <BasicButton v-bind="args">
    BasicButton
  </BasicButton>
</div>
  `,
});

export const base = Template.bind({});
base.args = {};

export const primary = Template.bind({});
primary.args = { type: 'primary' };

export const secondary = Template.bind({});
secondary.args = { type: 'secondary' };

export const accent = Template.bind({});
accent.args = { type: 'accent' };

export const ghost = Template.bind({});
ghost.args = { type: 'ghost' };

export const outline = Template.bind({});
outline.args = { type: 'outline' };

export const lg = Template.bind({});
lg.args = { size: 'lg' };

export const md = Template.bind({});
md.args = { size: 'md' };

export const sm = Template.bind({});
sm.args = { size: 'sm' };

export const xs = Template.bind({});
xs.args = { size: 'xs' };
