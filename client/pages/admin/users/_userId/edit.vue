<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Benutzer bearbeiten</h1>
            <form @submit.prevent="save">
                <div class="row">
                    <div class="col-lg-6">
                        <!--Stammdaten -->
                        <div class="card">
                            <div class="card-header">
                                <i class="ca ca-anchor"></i> Stammdaten
                                <button class="btn btn-success btn-sm float-right" type="submit">Speichern</button>
                                <button class="btn btn-danger btn-sm float-right mr-1" @click="remove">Löschen</button>
                            </div>
                            <div class="card-body">
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="firstname">Vorname*</label>
                                    <div class="col-xl-9">
                                        <input type="text" id="firstname" v-model="user.firstname" name="text-input" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="lastname">Nachname*</label>
                                    <div class="col-xl-9">
                                        <input type="text" id="lastname" v-model="user.lastname" name="text-input" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="email">Email*</label>
                                    <div class="col-xl-9">
                                        <input type="text" id="email" v-model="user.email" name="text-input" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="telephone">Telefon*</label>
                                    <div class="col-xl-9">
                                        <input type="text" id="telephone" v-model="user.phone" name="text-input" class="form-control" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-xl-3 col-form-label" for="birthdate">Geburtsdatum*</label>
                                    <div class="col-xl-9">
                                        <no-ssr>
                                            <datepicker bootstrap-styling language="de" monday-first v-model="user.birthday" id="birthdate"></datepicker>
                                        </no-ssr>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-form-label col-xl-3" for="gender"><span>Geschlecht*</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="gender" v-model="user.gender" required>
                                                <option value="m">Mann</option>
                                                <option value="w">Frau</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-form-label col-xl-3" for="diet"><span>Essensverträglichkeit*</span></label>
                                    <div class="col-xl-9 text-right">
                                        <div class="select-wrapper">
                                            <select class="form-control  float-left" name="selectForm" id="diet" v-model="user.diet" required>
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
                                <label class="col-xl-3 col-form-label" for="street">Straße*</label>
                                <div class="col-xl-9">
                                    <input type="text" id="street" v-model="user.address.street" name="text-input" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="zip">Postleitzahl*</label>
                                <div class="col-xl-9">
                                    <input type="text" id="zip" v-model="user.address.zip" name="text-input" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="city">Ort / Stadt*</label>
                                <div class="col-xl-9">
                                    <input type="text" id="city" v-model="user.address.city" name="text-input" class="form-control" required>
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
                                <label class="col-xl-3 col-form-label" for="password">Passwort ändern</label>
                                <div class="col-xl-9">
                                    <input type="password" id="password" v-model="user.password" name="text-input" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-xl-3 col-form-label" for="passwordConfirm">Passwort wiederholen*</label>
                                <div class="col-xl-9">
                                    <input type="password" id="passwordConfirm" v-model="passwordConfirm" name="text-input" class="form-control" required>
                                    <small class="text-danger" v-if="passwordError">Deine Passwörter stimmen nicht überein! ¯\_(ツ)_/¯</small>
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
                                        <i class="ca ca-map-pin-1"></i> Organisation
                                    </div>
                                    <div class="card-body">

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-form-label" for="hpusing">Unterkunft*</label>
                                        <div class="col-xl-9">
                                            <div class="select-wrapper">
                                                    <select class="form-control  float-left" name="selectForm" id="housing" v-model="user.housing" required>
                                                        <option value="zu Hause">zu Hause</option>
                                                        <option value="im Helferzimmer">im Helferzimmer</option>
                                                        <option value="Zimmer einer Gliederung">Zimmer einer Gliederung</option>
                                                    </select>
                                                </div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-form-label" for="division">Gliederung*</label>
                                        <div class="col-xl-9">
                                            <div class="select-wrapper">
                                                    <select class="form-control  float-left" name="selectForm" id="division" v-model="user.division">
                                                        <option value=" ">--keine--</option>
                                                        <option value="89">DLRG Ahrensburg e.V.</option>
                                                        <option value="26">DLRG Amt Süderlügum e.V.</option>
                                                        <option value="56">DLRG Aukrug e.V.</option>
                                                        <option value="80">DLRG Bad Bramstedt e.V.</option>
                                                        <option value="92">DLRG Bad Oldesloe e.V.</option>
                                                        <option value="27">DLRG Bad Schwartau e.V.</option>
                                                        <option value="81">DLRG Bad Segeberg e.V.</option>
                                                        <option value="93">DLRG Bargteheide e.V.</option>
                                                        <option value="41">DLRG Barmstedt e.V.</option>
                                                        <option value="90">DLRG Barsbüttel e.V.</option>
                                                        <option value="9">DLRG Behlendorf e.V.</option>
                                                        <option value="10">DLRG Büchen e.V.</option>
                                                        <option value="57">DLRG Büdelsdorf e.V.</option>
                                                        <option value="1">DLRG Burg e.V.</option>
                                                        <option value="2">DLRG Büsum-Wesselburen e.V.</option>
                                                        <option value="28">DLRG Dahme e.V.</option>
                                                        <option value="58">DLRG Eckernförde e.V.</option>
                                                        <option value="112">DLRG Ellerau e.V.</option>
                                                        <option value="42">DLRG Elmshorn e.V.</option>
                                                        <option value="29">DLRG Eutin e.V.</option>
                                                        <option value="30">DLRG Fehmarn e.V.</option>
                                                        <option value="59">DLRG Felde e.V.</option>
                                                        <option value="99">DLRG Flensburg e.V.</option>
                                                        <option value="60">DLRG Fockbek e.V.</option>
                                                        <option value="67">DLRG GGH e.V.</option>
                                                        <option value="68">DLRG Glücksburg e.V.</option>
                                                        <option value="85">DLRG Glückstadt e.V.</option>
                                                        <option value="31">DLRG Grömitz e.V.</option>
                                                        <option value="11">DLRG Groß Sarau e.V.</option>
                                                        <option value="32">DLRG Großenbrode e.V.</option>
                                                        <option value="33">DLRG Haffkrug-Scharbeutz e.V.</option>
                                                        <option value="43">DLRG Halstenbek-Rellingen-Schenefeld e.V.</option>
                                                        <option value="69">DLRG Harrislee e.V.</option>
                                                        <option value="3">DLRG Heide e.V.</option>
                                                        <option value="34">DLRG Heiligenhafen e.V.</option>
                                                        <option value="44">DLRG Helgoland e.V.</option>
                                                        <option value="4">DLRG Hemmingstedt e.V.</option>
                                                        <option value="61">DLRG Hohn e.V.</option>
                                                        <option value="70">DLRG Holmarksee e.V.</option>
                                                        <option value="45">DLRG Hörnerkirchen e.V.</option>
                                                        <option value="86">DLRG Horst e.V.</option>
                                                        <option value="18">DLRG Husum e.V.</option>
                                                        <option value="35">DLRG Hutzfeld-Bosau e.V.</option>
                                                        <option value="19">DLRG Insel Föhr e.V.</option>
                                                        <option value="87">DLRG Itzehoe e.V.</option>
                                                        <option value="82">DLRG Itzstedt e.V.</option>
                                                        <option value="71">DLRG Jarplund-Weding e.V.</option>
                                                        <option value="83">DLRG Kaltenkirchen e.V.</option>
                                                        <option value="72">DLRG Kappeln e.V.</option>
                                                        <option value="36">DLRG Kellenhusen e.V.</option>
                                                        <option value="95">DLRG Kiel e.V.</option>
                                                        <option value="74">DLRG Knuffingen e.V.</option>
                                                        <option value="88">DLRG Krempe e.V.</option>
                                                        <option value="62">DLRG Kronshagen e.V.</option>
                                                        <option value="73">DLRG Kropp e.V.</option>
                                                        <option value="20">DLRG Ladelund e.V.</option>
                                                        <option value="37">DLRG Lensahn e.V.</option>
                                                        <option value="96">DLRG Lübeck e.V.</option>
                                                        <option value="38">DLRG Lübecker Bucht e.V.</option>
                                                        <option value="117">DLRG Lunden e.V.</option>
                                                        <option value="50">DLRG Lütjenburg e.V.</option>
                                                        <option value="39">DLRG Malente e.V.</option>
                                                        <option value="5">DLRG Meldorf e.V.</option>
                                                        <option value="12">DLRG Mölln e.V.</option>
                                                        <option value="97">DLRG Neumünster e.V.</option>
                                                        <option value="40">DLRG Neustadt in Holstein e.V.</option>
                                                        <option value="22">DLRG Niebüll e.V.</option>
                                                        <option value="98">DLRG Norderstedt e.V.</option>
                                                        <option value="6">DLRG Nordhastedt e.V.</option>
                                                        <option value="75">DLRG Norgaardholz e.V.</option>
                                                        <option value="63">DLRG Nortorf e.V.</option>
                                                        <option value="64">DLRG Nübbel e.V.</option>
                                                        <option value="46">DLRG Pinneberg e.V.</option>
                                                        <option value="51">DLRG Plön e.V.</option>
                                                        <option value="13">DLRG Pogeez-Holstendorf e.V.</option>
                                                        <option value="52">DLRG Preetz e.V.</option>
                                                        <option value="47">DLRG Quickborn e.V.</option>
                                                        <option value="14">DLRG Ratzeburg e.V.</option>
                                                        <option value="48">DLRG Region Uetersen e.V.</option>
                                                        <option value="91">DLRG Reinfeld e.V.</option>
                                                        <option value="65">DLRG Rendsburg e.V.</option>
                                                        <option value="15">DLRG Sachsenwald e.V.</option>
                                                        <option value="66">DLRG Schacht-Audorf e.V.</option>
                                                        <option value="76">DLRG Schleswig e.V.</option>
                                                        <option value="54">DLRG Schönberg e.V.</option>
                                                        <option value="16">DLRG Schwarzenbek e.V.</option>
                                                        <option value="53">DLRG Schwentinental e.V.</option>
                                                        <option value="55">DLRG Selent e.V.</option>
                                                        <option value="77">DLRG Sieverstedt e.V.</option>
                                                        <option value="24">DLRG St. Peter-Ording e.V.</option>
                                                        <option value="23">DLRG Stadum e.V.</option>
                                                        <option value="17">DLRG Steinhorst e.V.</option>
                                                        <option value="121">DLRG Stormarn e.V.</option>
                                                        <option value="7">DLRG Südermarsch e.V.</option>
                                                        <option value="21">DLRG Sylt e.V.</option>
                                                        <option value="78">DLRG Tarp e.V.</option>
                                                        <option value="25">DLRG Tönning/Eiderstedt e.V.</option>
                                                        <option value="84">DLRG Wahlstedt e.V.</option>
                                                        <option value="79" selected="">DLRG Waldeck-Schafflund e.V.</option>
                                                        <option value="49">DLRG Wedel e.V.</option>
                                                        <option value="8">DLRG Wrohm e.V.</option>
                                                    </select>
                                                </div>
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
                       

                         
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-header">
                                        <i class="ca ca-map-pin-1"></i> Anwesenheit
                                    </div>
                                    <div class="card-body">
                                         <div class="form-group row">
                                        <label class="col-xl-3 col-form-label" for="presence">Einsatz*</label>
                                        <div class="col-xl-9">
                                            <div class="select-wrapper">
                                                <select class="form-control  float-left" name="selectFormEinsatz" id="presence" v-model="user.presence" required>
                                                    <option value="Ausweis / Einsetzbar">Ausweis / Einsetzbar</option>
                                                    <option value="kein Ausweis / Einsetzbar">kein Ausweis / Einsetzbar</option>
                                                    <option value="Ausweis / nicht Einsetzbar bzw. anderweitig verplant">Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                                                    <option value="kein Ausweis / nicht Einsetzbar bzw. anderweitig verplant">kein Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                                                    <option value="Arbeitsgruppe">Arbeitsgruppe </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row" v-if="user.presence=='Arbeitsgruppe'">
                                        <label class="col-xl-3 col-form-label" for="workgroup">Arbeitsgruppe</label>
                                        <div class="col-xl-9">
                                            <div class="select-wrapper">
                                                    <select class="form-control  float-left" name="selectFormArbeitsgruppe" id="workgroup" v-model="user.workgroup">
                                                        <option value="-">-</option>
                                                        <option value="AK FLiB">AK FLiB</option>
                                                        <option value="AK Juga">AK Juga</option>
                                                        <option value="AK KiGA">AK KiGA</option>
                                                        <option value="AK OekA">AK OekA</option>
                                                        <option value="AK Rettungssport">AK Rettungssport</option>
                                                        <option value="AK Uwe P.">AK Uwe P.</option>
                                                        <option value="Ausrichter">Ausrichter</option>
                                                        <option value="Bier- und Weinstube">Bier- und Weinstube</option>
                                                        <option value="Café Kontakt">Café Kontakt</option>
                                                        <option value="Ehrengäste">Ehrengäste</option>
                                                        <option value="externer Mitarbeiter">externer Mitarbeiter</option>
                                                        <option value="Funkleit/Fahrdienst">Funkleit/Fahrdienst</option>
                                                        <option value="HaSi">Haussicherheit</option>
                                                        <option value="Helferbüro">Helferbüro</option>
                                                        <option value="PG Landes">PG Landes</option>
                                                        <option value="Rödeltruppe">Rödeltruppe</option>
                                                        <option value="Sanitäter">Sanitäter</option>
                                                    </select>
                                                </div>
                                        </div>
                                    </div>

                                  <div class="form-group row">
                                        <label class="col-xl-3 col-form-label" for="presenceDay">Tage</label>
                                        <div class="col-xl-9">   
                                              <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayWednesday" name="day" v-model="user.presenceDay.wednesday">
                                           <label class="mt-2 mb-0 mr-3" for="subscribeNews">Mittwoch</label>
                                           <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayThursday" name="day" v-model="user.presenceDay.thursday">
                                           <label class="mt-2 mb-0 mr-3" for="subscribeNews">Donnerstag</label>
                                           <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayFriday" name="day" v-model="user.presenceDay.friday">
                                           <label class="mt-2 mb-0 mr-3" for="subscribeNews">Freitag</label>
                                           <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDaySaturday" name="day" v-model="user.presenceDay.saturday">
                                           <label class="mt-2 mb-0 mr-3" for="subscribeNews">Samstag</label>
                                           <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDaySunday" name="day" v-model="user.presenceDay.sunday">
                                           <label class="mt-2 mb-0 mr-3" for="subscribeNews">Sonntag</label>
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
  import dateFormatter from '@/filters/date-formatter'
  import datepicker from 'vuejs-datepicker'

  export default {
    filters: { dateFormatter },
    data () {
      return {
        passwordConfirm: '',
        passwordError: false
      }
    },
    computed: {
      user () {
        return this.$store.getters['user/get'](this.$route.params.userId)
      }
    },
    components: {
      datepicker
    },
    methods: {
      save () {
        if (this.user.password !== this.passwordConfirm) {
          this.passwordError = true
          return
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
