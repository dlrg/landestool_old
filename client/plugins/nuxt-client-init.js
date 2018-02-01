/*
  https://github.com/nuxt/nuxt.js/issues/240#issuecomment-326893386
*/
export default async (ctx) => {
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
