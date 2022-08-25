<template>
  <a-tree v-model:selectedKeys="selectedKeys"
          @dragenter="onDragEnter"
          @drop="onDrop"
          @select="onSelected"
          :tree-data="treeData"
          :show-line="true"
          :fieldNames="fieldNames"
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
      selectedKeys: [],
      fieldNames: {
        children: 'children',
        title: 'title',
        key: 'guid'
      }
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
      // 切换节点保存当前节点
      this.$Event.emit('onSavePage')
      if (selectKeys.length === 0) {
        document.title = '未选择'
        this.store.currentPage = {
          dataRef: {}
        }
      } else if (selectKeys.length === 1) {
        document.title = e.node.title
        this.store.currentPage = e.node
        this.$Event.emit('onPageChange')
      }
    }
  },
  computed: {
    treeData () {
      return store.treeData
    }
  }
})

</script>

<style scoped>

</style>