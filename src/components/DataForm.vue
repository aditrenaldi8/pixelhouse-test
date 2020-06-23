<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="ml-3 mr-3"
        >
  
        <v-card-title>
          {{ type }} Data
        </v-card-title>

          <v-divider></v-divider>
          <br>

          <v-text-field
            outlined
            v-model="input.title"
            color="rgb(240, 133, 25)"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>
          <v-textarea
            outlined
            name="body"
            label="Body"
            v-model="input.body"
            :rules="bodyRules"
            required
          ></v-textarea>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click="close()">
            <v-icon>mdi-close</v-icon>
            Cancel
          </v-btn>
          <v-btn dark color="rgb(240, 133, 25)" @click="validate()">
            <v-icon>mdi-content-save</v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'DataForm',
   props: {
    type: {
      type: String,
      default: 'Add'
    },
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    dialog () {
      setTimeout(() => {
        this.dialog = false
        this.$refs.form.reset()
      }, 300)
    }
  },
  data () {
    return {
      valid: true,
      dialog: true,
      input: {
        title: '',
        body: ''
      },
      titleRules: [
        v => !!v || 'Title is required',
      ],
      bodyRules: [
        v => !!v || 'Body is required'
      ],
    } 
  },
  methods: {
    close () {
      this.$emit('closePop', false)
      this.dialog = false
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.save()
      }
    },
    save () {
      this.$emit('submit', this.input)
      this.dialog = false
    }
  },
  mounted () {
    if (this.data) {
      this.input.title = this.data.title
      this.input.body = this.data.body
    }
  }
}
</script>

<style scoped>
</style>
