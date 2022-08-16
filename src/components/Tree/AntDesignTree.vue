<template>
  <a-tree v-model:selectedKeys="selectedKeys"
          @dragenter="onDragEnter"
          @drop="onDrop"
          @select="onSelected"
          :tree-data="treeData"
          :show-line="true"
          show-icon
          :draggable="true"
          block-node
          default-expand-all>
  </a-tree>
</template>

<script>
import { store } from '@/store/store'
import ATree from 'ant-design-vue/lib/tree'
import 'ant-design-vue/lib/tree/style'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AntDesignTree',
  components: {
    ATree
  },
  data () {
    return {
      store,
      treeData: store.treeData,
      selectedKeys: []
    }
  },
  methods: {
    onDragEnter (info) {
      console.log(info) // expandedKeys 需要展开时
      // expandedKeys.value = info.expandedKeys
    },
    onDrop (info) {
      console.log(info)
      // const dropKey = info.node.key
      // const dragKey = info.dragNode.key
      // const dropPos = info.node.pos.split('-')
      // const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
      //
      // const loop = (data, key, callback) => {
      //   data.forEach((item, index) => {
      //     if (item.key === key) {
      //       return callback(item, index, data)
      //     }
      //
      //     if (item.children) {
      //       return loop(item.children, key, callback)
      //     }
      //   })
      // }
    },
    /**
     * 选择节点
     * @param selectKeys 已选择的节点集合
     * @param e
     */
    onSelected (selectKeys, e) {
      if (selectKeys.length === 1) {
        document.title = e.node.title
        this.store.currentPage = e.node
        this.$Event.emit('onPageChange')
      }
    }
  }
})

</script>

<style scoped>

</style>