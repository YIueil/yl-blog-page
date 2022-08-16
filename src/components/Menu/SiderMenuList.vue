<template>
  <div class="siderMenuList">
    <div class="menuItem">
      <span class="menuIcon material-icons">search</span>
      <span class="menuText">快速查找</span>
    </div>
    <div class="menuItem">
      <span class="menuIcon material-icons">upload</span>
      <span class="menuText">导入</span>
    </div>
    <div class="menuItem">
      <span class="menuIcon material-icons">delete</span>
      <span class="menuText">删除</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiderMenuList'
}
</script>

<style scoped>
.siderMenuList {
  user-select: none;
  display: flex;
  flex-direction: column;
}

.menuItem {
  display: flex;
  height: 30px;
  margin: 1px 0;
}

.menuItem:hover {
  background: #ebebea;
  cursor: pointer;
}

.menuItem:active {
  background: #dddddc;
}

.menuItem .menuIcon {
  height: 30px;
  line-height: 30px;
}

.menuItem .menuText {
  height: 30px;
  line-height: 30px;
}
</style>