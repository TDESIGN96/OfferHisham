<script setup lang="ts">
const { currentSlide, totalSlides } = usePresentation()
const { projectName } = useArabicTranslations()

const slideTitles: Record<number, string> = {
  1: 'مرحباً',
  2: 'تسجيل الطالب',
  3: 'الموافقة على الحساب',
  4: 'الدورات المتاحة',
  5: 'تقويم الدورات',
  6: 'الشهادات',
  7: 'فرص العمل',
  8: 'التقديم على الوظائف',
  9: 'تبديل الصلاحيات',
  10: 'إدارة المستخدمين',
  11: 'إدارة الدورات',
  12: 'إدارة الوظائف',
  13: 'الختام'
}
</script>

<template>
  <header class="presentation-header">
    <div class="header-inner">
      <div class="brand">
        <div class="brand-icon">
          <UIcon name="i-lucide-book-open" class="w-5 h-5 text-white" />
        </div>
        <div class="brand-text">
          <span class="brand-name">{{ projectName }}</span>
          <span class="brand-subtitle">عرض تقديمي تفاعلي</span>
        </div>
      </div>

      <div class="slide-info">
        <span class="slide-title">{{ slideTitles[currentSlide] }}</span>
        <UBadge color="primary" variant="subtle" size="sm">
          {{ currentSlide }} / {{ totalSlides }}
        </UBadge>
      </div>
    </div>
  </header>
</template>

<style scoped>
.presentation-header {
  position: sticky;
  top: 0;
  z-index: 30;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

:global(.dark) .presentation-header {
  background: rgba(15, 23, 42, 0.8);
  border-bottom-color: rgba(71, 85, 105, 0.4);
}

.header-inner {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.brand-name {
  font-family: 'Thmanyah Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0f172a;
  line-height: 1.3;
}

:global(.dark) .brand-name {
  color: #f8fafc;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: #64748b;
}

.slide-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.slide-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
}

:global(.dark) .slide-title {
  color: #94a3b8;
}

@media (max-width: 640px) {
  .brand-subtitle,
  .slide-title {
    display: none;
  }

  .header-inner {
    padding: 0.75rem 1rem;
  }
}
</style>
