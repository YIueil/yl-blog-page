<template>
  <Layout>
    <Sider class="sider" :width="computedWidth">
      <BasicSider />
      <div class="resize-line" @mousedown="onmousedown">
        <div class="line"></div>
      </div>
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
  },
  data () {
    return {
      initWidth: 300, // 初始宽度
      maxWidth: 500, // 最大宽度
      minWidth: 200, // 最小宽度
      computedWidth: this.initWidth // 计算结果宽度
    }
  },
  methods: {
    onmousedown () {
      const that = this
      // 当窗口发生变化时候更新宽高
      window.addEventListener('mousemove', that.resetSiderSize)
      window.addEventListener('mouseup', function () {
        window.removeEventListener('mousemove', that.resetSiderSize)
      })
    },
    resetSiderSize (event) {
      // 取消鼠标默认行为
      event.preventDefault()
      const offset = event.clientX - this.initWidth // 计算需要变化的偏移量
      this.computedWidth = this.initWidth + offset
      if (this.computedWidth > this.maxWidth) {
        this.computedWidth = this.maxWidth
      } else if (this.computedWidth < this.minWidth) {
        this.computedWidth = this.minWidth
      }
      console.log(this.computedWidth)
    }
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

.resize-line {
  position: absolute;
  right: 0;
  width: 0;
  flex-grow: 0;
  z-index: 1;
  top: 0;
  bottom: 0;
  pointer-events: auto;
}

.line {
  cursor: col-resize;
  height: 100%;
  width: 12px;
  margin-left: -6px;
}
</style>