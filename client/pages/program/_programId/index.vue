<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Programm bearbeiten</h1>

            <div class="row">
                <div class="col-lg-6">
                    <!--Stammdaten -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Stammdaten
                            <button class="btn btn-warning btn-sm float-right mr-1" @click="edit">Bearbeiten</button>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Name</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.name}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-xl-3">Status</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.status}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-xl-3">Kategorie</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.category}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Verantwortlich</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.person.accountable}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Ressourcen -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-key-1"></i> Ressourcen
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Betreuer/in</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.person.supervisor}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">min/max TN</label>
                                <div class="col-sm-6 col-xl-3">
                                    <p class="form-control-static mt-2 mb-0">{{program.person.subscribermin}} - {{program.person.subscribermax}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">min/max Alter</label>
                                <div class="col-sm-6 col-xl-3">
                                    <p class="form-control-static mt-2 mb-0">{{program.person.agemin}} - {{program.person.agemax}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">CREW Info</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.info.crewinfo}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Marketing -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-share-box-forward-1"></i> Marketing
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Medienredaktion</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.info.mediainfo}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Website/Tool</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.info.websiteinfo}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">

                    <!-- Datum/Uhrzeit-->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-clock-2"></i> Uhrzeit und Datum
                        </div>
                        <div class="card-body">

                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Start/Ende</label>
                                <div class="col-xl-4">
                                    <p class="form-control-static mt-2 mb-0">{{program.dates.start}} - {{program.dates.end}}</p>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Dauer</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.dates.duration}}</p>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Meldeschluss</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.dates.deadline}}</p>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Hinweise zum Datum & Uhrzeit</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.dates.comment}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Ort -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-1"></i> Ort
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Treffpunkt</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.meetingpoint}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label">Ort</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0" v-if="program.location.local">Veranstaltungsgelände</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="!program.location.local">Außerhalb</p>
                                </div>
                            </div>
                            <div class="form-group row" v-if="program.location.local">
                                <label class="col-xl-3 col-form-label">Raum</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.room}}</p>
                                </div>
                            </div>
                            <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                <label class="col-xl-3 col-form-label">PLZ/Ort</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.zip}} {{program.location.town}}</p>
                                </div>
                            </div>
                            <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                <label class="col-xl-3 col-form-label">Straße/Nr</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.street}} {{program.location.streetnr}}</p>
                                </div>
                            </div>
                            <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                <label class="col-xl-3 col-form-label">Distanz</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.distance}}</p>
                                </div>
                            </div>
                            <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                <label class="col-form-label col-xl-3"><span>Transport</span></label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0" v-if="program.location.transport">kein Transport</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="!program.location.transport">Fahrdienst</p>
                                </div>
                            </div>
                            <div class="form-group row animated fadeIn" v-if="!program.location.local && program.location.transport === 'fulei'">
                                <label class="col-xl-3 col-form-label">Hinweise für den Fahrdienst</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.location.comment}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Finanzen -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-dollar-increase"></i> Finanzen
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label">Kostentyp</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0" v-if="program.finance.free">Kostenlos</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="!program.finance.free">Kostenpflichtig</p>
                                </div>
                            </div>
                            <div class="form-group row" v-if="!program.finance.free">
                                <label class="col-xl-3 col-form-label">Kosten</label>
                                <p class="form-control-static mt-2 mb-0">{{program.finance.prices}}</p>
                            </div>
                            <div class="form-group row" v-if="!program.finance.free">
                                <label class="col-form-label col-xl-3"><span>Zahlungsart</span></label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0" v-if="program.finance.payment === 'cash'">Bar</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="program.finance.payment === 'transfer'">Überweisung</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="program.finance.payment === 'invoice'">Rechnung</p>
                                </div>
                            </div>
                            <div class="form-group row" v-if="!program.finance.free">
                                <label class="col-xl-3 col-form-label">Zahlungsfrist</label>
                                <div class="col-xl-9">
                                    <p class="form-control-static mt-2 mb-0">{{program.finance.deadline}}</p>
                                </div>
                            </div>
                            <div class="form-group row" v-if="!program.finance.free">
                                <label class="col-xl-3 col-form-label">Hinweise zur Bezahlung</label>
                                <p class="form-control-static mt-2 mb-0">{{program.finance.comment}}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
  export default {
    computed: {
      program () {
        return this.$store.getters['program/get'](this.$route.params.programId)
      }
    },
    methods: {
      edit () {
        this.$router.push('/program/' + this.$route.params.programId + '/edit')
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('program/get', params.programId)
    }
  }
</script>
