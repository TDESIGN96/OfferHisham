<script setup lang="ts">
const { nextSlide } = usePresentation()
const { projectName, intro } = useArabicTranslations()

const features = [
  {
    icon: 'i-lucide-graduation-cap',
    title: 'نظام إدارة تعلم شامل',
    description: 'إدارة الدورات الحضورية وتتبع التسجيل وإصدار الشهادات القابلة للتحقق'
  },
  {
    icon: 'i-lucide-briefcase',
    title: 'منصة توظيف',
    description: 'ربط الطلاب بفرص العمل وتبسيط عملية التوظيف'
  },
  {
    icon: 'i-lucide-users',
    title: 'أدوار مستخدم مزدوجة',
    description: 'تجارب مميزة للطلاب الباحثين عن المعرفة والمسؤولين الذين يديرون المحتوى'
  }
]
</script>

<template>
  <div class="slide-hero">
    <div class="hero-content">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8, y: -20 }"
        :enter="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 600, type: 'spring', stiffness: 200 }
        }"
        class="hero-logo"
      >
        <UIcon name="i-lucide-book-open" class="w-14 h-14 text-white" />
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="hero-text"
      >
        <h1>{{ projectName }}</h1>
        <p>{{ intro.subtitle }}</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
        class="disclaimer-banner"
      >
        <UIcon name="i-lucide-info" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p>{{ intro.disclaimer }}</p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 400, delay: 400 + (index * 100) }
          }"
          class="feature-card"
        >
          <div class="feature-icon">
            <UIcon :name="feature.icon" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 800 } }"
        class="hero-actions"
      >
        <UButton size="xl" color="primary" class="shadow-lg" @click="nextSlide">
          <template #leading>
            <UIcon name="i-lucide-play-circle" />
          </template>
          {{ intro.startTour }}
          <template #trailing>
            <UIcon name="i-lucide-arrow-left" />
          </template>
        </UButton>
        <p class="hint">{{ intro.navigationHint }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-hero {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem 5rem;
}

.hero-content {
  max-width: 72rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hero-logo {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.35);
}

.hero-text h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

:global(.dark) .hero-text h1 {
  color: #f8fafc;
}

.hero-text p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #64748b;
  max-width: 36rem;
  margin: 0 auto;
}

.disclaimer-banner {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  text-align: right;
  max-width: 42rem;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  background: rgba(219, 234, 254, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.25);
}

:global(.dark) .disclaimer-banner {
  background: rgba(30, 58, 138, 0.25);
  border-color: rgba(59, 130, 246, 0.3);
}

.disclaimer-banner p {
  font-size: 0.9375rem;
  color: #1e40af;
  line-height: 1.7;
  margin: 0;
}

:global(.dark) .disclaimer-banner p {
  color: #93c5fd;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

.feature-card {
  text-align: right;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

:global(.dark) .feature-card {
  background: rgba(30, 41, 59, 0.6);
  border-color: rgba(71, 85, 105, 0.4);
}

.feature-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

:global(.dark) .feature-icon {
  background: rgba(30, 58, 138, 0.4);
}

.feature-card h3 {
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

:global(.dark) .feature-card h3 {
  color: #f1f5f9;
}

.feature-card p {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.hint {
  font-size: 0.75rem;
  color: #94a3b8;
}
</style>
