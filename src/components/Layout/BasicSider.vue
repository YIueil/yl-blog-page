<template>
  <div class="sider">
    <WorkSpace />
    <SiderMenuList style="padding: 10px 0 10px 0" />
    <AntDesignTree style="padding: 10px 0 10px 0" />
    <div @click="newPage" class="button">
      ⚡ New page
    </div>
    <div class="resize-line">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store/store'
import uuid from '../../utils/uuid'

import AntDesignTree from '@/components/Tree/AntDesignTree'
import SiderMenuList from '@/components/Menu/SiderMenuList'
import WorkSpace from '@/components/WorkSpace/WorkSpace'

export default {
  name: 'BasicSider',
  components: {
    WorkSpace,
    AntDesignTree,
    SiderMenuList
  },
  data () {
    return {
      store
    }
  },
  methods: {
    /**
     * 新增页面
     */
    newPage () {
      this.store.treeData.push({
        key: uuid(),
        title: 'New page',
        content: '# New page'
      })
    }
  }
}
</script>

<style scoped>
.sider {
  height: 100vh;
  min-height: 600px;
  border-right: 2px solid #e1e1e1;
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