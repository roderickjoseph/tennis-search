import { localApi } from '@/services/Api'

export default {
  register (credentials) {
    return localApi().post('register', credentials)
  },
  login (credentials) {
    return localApi().post('login', credentials)
  }
}
