<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Mitarbeiterverwaltung</h1>
                    <div class="card" v-if="user.workgroup">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Mitarbeiter in {{ user.workgroup }}
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th>Email</th>
                                    <th>Ort/Stadt</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="'/admin/users/' + item._id" append v-for="item in sameUsers" :key="item._id">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.address.city }}</td>
                                        <td><router-link :to="'/admin/users/' + item._id + '/timetable'"><i class="ca ca-clock-2"></i></router-link></td>
                                        <td><button class="btn btn-sm btn-danger float-right" @click.stop="remove(item._id)">Löschen</button></td>
                                    </nuxt-link>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card" v-if="!user.workgroup">
                      <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Mitarbeiter
                        </div>
                        <div class="card-body pt-3 pl-3">Du bist keiner Arbeitsgruppe zugeteilt!</div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        users: 'user/list'
      }),
      user () {
        return this.$store.getters['user/get'](this.$route.params.userId)
      },
      sameUsers () {
        return this.users.filter(user => user.workgroup === this.user.workgroup)
      }
    },
    data () {
      return {
        deleteConfirm: false
      }
    },
    methods: {
      async remove (_id) {
        await this.$store.dispatch('user/remove', _id)
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
