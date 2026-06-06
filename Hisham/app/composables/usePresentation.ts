export function usePresentation() {
  const currentSlide = useState('currentSlide', () => 1)
  const totalSlides = 13
  const isUserView = useState('isUserView', () => true)

  const nextSlide = () => {
    if (currentSlide.value < totalSlides) {
      currentSlide.value++
    }
  }

  const previousSlide = () => {
    if (currentSlide.value > 1) {
      currentSlide.value--
    }
  }

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      currentSlide.value = slideNumber
    }
  }

  const toggleView = () => {
    isUserView.value = !isUserView.value
    if (!isUserView.value) {
      currentSlide.value = 10
    } else {
      currentSlide.value = 1
    }
  }

  const restartTour = () => {
    currentSlide.value = 1
    isUserView.value = true
  }

  return {
    currentSlide,
    totalSlides,
    isUserView,
    nextSlide,
    previousSlide,
    goToSlide,
    toggleView,
    restartTour
  }
}
