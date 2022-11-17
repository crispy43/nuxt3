<template>
  <button
    class="basic-button"
    :style="{
      'width': width,
      'height': height,
      'font-size': fontSize,
      'padding': padding,
      'margin': margin
    }"
    tabindex="-1"
  >
    <slot />
  </button>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: 'auto',
  },
  fontSize: String,
  padding: String,
  margin: String,
});
</script>

<style scoped lang="scss">
.basic-button {
  min-height: auto;
  padding: 6px 15px;
  background-color: rgb(64, 71, 84);
  border: none;
  border-radius: 3px;
  color: rgb(171, 178, 191);
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(77, 85, 101);
  }
}
</style>
