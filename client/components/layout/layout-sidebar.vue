<template>
    <div class="sidebar" v-bind:class="{sidebarClosed: !open}">
        <nav class="sidebar-nav">
            <ul class="nav">
                <li class="divider"></li>
                <li class="nav-item d-none">
                    <nuxt-link class="nav-link" to="/" target="_top"><i class="ca ca-home-1"></i>Dashboard</nuxt-link>
                </li>
                 <li class="nav-item">
                    <nuxt-link class="nav-link" :to="`/admin/users/${$store.state.auth.user._id}`" target="_top"><i class="ca ca-person-2"></i>Profil</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/program/programOverview" target="_top"><i class="ca ca-anchor"></i>Programm</nuxt-link>
                </li>
                <li class="divider"></li>

                 <li class="nav-item">
                    <nuxt-link class="nav-link" to="/shirt" target="_top"><i class="ca ca-high-heels"></i>Shirt Bestellung</nuxt-link>
                </li>
                <li class="divider"></li>
                <!--div v-if="user.role.name.includes('admin')"-->
                    <li class="nav-title text-center">
                        <span>Administration</span>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/users" target="_top"><i class="ca ca-account-group-1"></i>Benutzerverwaltung</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/program" target="_top"><i class="ca ca-anchor"></i>Programmverwaltung</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" :to="`/admin/users/${$store.state.auth.user._id}/staff`" target="_top"><i class="ca ca-account-group-1"></i>Mitarbeiter</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/shirt/list" target="_top"><i class="ca ca-shopping-cart-2"></i>Bestellliste</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/users/roles" target="_top"><i class="ca ca-alarm"></i>Rollenverteilung</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/admin/users/identification" target="_top"><i class="ca ca-alarm"></i>Ausweise</nuxt-link>
                    </li>
                <!--/div-->
                <li class="nav-item px-3 pt-5 d-none">
                    <div class="text-uppercase mb-1">
                        <small><b>Fortschritt</b></small>
                    </div>
                    <div class="progress progress-xs">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="text-muted">42 Felder 8/28 Seiten</small>
                </li>

            </ul>
        </nav>
        <button class="sidebar-minimizer brand-minimize d-none" type="button"></button>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        user: 'user/list'
      }),
      user () {
        return this.$store.state.auth.user
      }
    },
    data () {
      return {
        admin: false
      }
    },
    name: 'layout-sidebar',
    props: ['open'],
    methods: {
      toggleOpen (elem) {
        if (!elem.classList.contains('open')) {
          this.$router.push('/steuer/' + this.$route.params.taxReturnId + '/data-overview')
        }
        elem.classList.toggle('open')
      },
      async fetch ({ store }) {
        await store.dispatch('user/find')
      },
      checkAdmin () {
        if (this.user.filter(e => e.role.name === 'admin').length > 0) {
          this.admin = true
        }
      }
    }
  }
</script>
