<template>
  <div class="sider">
    <WorkSpace />
    <SiderMenuList style="padding: 10px 0 10px 0" />
    <AntDesignTree style="padding: 10px 0 10px 0" />
    <div @click="newPage" class="button">
      ⚡ New page
    </div>
  </div>
</template>

<script>
import page from '@/apis/page'
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
  mounted () {
    this.init()
    this.$Event.on('onRefreshPage', this.getPageList)
  },
  data () {
    return {
      store
    }
  },
  watch: {},
  methods: {
    init () {
      this.getPageList()
    },
    async getPageList () {
      this.store.treeData = await page.listPageTree({
        spaceId: 1
      })
    },
    /**
     * 新增页面
     */
    async newPage () {
      const parentId = store.currentPage.dataRef.id || 0
      await page.addPage({
        guid: uuid(),
        parentId: parentId,
        title: 'New page',
        content: '# New page'
      })
      this.$Event.emit('onRefreshPage')
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
</style>