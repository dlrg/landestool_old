<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Benutzerverwaltung</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Benutzer
                            <button class="btn btn-sm btn-info c-white float-right" @click="add">Hinzufügen</button>
                        </div>
                        <div class="card-body">
                          <div class="select-wrapper col-3 mb-3">
                            <select class="form-control  float-left" name="selectFormUser" id="selectFormEinsatz" v-model="userFilter">
                              <option value="alle">alle</option>
                              <option value="kein Ausweis / Einsetzbar">kein Ausweis / Einsetzbar</option>
                              <option value="Ausweis / nicht Einsetzbar bzw. anderweitig verplant">Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                              <option value="kein Ausweis / nicht Einsetzbar bzw. anderweitig verplant">kein Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                              <option value="Arbeitsgruppe">Arbeitsgruppe </option>
                            </select>
                           </div>
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
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in filteredUsers" :key="item._id">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.address.city }}</td>
                                        <td><router-link :to="'users/' + item._id + '/timetable'"><i class="ca ca-clock-2"></i></router-link></td>
                                        <td><button class="btn btn-sm btn-danger float-right" @click.stop="remove(item._id)">Löschen</button></td>
                                    </nuxt-link>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NuxtLink from '@/../.nuxt/components/nuxt-link'
  
  export default {
    components: {NuxtLink},
    computed: {
      ...mapGetters({
        users: 'user/list'
      }),
      filteredUsers () {
        if (this.userFilter === 'alle') {
          return this.users
        } else {
          return this.users.filter(user => user.presence === this.userFilter)
        }
      }
    },
    data () {
      return {
        deleteConfirm: false,
        userFilter: 'alle'
      }
    },
    methods: {
      add () {
        this.$router.push('/admin/users/add')
      },
      async remove (_id) {
        await this.$store.dispatch('user/remove', _id)
      }
    },
    async fetch ({ store }) {
      await store.dispatch('user/find')
    }
  }
</script>
