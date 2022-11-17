<template>
  <div
    :class="[
      'basic-card',
      type && `basic-card-${type}`,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  type?: 'elevated' | 'primary' | 'neutural';
}
withDefaults(defineProps<CardProps>(), {
  type: 'elevated',
});
</script>

<style lang="scss" scoped>
.basic-card {
  @apply card w-full;

  &-elevated {
    @apply bg-base-100 shadow-xl;
  }

  &-primary {
    @apply bg-primary text-primary-content;
  }

  &-neutural {
    @apply bg-neutral text-neutral-content;
  }
}
</style>
