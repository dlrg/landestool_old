<template>
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
</template>