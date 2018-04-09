<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
          <form @submit.prevent="save">
            <div class="row">
              <div class="col-12">
                  <h1>Rollen</h1>
                  <div class="card">
                    <div class="card-header">
                        <i class="ca ca-anchor"></i>Rollenverteilung für {{ $store.state.auth.user.firstname }} {{ $store.state.auth.user.lastname }}
                        <button class="btn btn-sm btn-info c-white float-right" type="submit">Speichern</button>
                    </div>
                    <div class="card-body">
                      <div class="form-group row" v-for="(item, index) in user.role" :key="'roles'+index">
                          <div class="select-wrapper col-8 mb-3">
                              <select class="form-control  float-left" id="roleName" v-model="item.name">
                                <option value="admin">Admin</option>
                                <option value="user">Helfer</option>
                                <option value="leader">Leiter</option>
                              </select>
                          </div>
                          <div class="delete-button col-xl-1 offset-xl-3">
                            <button type="button" class="btn btn-sm btn-danger float-right" @click.stop="remove(index)">Löschen</button>
                          </div>
                      </div>
                      <button v-if="!user.role || user.role.length < 3" type="button" class="btn btn-sm btn-success ml-1" v-on:click="addForm()">Rolle hinzufügen</button>
                    </div>
                  </div>
              </div>
            </div>
          </form>  
        </div>
    </section>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters['user/get'](this.$route.params.userId)
      }
    },
    methods: {
      save () {
        this.$store.dispatch('user/patch', [this.user._id, this.user])
        this.$router.push('/admin/users/roles')
      },
      remove (index) {
        this.user.role.splice(index, 1)
      },
      addForm () {
        if (!this.user.role) this.$set(this.user, 'role', [])
        if (this.user.role.length < 3) {
          this.user.role.push({})
        }
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
