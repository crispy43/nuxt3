// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import SqureCheckBox from './SqureCheckBox.vue';

export default {
  title: 'SqureCheckBox',
  component: SqureCheckBox,
} as Meta<typeof SqureCheckBox>;

export const Primary: StoryFn<typeof SqureCheckBox> = () => ({
  components: { SqureCheckBox },
  template: '<SqureCheckBox :modelValue="true" />',
});

export const Unchecked: StoryFn<typeof SqureCheckBox> = () => ({
  components: { SqureCheckBox },
  template: '<SqureCheckBox :modelValue="false" />',
});
