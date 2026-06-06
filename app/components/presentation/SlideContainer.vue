<script setup lang="ts">
import { useSwipe } from '@vueuse/core'

const props = defineProps<{
  currentSlide: number
}>()

const emit = defineEmits(['next', 'previous'])

const container = ref<HTMLElement | null>(null)

watch(() => props.currentSlide, () => {
  nextTick(() => {
    if (container.value) {
      container.value.scrollTop = 0
    }
  })
})

useSwipe(container, {
  onSwipeEnd(e, direction) {
    if (direction === 'left') {
      emit('next')
    } else if (direction === 'right') {
      emit('previous')
    }
  },
  threshold: 50
})

const handleKeyboard = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    emit('next')
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    emit('previous')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)
})
</script>

<template>
  <div class="slide-container-wrapper">
    <div ref="container" class="slide-scroll-area">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slide-container-wrapper {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.slide-scroll-area {
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  touch-action: pan-y;
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 rgba(148, 163, 184, 0.2);
}

.slide-scroll-area::-webkit-scrollbar {
  width: 10px;
}

.slide-scroll-area::-webkit-scrollbar-track {
  background: rgba(148, 163, 184, 0.15);
  border-radius: 5px;
}

.slide-scroll-area::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 5px;
}

.slide-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

:global(.dark) .slide-scroll-area {
  scrollbar-color: #475569 rgba(71, 85, 105, 0.3);
}

:global(.dark) .slide-scroll-area::-webkit-scrollbar-track {
  background: rgba(71, 85, 105, 0.3);
}

:global(.dark) .slide-scroll-area::-webkit-scrollbar-thumb {
  background: #475569;
}
</style>
