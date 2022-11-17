// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import ColorButton from './ColorButton.vue';

export default {
  title: 'ColorButton',
  component: ColorButton,
} as Meta<typeof ColorButton>;

export const Primary: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: '<ColorButton>Click</ColorButton>',
});

export const Red: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'red'">Click</ColorButton>`,
});

export const Green: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'green'">Click</ColorButton>`,
});

export const Yellow: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'yellow'">Click</ColorButton>`,
});

export const Orange: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'orange'">Click</ColorButton>`,
});

export const Cyan: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'cyan'">Click</ColorButton>`,
});

export const Purple: StoryFn<typeof ColorButton> = () => ({
  components: { ColorButton },
  template: `<ColorButton :colorTheme="'purple'">Click</ColorButton>`,
});
