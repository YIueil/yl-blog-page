<template>
  <BasicLayout />
</template>

<script>
import BasicLayout from '@/components/Layout/BasicLayout'
import { store } from '@/store/store'
import page from '@/apis/page'
export default {
  name: 'BlogHome',
  components: { BasicLayout },
  mounted () {
    this.$Event.on('onSavePage', this.savePage)
  },
  methods: {
    savePage () {
      page.updatePage({
        id: store.currentPage.dataRef.id
      }, store.currentPage.dataRef)
    }
  }
}
</script>

<style scoped>

</style>