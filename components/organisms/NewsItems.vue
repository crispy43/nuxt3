<template>
  <div class="news-items">
    <NuxtLink
      v-for="item in newsList"
      :key="item.id"
      :to="`/news/${item.id}`"
    >
      <MoleculesNewsCard
        :title="item.title"
        :tags="item.tags"
        :like-count="item.like"
        :created-at="item.createdAt"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Tag {
  type: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  name: string;
}
interface NewsList {
  id: string;
  title: string;
  tags: Tag[];
  like: number;
  createdAt: string;
  updatedAt: string | null | undefined;
}
const { data: newsList } = await useFetch<NewsList[]>('http://localhost:3000/news');
</script>

<style scoped lang="scss">
.news-items {
  @apply flex flex-wrap;

  width: 1000px;

  & > a {
    @apply m-3 flex-1;
  }
}
</style>
