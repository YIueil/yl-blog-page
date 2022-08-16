<template>
  <Layout>
    <Sider>
      <BasicSider />
    </Sider>
    <Layout>
      <Header>
        <BasicBreadcrumb />
      </Header>
      <Content style="overflow-y: auto; height: calc(100vh - 64px)">
        <MilkDownEditor style="padding: 40px" />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Layout, { Header, Content } from 'ant-design-vue/lib/layout/layout'
import Sider from 'ant-design-vue/lib/layout/Sider'

import 'ant-design-vue/lib/layout/style'

import AntDesignTree from '@/components/Tree/AntDesignTree'
import MilkDownEditor from '@/components/Editor/MilkDownEditor'
import BasicBreadcrumb from '@/components/Breadcrumb/BasicBreadcrumb'
import BasicSider from '@/components/Layout/BasicSider'

export default {
  name: 'BasicLayout',
  components: {
    BasicSider,
    BasicBreadcrumb,
    MilkDownEditor,
    AntDesignTree,
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