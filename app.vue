<template>
   <NuxtLayout>
     <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import '~/assets/css/mftecno.css'
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))

onMounted(async () => {
  const wow = await import('wow.js')
  new wow.default().init()
})
</script>
