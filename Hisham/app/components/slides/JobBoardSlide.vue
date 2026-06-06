<script setup lang="ts">
const { jobs } = useMockData()
const { goToSlide } = usePresentation()
const { jobs: jobsT, filter } = useArabicTranslations()

const handleApply = () => {
  goToSlide(8)
}
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
        <h2>{{ jobsT.title }}</h2>
        <p>{{ jobsT.subtitle }}</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 400, delay: 100 } }"
        class="mb-8 flex gap-3"
      >
        <UInput
          icon="i-lucide-search"
          :placeholder="jobsT.searchJobs"
          size="lg"
          class="flex-1"
        />
        <UButton
          icon="i-lucide-sliders-horizontal"
          color="neutral"
          variant="outline"
          size="lg"
          :aria-label="filter"
        />
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <SharedJobCard
          v-for="(job, index) in jobs"
          :key="job.id"
          :job="job"
          :index="index"
          @apply="handleApply"
        />
      </div>
    </div>
  </div>
</template>
