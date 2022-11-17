<template>
  <div class="index">
    <div class="index-register">
      <MoleculesRegisterForm @submit="log" />
    </div>
    <div class="index-users">
      <div v-for="user in users" :key="user.id">
        <AtomsCard>
          <h1>{{ user.userName }}</h1>
          <p>{{ user.email }}</p>
          <p>{{ user.mobile }}</p>
          <AtomsRoundedButton :type="'outline'" :size="'xs'">
            see more
          </AtomsRoundedButton>
        </AtomsCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: string;
  userName: string;
  email: string;
  mobile: string;
  password: string;
}
const { data: users } = await useFetch<User[]>('http://localhost:3000/users');
console.log('users', users);

const log = (e: any) => console.log(e);
</script>

<style scoped lang="scss">
.index {
  @apply flex flex-col items-center justify-center w-full min-h-screen;

  &-register {
    @apply w-96;
  }

  &-users > div {
    @apply my-3;

    & > div {
      @apply p-4;
    }
  }
}
</style>
