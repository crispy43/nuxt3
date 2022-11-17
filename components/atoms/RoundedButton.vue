<template>
  <button
    :class="[
      'rounded-button',
      type && `rounded-button-${type}`,
      size && `rounded-button-${size}`,
    ]"
    @click="click"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface RoundedButtonProps {
  type?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'lg' | 'md' | 'sm' | 'xs';
}
defineProps<RoundedButtonProps>();

interface RoundedButtonEmits {
  (e: 'click'): void;
}
const emit = defineEmits<RoundedButtonEmits>();

const click = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.rounded-button {
  @apply btn rounded-full px-10;

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
    @apply btn-lg px-12;
  }

  &-md {
    @apply btn-md px-6;
  }

  &-sm {
    @apply btn-sm px-8;
  }

  &-xs {
    @apply btn-xs px-6;
  }
}
</style>
