<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Programm</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Programmpunkte
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr >
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Treffpunkt</th>
                                    <th>Uhrzeit</th>
                                    <th>Dauer</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in program.data" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td>{{item.meetingpoint}}</td>
                                        <td>{{item.datetimestart}}</td>
                                        <td>{{item.duration}}</td>
                                        <td>{{item.agemin}} - {{item.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">Active</span>
                                        </td>
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
  import axios from '~/plugins/axios'
  import NuxtLink from '../../../.nuxt/components/nuxt-link'

  export default {
    components: {NuxtLink},
    async asyncData () {
      let { data } = await axios.get('/api/program')
      return { program: data }
    }
  }
</script>
