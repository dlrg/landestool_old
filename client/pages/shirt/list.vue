<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Bestellliste</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-shopping-cart-2"></i> Bestellte Shirts
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Vorname</th>
                                    <th>Nachname</th>
                                    <th>Art</th>
                                    <th>Geschlecht</th>
                                    <th>Farbe</th>
                                    <th>Größe</th>
                                    <th>Anzahl</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in orderUsers" :key="item._id">
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td>{{ item.shirt.style }}</td>
                                        <td>{{ item.shirt.sex }}</td>
                                        <td>{{ item.shirt.color }}</td>
                                        <td>{{ item.shirt.size }}</td>
                                        <td>{{ item.shirt.count }}</td>
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
      }),
      orderUsers () {
        return this.users.filter(user => user.shirt.count !== 0)
      }
    }
  }
</script>
