<template>
  <div class="login">
    <h1 class="login-title">
      Login
    </h1>
    <div>
      <MoleculesLoginForm
        @submit="login"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const login = async(o: any) => {
  console.log(o.values);
  console.log(await $fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(o.values),
  }));
};
</script>

<style scoped lang="scss">
.login {
  @apply flex flex-col items-center w-full min-h-screen;

  &-title {
    @apply text-3xl font-bold py-4;
  }
}
</style>
