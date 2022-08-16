<template>
  <div class="header">
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
      <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
      <BreadcrumbItem>An Application</BreadcrumbItem>
    </Breadcrumb>
    <div class="buttonGroup">
      <span class="material-icons clickable">visibility</span>
      <span class="material-icons clickable">lock</span>
      <span class="material-icons clickable">settings</span>
    </div>
  </div>
</template>

<script>
import Breadcrumb, { BreadcrumbItem, BreadcrumbSeparator } from 'ant-design-vue/lib/breadcrumb'
import 'ant-design-vue/lib/breadcrumb/style'

export default {
  name: 'BasicBreadcrumb',
  components: {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSeparator
  }
}
</script>

<style scoped>
.header {
  display: flex;
}

.buttonGroup {
  height: 64px;
}

.clickable {
  padding: 5px 5px;
  margin: 5px 5px;
}

.clickable:hover {
  cursor: pointer;
  background: #efefef;
}
</style>