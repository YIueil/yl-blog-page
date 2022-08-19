<template>
  <div class="header">
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
      <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
      <BreadcrumbItem>An Application</BreadcrumbItem>
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