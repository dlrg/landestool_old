<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Programm</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Programmpunkte
                            <button class="btn btn-sm btn-info c-white float-right" @click="add">Hinzufügen</button>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead>
                                <tr >
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Start/Ende</th>
                                    <th>TN Max</th>
                                    <th>Treffpunkt</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in program" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-if="item.dates">{{item.dates.start | dateFormatter('DD.MM.YYYY')}} - {{item.dates.end | dateFormatter('DD.MM.YYYY')}}</span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
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
  import { mapGetters } from 'vuex'
  import NuxtLink from '../../../.nuxt/components/nuxt-link'
  import dateFormatter from '@/filters/date-formatter'

  export default {
    components: {NuxtLink},
    filters: { dateFormatter },
    computed: {
      ...mapGetters({
        program: 'program/list'
      })
    },
    methods: {
      add () {
        this.$router.push('/program/add')
      }
    },
    async fetch ({ store }) {
      await store.dispatch('program/find')
    }
  }
</script>
