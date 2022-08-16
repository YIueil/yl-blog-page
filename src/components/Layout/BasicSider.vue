<template>
  <div class="sider">
    <div class="wordSpace">
      <div class="userBox">
        <Avatar class="avatar" :size="48" src="https://s2.loli.net/2022/05/10/6NZgpvlQx8PBG3o.png"></Avatar>
        <span class="userName">弋孓</span>
      </div>
      <span class="material-icons menu">menu</span>
    </div>
    <SiderMenuList />
    <AntDesignTree />
    <div class="button">
      ⚡ New page
    </div>
    <div class="resize-line">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import Avatar from 'ant-design-vue/lib/avatar'
import 'ant-design-vue/lib/avatar/style'

import AntDesignTree from '@/components/Tree/AntDesignTree'
import SiderMenuList from '@/components/Menu/SiderMenuList'

export default {
  name: 'BasicSider',
  components: { AntDesignTree, Avatar, SiderMenuList }
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
  cursor: col-resize; height: 100%; width: 12px; margin-left: -6px;
}

.menu {
  padding: 8px 10px;
}

.menu:hover {
  background: #dddddc;
}

.menu:active {
  background: #bababa;
}

.button {
  width: 100%;
  padding: 8px 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #e1e1e1;
  color: #767571;
  font-weight: 600;
  user-select: none;
}

.button:hover {
  cursor: pointer;
  background: #ebebea;
}

.button:active {
  background: #dddddc;
}

.wordSpace {
  display: flex;
  height: 64px;
  padding: 2px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.wordSpace:hover {
  cursor: pointer;
  background: #ebebea;
}

.userBox {
  display: flex;
  height: 64px;
  padding: 2px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.userName {
  padding: 0 10px 0 10px;
  font-weight: 600;
  font-size: 20px;
}
</style>