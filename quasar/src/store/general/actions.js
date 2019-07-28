import Vue from 'vue'
const Upload = ({ commit }, file) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios
      .post(`/v1/files`, file, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(res => {
        console.log('Upload => res.data', res.data)
        resolve(res.data)
      })
      .catch(err => {
        console.error('Upload', err)
        Vue.prototype.$q.notify('Could not connect to the server')
        reject(err)
      })
  })
}

export default {
  Upload
}
