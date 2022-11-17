<template>
  <div class="squre-checkbox">
    <input
      :id="id"
      type="checkbox"
      :class="colorTheme"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <label
      :for="id"
      :style="{
        width: size,
        height: size,
        fontSize: `calc(${size} - 0.2em)`
      }"
    >
      <span v-show="modelValue">&#10004;</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SqureCheckBox',
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
    size: {
      type: String,
      default: '15px',
    },
  },
};
</script>

<style scoped lang="scss">
.squre-checkbox {
  display: inline-block;
  width: auto;
  height: auto;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    cursor: pointer;
    border: 1px solid rgb(63, 66, 72);
    background-color: rgb(234, 234, 234);
    color: rgb(234, 234, 234);
    border-radius: 0.2em;
    font-size: 0.8em;
  }

  input:disabled + label {
    opacity: 0.6;
  }

  .black:checked + label {
    background-color: rgb(33, 37, 43);
    color: white;
  }

  .red:checked + label {
    background-color: rgb(239, 89, 111);
    color: white;
  }

  .orange:checked + label {
    background-color: rgb(209, 154, 102);
    color: white;
  }

  .yellow:checked + label {
    background-color: rgb(229, 192, 123);
    color: white;
  }

  .green:checked + label {
    background-color: rgb(137, 202, 120);
    color: white;
  }

  .cyan:checked + label {
    background-color: rgb(43, 186, 197);
    color: white;
  }

  .blue:checked + label {
    background-color: rgb(97, 175, 239);
    color: white;
  }

  .purple:checked + label {
    background-color: rgb(213, 95, 222);
    color: white;
  }
}
</style>
