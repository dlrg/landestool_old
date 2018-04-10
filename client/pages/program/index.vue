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
                            <div class="select-wrapper col-3 mb-3">
                            <select class="form-control  float-left" name="selectFormProgram" id="selectFormDay" v-model="programFilter">
                              <option value="alle">alle</option>
                              <option value="Mo">Montag</option>
                              <option value="Di">Dienstag</option>
                              <option value="Mi">Mittwoch</option>
                              <option value="Do">Donnerstag</option>
                              <option value="Fr">Freitag</option>
                              <option value="Sa">Samstag</option>
                              <option value="So">Sonntag</option>
                            </select>
                           </div>
                            <table class="table table-striped">
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
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <nuxt-link tag="tr" :to="item._id" append v-for="item in filteredPrograms" :key="item._id">
                                        <td>{{item.name}}</td>
                                        <td>{{item.category}}</td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.day | dateFormatter('dd')}}, {{item.day | dateFormatter('DD.MM.YYYY')}}<br /></span></td>
                                        <td><span v-for="(item) in item.dates" :key="item._id">{{item.start}} - {{item.end}}<br /></span></td>
                                        <td>{{item.person.subscribermin}} - {{item.person.subscribermax}}</td>
                                        <td>{{item.location.meetingpoint}}</td>
                                        <td>{{item.person.agemin}} - {{item.person.agemax}}</td>
                                        <td>
                                            <span class="badge badge-success c-white">{{item.status}}</span>
                                        </td>
                                        <td><button class="btn btn-sm btn-danger float-right" @click.stop="remove(item._id)">Löschen</button></td>
                                        <td></td>
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
      filteredPrograms () {
        if (this.programFilter === 'alle') {
          return this.program
        } else {
          return this.program.filter(program => {
            return program.dates.some(date => moment(date.day).format('dd') === this.programFilter)
          })
        }
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
