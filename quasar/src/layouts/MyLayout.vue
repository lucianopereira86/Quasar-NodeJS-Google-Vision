<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="back()"
          v-if="showBack()"
        >
          <q-icon name="arrow_back" />
        </q-btn>
        <q-img v-else src="statics/icons/favicon-32x32.png" style="width:32px;height:32px"></q-img>
        <q-toolbar-title>
          {{getTitle()}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  methods: {
    back () {
      this.$router.go(-1)
    },
    showBack () {
      return !this.$route.meta.isIndex
    },
    getTitle () {
      return this.$route.name
    }
  }
}
</script>

<style>
</style>
