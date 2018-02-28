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
                            <table class="table table-striped">
                                <thead>
                                <tr >
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Ort/Stadt</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in users" :key="item._id">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname}}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.address.city }}</td>
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
      })
    },
    methods: {
      add () {
        this.$router.push('/admin/users/add')
      }
    },
    async fetch ({ store }) {
      await store.dispatch('user/find')
    }
  }
</script>
