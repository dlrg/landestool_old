export default {
  computed: {
    user () {
      let user = this.$store.getters['user/get'](this.$route.params.userId)
      this.$set(user, 'address', user.address || {})
      this.$set(user, 'time', user.time || {})
      this.$set(user, 'roles', user.role || {})
      return user
    }
  }
}
