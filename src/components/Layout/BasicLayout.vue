<template>
  <Layout>
    <Sider>
      <BasicSider />
    </Sider>
    <Layout>
      <Header>
        <BasicHeader />
      </Header>
      <Content style="overflow-y: auto; height: calc(100vh - 64px)">
        <BasicContent />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Layout, { Header, Content } from 'ant-design-vue/lib/layout/layout'
import Sider from 'ant-design-vue/lib/layout/Sider'

import 'ant-design-vue/lib/layout/style'

import BasicSider from '@/components/Layout/BasicSider'
import BasicHeader from '@/components/Layout/BasicHeader'
import BasicContent from '@/components/Layout/BasicContent'

export default {
  name: 'BasicLayout',
  components: {
    BasicContent,
    BasicHeader,
    BasicSider,
    Layout,
    Header,
    Content,
    Sider
  }
}
</script>

<style scoped>
::v-deep(.ant-layout) {
  background: #ffffff;
}

::v-deep(.ant-layout-sider) {
  background: #fbfbfa;
}

::v-deep(.ant-layout-header) {
  background: #ffffff;
}

::v-deep(.ant-tree) {
  background: #fbfbfa;
}

::v-deep(.ant-breadcrumb) {
  line-height: unset;
}
</style>