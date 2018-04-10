<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Ausweise</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i>Auswese
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/admin/users/${item._id}`" append v-for="item in users" :key="item._id">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td></td>
                                        <td></td>
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
  
  export default {
    computed: {
      ...mapGetters({
        users: 'user/list'
      })
    },
    methods: {
      async remove (_id) {
        await this.$store.dispatch('user/remove', _id)
      }
    },
    async fetch ({ store }) {
      await store.dispatch('user/find')
    }
  }
</script>
