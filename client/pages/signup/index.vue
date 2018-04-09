<template>
  <section class="container-fluid">
    <form-wizard @on-complete="signup"
      subtitle="Trage Schritt für Schritt deine Daten ein"
      back-button-text="Zurück"
      next-button-text="Weiter"
      finish-button-text="Registrieren"
      color="#ff5900">
      <h1 slot="title">Registrieren</h1>

      <tab-content title="Stammdaten">
        <div class ="container">
          <div class ="row justify-content-end mb-1">
            <div class ="col-lg-4">
              <button class="btn btn-block btn-primary" type="button" @click="login">Schon ein Account? Zur Anmeldung!</button>
            </div>
          </div>

          <div class="animated fadeIn">
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <!--Stammdaten -->
                  <div class="card">
                    <div class="card-header">
                      <i class="ca ca-anchor"></i> Stammdaten
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
                          <input type="email" id="email" v-model="user.email" name="text-input" class="form-control" required>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="phone">Telefon*</label>
                        <div class="col-xl-9">
                          <input type="text" id="phone" v-model="user.phone" name="text-input" class="form-control" required>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="birthdate">Geburtsdatum*</label>
                        <div class="col-xl-9">
                          <no-ssr>
                            <datepicker bootstrap-styling language="de" monday-first v-model="user.birthday"></datepicker>
                          </no-ssr>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-xl-3"><span>Geschlecht*</span></label>
                        <div class="col-xl-9 text-right">
                          <div class="select-wrapper">
                            <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.gender" required>
                              <option value="m">Mann</option>
                              <option value="w">Frau</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-xl-3"><span>Essensverträglichkeit*</span></label>
                        <div class="col-xl-9 text-right">
                          <div class="select-wrapper">
                            <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.diet" required>
                              <option value="keine Unverträglichkeiten">keine Unverträglichkeiten</option>
                              <option value="vegetarisch">vegetarisch</option>
                              <option value="vegan">vegan</option>
                              <option value="glutenfrei">glutenfrei</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class ="row">
                <div class="col-lg-12">
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
                </div>
              </div>
              <div class ="row">
                <div class="col-lg-12">
                  <!-- Foto -->
                  <div class="card">
                    <div class="card-header">
                      <i class="ca ca-person-2"></i> Profilbild
                    </div>
                    <div class="card-body">
                      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"/>
                    </div>
                  </div>
                </div>
              </div>       
            </form>
          </div>
        </div>
      </tab-content>
      <tab-content title="Organisation">
        <div class="animated fadeIn">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <i class="ca ca-map-pin-1"></i> Organisation
                  </div>
                  <div class="card-body">
                    <div class="form-group row">
                      <label class="col-xl-3 col-form-label" for="text-input">Unterkunft*</label>
                      <div class="col-xl-9">
                        <div class="select-wrapper">
                          <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.housing" required>
                            <option value="zu Hause">zu Hause</option>
                            <option value="im Helferzimmer">im Helferzimmer</option>
                            <option value="Zimmer einer Gliederung">Zimmer einer Gliederung</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-xl-3 col-form-label" for="text-input">Gliederung*</label>
                      <div class="col-xl-9">
                        <div class="select-wrapper">
                          <select class="form-control  float-left" name="selectForm" id="selectForm" v-model="user.division">
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
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header">
                    <i class="ca ca-clock-2"></i> Anwesenheit
                  </div>
                  <div class="card-body">
                    <div class="form-group row">
                      <label class="col-xl-3 col-form-label" for="selectFormEinsatz">Einsatz*</label>
                      <div class="col-xl-9">
                        <div class="select-wrapper">
                          <select class="form-control  float-left" name="selectFormEinsatz" id="selectFormEinsatz" v-model="user.presence" required>
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
                      <label class="col-xl-3 col-form-label" for="text-input">Arbeitsgruppe</label>
                      <div class="col-xl-9">
                        <div class="select-wrapper">
                          <select class="form-control  float-left" name="selectFormArbeitsgruppe" id="selectFormArbeitsgruppe" v-model="user.workgroup">
                            <option value="-">-</option>
                            <option value="AK FLiB">AK FLiB</option>
                            <option value="AK Juga">AK Juga</option>
                            <option value="AK KiGA">AK KiGA</option>
                            <option value="AK Medienredation">AK Medienreaktion</option>
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
                      <label class="col-xl-3 col-form-label" for="presenceDay">Tage*</label>
                      <div class="col-xl-9">  
                        <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayMonday" name="day" v-model="user.presenceDay.monday">
                        <label class="mt-2 mb-0 mr-3" for="subscribeNews">Montag</label>
                        <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayTuesday" name="day" v-model="user.presenceDay.tuesday">
                        <label class="mt-2 mb-0 mr-3" for="subscribeNews">Dienstag</label>    
                        <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayWednesday" name="day" v-model="user.presenceDay.wednesday">
                        <label class="mt-2 mb-0 mr-3" for="subscribeNews">Mittwoch</label>
                        <input class="mt-1 mb-0 mr-1" type="checkbox" id="presenceDayThursday" name="day" v-model="user.presenceDay.thursday">
                        <label class="mt-2 mb-0 mr-3" for="subscribeNews">Donnerstag</label>
                      </div>
                      <label class="col-xl-3 col-form-label" for="presenceDay"></label>
                      <div class="col-xl-9">  
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
      </tab-content>
      <tab-content title="Aufgaben">
        <div class = "container">
          <div class="animated fadeIn">
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <i class="ca ca-map-pin-1"></i> Aufgaben
                    </div>
                    <div class="card-body">
                      <div class="col-xl-3"></div>
                      <div class="col-xl-9">
                        <i class="ca ca-smiley-woops mr-3"></i>
                        <i class="ca ca-smiley-frown-2 mr-3"></i>
                        <i class="ca ca-smiley-poker-face mr-3"></i>
                        <i class="ca ca-smiley-smile-4 mr-3"></i>
                        <i class="ca ca-smiley-smile-1 mr-3"></i>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Fahrdienst</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="carpool0" value="0" v-model="user.assignment.carpool">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="carpool1" value="1" v-model="user.assignment.carpool">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="carpool2" value="2" v-model="user.assignment.carpool">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="carpool3" value="3" v-model="user.assignment.carpool">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="carpool4" value="4" v-model="user.assignment.carpool">       
                        </div>
                        <div class="col-xl-6">
                          <p>	Der Fahrdienst ist die logistische Zentrale des LJTr. Notwendige Materialtransporte und Zubringerdienste von Teilnehmern zu Programmpunkten werden durchgeführt. Wenn Du seit min. zwei Jahren über einen gültigen Führerschein für Pkw verfügst und min. 21 Jahre alt bist, kannst Du beim Fahrdienst mithelfen.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Sanitäter</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="medic0" value="0" v-model="user.assignment.medic">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="medic1" value="1" v-model="user.assignment.medic">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="medic2" value="2" v-model="user.assignment.medic">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="medic3" value="3" v-model="user.assignment.medic">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="medic4" value="4" v-model="user.assignment.medic">       
                        </div>
                        <div class="col-xl-6">
                          <p>Du verfügst über eine gültige (nicht älter als 2 Jahre) San A und/oder B Ausbildung und möchtest Dich am Sanitätsdienst der Veranstaltung beteiligen? Dann melde Dich als Sanitäter an. (Eine Teilnahme am im Seminarheft ausgeschriebenen Vorbereitungswochenende ist gewünscht. Hier kann ggf. eine Auffrischung der San-Ausbildung erfolgen.)
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Haussicherheit</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="homeSecurity0" value="0" v-model="user.assignment.homeSecurity">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="homeSecurity1" value="1" v-model="user.assignment.homeSecurity">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="homeSecurity2" value="2" v-model="user.assignment.homeSecurity">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="homeSecurity3" value="3" v-model="user.assignment.homeSecurity">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="homeSecurity4" value="4" v-model="user.assignment.homeSecurity">       
                        </div>
                        <div class="col-xl-6">
                          <p>Du bist für die Sicherheit auf der Veranstaltung verantwortlich. Es wird dafür gesorgt, dass keine Fremden unsere Veranstaltung stören können und wichtige Vorsichtsmaßnahmen, wie z. B. der geregelte Einlass zum Essen und der Abendveranstaltung, umgesetzt werden. Wenn Du mind. 18 Jahre alt bist und verantwortungsbewußt handelst, dann mach mit bei der HausSicherheit!		
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Café Kontakt</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="cafe0" value="0" v-model="user.assignment.cafe">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="cafe1" value="1" v-model="user.assignment.cafe">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="cafe2" value="2" v-model="user.assignment.cafe">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="cafe3" value="3" v-model="user.assignment.cafe">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="cafe4" value="4" v-model="user.assignment.cafe">       
                        </div>
                        <div class="col-xl-6">
                          <p>Willkommen im sozialen Mittelpunkt des LJTr. Hier wird geklönt, sich ausgetauscht oder einfach nur mal relaxt. Als CafeKontakler versorgst Du die Gäste mit Kaffee, Saft, Waffeln, Eis,… Wenn Du gerne backst oder im Verkauf helfen möchtest und min. 16 Jahre alt bist, dann ist das Cafe Kontakt der richtige Ort für Dich. (Eine Teilnahme am im Seminarheft ausgeschriebenen Vorbereitungswochenende ist gewünscht.)
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Helfer</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="assistant0" value="0" v-model="user.assignment.assistant">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="assistant1" value="1" v-model="user.assignment.assistant">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="assistant2" value="2" v-model="user.assignment.assistant">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="assistant3" value="3" v-model="user.assignment.assistant">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="assistant4" value="4" v-model="user.assignment.assistant">       
                        </div>
                        <div class="col-xl-6">
                          <p>Als Helfer bist Du in allen anderen wichtigen Bereichen des LJTr tätig. Hier kannst Du selber wählen, ob Du in einem Bereich während der ganzen Veranstaltung helfen möchtest oder zwischendurch wechselst. Wir werden versuchen Deine Wünsche so gut wie möglich zu erfüllen.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Rödeltruppe Wettkampf</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="contest0" value="0" v-model="user.assignment.contest">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="contest1" value="1" v-model="user.assignment.contest">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="contest2" value="2" v-model="user.assignment.contest">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="contest3" value="3" v-model="user.assignment.contest">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="contest4" value="4" v-model="user.assignment.contest">       
                        </div>
                        <div class="col-xl-6">
                          <p>In der Rödeltruppe Schwimmhalle bist Du zuständig z.B. für den Puppentransport, Auf- und Abbau der Hindernisse und sonstige Logistik in der Halle. Du solltest über gute Kondition, Badesachen und eigene Schwimmflossen verfügen.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Verpflegung</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="catering0" value="0" v-model="user.assignment.catering">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="catering1" value="1" v-model="user.assignment.catering">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="catering2" value="2" v-model="user.assignment.catering">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="catering3" value="3" v-model="user.assignment.catering">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="catering4" value="4" v-model="user.assignment.catering">       
                        </div>
                        <div class="col-xl-6">
                          <p>Die Verpflegung füllt Gläser und Teller, spült Becher und transportiert Geschirr und Besteck von der Küche zur Ausgabe und zurück. Ohne Deinen Einsatz in diesem Bereich, würden alle hungrig bleiben.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Rödeltruppe Schule</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="school0" value="0" v-model="user.assignment.school">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="school1" value="1" v-model="user.assignment.school">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="school2" value="2" v-model="user.assignment.school">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="school3" value="3" v-model="user.assignment.school">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="school4" value="4" v-model="user.assignment.school">       
                        </div>
                        <div class="col-xl-6">
                          <p>Die Rödeltruppe Schule erledigt alle spontanen und notwendigen Tätigkeiten. Dies können Auf- und Umbauarbeiten, Beschilderungen anbringen, kurzfristige Vertretungen, die Abnahme von Klassenräumen usw. sein.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="carpool">Programmbetreuung</label>
                        <div class="col-xl-3">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="programSupport0" value="0" v-model="user.assignment.programSupport">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="programSupport1" value="1" v-model="user.assignment.programSupport">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="programSupport2" value="2" v-model="user.assignment.programSupport">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="programSupport3" value="3" v-model="user.assignment.programSupport">
                          <input class="mt-1 mb-0 mr-4" type="radio" id="programSupport4" value="4" v-model="user.assignment.programSupport">       
                        </div>
                        <div class="col-xl-6">
                          <p>Einige Programmpunkte werden von Helfern betreut. So müssen z. B. Spielgeräte beaufsichtigt, Fahrten zum Museum begleitet und Teilnehmer bei bestimmten Angeboten unterstützt werden.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <i class="ca ca-map-pin-1"></i> Einverständis
                    </div>
                    <div class="card-body">
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="agreement">Einverständnis*</label>
                        <input class="mt-2 mb-0 mr-4" type="checkbox" id="agreement" required>
                        <div class="col-xl-7 mt-1">
                          <p>
                            Ich melde mich hiermit als Helfer zum Landesjugendtreffen 2018 an. <br>
                            <strong>Bei Minderjährigen:</strong> Meine Eltern/gesetzlichen Vertreter haben zugestimmt. Das schriftliche Einverständnis meiner Eltern/gesetzlichen Vertreter bringe ich zur Veranstaltung mit. Das Formular erhalte ich mit meiner Anmeldemail zugesendet.
                          </p>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-xl-3 col-form-label" for="agb">Helfer-AGB*</label>
                        <input class="mt-2 mb-0 mr-4" type="checkbox" id="agb" required>
                        <div class="col-xl-7 mt-1">
                          <p>
                            Auszug aus den Allgemeinen Geschäftsbedingungen (Teilnahmebedingungen): <br>
                            § 5 – Teilnahmegebühr <br>
                            (1) Für die Teilnahme an der Veranstaltung ist von jedem Teilnehmenden die Teilnahmegebühr gemäß der jeweils gültigen Ausschreibung im Voraus zu zahlen. <br>
                            (2) Helfende sind von der Zahlung des Teilnahmebeitrags befreit, sofern diese für die gesamte Dauer der Veranstaltung als Helfende zur Verfügung steht oder die Unterstützung im Rahmen der Vor- oder/und Nachbereitung erheblich war. <br>
                            (3) Für Helfende wird der volle Teilnahmebeitrag fällig, wenn diese ohne Einhaltung der Abmeldefristen und –voraussetzungen nicht zur Veranstaltung anreisen, vorzeitig abreisen oder ihre Arbeitskraft nicht im vereinbarten Umfang zur Verfügung stellen und durch die verbindliche Anmeldung Kosten entstanden sind. Teilnehmenden Gliederungen wird dieser in Form der Strafgebühr berechnet. <br>
                            (4) Der Landesjugendvorstand ist berechtigt auch höhere Kosten, die nachzuweisen sind, in Rechnung zu stellen. <br>
                            <br>
                            Die vollständigen Helfer-AGB kannst du <a href="https://sh.dlrg.de/dlrg-jugend/veranstaltungen/landesmeisterschaften-mit-dem-landesjugendtreffen/agb.html" target="_blank" style="text-decoration: underline;">hier</a> einsehen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Passwort -->
              <div class="card">
                <div class="card-header">
                  <i class="ca ca-map-pin-1"></i> Anmeldung
                </div>
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-xl-3 col-form-label" for="password">Passwort*</label>
                    <div class="col-xl-9">
                      <vue-password id="password" v-model="user.password" name="text-input" class="form-control" required>
                      </vue-password>
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
            </form>
          </div>
        </div>
      </tab-content>
    </form-wizard>
  </section>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import dateFormatter from '@/filters/date-formatter'
