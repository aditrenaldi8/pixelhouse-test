<template>
  <v-app id="app">
    <div>
      <v-app-bar
        color="rgb(240, 133, 25)"
        dark
      >
        <v-toolbar-title>Pixel House Test</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <router-view/>

      <v-bottom-navigation
        :absolute="true"
        color="rgb(240, 133, 25)"
        v-model="bottomNav"
      >
        <v-btn value="PageOne">
          <span>Palindrome</span>
          <v-icon>mdi-alphabetical</v-icon>
        </v-btn>
    
        <v-btn value="PageTwo">
          <span>Array</span>
          <v-icon>mdi-code-array</v-icon>
        </v-btn>
    
        <v-btn value="PageThree">
          <span>Sorting</span>
          <v-icon>mdi-sort</v-icon>
        </v-btn>

        <v-btn value="Crud">
          <span>Crud</span>
          <v-icon>mdi-database-edit</v-icon>
        </v-btn>

      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  watch: {
    bottomNav (val) {
      this.$router.push({ name: val });
    }
  },
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
