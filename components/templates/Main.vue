<template>
  <div v-if="users.length > 0">
    <div
      v-for="(user) in users"
      :key="user.id"
    >
      <div class="bg-[#282c34] text-white max-w-sm rounded overflow-hidden shadow-lg my-10">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ user.name }}
          </div>
          <p class="text-gray-500 text-base">
            {{ user.tel }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <AtomsColorButton>See More</AtomsColorButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: users } = await useFetch('http://localhost:3000/users');
</script>
