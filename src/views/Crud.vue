<template>
  <div class="content">
    <v-card
      class="mx-auto"
    >
      <v-app-bar
        color="white"
      >
        <v-toolbar-title>My Data</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="add()">mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-divider></v-divider>
      <v-simple-table class="custom">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Title</th>
              <th class="text-left">Body</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
              <td>
                <v-btn class="mx-2" @click="edit(item, index)" color="rgb(240, 133, 25)" fab x-small dark>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn class="mx-2" @click="confirm(index)" fab x-small dark>
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <confirm-dialog v-if="confirmation" @submit="ok()" @closePop="confirmation = $event"/>
    <data-form v-if="modal" :type="type" :data="dataForm" @submit="save($event)" @closePop="modal = $event"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ConfirmDialog from '../components/ConfirmDialog'
import DataForm from '../components/DataForm'

export default {
  name: 'Crud',
  components: { ConfirmDialog, DataForm },
  computed: {
    ...mapState([
      'loading',
      'data'
    ])
  },
  data () {
    return {
      modal: false,
      valid: true,
      confirmation: false,
      index: null,
      dataForm: null,
      type: 'Add'
    }
  },
  methods: {
    ...mapActions([
      'getPost'
    ]),
    ok () {
      this.deleteData()
    },
    confirm (index) {
      this.confirmation = true
      this.index = index
    },
    deleteData () {
      this.data.splice(this.index, 1)
      this.clear() 
    },
    add () {
      this.dataForm = null
      this.modal = true
      this.type = 'Add'
    },
    edit (data, index) {
      this.modal = true
      this.type = 'Edit'
      this.index = index
      this.dataForm = data
    },
    save ($event) {
      let length = this.data.length
      let last = this.data[length-1].id
  
      if (this.type === 'Edit') {
        this.data[this.index].title = $event.title
        this.data[this.index].body = $event.body
      } else { 
        let newValue = {
          id: last + 1,
          userId: last + 1,
          title: $event.title,
          body: $event.body
        }
        this.data.push(newValue)
      }
    
      this.clear()
    },
    clear () {
      this.index = null
      this.dataForm = null
      this.modal = false
      this.confirmation = false
    }
  },
  mounted () {
    if (this.data.length === 0) {
      this.getPost()
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
  max-height: 520px;
  overflow: auto;
}
</style>
