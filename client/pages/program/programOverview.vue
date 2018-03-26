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
                            <h3 class="h3-table">Montag</h3>
                            <table class="table table-striped mb-5">
                                <thead>
                                <tr>
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Datum</th>
                                    <th>Start/Ende</th>
                                    <th>TN Max</th>
                                    <th>Treffpunkt</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody tag="tr" :to="item._id" append v-for="item in programMonday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                </tbody>
                            </table>

                            <h3 class="h3-table">Dienstag</h3>
                            <table class="table table-striped mb-5">
                                <thead>
                                <tr >
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Datum</th>
                                    <th>Start/Ende</th>
                                    <th>TN Max</th>
                                    <th>Treffpunkt</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in programThursday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                    </nuxt-link>
                                </tbody>
                                
                            </table>

                            <h3 class="h3-table">Mittwoch</h3>
                            <table class="table table-striped mb-5">
                                <thead>
                                <tr >
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Datum</th>
                                    <th>Start/Ende</th>
                                    <th>TN Max</th>
                                    <th>Treffpunkt</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in programWednesday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                    </nuxt-link>
                                </tbody>
                                
                            </table>

                            <h3 class="h3-table">Donnerstag</h3>
                            <table class="table table-striped mb-5">
                                <thead>
                                <tr >
                                    <th>Titel</th>
                                    <th>Kategorie</th>
                                    <th>Datum</th>
                                    <th>Start/Ende</th>
                                    <th>TN Max</th>
                                    <th>Treffpunkt</th>
                                    <th>Alter</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in programThursday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.start}} - {{item.end}}<br /></span></td>
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
  import moment from 'moment'
  moment.locale('de')

  export default {
    components: {NuxtLink},
    filters: { dateFormatter },
    data () {
      return {
        programFilter: 'alle'
      }
    },
    computed: {
      ...mapGetters({
        program: 'program/list'
      }),
      programMonday () {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === 'Mo')
        })
      },
      programTuesday () {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === 'Di')
        })
      },
      programWednesday () {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === 'Mi')
        })
      },
      programThursday () {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === 'Do')
        })
      },
      programFriday () {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === 'Fr')
        })
      }
    },
    methods: {
      add () {
        this.$router.push('/program/add')
      },
      async remove (_id) {
        await this.$store.dispatch('program/remove', _id)
      }
    },
    async fetch ({ store }) {
      await store.dispatch('program/find')
    }
  }
</script>
