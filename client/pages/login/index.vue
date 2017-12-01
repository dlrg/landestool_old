<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-4">
                    <div class="card p-4">
                        <div class="card-body">
                            <h1>Login</h1>
                            <p class="text-muted">Log dich zu deinem Account ein</p>
                            <div class="input-group mb-3">
                                <span class="input-group-addon"><i class="ca ca-email-2"></i></span>
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="input-group mb-4">
                                <span class="input-group-addon"><i class="ca ca-key-1"></i></span>
                                <input type="password" class="form-control" placeholder="Passwort" v-model="password">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary px-4" @click="login">Login</button>
                                </div>
                                <div class="col-6 text-right d-none">
                                    <button type="button"  class="btn btn-link px-0">Passwort vergessen?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                        <div class="card-body text-center">
                            <div>
                                <h2>Jetzt registrieren</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" class="btn btn-primary active mt-3" @click="registrate()">Jetzt Registrieren!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import { mapActions } from 'vuex'
  const data = {
    email: '',
    password: ''
  }
  export default{
    layout: 'login',
    data: () => data,
    methods: {
      ...mapActions({
        authenticate: 'auth/authenticate'
      }),
      login () {
        const { email, password, authenticate } = this
        authenticate({ strategy: 'local', email, password })
          .then(() => this.$router.replace({ path: '/' }))
          .then(() => { this.email = '' })
          .then(() => { this.password = '' })
          .catch(err => {
            console.error(err)
          })
      },
      registrate () {
        this.$router.replace({ path: '/signup' })
      }
    }
  }
</script>
