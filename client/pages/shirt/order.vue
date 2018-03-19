<template>
   <section class="container-fluid">
      <div class="animated fadeIn">
         <div class="row">
            <div class="col-12">
               <h1>Shirt Bestellung</h1>
                <div class="card">
                  <div class="card-header">
                    <i class="ca ca-high-heels"></i> Veranstaltungs T-Shirts 2018
                  </div>  
                     <div class="card-body">
                       <div class="form-group row">
                        <div class="col-xl-6">
                          <label class="col-form-label col-xl-3" for="category"><span>Style</span></label>
                            <div class="col-xl-9 text-right">
                              <div class="select-wrapper">
                                <select class="form-control  float-left" name="selectForm" id="category" v-model="user.shirt.style">
                                  <option value="t">T-Shirt</option>
                                  <option value="pulli">Kapuzenpullover</option>
                                  <option value="polo">Poloshirt</option>
                              </select>
                              </div>
                            </div>
                            <div v-if="user.shirt.style==='t'">
                             <label class="col-form-label col-xl-3" for="category"><span>Geschlecht</span></label>
                            <div class="col-xl-9 text-right">
                              <div class="select-wrapper">
                                <select class="form-control  float-left" name="selectForm" id="category" v-model="user.shirt.sex">
                                  <option value="m">männlich</option>
                                  <option value="w">weiblich</option>
                              </select>
                              </div>
                            </div>
                            </div>
                            <div v-if="user.shirt.style==='t'">
                             <label class="col-form-label col-xl-3" for="category"><span>Farbe</span></label>
                            <div class="col-xl-9 text-right">
                              <div class="select-wrapper">
                                <select class="form-control  float-left" name="selectForm" id="category" v-model="user.shirt.color">
                                  <option value="black">schwarz</option>
                                  <option value="navy">navy</option>
                                  <option v-if="user.shirt.style==='t'" value="fuchsia">fuchsia</option>
                                  <option v-if="user.shirt.style==='t'" value="green">waldgrün</option>
                              </select>
                              </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                          <div class="form-group row" v-if="shirt.style==='t' && shirt.color==='blue' && shirt.sex==='m'">
                             <img src="@/assets/img/TShirtHerren.jpg" class="img-thumbnail" height="200px"/>
                          </div>
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
        return this.$store.getters['user/get'](this.user)
      }
    },
    methods: {
      save () {
        this.$store.dispatch('user/patch', [this.user._id, this.user])
        this.$router.push('/shirt')
      }
    }
  }
</script>