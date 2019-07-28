<template>
  <q-dialog v-model="show">
    <q-layout class="bg-white" style="min-height: 70vh;max-height: 70vh">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>Extracted Text</q-toolbar-title>
          <q-btn flat dense round v-close-popup>
            <q-icon name="close" />
          </q-btn>
        </q-toolbar>
      </q-header>
      <div class="bg-grey-2 q-pa-sm q-mt-xl" style="max-height: 60vh;overflow-y: scroll">
        <q-input
          type="textarea"
          :readonly="true"
          class="q-caption full-width full-height"
          v-model="text"
          :rows="25"
        />
      </div>
      <q-footer>
        <q-btn flat dense v-close-popup class="full-width">Close</q-btn>
      </q-footer>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      text: ''
    }
  },
  methods: {
    open (text) {
      this.text = text
      this.show = true
    }
  }
}
</script>

<style>
</style>
