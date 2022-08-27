<template>
  <div class="header">
    <Breadcrumb>
      <BreadcrumbItem v-for="item in breadcrumbList" :key="item.id">
        {{ item.name }}
      </BreadcrumbItem>
    </Breadcrumb>
    <div class="buttonGroup">
      <span class="material-icons clickable">light_mode</span>
      <span class="material-icons clickable">dark_mode</span>
      <span class="material-icons clickable">favorite</span>
      <span @click="readModeChange" class="material-icons clickable">lock</span>
      <span class="material-icons clickable">settings</span>
    </div>
  </div>
</template>

<script>
import Breadcrumb, { BreadcrumbItem, BreadcrumbSeparator } from 'ant-design-vue/lib/breadcrumb'
import 'ant-design-vue/lib/breadcrumb/style'
import { store } from '@/store/store'

export default {
  name: 'BasicHeader',
  components: {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSeparator
  },
  methods: {
    readModeChange () {
      this.$Event.emit('onReadModeChange')
    }
  },
  computed: {
    breadcrumbList () {
      if (!store.currentPage.dataRef.id) {
        return null
      }
      return null
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.buttonGroup {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 64px;
  flex-direction: row;
  align-items: center;
}
</style>