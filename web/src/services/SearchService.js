import { remoteApi } from './Api'

export default {
  remoteQuery (name) {
    return remoteApi(name)
  }
}
