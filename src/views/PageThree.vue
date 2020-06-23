<template>
 <div class="content">
    <v-flex xs12 sm6 md6 offset-sm3 offset-md3>
      <v-card
        class="mx-auto custom"
      >
        <v-app-bar
          color="white"
        >
          <v-toolbar-title>Soal 3 : Sorting</v-toolbar-title>
        </v-app-bar>

        <v-card-text>
          Buatlah sebuah fungsi custom sort untuk data di bawah ini!
          <br>
          Data untuk di sort<br>
          1. Numeric: 10,9,102,66,5421,1,0 <br>
          2. String: Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf <br>
          3. Alphanumeric: Wulan,Raharjo,Widya,10,9,102,66,5421,1,0,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf <br>
          <br>
          Task: <br>
          - Dilarang menggunakan fungsi sort dari JS <br>
          - Minimal 1 fungsi asc / desc <br>
          - Dilarang menggunakan fungsi selain loop dan if condition hampir di semua logic <br>
          - Dilarang memakai push() dan concat()<br>
        </v-card-text>  
      </v-card>

      <v-card
        class="mx-auto mt-20 custom"
      >
        <v-app-bar
          color="white"
        >
          <v-toolbar-title>Hasil</v-toolbar-title>
        </v-app-bar>

        <v-card-text> Output1: {{ numeric }} </v-card-text>
        <v-card-text> Output2: {{ string }} </v-card-text>
        <v-card-text> Output3: {{ alphanumeric }} </v-card-text>
      </v-card>

    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'PageThree',
  data () {
    return {
      numeric: [],
      string: [],
      alphanumeric: ['Wulan', 'Raharjo', 'Widya', 10, 9, 102, 66, 5421, 1, 0, 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']
    }
  },
  methods: {
    sort (array) {
      let done = false;
      while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            let tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
          }
        }
      }
      return array
    },
  }, 
  mounted () {
    this.numeric = this.sort([10, 9, 102, 66, 5421, 1, 0])
    this.string = this.sort(['Wulan', 'Raharjo', 'Widya', 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf'])
    this.alphanumeric = this.sort(['Wulan', 'Raharjo', 'Widya', 10, 9, 102, 66, 5421, 1, 0, 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf'])
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
