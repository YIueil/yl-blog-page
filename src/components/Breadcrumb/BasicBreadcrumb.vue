<template>
  <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
    <BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
    <BreadcrumbItem>An Application</BreadcrumbItem>
  </Breadcrumb>
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

</style>