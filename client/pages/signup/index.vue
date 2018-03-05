<template>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-4">
                  <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                    <div class="card-body text-center">
                      <div>
                        <h2>Jetzt einloggen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type="button" class="btn btn-primary active mt-3" @click="login">Jetzt Einloggen!</button>
                      </div>
                    </div>
                  </div>
                    <div class="card p-4">
                        <div class="card-body">
                            <h1>Registrieren</h1>
                            <p class="text-muted">Registriere dein Account</p>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-person-2"></i></span>
                                <input type="text" class="form-control" placeholder="Vorname" v-model="user.firstname">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-person-add-2"></i></span>
                                <input type="text" class="form-control" placeholder="Nachname" v-model="user.lastname">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="email" class="form-control" placeholder="Email" v-model="user.email">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-key-1"></i></span>
                                <input type="password" class="form-control" placeholder="Passwort" v-model="user.password">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="text" class="form-control" placeholder="Telefon" v-model="user.phone">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="text" class="form-control" placeholder="Geburtstag" v-model="user.birthday">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="text" class="form-control" placeholder="Straße" v-model="user.address.street">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="text" class="form-control" placeholder="Postleitzahl" v-model="user.address.zip">
                            </div>
                            <div class="input-group mb-1">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="text" class="form-control" placeholder="Ort/Stadt" v-model="user.address.city">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary px-4" @click="signup">Registrieren</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
<!--
  <div class="container">
    <form @submit.prevent="signup">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mx-4">
            <div class="card-body p-4">
              <h1>Registrieren</h1>
              <p class="text-muted">Erstelle deinen Benutzer</p>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-person-2"></i></span>
                <input type="text" class="form-control" placeholder="Vorname*" v-model="user.firstname" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-person-2"></i></span>
                <input type="text" class="form-control" placeholder="Nachname*" v-model="user.lastname" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                <input type="email" class="form-control" placeholder="Email*" v-model="user.email" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-lock-close-1"></i></span>
                <input type="password" class="form-control" placeholder="Password*" v-model="user.password" required>
              </div>

               <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-lock-close-1"></i></span>
                <input type="password" class="form-control" placeholder="Password wiederholen*" v-model="passwordConfirm" required>
              </div>

              <div class="input-group mb-3"  v-if="passwordError">
                <span class="input-group-addon"></span>
                <small class="text-danger" v-if="passwordError">Deine Passwörter stimmen nicht überein!</small>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-lock-close-1"></i></span>
                <input type="text" class="form-control" placeholder="Telefon*" v-model="user.phone" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-heart-1"></i></span>
                <no-ssr>
                   <datepicker bootstrap-styling language="de" monday-first v-model="user.birthday"></datepicker>
                </no-ssr>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-heart-1"></i></span>
                <input type="text" class="form-control" placeholder="Straße" v-model="user.address.street">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-heart-1"></i></span>
                <input type="text" class="form-control" placeholder="Postleitzahl" v-model="user.address.zip">
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="ca ca-heart-1"></i></span>
                <input type="text" class="form-control" placeholder="Ort/Stadt" v-model="user.address.city">
              </div>

              <div class="form-group row">
                <div class="input-group mb-3">
                  <label class="col-form-label col-xl-2"><span class="input-group-addon">Geschlecht*</span></label>
                  <div class="col-xl-2"></div>
                  <div class="col-xl-8 text-right">
                    <div class="select-wrapper">
                      <select class="form-control float-left" v-model="user.gender" required>
                        <option value="m">Mann</option>
                        <option value="w">Frau</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <div class="input-group mb-3">
                  <label class="col-form-label col-xl-2"><span class="input-group-addon">Essensverträglichkeit*</span></label>
                  <div class="col-xl-2"></div>
                  <div class="col-xl-8 text-right">
                    <div class="select-wrapper">
                      <select class="form-control float-left" v-model="user.diet" required>
                        <option value="none">keine unverträglichkeiten</option>
                        <option value="vegetarian">vegetarisch</option>
                        <option value="vegan">vegan</option>
                        <option value="glutenfree">glutenfrei</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-block btn-success">Registrieren</button>
              <button class="btn btn-block btn-primary" type="button" @click="login">Schon ein Account? Zur Anmeldung!</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
