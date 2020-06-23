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
          <v-toolbar-title>Soal 2 : Array</v-toolbar-title>
        </v-app-bar>

        <v-card-text>
          Buatlah sebuah fungsi random data array yang memiliki 2 parameter yang datanya di dapat dari string yang telah di sediakan! <br>
          1. parameter 1 jumlah index array <br>
          2. parameter 2 jumlah data dalam 1 index <br>
          3. stringArr = "Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf" <br>
          Contoh: <br>
          randomArr(2,3) <br>
          Hasil: ["Wulan Widya Cinta", "Raharjo Kusuma Indah"] <br>
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
            label="Input Param 1"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="param2"
            color="rgb(240, 133, 25)"
            label="Input Param 2"
          ></v-text-field>
        </v-card-text>
        <v-card-text> Output: {{ result }} </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
   data () {
    return {
      result: null,
      param: '',
      param2: ''
    }
  },
  watch: {
    param (val) {
      if (this.param2 && this.param) {
        this.result = this.randomArray(val, this.param2)
      } else {
        this.result = null
      }
    },
    param2 (val) {
      if (this.param && this.param2) {
        this.result = this.randomArray(this.param, val)
      } else {
        this.result = null
      }
    }
  },
  methods: {
    randomArray (number, number2){
      let stringArr = 'Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf'
      let arr = stringArr.split(",");
      let result = []
      for ( let i = 0; i < number; i++ ) {
        let name = ''
        for ( let i = 0; i < number2; i++ ) {
          name += ' ' + arr[Math.floor(Math.random() * arr.length)]
        }
        result[i] = name.substr(1)
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
.mt-20 {
  margin-top: 20px
}
.custom {
  max-height: 300px;
  overflow: auto;
}
</style>
