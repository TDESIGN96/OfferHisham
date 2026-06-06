<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  }
})

const title = 'جمعية مهارات - عرض تقديمي تفاعلي'
const description = 'عرض تقديمي تفاعلي يشمل فهمنا للنظام الحالي وكيفية التعامل معه.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})

const colorMode = useColorMode()

onMounted(() => {
  colorMode.preference = 'light'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
html, body {
  overflow-x: hidden;
  font-family: 'Thmanyah Sans', sans-serif;
  direction: rtl;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Thmanyah Sans', sans-serif;
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style>
