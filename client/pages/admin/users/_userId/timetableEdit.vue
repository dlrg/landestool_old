<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
          <form @submit.prevent="save">
            <div class="row">
                <div class="col-12">
                    <h1>Timetable</h1>
                    
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Anwesenheit an den Tagen
                            <button class="btn btn-sm btn-info c-white float-right" type="submit">Speichern</button>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <h4 class="col-4">Tag</h4>
                                <h4 class="col-4">von</h4>
                                <h4 class="col-4">bis</h4>
                            </div>
                            <div class="form-group row">
                                <div class="select-wrapper col-4 mb-3">
                                    <select class="form-control  float-left" name="selectFormUser" id="timeDay" v-model="user.time.day">
                                        <option value="Donnerstag">Donnerstag</option>
                                        <option value="Freitag">Freitag</option>
                                        <option value="Samstag">Samstag</option>
                                        <option value="Sonntag">Sonntag</option>
                                    </select>
                                </div>
                                <div class="select-wrapper col-xl-4 mb-3">
                                    <select class="form-control  float-left" name="selectFormUser" id="timeStart" v-model="user.time.start">
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                    </select>
                                </div>
                                <div class="select-wrapper col-xl-4 mb-3">
                                    <select class="form-control  float-left" name="selectFormUser" id="timeEnd" v-model="user.time.end">
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                    </select>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>  
        </div>
    </section>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters['user/get'](this.$route.params.userId)
      }
    },
    methods: {
      save () {
        this.$store.dispatch('user/patch', [this.user._id, this.user])
        this.$router.push('/admin/users/' + this.user._id + '/timetable')
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
