<script setup lang="ts">
const { courses } = useMockData()
const { calendar, days } = useArabicTranslations()

const currentMonth = ref(new Date(2026, 6, 1))
const selectedDate = ref<Date | null>(null)

const monthName = computed(() => {
  return currentMonth.value.toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' })
})

const daysInMonth = computed(() => {
  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()

  const dayList = []
  for (let i = 0; i < firstDay; i++) {
    dayList.push(null)
  }
  for (let i = 1; i <= lastDate; i++) {
    dayList.push(new Date(year, month, i))
  }
  return dayList
})

const getCoursesForDate = (date: Date | null) => {
  if (!date) return []
  return courses.filter(course => {
    const courseDate = new Date(course.startDate)
    return courseDate.toDateString() === date.toDateString()
  })
}

const hasEvents = (date: Date | null) => {
  return date && getCoursesForDate(date).length > 0
}

const selectedCourses = computed(() => {
  return selectedDate.value ? getCoursesForDate(selectedDate.value) : []
})
</script>

<template>
  <div class="slide-page">
    <div class="slide-container-narrow">
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="mb-6 text-center"
      >
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <UIcon name="i-lucide-calendar-days" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {{ calendar.title }}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          {{ calendar.subtitle }}
        </p>
      </div>

      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 200 } }"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-lg text-slate-900 dark:text-white">
            {{ monthName }}
          </h3>
        </div>

        <div class="grid grid-cols-7 gap-2 mb-2">
          <div
            v-for="day in days"
            :key="day"
            class="text-center text-xs font-medium text-slate-600 dark:text-slate-400 py-2"
          >
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          <button
            v-for="(date, index) in daysInMonth"
            :key="index"
            :class="[
              'aspect-square p-1 rounded-lg text-sm transition-all relative',
              date ? 'hover:bg-slate-100 dark:hover:bg-slate-800' : '',
              !date ? 'invisible' : '',
              selectedDate && date && selectedDate.toDateString() === date.toDateString()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'text-slate-900 dark:text-white'
            ]"
            :disabled="!date"
            @click="selectedDate = date"
          >
            <span v-if="date">{{ date.getDate() }}</span>
            <div
              v-if="hasEvents(date)"
              class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
              :class="[
                selectedDate && date && selectedDate.toDateString() === date.toDateString()
                  ? 'bg-white'
                  : 'bg-blue-600'
              ]"
            />
          </button>
        </div>
      </UCard>

      <div
        v-if="selectedCourses.length > 0"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="mt-4"
      >
        <UCard>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-3">
            {{ calendar.coursesOn }} {{ selectedDate?.toLocaleDateString('ar-SA') }}
          </h4>
          <div class="space-y-2">
            <div
              v-for="course in selectedCourses"
              :key="course.id"
              class="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20"
            >
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <UIcon name="i-lucide-book-open" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-sm text-slate-900 dark:text-white">
                  {{ course.title }}
                </p>
                <p class="text-xs text-slate-600 dark:text-slate-400">
                  {{ course.instructor }} • {{ course.duration }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
