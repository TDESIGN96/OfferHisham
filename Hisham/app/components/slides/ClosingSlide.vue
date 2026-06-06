<script setup lang="ts">
const { restartTour } = usePresentation()
const { closing } = useArabicTranslations()
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center p-6 pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
    <div class="max-w-md mx-auto text-center space-y-6">
      <!-- Success Icon -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{ 
          opacity: 1, 
          scale: 1, 
          transition: { 
            duration: 800, 
            type: 'spring',
            stiffness: 200 
          } 
        }"
        class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl"
      >
        <UIcon name="i-lucide-check-circle" class="w-12 h-12 text-white" />
      </div>

      <!-- Title -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 500, delay: 300 } 
        }"
        class="space-y-3"
      >
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white">
          {{ closing.tourComplete }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          {{ closing.thankYou }}
        </p>
      </div>

      <!-- Feature Summary -->
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 500, delay: 500 } 
        }"
      >
        <h3 class="font-semibold text-slate-900 dark:text-white mb-4 text-right">
          {{ closing.keyFeatures }}
        </h3>
        <ul class="space-y-2 text-right">
          <li
            v-for="(feature, index) in closing.features"
            :key="feature"
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :enter="{ 
              opacity: 1, 
              x: 0, 
              transition: { 
                duration: 400, 
                delay: 700 + (index * 80) 
              } 
            }"
            class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-end"
          >
            <span>{{ feature }}</span>
            <UIcon name="i-lucide-check" class="w-4 h-4 text-green-600 flex-shrink-0" />
          </li>
        </ul>
      </UCard>

      <!-- CTA Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ 
          opacity: 1, 
          y: 0, 
          transition: { duration: 500, delay: 1200 } 
        }"
        class="space-y-3 pt-4"
      >
        <UButton
          size="xl"
          color="primary"
          block
          @click="restartTour"
        >
          <template #leading>
            <UIcon name="i-lucide-refresh-cw" />
          </template>
          {{ closing.restartTour }}
        </UButton>

        <div class="pt-4 space-y-2">
          <p class="text-sm font-medium text-slate-900 dark:text-white">
            {{ closing.readyToStart }}
          </p>
          <div class="flex gap-2">
            <UButton
              color="neutral"
              variant="outline"
              block
              icon="i-lucide-mail"
            >
              {{ closing.contactUs }}
            </UButton>
            <UButton
              color="neutral"
              variant="outline"
              block
              icon="i-lucide-globe"
            >
              {{ closing.learnMore }}
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
