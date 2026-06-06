<script setup lang="ts">
import SlidesIntroSlide from '~/components/slides/IntroSlide.vue'
import SlidesRegistrationSlide from '~/components/slides/RegistrationSlide.vue'
import SlidesApprovalSlide from '~/components/slides/ApprovalSlide.vue'
import SlidesDashboardSlide from '~/components/slides/DashboardSlide.vue'
import SlidesCalendarSlide from '~/components/slides/CalendarSlide.vue'
import SlidesCertificateSlide from '~/components/slides/CertificateSlide.vue'
import SlidesJobBoardSlide from '~/components/slides/JobBoardSlide.vue'
import SlidesApplicationSlide from '~/components/slides/ApplicationSlide.vue'
import PresentationPrivilegeToggle from '~/components/presentation/PrivilegeToggle.vue'
import SlidesAdminUsersSlide from '~/components/slides/AdminUsersSlide.vue'
import SlidesAdminCoursesSlide from '~/components/slides/AdminCoursesSlide.vue'
import SlidesAdminJobsSlide from '~/components/slides/AdminJobsSlide.vue'
import SlidesClosingSlide from '~/components/slides/ClosingSlide.vue'

const { currentSlide, nextSlide, previousSlide } = usePresentation()

const slideComponents = {
  1: SlidesIntroSlide,
  2: SlidesRegistrationSlide,
  3: SlidesApprovalSlide,
  4: SlidesDashboardSlide,
  5: SlidesCalendarSlide,
  6: SlidesCertificateSlide,
  7: SlidesJobBoardSlide,
  8: SlidesApplicationSlide,
  9: PresentationPrivilegeToggle,
  10: SlidesAdminUsersSlide,
  11: SlidesAdminCoursesSlide,
  12: SlidesAdminJobsSlide,
  13: SlidesClosingSlide
} as const

const currentComponent = computed(() => {
  return slideComponents[currentSlide.value as keyof typeof slideComponents] || SlidesIntroSlide
})
</script>

<template>
  <div class="presentation-shell">
    <PresentationHeader />

    <PresentationSlideContainer
      :current-slide="currentSlide"
      class="presentation-content"
      @next="nextSlide"
      @previous="previousSlide"
    >
      <component :is="currentComponent" />
    </PresentationSlideContainer>

    <PresentationBottomNav />
  </div>
</template>

<style scoped>
.presentation-shell {
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 100% 100%, rgba(99, 102, 241, 0.08), transparent),
    linear-gradient(to bottom, #f8fafc, #f1f5f9);
}

:global(.dark) .presentation-shell {
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 100% 100%, rgba(99, 102, 241, 0.1), transparent),
    linear-gradient(to bottom, #0f172a, #1e293b);
}

.presentation-content {
  flex: 1;
  min-height: 0;
}
</style>
