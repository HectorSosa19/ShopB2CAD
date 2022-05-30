<template>
  <div id="app">
    <nav>
    <router-link to ="/Home"></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
    methods: {
    async getUser() {
      const response = await UserService.getLoggedInUser();
      this.$store.dispatch("user", response.data);
    }
    }
}
</script>

<style>


</style>
