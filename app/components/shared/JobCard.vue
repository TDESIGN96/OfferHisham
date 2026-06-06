<script setup lang="ts">
import type { Job } from '~/composables/useMockData'

const props = defineProps<{
  job: Job
  index?: number
  clickable?: boolean
}>()

const emit = defineEmits(['apply'])
const { jobs: jobsT, translateStatus, more } = useArabicTranslations()
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
    class="hover:shadow-lg transition-shadow duration-300"
    :class="{ 'cursor-pointer': clickable }"
  >
    <div class="space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-1">
            {{ job.title }}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
            <UIcon name="i-lucide-building-2" class="w-4 h-4" />
            {{ job.company }}
          </p>
        </div>

        <UBadge
          :color="job.type === 'full-time' ? 'blue' : job.type === 'part-time' ? 'amber' : 'neutral'"
          size="sm"
        >
          {{ translateStatus(job.type) }}
        </UBadge>
      </div>

      <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
        {{ job.description }}
      </p>

      <div class="space-y-2">
        <p class="text-xs font-medium text-slate-700 dark:text-slate-300">{{ jobsT.keyRequirements }}</p>
        <div class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="req in job.requirements.slice(0, 3)"
            :key="req"
            color="neutral"
            variant="subtle"
            size="sm"
          >
            {{ req }}
          </UBadge>
          <UBadge
            v-if="job.requirements.length > 3"
            color="neutral"
            variant="subtle"
            size="sm"
          >
            +{{ job.requirements.length - 3 }} {{ more }}
          </UBadge>
        </div>
      </div>

      <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
          <span>{{ job.location }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-calendar" class="w-4 h-4" />
          <span>{{ new Date(job.postedDate).toLocaleDateString('ar-SA') }}</span>
        </div>
      </div>

      <UButton
        color="primary"
        block
        class="mt-2"
        @click="emit('apply')"
      >
        <template #leading>
          <UIcon name="i-lucide-send" />
        </template>
        {{ jobsT.applyNow }}
      </UButton>
    </div>
  </UCard>
</template>
