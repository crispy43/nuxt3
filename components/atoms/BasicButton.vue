<template>
  <button
    :class="[
      'basic-button',
      type && `basic-button-${type}`,
      size && `basic-button-${size}`,
    ]"
    @click="click"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface BasicButtonProps {
  type?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'lg' | 'md' | 'sm' | 'xs';
}
defineProps<BasicButtonProps>();

interface BasicButtonEmits {
  (e: 'click'): void;
}
const emit = defineEmits<BasicButtonEmits>();

const click = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.basic-button {
  @apply btn px-6;

  &-primary {
    @apply btn-primary;
  }

  &-secondary {
    @apply btn-secondary;
  }

  &-accent {
    @apply btn-accent;
  }

  &-ghost {
    @apply btn-ghost;
  }

  &-outline {
    @apply btn-outline;
  }

  &-lg {
    @apply btn-lg px-8;
  }

  &-md {
    @apply btn-md px-6;
  }

  &-sm {
    @apply btn-sm px-4;
  }

  &-xs {
    @apply btn-xs px-2;
  }
}
</style>
