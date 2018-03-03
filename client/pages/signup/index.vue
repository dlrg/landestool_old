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

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mx-4">
          <div class="card-body p-4">
            <h1>Registrieren</h1>
            <p class="text-muted">Erstelle dein Benutzer</p>
            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-person-2"></i></span>
              <input type="text" class="form-control" placeholder="Vorname" v-model="user.firstname">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-person-2"></i></span>
              <input type="text" class="form-control" placeholder="Nachname" v-model="user.lastname">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
              <input type="text" class="form-control" placeholder="Email" v-model="user.email">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-lock-close-1"></i></span>
              <input type="password" class="form-control" placeholder="Password" v-model="user.password">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-lock-close-1"></i></span>
              <input type="text" class="form-control" placeholder="Telefon" v-model="user.phone">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon"><i class="ca ca-heart-1"></i></span>
              <input type="text" class="form-control" placeholder="Geburtstag" v-model="user.birthday">
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

            <div class="input-group mb-3">
              <span class="input-group-addon">Geschlecht</span>
              <select class="form-control" v-model="user.gender">
                <option value="m">Mann</option>
                <option value="w">Frau</option>
              </select>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-addon">Essensverträglichkeit</span>
              <select class="form-control" v-model="user.diet">
                <option value="none">keine unverträglichkeiten</option>
                <option value="vegetarian">vegetarisch</option>
                <option value="vegan">vegan</option>
                <option value="glutenfree">glutenfrei</option>
              </select>
            </div>

            <button type="button" class="btn btn-block btn-success" @click="signup">Registrieren</button>
            <button class="btn btn-block btn-primary" type="button" @click="login">Schon ein Account? Zur Anmeldung!</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
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
    }
  }
  export default{
    layout: 'login',
    data: () => data,
    methods: {
      ...mapActions({
        createUser: 'user/create'
      }),
      signup () {
        this.createUser(this.user)
          .then(res => console.log(res))
          .then(res => this.$router.replace({ path: '/login' }))
          .catch(err => {
            console.error(err)
          })
      },
      login () {
        this.$router.replace({ path: '/login' })
      }
    }
  }
</script>