import { mapActions } from 'vuex'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VuePassword from 'vue-password'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

const data = {
  user: {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    birthday: '',
    gender: 'm',
    diet: 'none',
    presence: '',
    presenceDay: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    assignment: {
      carpool: null,
      medic: null,
      homeSecurity: null,
      café: null,
      assistant: null,
      contest: null,
      catering: null,
      school: null,
      programSupport: null
    },
    time: {
      day: '',
      start: null,
      end: null
    },
    role: {
      name: ''
    },
    address: {
      street: '',
      zip: '',
      city: ''
    },
    shirt: {
      style: '',
      count: '0',
      color: '',
      sex: '',
      size: ''
    },
    comment: '',
    division: '',
    workgroup: ''
  },
  passwordConfirm: '',
  passwordError: false
}
export default {
  filters: { dateFormatter },
  components: {
    vueDropzone: vue2Dropzone,
    datepicker,
    FormWizard,
    TabContent,
    VuePassword
  },
  layout: 'login',
  data () {
    return {
      ...data,
      dropzoneOptions: {
        url: 'upload',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' }
      }
    }
  },
  methods: {
    ...mapActions({
      createUser: 'user/create'
    }),
    async signup () {
      if (this.user.password !== this.passwordConfirm) {
        this.passwordError = true
        return
      }
      await this.$store.dispatch('user/create', this.user)
      this.$router.push({ path: 'signup/success' })
    },
    login () {
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>
