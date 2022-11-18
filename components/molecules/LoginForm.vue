<template>
  <AtomsCard>
    <form
      class="login-form"
      @submit="submit"
    >
      <div class="login-form-field">
        <label for="email">Email</label>
        <AtomsTextInput
          :id="'email'"
          :name="'email'"
        />
      </div>
      <div class="login-form-field">
        <label for="password">Password</label>
        <AtomsTextInput
          :id="'password'"
          :name="'password'"
          :input-type="'password'"
        />
      </div>
      <div class="login-form-submit">
        <AtomsRoundedButton type="primary">
          login
        </AtomsRoundedButton>
      </div>
    </form>
  </AtomsCard>
</template>

<script setup lang="ts">
interface loginFormEmits {
  (e: 'submit', v: any): void;
}
const emit = defineEmits<loginFormEmits>();

const submit = (e: any) => {
  e.preventDefault();
  if (!(e.target.email as HTMLInputElement).value ||
      !(e.target.password as HTMLInputElement).value) {
    alert('empty field');
  } else {
    emit('submit', {
      type: 'login',
      values: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
    });
  }
};
</script>

<style scoped lang="scss">
.login-form {
  @apply flex flex-col p-7;

  &-field {
    @apply flex flex-col my-2;
  }

  &-submit {
    @apply flex justify-center my-2;
  }
}
</style>
