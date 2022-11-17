<template>
  <div
    class="round-radio"
    :style="{
      'width': width,
      'padding': padding,
      'margin': margin,
      'justify-content': justifyContent.value
    }"
  >
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value || id"
      :class="radioColorTheme"
      :checked="checked"
      @change="$emit('picked', $event.target.value)"
    >
    <label
      :for="id"
      class="radio"
      :style="{
        'font-size': radioSize,
        'padding-left': gap
      }"
    />
    <label
      :for="id"
      :style="{
        'font-size': fontSize,
        'padding-left': gap
      }"
    >
      <slot />
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RoundRadio',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: String,
    checked: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'auto',
    },
    align: {
      type: String,
      default: 'left',
    },
    gap: {
      type: String,
      default: '10px',
    },
    fontSize: String,
    radioSize: String,
    radioColorTheme: {
      type: String,
      default: 'black',
    },
    padding: String,
    margin: String,
  },
  setup (props) {
    const justifyContent = ref('flex-start');

    if (props.align === 'center') {
      justifyContent.value = 'center';
    } else if (props.align === 'right') {
      justifyContent.value = 'flex-end';
    };

    return {
      justifyContent,
    };
  },
};
</script>

<style scoped lang="scss">
.round-radio {
  display: flex;
  align-items: center;

  input[type="radio"] {
    display: none;
  }

  label {
    cursor: pointer;
    font-size: 15px;
    color: rgb(171, 178, 191);
  }

  input[type="radio"] + .radio {
    display: inline-block;
    position: relative;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: white;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 0.5em;
      height: 0.5em;
      left: 0.15em;
      bottom: 0.15em;
      background-color: transparent;
      border-radius: 50%;
    }
  }

  .black[type="radio"]:checked + .radio::before {
    background-color: black;
  }

  .background-color[type="radio"]:checked + .radio::before {
    background-color: rgb(33, 37, 43);
  }

  .grey[type="radio"]:checked + .radio::before {
    background-color: rgb(127, 132, 142);
  }

  .red[type="radio"]:checked + .radio::before {
    background-color: rgb(239, 89, 111);
  }

  .orange[type="radio"]:checked + .radio::before {
    background-color: rgb(209, 154, 102);
  }

  .yellow[type="radio"]:checked + .radio::before {
    background-color: rgb(229, 192, 123);
  }

  .green[type="radio"]:checked + .radio::before {
    background-color: rgb(137, 202, 120);
  }

  .cyan[type="radio"]:checked + .radio::before {
    background-color: rgb(43, 186, 197);
  }

  .blue[type="radio"]:checked + .radio::before {
    background-color: rgb(97, 175, 239);
  }

  .purple[type="radio"]:checked + .radio::before {
    background-color: rgb(213, 95, 222);
  }
}
</style>
