<template>
  <input
    :id="id"
    class="basic-input"
    :type="type"
    :style="{
      'width': width,
      'height': height,
      'font-size': fontSize,
      'text-align': textAlign,
      'padding': padding,
      'margin': margin
    }"
    :value="modelValue"
    @input="input($event.target.value)"
    @click="click()"
  >
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    id: String,
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '150px',
    },
    height: {
      type: String,
      default: 'auto',
    },
    fontSize: String,
    textAlign: String,
    padding: String,
    margin: String,
    autoComma: {
      type: Boolean,
      default: false,
    },
    maxFloat: {
      type: Number,
      default: 4,
    },
    clickSelect: {
      type: Boolean,
      default: true,
    },
  },
  setup (props, { emit }) {
    const input = (v) => {
      if (!props.autoComma) {
        emit('update:modelValue', v);
      } else {
        const removed = v.replace(/(,)/g, '');
        const commaSplit = removed.split('.');
        const isLastDot = (removed.substring(removed.length - 1) === '.' && commaSplit.length <= 2);
        const parsed = parseFloat(removed);
        if (!isNaN(parsed)) {
          const commaValue = parsed.toLocaleString(undefined, {
            minimumFractionDigits: commaSplit[1] ? commaSplit[1].length <= props.maxFloat ? commaSplit[1].length : props.maxFloat : 0,
            maximumFractionDigits: props.maxFloat,
          });
          if (props.id) { document.getElementById(props.id).value = `${commaValue}${isLastDot ? '.' : ''}`; };
          emit('update:modelValue', `${commaValue}${isLastDot ? '.' : ''}`);
        } else {
          if (props.id) { document.getElementById(props.id).value = '0'; };
          emit('update:modelValue', '0');
        }
      }
    };

    const click = () => {
      if (props.id && props.clickSelect) {
        document.getElementById(props.id).select();
      }
    };

    return {
      input,
      click,
    };
  },
};
</script>

<style scoped lang="scss">
.basic-input {
  min-height: 10px;
  padding: 6px;
  background-color: rgb(29, 31, 35);
  border: none;
  color: rgb(234, 234, 234);
  font-size: 15px;
  text-align: left;
  cursor: text;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
