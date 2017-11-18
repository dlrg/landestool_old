<template>
  <div class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
    <layout-header @toggleSidebar="toggleSidebar = !toggleSidebar"></layout-header>
    <div class="app-body">

      <layout-sidebar :open="toggleSidebar"></layout-sidebar>
      <main class="main" v-bind:class="{'ml-0': !toggleSidebar}">

        <layout-breadcrumb></layout-breadcrumb>
        <nuxt/>
      </main>
    </div>
    <layout-footer v-bind:class="{'ml-0': !toggleSidebar}"></layout-footer>
  </div>
</template>

<script>
  import Header from '~/components/layout/layout-header.vue'
  import Sidebar from '~/components/layout/layout-sidebar.vue'
  import Breadcrumb from '~/components/layout/layout-breadcrumb.vue'
  import Footer from '~/components/layout/layout-footer.vue'
  export default {
    components: {
      'layout-header': Header,
      'layout-sidebar': Sidebar,
      'layout-breadcrumb': Breadcrumb,
      'layout-footer': Footer
    },
    data () {
      return {
        toggleSidebar: true
      }
    }
  }
</script>
