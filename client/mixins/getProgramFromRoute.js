export default {
  computed: {
    program () {
      let program = this.$store.getters['program/get'](this.$route.params.programId)
      this.$set(program, 'info', program.info || {})
      this.$set(program, 'dates', program.dates || {})
      return program
    }
  }
}
