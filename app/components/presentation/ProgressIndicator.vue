<script setup lang="ts">
const { currentSlide, totalSlides, goToSlide } = usePresentation()

const slides = computed(() => {
  return Array.from({ length: totalSlides }, (_, i) => i + 1)
})
</script>

<template>
  <div class="progress-track">
    <button
      v-for="slide in slides"
      :key="slide"
      class="progress-dot"
      :class="{ active: currentSlide === slide }"
      @click="goToSlide(slide)"
      :aria-label="`الانتقال إلى الشريحة ${slide}`"
      :aria-current="currentSlide === slide ? 'step' : undefined"
    />
  </div>
</template>

<style scoped>
.progress-track {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  overflow-x: auto;
  max-width: 100%;
  padding: 0.25rem;
  scrollbar-width: none;
}

.progress-track::-webkit-scrollbar {
  display: none;
}

.progress-dot {
  flex-shrink: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #cbd5e1;
  transition: all 0.3s ease;
  cursor: pointer;
}

.progress-dot:hover {
  background: #94a3b8;
  transform: scale(1.15);
}

.progress-dot.active {
  width: 1.75rem;
  background: #2563eb;
}

:global(.dark) .progress-dot {
  background: #475569;
}

:global(.dark) .progress-dot:hover {
  background: #64748b;
}

:global(.dark) .progress-dot.active {
  background: #3b82f6;
}
</style>
