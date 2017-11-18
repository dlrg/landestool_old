<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Programm bearbeiten</h1>
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> {{program.name}}
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Name</label>
                                        <div class="col-md-9">
                                            <input type="text" id="text-input" v-model="program.name" name="text-input" class="form-control" :value="program.name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3"><span>Kategorie</span></label>
                                        <div class="col-md-9 text-right">
                                            <div class="select-wrapper">
                                                <select class="form-control  float-left" name="selectForm" id="selectForm">
                                                    <!-- @ToDo: add Categories Dynamic -->
                                                    <option value="ck">Café Kontakt</option>
                                                    <option value="fahrdienst">Fahrdienst</option>
                                                    <option value="hasi">Haussicherheit</option>
                                                    <option value="helfer" selected="">Helfer</option>
                                                    <option value="pbetreuung">Programmbetreuung</option>
                                                    <option value="klassenraeume">Rödeltruppe Schule</option>
                                                    <option value="roedel">Rödeltruppe Wettkampf</option>
                                                    <option value="sanitaeter">Sanitäter</option>
                                                    <option value="essen">Verpflegung</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Verantwortlicher</label>
                                        <div class="col-md-9">
                                            <input type="text" v-model="program.person.accountable" name="text-input" class="form-control" :value="program.person.accountable">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Startzeit</label>
                                        <div class="col-md-9">
                                            <!-- @ToDo: Datepicker function is buggy -->
                                            <date-picker v-model="programDate" :config="config"></date-picker>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-1"></i> Ort
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Treffpunkt</label>
                                        <div class="col-md-9">
                                            <input type="text" v-model="program.location.meetingpoint" name="text-input" class="form-control" :value="program.location.meetingpoint">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">Veranstaltungsort</label>
                                        <div class="col-md-9">
                                            <label class="radio-inline mr-2" for="inline-radio1">
                                                <input type="radio" id="inline-radio1" name="inline-radios" v-model="program.location.local" :value="true"> Veranstaltungsgelände
                                            </label>
                                            <label class="radio-inline" for="inline-radio2">
                                                <input type="radio" id="inline-radio2" name="inline-radios" v-model="program.location.local" :value="false" > Außerhalb
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 animated fadeIn" v-if="!program.location.local">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">PLZ/Ort</label>
                                        <div class="col-sm-3">
                                            <input type="text" v-model="program.location.zip" name="text-input" class="form-control" :value="program.location.zip">
                                        </div>
                                        <div class="col-sm-6">
                                        <input type="text" v-model="program.location.town" name="text-input" class="form-control" :value="program.location.town">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 animated fadeIn" v-if="!program.location.local">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Straße/Nr</label>
                                        <div class="col-sm-7">
                                            <input type="text" v-model="program.location.street" name="text-input" class="form-control" :value="program.location.street">
                                        </div>
                                        <div class="col-sm-2">
                                            <input type="text" v-model="program.location.streetnr" name="text-input" class="form-control" :value="program.location.streetnr">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 animated fadeIn" v-if="!program.location.local">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Distanz</label>
                                        <div class="col-md-9">
                                            <input type="text" v-model="program.location.distance" name="text-input" class="form-control" :value="program.location.distance">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 animated fadeIn" v-if="!program.location.local">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3"><span>Kategorie</span></label>
                                        <div class="col-md-9 text-right">
                                            <div class="select-wrapper">
                                                <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="program.location.transport">
                                                    <!-- @ToDo: add Values Dynamic -->
                                                    <option :value="false">kein Transport</option>
                                                    <option :value="'fulei'">Fahrdienst</option>
                                                    <option :value="'train'">Zug</option>
                                                    <option :value="'bus'">Bus</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 animated fadeIn" v-if="!program.location.local && program.location.transport === 'fulei'">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Hinweise für den Fahrdienst</label>
                                        <div class="col-md-9">
                                            <textarea type="text" v-model="program.location.comment" name="text-input" class="form-control" :value="program.location.comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-dollar-increase"></i> Finanzen
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Kosten</label>
                                        <div class="col-md-9">
                                            <input type="text" v-model="program.finance.price" name="text-input" class="form-control" :value="program.finance.price">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3"><span>Zahlungsart</span></label>
                                        <div class="col-md-9 text-right">
                                            <div class="select-wrapper">
                                                <select class="form-control  float-left" name="selectForm" id="selectForm">
                                                    <!-- @ToDo: add Categories Dynamic -->
                                                    <option value="cash">Bar</option>
                                                    <option value="ec-cash">EC-Karte</option>
                                                    <option value="credit">Kreditkarte</option>
                                                    <option value="sepa">SEPA-Lastschrift</option>
                                                    <option value="vorkasse">Vorkasse</option>
                                                    <option value="invoice">Rechnung</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Zahlungsfrist</label>
                                        <div class="col-md-9">
                                            <!-- @ToDo: Datepicker function is buggy -->
                                            <date-picker v-model="financeDeadline" :config="config"></date-picker>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <pre>
                                {{program}}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'
  const programMask = {
    dates: {},
    person: {},
    location: {},
    finance: {},
    info: {}
  }

  export default {
    async asyncData ({params}) {
      console.log(params)
      let { data } = await axios.get('/api/program/' + params.programId)
      return { program: {...programMask, ...data} }
    },
    data () {
      return {
        test: 0,
        config: {
          format: 'DD.MM.YYYY',
          useCurrent: false,
          locale: 'de'
        }
      }
    },
    computed: {
      programDate: {
        get () {
          return this.program.dates.start
        }
      },
      financePrice: {
        get () {
          return this.program.finance.price
        }
      }
    }
  }
</script>
