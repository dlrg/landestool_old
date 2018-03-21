<template>
  <section class="container-fluid">
    <div class="animated fadeIn">
      <h1>Profil</h1>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <!--Stammdaten -->
          <div class="card h-100">
            <div class="card-header">
              <i class="ca ca-anchor"></i> Stammdaten
              <button class="btn btn-warning btn-sm float-right mr-1" @click="edit">Bearbeiten</button>
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Vorname</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.firstname}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-xl-3">Lastname</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.lastname}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-xl-3">Email</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.email}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Telefon</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.phone}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Geburtstag</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.birthday | dateFormatter('DD.MM.YYYY')}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Geschlecht</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0" v-if="user.gender === 'm'">Mann</p>
                  <p class="form-control-static mt-2 mb-0" v-if="user.gender === 'w'">Frau</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Essensverträglichkeit</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'keine Unverträglichkeiten'">Keine unverträglichkeiten</p>
                  <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'vegetarisch'">Vegetarisch</p>
                  <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'vegan'">Vegan</p>
                  <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'glutenfrei'">Glutenfrei</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <!-- Profilbild -->
          <div class="card h-100">
            <div class="card-header">
              <i class="ca ca-person-2"></i>Profilbild
            </div>
            <div class="card-body">
              <!--<img src="../../../../assets/img/BOATY.jpg"/>-->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <!-- Adresse -->
          <div class="card h-100">
            <div class="card-header">
              <i class="ca ca-map-pin-2"></i>Addresse
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Straße</label>
                <div class="col-xl-4">
                  <p class="form-control-static mt-2 mb-0">{{user.address.street}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Postleitzahl</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.address.zip}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Ort / Straße</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.address.city}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <div class="card-header">
              <i class="ca ca-map-pin-1"></i>Organisation
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Unterkunft</label>
                <div class="col-xl-4">
                  <p class="form-control-static mt-2 mb-0">{{user.housing}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label">Gliederung</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">{{user.division}}</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-form-label" for="helper">Gliederungshelfer</label>
                <div class="col-xl-9">
                  <p class="form-control-static mt-2 mb-0">nein</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <i class="ca ca-clock-2"></i>Anwesenheit
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-xl-3 col-form-label">Einsatz</label>
              <div class="col-xl-9">
                <p class="form-control-static mt-2 mb-0">{{user.presence}}</p>
              </div>
            </div>
            <div class="form-group row" v-if="user.presence=='Arbeitsgruppe'">
              <label class="col-xl-3 col-form-label">Arbeitsgruppe</label>
              <div class="col-xl-9">
                <p class="form-control-static mt-2 mb-0">{{user.workgroup}}</p>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label">Tage</label>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Montag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.monday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2 float-">Dienstag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.tuesday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Mittwoch:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.wednesday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Donnerstag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.thursday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Freitag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.friday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Samstag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.saturday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
              <div class="col-xl-3"></div>
              <div class="col-xl-3">
                <p class="form-control-static mt-2">Sonntag:</p>
              </div>
              <div class="col-xl-6">
                <p class="form-control-static mt-2" v-if="user.presenceDay.sunday==true">ja <i class="ca ca-check-2 ml-5"></i></p>
                <p class="form-control-static mt-2" v-else>nein <i class="ca ca-remove-2 ml-5"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header">
            <i class="ca ca-task-2"></i> Aufgaben
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Fahrdienst</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="carpool0" v-if="user.assignment.carpool === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="carpool1" v-if="user.assignment.carpool === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="carpool2" v-if="user.assignment.carpool === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="carpool3" v-if="user.assignment.carpool === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="carpool4" v-if="user.assignment.carpool === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Sanitäter</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="medic0" v-if="user.assignment.medic === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="medic1" v-if="user.assignment.medic === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="medic2" v-if="user.assignment.medic === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="medic3" v-if="user.assignment.medic === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="medic4" v-if="user.assignment.medic === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="Haussicherheit">Fahrdienst</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="homeSecurity0" v-if="user.assignment.homeSecurity === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="homeSecurity1" v-if="user.assignment.homeSecurity === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="homeSecurity2" v-if="user.assignment.homeSecurity === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="homeSecurity3" v-if="user.assignment.homeSecurity === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="homeSecurity4" v-if="user.assignment.homeSecurity === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="Haussicherheit">Café Kontakt</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="cafe0" v-if="user.assignment.cafe === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="cafe1" v-if="user.assignment.cafe === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="cafe2" v-if="user.assignment.cafe === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="cafe3" v-if="user.assignment.cafe === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="cafe4" v-if="user.assignment.cafe === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Helfer</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="assistant0" v-if="user.assignment.assistant === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="assistant1" v-if="user.assignment.assistant === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="assistant2" v-if="user.assignment.assistant === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="assistant3" v-if="user.assignment.assistant === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="assistant4" v-if="user.assignment.assistant === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Rödeltruppe Wettkampf</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="contest0" v-if="user.assignment.contest === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="contest1" v-if="user.assignment.contest === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="contest2" v-if="user.assignment.contest === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="contest3" v-if="user.assignment.contest === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="contest4" v-if="user.assignment.contest === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Verpflegung</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="catering0" v-if="user.assignment.catering === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="catering1" v-if="user.assignment.catering === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="catering2" v-if="user.assignment.catering === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="catering3" v-if="user.assignment.catering === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="catering4" v-if="user.assignment.catering === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Rödeltruppe Schule</label>
              <div class="col-xl-3">
                <div class="mt-1 mb-0 mr-4" id="school0" v-if="user.assignment.school === 0">
                  <i class="ca ca-smiley-woops mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="school1" v-if="user.assignment.school === 1">
                  <i class="ca ca-smiley-frown-2 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="school2" v-if="user.assignment.school === 2">
                  <i class="ca ca-smiley-poker-face mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="school3" v-if="user.assignment.school === 3">
                  <i class="ca ca-smiley-smile-4 mr-3"></i>
                </div>
                <div class="mt-1 mb-0 mr-4" id="school4" v-if="user.assignment.school === 4">
                  <i class="ca ca-smiley-smile-1 mr-3"></i>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-xl-3 col-form-label" for="carpool">Programmbetreuung</label>
              <div class="col-xl-3">
                <div class="col-xl-3">
                  <div class="mt-1 mb-0 mr-4" id="programSupport0" v-if="user.assignment.programSupport === 0">
                    <i class="ca ca-smiley-woops mr-3"></i>
                  </div>
                  <div class="mt-1 mb-0 mr-4" id="programSupport1" v-if="user.assignment.programSupport === 1">
                    <i class="ca ca-smiley-frown-2 mr-3"></i>
                  </div>
                  <div class="mt-1 mb-0 mr-4" id="programSupport2" v-if="user.assignment.programSupport === 2">
                    <i class="ca ca-smiley-poker-face mr-3"></i>
                  </div>
                  <div class="mt-1 mb-0 mr-4" id="programSupport3" v-if="user.assignment.programSupport === 3">
                    <i class="ca ca-smiley-smile-4 mr-3"></i>
                  </div>
                  <div class="mt-1 mb-0 mr-4" id="programSupport4" v-if="user.assignment.programSupport === 4">
                    <i class="ca ca-smiley-smile-1 mr-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import getUserFromRoute from '@/mixins/getUserFromRoute'
  import dateFormatter from '@/filters/date-formatter'
  export default {
    mixins: [getUserFromRoute],
    filters: { dateFormatter },
    methods: {
      edit () {
        this.$router.push('/admin/users/' + this.$route.params.userId + '/edit')
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
