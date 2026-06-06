<script setup lang="ts">
const { actions: actionsLabel, translateStatus } = useArabicTranslations()

const props = defineProps<{
  title: string
  items: any[]
  columns: {
    key: string
    label: string
  }[]
  actions?: {
    label: string
    icon?: string
    color?: string
    handler: (item: any) => void
  }[]
}>()
</script>

<template>
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
      {{ title }}
    </h3>

    <!-- Mobile Card View -->
    <div class="lg:hidden space-y-3">
      <UCard
        v-for="(item, index) in items"
        :key="index"
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 300, 
            delay: index * 80 
          } 
        }"
      >
        <div class="space-y-3">
          <div 
            v-for="column in columns" 
            :key="column.key"
            class="flex justify-between items-start"
          >
            <span class="text-sm font-medium text-slate-600 dark:text-slate-400">
              {{ column.label }}:
            </span>
            <span class="text-sm text-slate-900 dark:text-white text-right">
              <UBadge v-if="column.key === 'status'" :color="item[column.key] === 'pending' ? 'amber' : 'green'">
                {{ translateStatus(item[column.key]) }}
              </UBadge>
              <template v-else-if="Array.isArray(item[column.key])">
                {{ item[column.key].join(', ') }}
              </template>
              <template v-else>
                {{ item[column.key] }}
              </template>
            </span>
          </div>

          <div v-if="actions && actions.length" class="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <UButton
              v-for="action in actions"
              :key="action.label"
              :color="action.color || 'primary'"
              :icon="action.icon"
              size="sm"
              @click="action.handler(item)"
            >
              {{ action.label }}
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Desktop Table View -->
    <div class="hidden lg:block overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700">
            <th 
              v-for="column in columns" 
              :key="column.key"
              class="text-left py-3 px-4 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {{ column.label }}
            </th>
            <th v-if="actions && actions.length" class="text-right py-3 px-4 text-sm font-medium text-slate-700 dark:text-slate-300">
              {{ actionsLabel }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(item, index) in items" 
            :key="index"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ 
              opacity: 1, 
              transition: { 
                duration: 300, 
                delay: index * 50 
              } 
            }"
            class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <td 
              v-for="column in columns" 
              :key="column.key"
              class="py-3 px-4 text-sm text-slate-900 dark:text-white"
            >
              <UBadge v-if="column.key === 'status'" :color="item[column.key] === 'pending' ? 'amber' : 'green'">
                {{ translateStatus(item[column.key]) }}
              </UBadge>
              <template v-else-if="Array.isArray(item[column.key])">
                {{ item[column.key].join(', ') }}
              </template>
              <template v-else>
                {{ item[column.key] }}
              </template>
            </td>
            <td v-if="actions && actions.length" class="py-3 px-4 text-right">
              <div class="flex gap-2 justify-end">
                <UButton
                  v-for="action in actions"
                  :key="action.label"
                  :color="action.color || 'primary'"
                  :icon="action.icon"
                  size="sm"
                  @click="action.handler(item)"
                >
                  {{ action.label }}
                </UButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
