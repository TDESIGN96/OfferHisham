<script setup lang="ts">
const { jobs } = useMockData()
const { application } = useArabicTranslations()

const selectedJob = jobs[0]

const formData = ref({
  name: '',
  email: '',
  phone: '',
  coverLetter: '',
  cv: null as File | null
})

const submitted = ref(false)
const isDragging = ref(false)

const handleSubmit = () => {
  submitted.value = true
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    formData.value.cv = target.files[0]
  }
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    formData.value.cv = event.dataTransfer.files[0]
  }
}
</script>

<template>
  <div class="slide-page">
    <div class="slide-container-narrow">
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="mb-6"
      >
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
          {{ application.title }}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400 text-center">
          {{ application.applyFor }}: <span class="font-semibold">{{ selectedJob.title }}</span>
        </p>
      </div>

      <div v-if="!submitted">
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 200 } }"
        >
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <UFormGroup :label="application.fullName" required>
              <UInput
                v-model="formData.name"
                :placeholder="application.fullNamePlaceholder"
                icon="i-lucide-user"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="application.email" required>
              <UInput
                v-model="formData.email"
                type="email"
                :placeholder="application.emailPlaceholder"
                icon="i-lucide-mail"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="application.phone" required>
              <UInput
                v-model="formData.phone"
                :placeholder="application.phonePlaceholder"
                icon="i-lucide-phone"
                size="lg"
              />
            </UFormGroup>

            <UFormGroup :label="application.coverLetter">
              <UTextarea
                v-model="formData.coverLetter"
                :placeholder="application.coverLetterPlaceholder"
                :rows="4"
              />
            </UFormGroup>

            <UFormGroup :label="application.uploadCV" required>
              <div
                class="relative"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="handleDrop"
              >
                <label
                  :class="[
                    'block w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors text-center',
                    isDragging
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                      : formData.cv
                        ? 'border-green-500 bg-green-50 dark:bg-green-950'
                        : 'border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                  ]"
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    class="hidden"
                    @change="handleFileSelect"
                  />

                  <UIcon
                    :name="formData.cv ? 'i-lucide-check-circle' : 'i-lucide-upload'"
                    :class="[
                      'w-10 h-10 mx-auto mb-3',
                      formData.cv ? 'text-green-600' : 'text-slate-400'
                    ]"
                  />

                  <p v-if="!formData.cv" class="text-sm text-slate-600 dark:text-slate-400">
                    <span class="font-semibold text-blue-600">{{ application.clickToUpload }}</span> {{ application.dragAndDrop }}
                  </p>
                  <p v-else class="text-sm font-semibold text-green-600">
                    {{ formData.cv.name }}
                  </p>
                  <p class="text-xs text-slate-500 mt-1">
                    {{ application.maxFileSize }}
                  </p>
                </label>
              </div>
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
              {{ application.submitApplication }}
            </UButton>
          </form>
        </UCard>
      </div>

      <div v-else>
        <UCard
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 500, type: 'spring', stiffness: 200 }
          }"
          class="text-center"
        >
          <div class="py-8">
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"
              v-motion
              :initial="{ scale: 0, rotate: -180 }"
              :enter="{
                scale: 1,
                rotate: 0,
                transition: { duration: 600, type: 'spring', stiffness: 300, delay: 200 }
              }"
            >
              <UIcon name="i-lucide-check-circle" class="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {{ application.applicationSubmitted }}
            </h3>

            <p class="text-slate-600 dark:text-slate-400 mb-6">
              {{ application.applicationSent }}
            </p>

            <UAlert
              color="blue"
              variant="soft"
              :title="application.whatsNext"
              :description="application.adminWillReview"
              icon="i-lucide-info"
            />
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
