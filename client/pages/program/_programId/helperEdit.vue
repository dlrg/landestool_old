<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
          <form @submit.prevent="save">
            <div class="row">
                <div class="col-12">
                    <h1>Helfer hinzufügen</h1>
                    <button class="btn btn-sm btn-info c-white offset-11 col-1" @click="save">Speichern</button>
                    <div class="card" v-for='(item, index) in program.dates' :key="'date'+index">
                        <div class="card-header">
                            <i class="ca ca-clock-2"></i>{{ item.day | dateFormatter('DD.MM.YYYY')}} von {{ item.start}} bis {{ item.end}}
                            
                        </div>
                        <div class="card-body">
                          <div class="form-group row" v-for="(item, index) in helper" :key="'help'+index">
                                <div class="select-wrapper col-xl-4 mb-3">
                                    <!--select class="form-control  float-left" v-for="item in user" :key="item._id" id="helperUser" v-model="item.user" required-->
                                    <select class="form-control  float-left" id="helperUser" v-model="item.userId">  
                                       <option v-for="(item, index) in user" :key="user._id +index"></option>
                                    </select>
                                </div>
                                <div class="delete-button col-xl-1 offset-xl-1">
                                  <button class="btn btn-sm btn-danger float-right" @click.stop="remove(index)">Löschen</button>
                                </div>
                            </div>
                            <button type="button" class="btn btn-sm btn-success ml-1" v-on:click="addForm()">Helfer hinzufügen</button>
                        </div>
                    </div>
                </div>
            </div>
          </form>
        </div>
    </section>
</template>

<script>
  import getProgramFromRoute from '@/mixins/getProgramFromRoute'
  import dateFormatter from '@/filters/date-formatter'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [getProgramFromRoute],
    filters: { dateFormatter },
    computed: {
      ...mapGetters({
        users: 'user/list',
        helper: 'helper/list'
      }),
      user () {
        // alle User firstname + lastname
        return this.users.filter(users => {
          return users.firstname + users.lastname
        })
      }
    },
    methods: {
      save () {
        this.$store.dispatch('program/patch', [this.program._id, this.program])
        this.$store.dispatch('helper/patch', [this.helper._id, this.helper])
        this.$router.push('/program/' + this.program._id + '/helper')
      },
      remove (index) {
        this.helper.splice(index, 1)
      },
      addForm () {
        this.helper.push({})
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('program/get', params.programId)
    }
  }
</script>
