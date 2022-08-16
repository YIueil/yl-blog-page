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
}

.menuItem {
  position: relative;
  height: 30px;
  line-height: 30px;
}

.menuItem:hover {
  background: #ebebea;
  cursor: pointer;
}

.menuItem:active {
  background: #dddddc;
}

.menuItem .menuIcon {
  float: left;
  padding: 3px 3px 3px 0;
  height: 30px;
}

.menuItem .menuText {
  float: left;
  height: 30px;
}
</style>