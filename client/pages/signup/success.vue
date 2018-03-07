<template>
    <div class="container">
        <div class="d-flex justify-content-center mb-2" id="boat">
            <img src="../../assets/img/BOATY.jpg"/>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card-group mb-5">
                    <div class="card p-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <h1>Willkommen an Bord! (☞ﾟヮﾟ)☞</h1>
                            </div>
                            <div class="d-flex justify-content-center">
                                <h3 class="text-muted mt-3 mb-4">Deine Registrierung war erfolgreich!</h3>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-primary px-4" @click="login">Zum Login</button>
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
