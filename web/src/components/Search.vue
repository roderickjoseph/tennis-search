<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-layout row>
        <v-flex xs6>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        </v-flex>
        <v-flex xs6>
        <v-select
          v-model="select"
          :items="items"
          label="Item"
        ></v-select>
        </v-flex>
      </v-layout>
        <v-btn
          :disabled="!valid"
          @click="submit"
        >
        submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import SearchService from '../services/SearchService'

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'

    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log(this.name)
        const test = SearchService.remoteQuery(this.name)
        console.log(this.name, test)
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style scoped>

</style>
