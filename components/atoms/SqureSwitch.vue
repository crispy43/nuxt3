<template>
  <div class="square-switch">
    <input
      :id="id"
      type="checkbox"
      :class="colorTheme"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <label :for="id" />
  </div>
</template>

<script>
export default {
  name: 'SquareSwitch',
  props: {
    id: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: 'blue',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.square-switch {
  display: inline-block;
  width: 25px;
  height: 15px;

  input {
    display: none;
  }

  label {
    display: inline-block;
    width: 25px;
    height: 15px;
    cursor: pointer;
    position: relative;
    background-color: rgb(127, 132, 142);
    border-radius: 1.5px;

    &::before {
      content: '';
      display: block;
      width: 11.5px;
      height: 11.5px;
      left: 1.5px;
      bottom: 1.5px;
      position: absolute;
      background-color: white;
      border-radius: 1.5px;
      transition: all 0.2s ease;
    }
  }

  input:checked + label:before {
    transform: translateX(10.5px);
  }

  input:disabled + label {
    opacity: 0.6;
  }

  .red:checked + label {
    background-color: rgb(239, 89, 111);
  }

  .orange:checked + label {
    background-color: rgb(209, 154, 102);
  }

  .yellow:checked + label {
    background-color: rgb(229, 192, 123);
  }

  .green:checked + label {
    background-color: rgb(137, 202, 120);
  }

  .cyan:checked + label {
    background-color: rgb(43, 186, 197);
  }

  .blue:checked + label {
    background-color: rgb(97, 175, 239);
  }

  .purple:checked + label {
    background-color: rgb(213, 95, 222);
  }
}
</style>
