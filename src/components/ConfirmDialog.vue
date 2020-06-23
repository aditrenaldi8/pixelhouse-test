<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card>
        <br>
        <v-card-text>Are you sure want to delete this data?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click="close()">
            <v-icon>mdi-close</v-icon>
            Cancel
          </v-btn>
          <v-btn dark color="rgb(240, 133, 25)" @click="ok()">
            <v-icon>mdi-check</v-icon>
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  data () {
    return {
      dialog: true
    }
  },
  methods: {
    close () {
      this.$emit('closePop', false)
      this.dialog = false
    },
    ok () {
      this.$emit('submit')
      this.dialog = false
    }
  },
  watch: {
    dialog () {
      setTimeout(() => {
        this.dialog = false
      }, 300)
    }
  }
}
</script>

<style scoped>
</style>
