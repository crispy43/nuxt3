// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import RoundRadio from './RoundRadio.vue';

export default {
  title: 'RoundRadio',
  component: RoundRadio,
} as Meta<typeof RoundRadio>;

export const Primary: StoryFn<typeof RoundRadio> = () => ({
  components: { RoundRadio },
  template: '<RoundRadio :checked="true" />',
});

export const Unchecked: StoryFn<typeof RoundRadio> = () => ({
  components: { RoundRadio },
  template: '<RoundRadio :checked="false" />',
});
