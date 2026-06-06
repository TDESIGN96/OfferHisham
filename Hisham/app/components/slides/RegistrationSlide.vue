<script setup lang="ts">
const { registration } = useArabicTranslations()

const formData = ref({
  name: '',
  phone: '',
  email: '',
  position: '',
  suggestedCourses: []
})

const submitted = ref(false)
const { courses } = useMockData()

const courseOptions = computed(() => courses.map(c => c.title))

const handleSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <div class="slide-page">
    <div class="slide-container-narrow">
      <!-- Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="text-center mb-6"
      >
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <UIcon name="i-lucide-user-plus" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {{ registration.title }}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          {{ registration.subtitle }}
        </p>
      </div>

      <div v-if="!submitted">
        <!-- Registration Form -->
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 200 } }"
        >
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <UFormGroup :label="registration.fullName" required>
              <UInput 
                v-model="formData.name" 
                placeholder="أحمد عبدالله"
                icon="i-lucide-user"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="registration.phone" required>
              <UInput 
                v-model="formData.phone" 
                placeholder="+966 55 123 4567"
                icon="i-lucide-phone"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="registration.email" required>
              <UInput 
                v-model="formData.email" 
                type="email"
                placeholder="ahmed@example.com"
                icon="i-lucide-mail"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="registration.position" required>
              <UInput 
                v-model="formData.position" 
                placeholder="مطور مبتدئ"
                icon="i-lucide-briefcase"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="registration.suggestedCourses">
              <USelectMenu
                v-model="formData.suggestedCourses"
                :options="courseOptions"
                multiple
                placeholder="اختر الدورات التي تهمك"
                size="lg"
              />
            </UFormGroup>

            <UButton
              type="submit"
              color="primary"
              size="xl"
              block
              class="mt-6"
            >
              <template #leading>
                <UIcon name="i-lucide-send" />
              </template>
              {{ registration.submitApplication }}
            </UButton>
          </form>
        </UCard>
      </div>

      <!-- Success State -->
      <div v-else>
        <UCard
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ 
            opacity: 1, 
            scale: 1, 
            transition: { 
              duration: 500, 
              type: 'spring',
              stiffness: 200 
            } 
          }"
          class="text-center"
        >
          <div class="py-8">
            <div 
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"
              v-motion
              :initial="{ scale: 0 }"
              :enter="{ 
                scale: 1, 
                transition: { 
                  duration: 600, 
                  type: 'spring',
                  stiffness: 300,
                  delay: 200 
                } 
              }"
            >
              <UIcon name="i-lucide-check-circle" class="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {{ registration.applicationSubmitted }}
            </h3>
            
            <UAlert
              color="blue"
              variant="soft"
              :title="registration.sentToAdmin"
              :description="registration.willReceiveEmail"
              icon="i-lucide-mail-check"
              class="mt-4"
            />
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
