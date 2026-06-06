<script setup lang="ts">
const { courses } = useMockData()
const { adminCourses, cancel, instructorPlaceholder, durationPlaceholder } = useArabicTranslations()

const showCreateModal = ref(false)

const columns = [
  { key: 'title', label: adminCourses.courseTitle },
  { key: 'instructor', label: adminCourses.instructor },
  { key: 'enrolled', label: adminCourses.enrolled },
  { key: 'completionRate', label: adminCourses.completionRate },
  { key: 'status', label: adminCourses.status }
]

const handleGenerateCertificate = (course: any) => {
  alert(`${adminCourses.generateAlert} ${course.title}`)
}

const actions = [
  {
    label: adminCourses.generateCodes,
    icon: 'i-lucide-award',
    color: 'amber',
    handler: handleGenerateCertificate
  }
]
</script>

<template>
  <div class="slide-page">
    <div class="slide-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="mb-6"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <UIcon name="i-lucide-book-open" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                {{ adminCourses.title }}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                {{ adminCourses.subtitle }}
              </p>
            </div>
          </div>
          <UButton
            icon="i-lucide-plus"
            color="primary"
            @click="showCreateModal = true"
          >
            {{ adminCourses.newCourse }}
          </UButton>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 400, delay: 200 } }"
          class="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-blue-600">{{ courses.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminCourses.totalCourses }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-green-600">{{ courses.filter(c => c.status === 'active').length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminCourses.active }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ courses.reduce((sum, c) => sum + c.enrolled, 0) }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminCourses.totalEnrolled }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-600">{{ Math.round(courses.reduce((sum, c) => sum + (c.completionRate || 0), 0) / courses.length) }}%</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminCourses.avgCompletion }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 300 } }"
      >
        <SharedDataTable
          :title="adminCourses.allCourses"
          :items="courses"
          :columns="columns"
          :actions="actions"
        />
      </UCard>

      <UModal v-model="showCreateModal">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">{{ adminCourses.createNewCourse }}</h3>
          </template>

          <div class="space-y-4">
            <UFormGroup :label="adminCourses.courseTitle">
              <UInput :placeholder="adminCourses.courseTitlePlaceholder" size="lg" />
            </UFormGroup>
            <UFormGroup :label="adminCourses.instructor">
              <UInput :placeholder="instructorPlaceholder" size="lg" />
            </UFormGroup>
            <UFormGroup label="المدة">
              <UInput :placeholder="durationPlaceholder" size="lg" />
            </UFormGroup>
          </div>

          <template #footer>
            <div class="flex gap-3 justify-end">
              <UButton color="neutral" variant="ghost" @click="showCreateModal = false">
                {{ cancel }}
              </UButton>
              <UButton color="primary" @click="showCreateModal = false">
                {{ adminCourses.createCourse }}
              </UButton>
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
  </div>
</template>
