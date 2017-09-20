<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-body">
      <side-bar></side-bar>
      <main class="main">
        <breadcrumb :list="list"></breadcrumb>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import SideBar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import AppFooter from '../components/Footer'
export default {
  name: 'main',
  components: {
    AppHeader,
    SideBar,
    Breadcrumb,
    AppFooter
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>

<style>
</style>
