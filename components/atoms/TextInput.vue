<template>
  <input
    :id="id"
    :name="name"
    :type="inputType"
    :class="['text-input', `text-input-${type}`, `text-input-${size}`]"
    @change="change"
  >
</template>

<script setup lang="ts">
interface TextInputProps {
  id?: string;
  name?: string;
  inputType?: 'text' | 'password';
  type?: 'bordered' | 'underlined';
  size?: 'lg' | 'md' | 'sm' | 'xs';
}
withDefaults(defineProps<TextInputProps>(), {
  type: 'bordered',
});

interface TextInputEmits {
  (e: 'change', v: string): void;
}
const emit = defineEmits<TextInputEmits>();

const change = (e: Event) => {
  emit('change', (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
.text-input {
  @apply input;

  &-bordered {
    @apply input-bordered;
  }

  &-underlined {
    background-color: transparent;
    border-bottom: 2px solid #ccc;
    border-radius: 0;
  }

  &-lg {
    @apply input-lg;
  }

  &-md {
    @apply input-md;
  }

  &-sm {
    @apply input-sm;
  }

  &-xs {
    @apply input-xs;
  }
}
</style>