-->

<section class="container-fluid">
  <div class="animated fadeIn">
      <h1>Registrieren</h1>
      <form @submit.prevent="signup">
          <div class="row">
              <div class="col-lg-6">
                  <!--Stammdaten -->
                  <div class="card">
                      <div class="card-header">
                          <i class="ca ca-anchor"></i> Stammdaten
                      </div>
                      <div class="card-body">
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Vorname*</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.firstname" name="text-input" class="form-control" required>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Nachname*</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.lastname" name="text-input" class="form-control" required>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Email*</label>
                              <div class="col-xl-9">
                                  <input type="email" id="text-input" v-model="user.email" name="text-input" class="form-control" required>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Telefon*</label>
                              <div class="col-xl-9">
                                  <input type="text" id="text-input" v-model="user.phone" name="text-input" class="form-control" required>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-xl-3 col-form-label" for="text-input">Geburtsdatum*</label>
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
                                          <option value="none">keine Unverträglichkeiten</option>
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
                          <label class="col-xl-3 col-form-label" for="text-input">Straße*</label>
                          <div class="col-xl-9">
                              <input type="text" id="text-input" v-model="user.address.street" name="text-input" class="form-control" required>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-xl-3 col-form-label" for="text-input">Postleitzahl*</label>
                          <div class="col-xl-9">
                              <input type="text" id="text-input" v-model="user.address.zip" name="text-input" class="form-control" required>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-xl-3 col-form-label" for="text-input">Ort / Stadt*</label>
                          <div class="col-xl-9">
                              <input type="text" id="text-input" v-model="user.address.city" name="text-input" class="form-control" required>
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
                          <label class="col-xl-3 col-form-label" for="text-input">Passwort*</label>
                          <div class="col-xl-9">
                              <input type="password" id="text-input" v-model="user.password" name="text-input" class="form-control" required>
                          </div>
                      </div>
                      <div class="form-group row">
                          <label class="col-xl-3 col-form-label" for="text-input">Passwort wiederholen*</label>
                          <div class="col-xl-9">
                              <input type="password" id="text-input" v-model="passwordConfirm" name="text-input" class="form-control" required>
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
                              <div class="form-group row">
                                  <label class="col-xl-3 col-form-label" for="selectFormEinsatz">Einsatz*</label>
                                  <div class="col-xl-9">
                                      <div class="select-wrapper">
                                          <select class="form-control  float-left" name="selectFormEinsatz" id="selectFormEinsatz" v-model="user.presence" required>
                                              <option value="ae">Ausweis / Einsetzbar</option>
                                              <option value="ke"> kein Ausweis / Einsetzbar</option>
                                              <option value="an">Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                                              <option value="kn">kein Ausweis / nicht Einsetzbar bzw. anderweitig verplant</option>
                                              <option value="ag">Arbeitsgruppe </option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div class="form-group row" v-if="user.presence=='ag'">
                                  <label class="col-xl-3 col-form-label" for="text-input">Arbeitsgruppe</label>
                                  <div class="col-xl-9">
                                      <div class="select-wrapper">
                                              <select class="form-control  float-left" name="selectFormArbeitsgruppe" id="selectFormArbeitsgruppe" v-model="user.workgroup">
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
                              </div>

                              </div>
                          </div>
                      </div>
                      <div class ="row justify-content-center">
                        <div class ="col-lg-6">
                            <button type="submit" class="btn btn-block btn-success">Registrieren</button>
                            <button class="btn btn-block btn-primary" type="button" @click="login">Schon ein Account? Zur Anmeldung!</button>
                          </div>
                      </div>
      </form>
  </div>
</section>
</template>

<script>
  import datepicker from 'vuejs-datepicker'
  import dateFormatter from '@/filters/date-formatter'
  import { mapActions } from 'vuex'
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
      address: {
        street: '',
        zip: '',
        city: ''
      },
      comment: '',
      division: '',
      workgroup: ''
    },
    passwordConfirm: '',
    passwordError: false
  }
  export default{
    filters: { dateFormatter },
    components: {
      datepicker
    },
    layout: 'login',
    data: () => data,
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
