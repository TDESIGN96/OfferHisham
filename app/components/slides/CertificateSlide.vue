<script setup lang="ts">
const { certificates } = useMockData()
const { certificate } = useArabicTranslations()

const verificationCode = ref('')
const verificationResult = ref<any>(null)
const isVerifying = ref(false)

const handleVerify = () => {
  isVerifying.value = true

  setTimeout(() => {
    const cert = certificates.find(c => c.code === verificationCode.value)
    verificationResult.value = cert || { valid: false }
    isVerifying.value = false
  }, 1000)
}

const mockCertificate = certificates[0]
</script>

<template>
  <div class="slide-page">
    <div class="slide-container-narrow space-y-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="text-center"
      >
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
          <UIcon name="i-lucide-award" class="w-8 h-8 text-amber-600 dark:text-amber-400" />
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {{ certificate.title }}
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          {{ certificate.subtitle }}
        </p>
      </div>

      <UCard
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 200 } }"
        class="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-900"
      >
        <div class="text-center py-6 space-y-4">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
            <UIcon name="i-lucide-shield-check" class="w-10 h-10 text-white" />
          </div>

          <div>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider">
              {{ certificate.certificateOfCompletion }}
            </p>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {{ mockCertificate.courseName }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              {{ certificate.awardedTo }}
            </p>
            <p class="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
              {{ mockCertificate.studentName }}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-200 dark:border-slate-700">
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">
              {{ certificate.completionDate }}: {{ new Date(mockCertificate.completionDate).toLocaleDateString('ar-SA') }}
            </p>
            <div class="flex items-center justify-center gap-2 mt-3">
              <UIcon name="i-lucide-fingerprint" class="w-4 h-4 text-blue-600" />
              <code class="text-sm font-mono font-semibold text-blue-600 dark:text-blue-400">
                {{ mockCertificate.code }}
              </code>
            </div>
          </div>
        </div>
      </UCard>

      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 400 } }"
      >
        <h3 class="font-semibold text-slate-900 dark:text-white mb-4">
          {{ certificate.verifyCertificate }}
        </h3>

        <form class="space-y-4" @submit.prevent="handleVerify">
          <UFormGroup :label="certificate.enterCertificateCode" :hint="certificate.tryCode">
            <UInput
              v-model="verificationCode"
              placeholder="LMS-2026-XXXXXX"
              icon="i-lucide-scan-line"
              size="lg"
            />
          </UFormGroup>

          <UButton
            type="submit"
            color="primary"
            block
            :loading="isVerifying"
            :disabled="!verificationCode"
          >
            <template #leading>
              <UIcon name="i-lucide-shield-check" />
            </template>
            {{ certificate.verifyCertificate }}
          </UButton>
        </form>

        <div
          v-if="verificationResult"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 500, type: 'spring', stiffness: 200 } }"
          class="mt-4"
        >
          <UAlert
            v-if="verificationResult.valid"
            color="green"
            variant="soft"
            :title="certificate.genuineCertificate"
            icon="i-lucide-check-circle-2"
          >
            <template #description>
              <div class="mt-2 space-y-1 text-sm">
                <p><strong>{{ certificate.student }}:</strong> {{ verificationResult.studentName }}</p>
                <p><strong>{{ certificate.course }}:</strong> {{ verificationResult.courseName }}</p>
                <p><strong>{{ certificate.completed }}:</strong> {{ new Date(verificationResult.completionDate).toLocaleDateString('ar-SA') }}</p>
              </div>
            </template>
          </UAlert>

          <UAlert
            v-else
            color="red"
            variant="soft"
            :title="certificate.invalidCertificate"
            :description="certificate.cannotVerify"
            icon="i-lucide-x-circle"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>
