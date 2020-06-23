<template>
  <div class="content">
    <v-flex xs12 sm6 md6 offset-sm3 offset-md3>
      <v-card
        class="mx-auto custom"
      >
        <v-app-bar
          color="white"
          dense
        >
          <v-toolbar-title>Soal 1 : Palindrome</v-toolbar-title>
        </v-app-bar>

        <v-card-text>
          Buatlah sebuah fungsi random palindrom yang berisikan 1 parameter jumlah dari karakter palindrom tersebut!
          Contoh: <br>
          palindrom(5) <br>
          Hasil: <br>
          1. 12f21 <br>
          2. fgkgf <br>
        </v-card-text>
      </v-card>

      <v-card
        class="mx-auto mt-20 custom"
      >
        <v-app-bar
          color="white"
          dense
        >
          <v-toolbar-title>Hasil</v-toolbar-title>
        </v-app-bar>

        <v-card-text>
          <v-text-field
            outlined
            v-model="param"
            color="rgb(240, 133, 25)"
            label="Input Param"
          ></v-text-field>
        </v-card-text>
        <v-card-text> Output: {{ result }} </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      result: null,
      param: ''
    }
  },
  watch: {
    param (val) {
      this.result = this.palindrome(val)
    }
  },
  methods: {
    palindrome (number){
      let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
      let charactersLength = char.length
      let result = ''
      let mid = Math.ceil(number/2)
      let counter = number%2 == 0 ? 0 : 1

      for ( let i = 0; i < number; i++ ) {
        if (i < mid ){
           result += char.charAt(Math.floor(Math.random() * charactersLength))
        } else {
          counter++
          result += result[mid-counter]
        }
      }
      return result
   }
  }
}
</script>

<style scoped>
.content {
  text-align: left;
  margin: 20px;
}
.monospace {
  font-family: "Lucida Console", Courier, monospace;
}
.mt-20 {
  margin-top: 20px;
}
.custom {
  max-height: 300px;
  overflow: auto;
}
</style>
