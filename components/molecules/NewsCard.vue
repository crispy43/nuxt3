<template>
  <div class="news-card">
    <AtomsCard>
      <div class="news-card-image">
        NO IMAGE
      </div>
      <div class="news-card-info">
        <p class="news-card-info-title">
          {{ title }}
        </p>
        <div class="news-card-info-tags">
          <AtomsBadge
            v-for="(tag, index) in tags"
            :key="index"
            :type="tag.type"
            size="sm"
          >
            {{ tag.name }}
          </AtomsBadge>
        </div>
        <div class="news-card-info-footer">
          <p>like: {{ likeCount }}</p>
          <p>{{ createdAt }}</p>
        </div>
      </div>
    </AtomsCard>
  </div>
</template>

<script setup lang="ts">
interface Tag {
  type: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  name: string;
}
interface NewsCardProps {
  title?: string;
  tags?: Tag[];
  likeCount?: number;
  createdAt?: string;
}
withDefaults(defineProps<NewsCardProps>(), {
  title: '',
  tags: () => [],
  likeCount: 0,
  createdAt: '',
});
</script>

<style scoped lang="scss">
.news-card {
  width: 305px;
  height: 325px;

  & > div {
    @apply h-full;
  }

  &-image {
    @apply flex items-center justify-center w-full bg-gray-400 rounded-t-md;

    height: 200px;
  }

  &-info {
    @apply p-3;

    &-title {
      @apply text-lg font-bold;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-tags {
      @apply flex mt-2 mb-4;

      & > div {
        @apply mr-2;
      }
    }

    &-footer {
      @apply flex justify-between;

      & > p {
        @apply text-sm text-gray-400;
      }
    }
  }
}
</style>
