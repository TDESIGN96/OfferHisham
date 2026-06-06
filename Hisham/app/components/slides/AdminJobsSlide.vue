<script setup lang="ts">
const { jobs, candidates } = useMockData()
const { adminJobs, translateStatus, downloadCV } = useArabicTranslations()

const expandedJob = ref<number | null>(null)

const toggleJob = (jobId: number) => {
  expandedJob.value = expandedJob.value === jobId ? null : jobId
}

const getCandidatesForJob = (jobId: number) => {
  return candidates.filter(c => c.jobId === jobId)
}

const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    new: 'blue',
    reviewed: 'amber',
    shortlisted: 'green',
    rejected: 'red'
  }
  return colors[status] || 'neutral'
}
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
              <UIcon name="i-lucide-briefcase" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                {{ adminJobs.title }}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                {{ adminJobs.subtitle }}
              </p>
            </div>
          </div>
          <UButton icon="i-lucide-plus" color="primary">
            {{ adminJobs.postJob }}
          </UButton>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 400, delay: 200 } }"
          class="grid grid-cols-3 gap-3"
        >
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-blue-600">{{ jobs.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminJobs.activeJobs }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ candidates.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminJobs.applications }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-green-600">{{ candidates.filter(c => c.status === 'shortlisted').length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminJobs.shortlisted }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <div class="space-y-4">
        <UCard
          v-for="(job, index) in jobs.slice(0, 3)"
          :key="job.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 400, delay: 300 + (index * 100) }
          }"
        >
          <div
            class="flex items-start justify-between cursor-pointer"
            @click="toggleJob(job.id)"
          >
            <div class="flex-1">
              <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                {{ job.title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">
                {{ job.company }} • {{ job.location }}
              </p>
              <div class="flex items-center gap-3 text-xs text-slate-500">
                <UBadge :color="job.type === 'full-time' ? 'blue' : 'amber'" size="sm">
                  {{ translateStatus(job.type) }}
                </UBadge>
                <span>{{ job.applicants || 0 }} {{ adminJobs.applicantsCount }}</span>
              </div>
            </div>
            <UIcon
              :name="expandedJob === job.id ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="w-5 h-5 text-slate-400"
            />
          </div>

          <div
            v-if="expandedJob === job.id"
            v-motion
            :initial="{ opacity: 0, height: 0 }"
            :enter="{ opacity: 1, height: 'auto', transition: { duration: 300 } }"
            class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3"
          >
            <h4 class="font-semibold text-sm text-slate-900 dark:text-white mb-3">
              {{ adminJobs.candidates }} ({{ getCandidatesForJob(job.id).length }})
            </h4>

            <div
              v-for="candidate in getCandidatesForJob(job.id)"
              :key="candidate.id"
              class="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
            >
              <div class="flex items-center gap-3 flex-1">
                <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <UIcon name="i-lucide-user" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-sm text-slate-900 dark:text-white">
                    {{ candidate.name }}
                  </p>
                  <p class="text-xs text-slate-600 dark:text-slate-400">
                    {{ candidate.email }}
                  </p>
                </div>
                <UBadge :color="getStatusColor(candidate.status)" size="sm">
                  {{ translateStatus(candidate.status) }}
                </UBadge>
              </div>
              <UButton
                icon="i-lucide-download"
                color="neutral"
                variant="ghost"
                size="sm"
                :aria-label="downloadCV"
              />
            </div>

            <div v-if="getCandidatesForJob(job.id).length === 0" class="text-center py-4 text-sm text-slate-500">
              {{ adminJobs.noApplications }}
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
