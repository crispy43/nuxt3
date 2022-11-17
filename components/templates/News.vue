<template>
  <div class="news">
    <h1 class="news-title">
      news
    </h1>
    <OrganismsNewsItems />
  </div>
</template>

<style scoped lang="scss">
.news {
  @apply flex flex-col items-center w-full min-h-screen;

  &-title {
    @apply text-3xl font-bold py-4;
  }
}
</style>
