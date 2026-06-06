<script setup lang="ts">
const { approval } = useArabicTranslations()

const credentials = {
  email: 'ahmad@maharat.org',
  password: 'Temp@1234'
}
</script>

<template>
  <div class="slide-page flex flex-col items-center justify-center">
    <div class="slide-container-narrow w-full">
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center"
      >
        <div class="py-6">
          <div
            class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
            v-motion
            :initial="{ scale: 0, rotate: -180 }"
            :enter="{
              scale: 1,
              rotate: 0,
              transition: { duration: 800, type: 'spring', stiffness: 200 }
            }"
          >
            <UIcon name="i-lucide-shield-check" class="w-12 h-12 text-white" />
          </div>

          <h2
            class="text-2xl font-bold text-slate-900 dark:text-white mb-2"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 500, delay: 300 } }"
          >
            {{ approval.title }}
          </h2>

          <p
            class="text-slate-600 dark:text-slate-400 mb-6"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 500, delay: 400 } }"
          >
            {{ approval.description }}
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 600 } }"
            class="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 space-y-4"
          >
            <div class="text-right">
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 block">
                {{ approval.email }}
              </label>
              <div class="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <UIcon name="i-lucide-mail" class="w-5 h-5 text-blue-600" />
                <code class="text-sm font-mono text-slate-900 dark:text-white">
                  {{ credentials.email }}
                </code>
              </div>
            </div>

            <div class="text-right">
              <label class="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 block">
                {{ approval.temporaryPassword }}
              </label>
              <div class="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <UIcon name="i-lucide-lock" class="w-5 h-5 text-blue-600" />
                <code class="text-sm font-mono text-slate-900 dark:text-white">
                  {{ credentials.password }}
                </code>
              </div>
            </div>
          </div>

          <UAlert
            color="amber"
            variant="soft"
            icon="i-lucide-info"
            :title="approval.changePasswordRequired"
            :description="approval.changePasswordNote"
            class="mt-6"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>
