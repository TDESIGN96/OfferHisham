<script setup lang="ts">
const { courses } = useMockData()
const { dashboard } = useArabicTranslations()
const activeCourses = computed(() => courses.filter(c => c.status === 'active' || c.status === 'upcoming'))
</script>

<template>
  <div class="slide-page">
    <div class="slide-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="slide-header"
      >
        <h2>{{ dashboard.title }}</h2>
        <p>{{ dashboard.subtitle }}</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 400, delay: 100 } }"
        class="mb-8"
      >
        <UInput
          icon="i-lucide-search"
          :placeholder="dashboard.searchCourses"
          size="lg"
        />
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <SharedCourseCard
          v-for="(course, index) in activeCourses"
          :key="course.id"
          :course="course"
          :index="index"
        />
      </div>

      <div v-if="activeCourses.length === 0" class="text-center py-16">
        <UIcon name="i-lucide-inbox" class="w-16 h-16 mx-auto text-slate-300 dark:text-slate-700 mb-4" />
        <p class="text-slate-600 dark:text-slate-400">
          لا توجد دورات متاحة حالياً
        </p>
      </div>
    </div>
  </div>
</template>

