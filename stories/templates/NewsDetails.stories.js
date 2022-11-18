import NewsDetails from '~/components/templates/NewsDetails.vue';

export default {
  title: 'Templates/NewsDetails',
  component: NewsDetails,
};

export const Template = args => ({
  components: { NewsDetails },
  setup() { return { args }; },
  template: `
<div class="w-full h-screen bg-white">
  <NewsDetails title="「再生可能エネルギー」" v-bind="args">
    <blockquote>
      ～未来を守ろう！
    </blockquote>
    <p>
      中学校に入学して間もなく
    </p>
  </NewsDetails>
</div>
  `,
});
