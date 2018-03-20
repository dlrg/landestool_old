<template>
   <section class="container-fluid">
      <div class="animated fadeIn">
         <div class="row">
            <div class="col-12">
               <h1>Shirt Bestellung</h1>
               <form @submit.prevent="order">
                <div class="card">
                    <div class="card-header">
                      <i class="ca ca-high-heels"></i> Veranstaltungs T-Shirts 2018
                      <button class="btn btn-success btn-sm float-right" type="order">Bestellen</button>
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
                            <label class="col-form-label col-xl-3" for="category"><span>Größe</span></label>
                            <div class="col-xl-9 text-right">
                                <div class="select-wrapper">
                                  <select class="form-control  float-left" name="selectForm" id="category" v-model="user.shirt.size">
                                      <option value="s">S</option>
                                      <option value="m">M</option>
                                      <option value="l">L</option>
                                      <option value="xl">XL</option>
                                      <option value="xxl">XXL</option>
                                      <option v-if="user.shirt.style==='polo'" value="xxxl">XXXL</option>
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
                            <label class="col-form-label col-xl-3" for="count"><span>Anzahl</span></label>
                            <div class="col-xl-9 text-right">
                                <input type="text" v-model="user.shirt.count" name="text-input" id="count" class="form-control" required>
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="t-img" v-if="user.shirt.style==='t' && user.shirt.color==='navy' && user.shirt.sex==='m'">
                                <img src="@/assets/img/1.-T-Shirt-Mockup_Navy.png" class="img-thumbnail"/>
                            </div>
                            <div class="t-img" v-if="user.shirt.style==='t' && user.shirt.color==='black' && user.shirt.sex==='m'">
                                <img src="@/assets/img/2. T-Shirt Mockup.png" class="img-thumbnail"/>
                            </div>
                            <div class="t-img" v-if="user.shirt.style==='t' && user.shirt.color==='green' && user.shirt.sex==='m'">
                                <img src="@/assets/img/3. T-Shirt Mockup.png" class="img-thumbnail"/>
                            </div>
                            <div class="t-img" v-if="user.shirt.style==='t' && user.shirt.color==='fuchsia' && user.shirt.sex==='m'">
                                <img src="@/assets/img/4. T-Shirt Mockup.png" class="img-thumbnail"/>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
               </form>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   export default {
     computed: {
       user () {
         return this.$store.state.auth.user
       }
     },
     methods: {
       order () {
         this.$store.dispatch('user/patch', [this.user._id, this.user])
         this.$router.push('/shirt')
       }
     }
   }
</script>