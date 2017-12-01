// If it's a private page and there's no payload, redirect.
export default function (context) {
  const { store, redirect, route } = context
  const { auth } = store.state
  return store.dispatch('auth/authenticate')
    .then(() => {
      if (!auth.publicPages.includes(route.name) && !auth.payload) {
        return redirect('/login')
      }
      if (auth.forbiddenOnAuth.includes(route.name) && auth.payload) {
        return redirect('/')
      }
    })
    .catch(err => {
      console.error(err)
      if (err.message === 'Could not find stored JWT and no authentication strategy was given' && !auth.publicPages.includes(route.name)) {
        return redirect('/login')
      }
    })
}
