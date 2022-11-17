<template>
  <AtomsCard>
    <form
      class="register-form"
      @submit="submit"
    >
      <div class="register-form-field">
        <label for="userName">Name</label>
        <AtomsTextInput
          :id="'userName'"
          :name="'userName'"
        />
      </div>
      <div class="register-form-field">
        <label for="email">Email</label>
        <AtomsTextInput
          :id="'email'"
          :name="'email'"
        />
      </div>
      <div class="register-form-field">
        <label for="email">Mobile</label>
        <AtomsTextInput
          :id="'mobile'"
          :name="'mobile'"
        />
      </div>
      <div class="register-form-field">
        <label for="password">Password</label>
        <AtomsTextInput
          :id="'password'"
          :name="'password'"
          :input-type="'password'"
        />
      </div>
      <div class="register-form-field">
        <label for="repassword">Re-enter Password</label>
        <AtomsTextInput
          :id="'repassword'"
          :name="'repassword'"
          :input-type="'password'"
        />
      </div>
      <div class="register-form-submit">
        <AtomsRoundedButton type="primary">
          Register
        </AtomsRoundedButton>
      </div>
    </form>
  </AtomsCard>
</template>

<script setup lang="ts">
interface RegisterFormEmits {
  (e: 'submit', v: any): void;
}
const emit = defineEmits<RegisterFormEmits>();

const submit = (e: any) => {
  e.preventDefault();
  if (!(e.target.userName as HTMLInputElement).value ||
      !e.target.email.value ||
      !e.target.mobile.value ||
      !e.target.password.value) {
    alert('empty field');
  } else if (e.target.password.value !== e.target.repassword.value) {
    alert('password is not same');
  } else {
    emit('submit', {
      type: 'register',
      values: {
        userName: e.target.userName.value,
        email: e.target.email.value,
        mobile: e.target.mobile.value,
        password: e.target.password.value,
      },
    });
  }
};
</script>

<style scoped lang="scss">
.register-form {
  @apply flex flex-col p-7;

  &-field {
    @apply flex flex-col my-2;
  }

  &-submit {
    @apply flex justify-center my-2;
  }
}
</style>
