<template>
  <header class="header">
    <div class="header-contents">
      <div class="header-contents-logo">
        <label for="my-drawer" class="drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </label>
      </div>
      <div class="header-contents-nav navbar">
        <NuxtLink
          v-for="nav in navigations"
          :key="nav.id"
          :to="nav.to"
        >
          <AtomsBasicButton type="ghost" size="sm">
            {{ nav.name }}
          </AtomsBasicButton>
        </NuxtLink>
      </div>
      <div class="header-contents-user">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-7">
            <span class="text-xs">AA</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navigations = [{
  id: '1',
  name: 'Home',
  to: '/',
},
{
  id: '2',
  name: 'News',
  to: '/news',
}];
</script>

<style scoped lang="scss">
.header {
  @apply flex justify-center w-full h-10 bg-primary px-2;

  &-contents {
    @apply flex items-center h-full;

    width: 1000px;

    &-logo {
      @apply text-xl font-extrabold;
    }

    &-nav {
      @apply flex-1 flex px-10;

      & nav {
        @apply text-base mx-3;
      }
    }
  }
}
</style>
