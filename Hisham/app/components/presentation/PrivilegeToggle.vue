<script setup lang="ts">
const { isUserView, toggleView } = usePresentation()
const { privilegeToggle } = useArabicTranslations()
</script>

<template>
  <div 
    v-motion
    :initial="{ opacity: 0, scale: 0.9 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 400 } }"
    class="flex flex-col items-center justify-center gap-6 p-8"
  >
    <div class="text-center space-y-3">
      <div 
        class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
        v-motion
        :initial="{ rotate: 0 }"
        :enter="{ rotate: 360, transition: { duration: 600, type: 'spring' } }"
      >
        <UIcon 
          :name="isUserView ? 'i-lucide-shield-check' : 'i-lucide-user-check'" 
          class="w-10 h-10 text-white"
        />
      </div>
      
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
        {{ isUserView ? privilegeToggle.switchToAdmin : privilegeToggle.switchToUser }}
      </h2>
      
      <p class="text-slate-600 dark:text-slate-400 max-w-sm">
        {{ isUserView ? privilegeToggle.adminDescription : privilegeToggle.userDescription }}
      </p>
    </div>

    <UButton
      :icon="isUserView ? 'i-lucide-shield' : 'i-lucide-user'"
      size="xl"
      color="primary"
      @click="toggleView"
      class="shadow-lg"
    >
      {{ isUserView ? privilegeToggle.viewAdminDashboard : privilegeToggle.viewUserJourney }}
    </UButton>
  </div>
</template>
