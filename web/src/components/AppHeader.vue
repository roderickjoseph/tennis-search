<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <v-btn
        flat
        to="/">Tennis Search
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
        to="login">Log In
      </v-btn>
      <v-btn
        flat
        to="register">Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'app-header'
}
</script>
<style scoped>

</style>
