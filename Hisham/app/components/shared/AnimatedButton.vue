<script setup lang="ts">
const props = defineProps<{
  label: string
  icon?: string
  color?: string
  size?: string
  loading?: boolean
  disabled?: boolean
}>()

const emit = defineEmits(['click'])

const isPressed = ref(false)

const handleClick = () => {
  isPressed.value = true
  emit('click')
  setTimeout(() => {
    isPressed.value = false
  }, 150)
}
</script>

<template>
  <UButton
    :color="color || 'primary'"
    :size="size || 'lg'"
    :icon="icon"
    :loading="loading"
    :disabled="disabled"
    @click="handleClick"
    v-motion
    :initial="{ scale: 1 }"
    :enter="{ scale: 1 }"
    :class="[
      'transition-all duration-150',
      isPressed ? 'scale-95' : 'scale-100'
    ]"
  >
    {{ label }}
  </UButton>
</template>
