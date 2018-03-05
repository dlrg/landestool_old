<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>User bearbeiten</h1>

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
                                    <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'none'">Keine unverträglichkeiten</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'vegetarian'">Vegetarisch</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'vegan'">Vegan</p>
                                    <p class="form-control-static mt-2 mb-0" v-if="user.diet === 'glutenfree'">Glutenfrei</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">

                    <!-- Datum/Uhrzeit-->
                    <div class="card">
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

                    
                
                     <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-2"></i>Anwesenheit
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
            </div>
             <div class="row">
                <div class="col-lg-6">
                     <div class="card">
                        <div class="card-header">
                            <i class="ca ca-map-pin-2"></i>Organisation
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
