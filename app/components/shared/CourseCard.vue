<script setup lang="ts">
import type { Course } from '~/composables/useMockData'

const props = defineProps<{
  course: Course
  index?: number
}>()

const { dashboard, translateStatus, enrolledCount } = useArabicTranslations()
const enrolled = ref(false)

const handleEnroll = () => {
  enrolled.value = true
  setTimeout(() => {
    enrolled.value = false
  }, 2000)
}
</script>

<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        delay: (index || 0) * 100
      }
    }"
    class="overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div class="relative aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden mb-4">
      <img
        v-if="course.thumbnail"
        :src="course.thumbnail"
        :alt="course.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
        <div class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <UIcon name="i-lucide-play" class="w-8 h-8 text-blue-600 ml-1" />
        </div>
      </div>

      <UBadge
        :color="course.status === 'active' ? 'green' : course.status === 'upcoming' ? 'amber' : 'neutral'"
        class="absolute top-2 right-2"
        size="sm"
      >
        {{ translateStatus(course.status) }}
      </UBadge>
    </div>

    <div class="space-y-3">
      <h3 class="font-semibold text-lg text-slate-900 dark:text-white line-clamp-2">
        {{ course.title }}
      </h3>

      <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
        {{ course.description }}
      </p>

      <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-clock" class="w-4 h-4" />
          <span>{{ course.duration }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-users" class="w-4 h-4" />
          <span>{{ course.enrolled }} {{ enrolledCount }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <UIcon name="i-lucide-user" class="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
        <span class="text-sm text-slate-700 dark:text-slate-300">{{ course.instructor }}</span>
      </div>

      <UButton
        v-if="!enrolled"
        color="primary"
        block
        class="mt-4"
        @click="handleEnroll"
      >
        <template #leading>
          <UIcon name="i-lucide-bookmark-plus" />
        </template>
        {{ dashboard.enrollNow }}
      </UButton>

      <UButton
        v-else
        color="green"
        block
        disabled
        class="mt-4"
        v-motion
        :initial="{ scale: 0.9, opacity: 0 }"
        :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300 } }"
      >
        <template #leading>
          <UIcon name="i-lucide-check-circle" />
        </template>
        {{ dashboard.enrolledSuccessfully }}
      </UButton>
    </div>
  </UCard>
</template>
