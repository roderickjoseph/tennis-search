import axios from 'axios'

// export default () => {
//   return axios.create({
//     baseURL: 'http://localhost:8081/'
//   })
// }
// export default {
//   localApi: function () {
//     return axios.create({
//       baseURL: 'http://localhost:8081/'
//     })
//   },
//   remoteApi: function (name = '') {
//     return axios({
//       method: 'get',
//       url: 'http://api.amp.active.com/v2/search',
//       params: {
//         name: name
//       }
//     })
//   }
// }
export const localApi = () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

export const remoteApi = (name = '') => {
  return axios({
    method: 'get',
    url: 'http://api.amp.active.com/v2/search',
    params: {
      name: name,
      api_key: 'rvgvcwa2frkfuqrkg97gprnt'
    }
  })
}
