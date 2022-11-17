<template>
  <div
    :class="[
      'basic-badge',
      type && `basic-badge-${type}`,
      size && `basic-badge-${size}`,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface BadgeProps {
  type?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'lg' | 'md' | 'sm' | 'xs';
}
defineProps<BadgeProps>();
</script>

<style scoped lang="scss">
.basic-badge {
  @apply badge;

  &-primary {
    @apply badge-primary;
  }

  &-secondary {
    @apply badge-secondary;
  }

  &-accent {
    @apply badge-accent;
  }

  &-ghost {
    @apply badge-ghost;
  }

  &-outline {
    @apply badge-outline;
  }

  &-lg {
    @apply badge-lg;
  }

  &-md {
    @apply badge-md;
  }

  &-sm {
    @apply badge-sm;
  }

  &-xs {
    @apply badge-xs;
  }
}
</style>
