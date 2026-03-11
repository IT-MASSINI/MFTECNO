export default defineNuxtRouteMiddleware((to) => {
  // Intervieni solo sulla root esatta "/"
  if (to.path !== '/') return

  const { locale } = useI18n()

  // Redirect 301 permanente → ottimo per SEO
  return navigateTo(`/${locale.value}/`, { redirectCode: 301 })
})