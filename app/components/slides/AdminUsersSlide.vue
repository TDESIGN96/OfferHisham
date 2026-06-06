<script setup lang="ts">
const { users } = useMockData()
const { adminUsers } = useArabicTranslations()

const pendingUsers = ref(users.filter(u => u.status === 'pending'))

const handleApprove = (user: any) => {
  const index = pendingUsers.value.findIndex(u => u.id === user.id)
  if (index !== -1) {
    pendingUsers.value[index].status = 'approved'
    setTimeout(() => {
      pendingUsers.value.splice(index, 1)
    }, 1500)
  }
}

const columns = [
  { key: 'name', label: adminUsers.name },
  { key: 'email', label: 'البريد الإلكتروني' },
  { key: 'position', label: 'الوظيفة' },
  { key: 'status', label: adminUsers.status }
]

const actions = [
  {
    label: adminUsers.approve,
    icon: 'i-lucide-check',
    color: 'green',
    handler: handleApprove
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
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <UIcon name="i-lucide-users-round" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              {{ adminUsers.title }}
            </h2>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              {{ adminUsers.subtitle }}
            </p>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 400, delay: 200 } }"
          class="grid grid-cols-3 gap-3"
        >
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-blue-600">{{ pendingUsers.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminUsers.pending }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-green-600">{{ users.filter(u => u.status === 'approved').length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminUsers.approved }}</p>
            </div>
          </UCard>
          <UCard>
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ users.length }}</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">{{ adminUsers.total }}</p>
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
          :title="adminUsers.pendingRegistrations"
          :items="pendingUsers"
          :columns="columns"
          :actions="actions"
        />

        <div v-if="pendingUsers.length === 0" class="text-center py-12">
          <UIcon name="i-lucide-check-circle-2" class="w-16 h-16 mx-auto text-green-500 mb-4" />
          <p class="text-slate-600 dark:text-slate-400">
            {{ adminUsers.allProcessed }}
          </p>
        </div>
      </UCard>
    </div>
  </div>
</template>
