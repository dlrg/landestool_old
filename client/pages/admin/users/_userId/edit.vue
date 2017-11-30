<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Benutzer Hinzufügen</h1>

            <div class="row">
                <div class="col-lg-6">
                    <!--Stammdaten -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Stammdaten
                            <button class="btn btn-success btn-sm float-right" @click="save">Speichern</button>
                            <button class="btn btn-danger btn-sm float-right mr-1" @click="remove">Löschen</button>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="text-input">Vorname</label>
                                <div class="col-xl-9">
                                    <input type="text" id="text-input" v-model="user.firstname" name="text-input" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="text-input">Nachname</label>
                                <div class="col-xl-9">
                                    <input type="text" id="text-input" v-model="user.lastname" name="text-input" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="text-input">Email</label>
                                <div class="col-xl-9">
                                    <input type="text" id="text-input" v-model="user.email" name="text-input" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="text-input">Telefon</label>
                                <div class="col-xl-9">
                                    <input type="text" id="text-input" v-model="user.phone" name="text-input" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="text-input">Gebirtsdatum</label>
                                <div class="col-xl-9">
                                    <input type="text" id="text-input" v-model="user.birthday" name="text-input" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-xl-3"><span>Geschlecht</span></label>
                                <div class="col-xl-9 text-right">
                                    <div class="select-wrapper">
                                        <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.gender">
                                            <option value="m">Mann</option>
                                            <option value="w">Frau</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-xl-3"><span>Essensverträglichkeit</span></label>
                                <div class="col-xl-9 text-right">
                                    <div class="select-wrapper">
                                        <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.diet">
                                            <option value="none">keine unverträglichkeiten</option>
                                            <option value="vegetarian">vegetarisch</option>
                                            <option value="vegan">vegan</option>
                                            <option value="glutenfree">glutenfrei</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">

                    <!-- Datum/Uhrzeit-->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-2"></i> Adresse
                        </div>
                        <div class="card-body">


                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Straße</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.address.street" name="text-input" class="form-control">
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Postleitzahl</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.address.zip" name="text-input" class="form-control">
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Ort / Stadt</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.address.city" name="text-input" class="form-control">
                              </div>
                          </div>

                        </div>
                    </div>

                    <!-- Ort -->
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-1"></i> Anmeldung
                        </div>
                        <div class="card-body">

                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Passwort</label>
                              <div class="col-xl-9">
                                  <input type="password" id="text-input" v-model="user.password" name="text-input" class="form-control">
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
  export default {
    computed: {
      user () {
        return this.$store.getters['user/get'](this.$route.params.userId)
      }
    },
    methods: {
      save () {
        if (this.user.password === '') {
          this.user.password = undefined
        }
        this.$store.dispatch('user/patch', [this.user._id, this.user])
        this.$router.push('/admin/users/' + this.user._id)
      },
      remove () {
        this.$store.dispatch('user/remove', this.user._id)
        this.$router.push('/admin/users/')
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
