<template>
  <q-page>
    <div class="absolute-top q-ma-md">
      <q-btn color="primary" outline class="full-width" @click="chooseFile()">Choose File</q-btn>
      <div v-if="file.base64" class="q-mt-md">
        <q-img :src="file.base64" style="object-fit:cover" />
      </div>
      <div v-else class="fixed-center text-center full-width">
        <span class="text-caption">NO IMAGE SELECTED</span>
      </div>
    </div>
    <div class="absolute-bottom q-ma-md">
      <q-btn color="positive" class="full-width" :disabled="!file.base64" @click="upload()">Upload</q-btn>
    </div>
    <input id="library" type="file" accept="*" library style="display:none;" />
    <DialogText ref="DialogText" />
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'
import DialogText from '../components/DialogText'
export default {
  name: 'PageIndex',
  components: {
    DialogText
  },
  data () {
    return {
      file: {
        base64: ''
      }
    }
  },
  methods: {
    ...mapActions('General', ['Upload']),

    chooseFile () {
      const self = this
      let idInput = '#library'
      window.$(idInput).trigger('click')
      var hasNotified = false

      window.$(idInput).on('change', function () {
        var input = this
        if (input.files && input.files.length > 0) {
          let file = input.files[0]
          if (file.size > 52428800) {
            if (!hasNotified) {
              self.$q.notify({
                message: 'Arquivos acima de 50MB não são permitidos',
                color: 'warning',
                timeout: 1000
              })
              hasNotified = true
            }
            return
          }
          var reader = new FileReader()
          reader.onload = function (e) {
            self.$q.loading.hide()
            var base64 = e.target.result
            console.log('reader.onload => base64.length', base64.length)
            self.file.base64 = base64
          }
          self.$q.loading.show()
          reader.readAsDataURL(input.files[0])
        }
      })
    },
    upload () {
      let formData = new FormData()
      Object.keys(this.file).forEach((key, index) => {
        formData.set(key, this.file[key])
      })
      this.$q.loading.show()
      this.Upload(formData)
        .then((data) => {
          if (data) {
            this.$refs.DialogText.open(data.text)
          } else {
            this.$q.notify({
              message: 'Could not extract text from image',
              color: 'warning'
            })
          }
        })
        .finally(() => this.$q.loading.hide())
    }
  }
}
</script>
