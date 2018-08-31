<template>
  <v-form>
  <v-container>
    <v-layout column>
      <v-flex xs6>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title dark>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              v-model="email"
              :rules="rules.emailRules"
              label="Email"
              clearable
           ></v-text-field>
            <br>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              @click:append="show = !show"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <v-btn
              dark
              class="cyan"
              @click="register">
              Register
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  </v-form>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      show: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
