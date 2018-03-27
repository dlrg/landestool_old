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
                           <table class="table">
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
                            </table>
                            <h4 class="h3-table c-white">Montag</h4>
                            <table class="table table-striped mb-5">
                                <tbody tag="tr" :to="`/program/${item._id}`" append v-for="item in programMonday" :key="item._id">
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
                            <h4 class="h3-table c-white">Dienstag</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programTuesday" :key="item._id">
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

                            <h4 class="h3-table c-white">Mittwoch</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programWednesday" :key="item._id">
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

                            <h4 class="h3-table c-white">Donnerstag</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programThursday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'day'">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'startEnd'">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                    </nuxt-link>
                                </tbody>
                            </table>

                             <h4 class="h3-table c-white">Freitag</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programFriday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'day'">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'startEnd'">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                    </nuxt-link>
                                </tbody>
                            </table>

                             <h4 class="h3-table c-white">Samstag</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programSaturday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'day'">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'startEnd'">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                    </nuxt-link>
                                </tbody>
                            </table>

                             <h4 class="h3-table c-white">Sonntag</h4>
                            <table class="table table-striped mb-5">
                                <tbody>
                                    <nuxt-link tag="tr" :to="`/program/${item._id}`" append v-for="item in programSunday" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'day'">{{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item, index) in item.dates" :key="index+'startEnd'">{{item.start}} - {{item.end}}<br /></span></td>
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
        return this.getProgramsOfDay('Mo')
      },
      programTuesday () {
        return this.getProgramsOfDay('Di')
      },
      programWednesday () {
        return this.getProgramsOfDay('Mi')
      },
      programThursday () {
        return this.getProgramsOfDay('Do')
      },
      programFriday () {
        return this.getProgramsOfDay('Fr')
      },
      programSaturday () {
        return this.getProgramsOfDay('Sa')
      },
      programSunday () {
        return this.getProgramsOfDay('So')
      }
    },
    methods: {
      add () {
        this.$router.push('/program/add')
      },
      async remove (_id) {
        await this.$store.dispatch('program/remove', _id)
      },
      getProgramsOfDay (day) {
        return this.program.filter(program => {
          return program.dates.some(date => moment(date.day).format('dd') === day)
        }).map(program => {
          let dates = program.dates.filter(date => this.isWeekday(date.day, day))
          return {
            ...program,
            dates
          }
        })
      },
      isWeekday (date, weekday) {
        return moment(date).format('dd') === weekday
      }
    },
    async fetch ({ store }) {
      await store.dispatch('program/find')
    }
  }
</script>
