<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Programm hinzufügen</h1>
            <form @submit.prevent="save">
                <div class="row">
                    <div class="col-lg-6">
                        <!--Stammdaten -->
                        <div class="card">
                            <div class="card-header">
                                <i class="ca ca-anchor"></i> Stammdaten
                                <button class="btn btn-success btn-sm float-right" type="submit">Speichern</button>
                            </div>
                            <div class="card-body">
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="name">Name*</label>
                                    <div class="col-xl-9">
                                        <input type="text" id="name" v-model="program.name" name="text-input" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-form-label col-xl-3" for="status"><span>Status</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="status" v-model="program.status">
                                                <!-- @ToDo: add Categories Dynamic -->
                                                <option :value="'Aktiv'">Aktiv</option>
                                                <option :value="'Geplant'">Geplant</option>
                                                <option :value="'Storniert'">Storniert</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-form-label col-xl-3" for="category"><span>Kategorie</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="category" v-model="program.category">
                                                <!-- @ToDo: add Categories Dynamic -->
                                                <option value="Café Kontakt">Café Kontakt</option>
                                                <option value="Fahrdienst">Fahrdienst</option>
                                                <option value="Haussicherheit">Haussicherheit</option>
                                                <option value="Helfer" selected="">Helfer</option>
                                                <option value="Programmbetreuung">Programmbetreuung</option>
                                                <option value="Rödeltruppe Schule">Rödeltruppe Schule</option>
                                                <option value="Rödeltruppe Wettkampf">Rödeltruppe Wettkampf</option>
                                                <option value="Sanitäter">Sanitäter</option>
                                                <option value="Verpflegung">Verpflegung</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="accountable">Verantwortlich</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.person.accountable" id="accountable" name="text-input" class="form-control">
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
                                    <label class="col-xl-3 col-form-label" for="supervisor">Betreuer/in</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.person.supervisor" id="supervisor" name="text-input" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="minmax-subscriber">min/max TN</label>
                                    <div class="col-sm-6 col-xl-3">
                                        <input type="number" v-model="program.person.subscribermin" name="text-input" id="minmax-subscriber" class="form-control">
                                    </div>
                                    <div class="col-sm-6 col-xl-3">
                                        <input type="number" v-model="program.person.subscribermax" name="text-input" id="minmax-subscriber" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="minmax-age">min/max Alter</label>
                                    <div class="col-sm-6 col-xl-3">
                                        <input type="number" v-model="program.person.agemin" name="text-input" id="minmax-age" class="form-control">
                                    </div>
                                    <div class="col-sm-6 col-xl-3">
                                        <input type="number" v-model="program.person.agemax" name="text-input" id="minmax-age" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="crewinfo">CREW Info</label>
                                    <div class="col-xl-9">
                                        <textarea type="number" v-model="program.info.crewinfo" name="text-input" id="crewinfo" class="form-control"></textarea>
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
                                    <label class="col-xl-3 col-form-label" for="mediainfo">Medienredaktion</label>
                                    <div class="col-xl-9">
                                        <textarea type="number" v-model="program.info.mediainfo" name="text-input" id="mediainfo" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="websiteinfo">Website/Tool</label>
                                    <div class="col-xl-9">
                                        <textarea type="number" v-model="program.info.websiteinfo" name="text-input" id="websiteinfo" class="form-control"></textarea>
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
                                    <label class="col-xl-3 col-form-label" for="startend-date">Start/Ende</label>
                                    <div class="col-xl-4">
                                        <no-ssr>
                                            <datepicker bootstrap-styling language="de" monday-first v-model="program.dates.start"></datepicker>
                                        </no-ssr>
                                    </div>
                                    <div class="col-xl-4">
                                        <no-ssr>
                                            <datepicker bootstrap-styling language="de" monday-first v-model="program.dates.end"></datepicker>
                                        </no-ssr>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="duration">Dauer</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.dates.duration" name="text-input" id="duration" class="form-control">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="deadline">Meldeschluss</label>
                                    <div class="col-xl-9">
                                        <no-ssr>
                                            <datepicker bootstrap-styling language="de" monday-first v-model="program.dates.deadline"></datepicker>
                                        </no-ssr>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="comment">Hinweise zum Datum & Uhrzeit</label>
                                    <div class="col-xl-9">
                                        <textarea type="text" v-model="program.dates.comment" name="text-input" id="comment" class="form-control"></textarea>
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
                                    <label class="col-xl-3 col-form-label" for="meetingpoint">Treffpunkt</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.location.meetingpoint" name="text-input" id="meetingpoint" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label">Ort</label>
                                    <div class="col-xl-9">
                                        <label class="radio-inline mr-2" for="inline-radio1">
                                            <input type="radio" id="inline-radio1" name="inline-radios" v-model="program.location.local" :value="true"> Veranstaltungsgelände
                                        </label>
                                        <label class="radio-inline" for="inline-radio2">
                                            <input type="radio" id="inline-radio2" name="inline-radios" v-model="program.location.local" :value="false" > Außerhalb
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="program.location.local">
                                    <label class="col-xl-3 col-form-label" for="room">Raum</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.location.room" name="text-input" id="room" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                    <label class="col-xl-3 col-form-label" for="ziptown">PLZ/Ort</label>
                                    <div class="col-md-4 col-xl-2">
                                        <input type="text" v-model="program.location.zip" name="text-input" id="ziptown" class="form-control">
                                    </div>
                                    <div class="col-sm-8 col-xl-7">
                                        <input type="text" v-model="program.location.town" name="text-input" id="ziptown" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                    <label class="col-xl-3 col-form-label" for="street">Straße/Nr</label>
                                    <div class="col-sm-8 col-xl-7">
                                        <input type="text" v-model="program.location.street" name="text-input" id="street" class="form-control">
                                    </div>
                                    <div class="col-md-4 col-xl-2">
                                        <input type="text" v-model="program.location.streetnr" name="text-input" id="street" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                    <label class="col-xl-3 col-form-label" for="distance">Distanz</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.location.distance" name="text-input" id="distance" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row animated fadeIn" v-if="!program.location.local">
                                    <label class="col-form-label col-xl-3" for="transport"><span>Transport</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="transport" v-model="program.location.transport">
                                                <!-- @ToDo: add Values Dynamic -->
                                                <option :value="false">kein Transport</option>
                                                <option :value="'fulei'">Fahrdienst</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row animated fadeIn" v-if="!program.location.local && program.location.transport === 'fulei'">
                                    <label class="col-xl-3 col-form-label" for="location-comment">Hinweise für den Fahrdienst</label>
                                    <div class="col-xl-9">
                                        <textarea type="text" v-model="program.location.comment" name="text-input" id="location-comment" class="form-control"></textarea>
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
                                        <label class="radio-inline mr-2" for="finance-free-1">
                                            <input type="radio" id="finance-free-1" name="finance-free" v-model="program.finance.free" :value="true"> Kostenlos
                                        </label>
                                        <label class="radio-inline" for="finance-free-2">
                                            <input type="radio" id="finance-free-2" name="finance-free" v-model="program.finance.free" :value="false"> Kostenpflichtig
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="!program.finance.free">
                                    <label class="col-xl-3 col-form-label" for="price">Kosten</label>
                                    <div class="col-xl-9">
                                        <input type="text" v-model="program.finance.price" name="text-input" id="price" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row" v-if="!program.finance.free">
                                    <label class="col-form-label col-xl-3" for="payment"><span>Zahlungsart</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="payment" v-model="program.finance.payment">
                                                <!-- @ToDo: add Categories Dynamic -->
                                                <option :value="'cash'">Bar</option>
                                                <option :value="'transfer'">Übeweisung</option>
                                                <option :value="'invoice'">Rechnung</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="!program.finance.free">
                                    <label class="col-xl-3 col-form-label" for="finance-deadline">Zahlungsfrist</label>
                                    <div class="col-xl-9">
                                        <no-ssr>
                                            <datepicker bootstrap-styling language="de" monday-first v-model="program.finance.deadline"></datepicker>
                                        </no-ssr>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="!program.finance.free">
                                    <label class="col-xl-3 col-form-label" for="finance-comment">Hinweise zur Bezahlung</label>
                                    <div class="col-xl-9">
                                        <textarea type="text" v-model="program.finance.comment" name="text-input" id="finance-comment" class="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
  import getProgramFromRoute from '@/mixins/getProgramFromRoute'
  import datepicker from 'vuejs-datepicker'
  export default {
    mixins: [getProgramFromRoute],
    components: {
      datepicker
    },
    methods: {
      save () {
        this.$store.dispatch('program/create', this.program)
        this.$router.push('/program/')
      }
    },
    async asyncData ({ params }) {
      return { program: { ...programMask } }
    }
  }
  const programMask = {
    dates: {},
    person: {},
    location: {
      local: true,
      transport: false
    },
    finance: {
      prices: [{}],
      free: true
    },
    info: {}
  }
</script>
