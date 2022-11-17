<template>
  <div class="sign-in" @keyup.enter="signIn">
    <div class="sign-in-container">
      <div class="sign-in-title">
        <h1>Dashboard</h1>
      </div>
      <div class="sign-in-box">
        <div class="sign-in-box-title">
          <h2>Welcome</h2>
        </div>
        <div class="sign-in-box-form">
          <div>
            <label for="user-id">ID</label>
            <input id="user-id" v-model="id" type="text">
          </div>
          <div>
            <label for="user-pwd">Password</label>
            <input id="user-pwd" v-model="pwd" type="password">
          </div>
        </div>
        <div class="sign-in-box-submit">
          <div class="sign-in-box-submit-options">
            <span>
              <SqureCheckBox
                :id="'inforced-sign-in'"
                :size="'15px'"
                :model-value="isAutoSignIn"
                @update:modelValue="isAutoSignIn = $event"
              />
            </span>
            <label for="inforced-sign-in">
              Auto Sign In
            </label>
          </div>
          <div>
            <NuxtLink to="/main">
              <BasicButton
                :padding="'7.5px 15px'"
                @click="signIn"
              >
                Sign In
              </BasicButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// modules
import { ref } from 'vue';

// components
import BasicButton from '~/components/atoms/BasicButton.vue';
import SqureCheckBox from '~/components/atoms/SqureCheckBox.vue';

export default {
  name: 'SignIn',
  components: {
    BasicButton,
    SqureCheckBox,
  },
  setup () {
    const id = ref('');
    const pwd = ref('');
    const isAutoSignIn = ref(false);

    return {
      id,
      pwd,
      isAutoSignIn,
    };
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgb(33, 37, 43);
}
h1, h2, h3, h4, h5, h6, p, label, th, td {
  color: rgb(171, 178, 191);
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  line-height: 1;
}
input:focus, textarea:focus, select:focus, button:focus {
  outline: none;
}

.sign-in {
  flex: 1 1 100%;

  &-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  &-title {
    text-align: center;
    margin-bottom: 25px;

    h1 {
      font-size: 17px;
      color: rgb(229, 192, 123);
    }
  }

  &-box {
    background-color: rgb(40, 44, 52);
    border: 1px solid rgb(63, 66, 72);
    border-radius: 3px;

    &-title {
      text-align: center;
      margin-top: 35px;

      h2 {
        font-size: 15px;
        color: rgb(229, 192, 123);
      }
    }

    &-form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 25px 0;

      div {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        width: 225px;
        padding: 5px 0;

        label {
          flex: 0 0 75px;
          font-size: 15px;
        }

        input {
          flex: 1 1 150px;
          background-color: rgb(33, 37, 43);
          border: none;
          border-radius: 3px;
          font-size: 15px;
          color: rgb(234, 234, 234);
          padding: 2.5px 5px;
        }
      }
    }

    &-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 35px;

      &-options {
        display: flex;
        align-items: center;
        position: absolute;
        left: 15px;
        bottom: 10px;

        & > label {
          font-size: 13px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
