<template>
  <a-tree v-model:selectedKeys="selectedKeys"
          @dragenter="onDragEnter"
          @drop="onDrop"
          :tree-data="treeData"
          :show-line="true"
          show-icon
          :draggable="true"
          block-node
          default-expand-all>
  </a-tree>
</template>

<script>
const treeData = [{
  title: 'parent 1',
  key: '0-0',
  children: [{
    title: 'parent 1-0',
    key: '0-0-0',
    children: [{
      title: 'leaf',
      key: '0-0-0-0',
    }, {
      key: '0-0-0-1',
    }, {
      title: 'leaf',
      key: '0-0-0-2',
    }],
  }, {
    title: 'parent 1-1',
    key: '0-0-1',
    children: [{
      title: 'leaf',
      key: '0-0-1-0',
    }],
  }, {
    title: 'parent 1-2',
    key: '0-0-2',
    children: [{
      title: 'leaf 1',
      key: '0-0-2-0',
    }, {
      title: 'leaf 2',
      key: '0-0-2-1',
    }],
  }],
},
  {
  title: 'parent 2',
  key: '0-1',
  children: [{
    title: 'parent 2-0',
    key: '0-1-0',
    children: [{
      title: 'leaf',
      key: '0-1-0-0',
    }, {
      title: 'leaf',
      key: '0-1-0-1',
    }],
  }],
}]

import ATree from 'ant-design-vue/lib/tree'
import 'ant-design-vue/lib/tree/style'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AntDesignTree',
  components: {
    ATree
  },
  setup () {
    return {
      selectedKeys: ref(['0-0-0']),
      treeData
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
    }
  }
})

</script>

<style scoped>

</style>