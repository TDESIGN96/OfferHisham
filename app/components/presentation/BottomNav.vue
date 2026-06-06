<script setup lang="ts">
const { currentSlide, totalSlides, nextSlide, previousSlide } = usePresentation()

const canGoPrevious = computed(() => currentSlide.value > 1)
const canGoNext = computed(() => currentSlide.value < totalSlides)
</script>

<template>
  <nav class="bottom-nav">
    <div class="nav-inner" dir="ltr">
      <UButton
        icon="i-lucide-chevron-left"
        :disabled="!canGoPrevious"
        color="neutral"
        variant="soft"
        size="lg"
        class="nav-btn"
        @click="previousSlide"
        aria-label="الشريحة السابقة"
      />

      <div class="nav-center">
        <PresentationProgressIndicator />
        <span class="slide-counter">{{ currentSlide }} من {{ totalSlides }}</span>
      </div>

      <UButton
        icon="i-lucide-chevron-right"
        :disabled="!canGoNext"
        color="neutral"
        variant="soft"
        size="lg"
        class="nav-btn"
        @click="nextSlide"
        aria-label="الشريحة التالية"
      />
    </div>

    <div class="h-[env(safe-area-inset-bottom)]" />
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: sticky;
  bottom: 0;
  z-index: 40;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  box-shadow: 0 -4px 24px rgba(15, 23, 42, 0.06);
}

:global(.dark) .bottom-nav {
  background: rgba(15, 23, 42, 0.9);
  border-top-color: rgba(71, 85, 105, 0.4);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
}

.nav-inner {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.slide-counter {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
}

:global(.dark) .slide-counter {
  color: #94a3b8;
}

.nav-btn:disabled {
  opacity: 0.35;
}
</style>
