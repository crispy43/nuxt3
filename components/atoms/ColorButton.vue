<template>
  <button
    :class="['color-button', colorTheme]"
    :style="{
      'width': width,
      'height': height,
      'font-size': fontSize,
      'color': color,
      'padding': padding,
      'margin': margin
    }"
    tabindex="-1"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ColorButton',
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    fontSize: String,
    color: String,
    padding: String,
    margin: String,
    colorTheme: {
      type: String,
      default: 'blue',
    },
  },
};
</script>

<style scoped lang="scss">
.color-button {
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  color: rgb(234, 234, 234);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.white {
  background-color: rgb(234, 234, 234);
  color: rgb(33, 37, 43);
  font-weight:600;
}

.grey {
  background-color: rgb(127, 132, 142);
}

.red {
  background-color: rgb(239, 89, 111);
}

.orange {
  background-color: rgb(209, 154, 102);
}

.yellow {
  background-color: rgb(229, 192, 123);
}

.green {
  background-color: rgb(137, 202, 120);
}

.cyan {
  background-color: rgb(43, 186, 197);
}

.blue {
  background-color: rgb(97, 175, 239);
}

.purple {
  background-color: rgb(213, 95, 222);
}
</style>
