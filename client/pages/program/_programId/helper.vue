<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Helfer</h1>
                    <button class="btn btn-sm btn-info c-white offset-11 col-1" @click="edit">Bearbeiten</button>
                    <div class="card" v-for='(item, index) in program.dates' :key="'date'+index">
                        <div class="card-header">
                            <i class="ca ca-clock-2"></i>{{ item.day | dateFormatter('DD.MM.YYYY')}} von {{ item.start}} bis {{ item.end}}
                        </div>
                        <div class="card-body">
                          <tbody>
                            <tr v-for='(item, index) in helper' :key="'helper'+index">
                              <td>{{ item.userId }}</td>
                            </tr>
                          </tbody>
                        </div>
                    </div>
                </div>
            </div>
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
        return this.users.map(users => {
          return users.firstname + ' ' + users.lastname
        })
      }
    },
    methods: {
      edit () {
        this.$router.push('/program/' + this.$route.params.programId + '/helperEdit')
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
