<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card-group mb-5">
                    <div class="card p-5">
                        <div class="card-body">
                            <h1>Schön, dass du dabei bist (☞ﾟヮﾟ)☞</h1>
                            <p class="text-muted mt-3 mb-3">Deine Registrierung war erfolgreich!</p>
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary px-4" @click="login">Zum Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  export default{
    layout: 'login',
    methods: {
      login () {
        this.$router.replace({ path: '/login' })
      }
    }
  }
</script>
