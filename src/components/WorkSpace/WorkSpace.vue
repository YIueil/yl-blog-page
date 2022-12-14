<template>
  <div>
    <Popover trigger="click" placement="right" style="top: 10px">
      <template #title>
        <div class="label-button-item">
          <span>
            工作空间
          </span>
          <span @click="showEditSpace('新增工作空间')" class="material-icons clickable noPadding noSelect">
            add
        </span>
        </div>
      </template>
      <template #content>
        <div class="workSpace" style="width: 200px" :key="space.guid" v-for="space in spaceList">
          <div class="userBox">
            <Avatar class="avatar" :size="32" :src="space.iconUrl"></Avatar>
            <span class="userName" style="font-size: 16px">{{ space.name }}</span>
          </div>
          <Dropdown :trigger="['click']">
            <span class="ant-dropdown-link material-icons menu noPadding">
              more_horiz
            </span>
            <template #overlay>
              <Menu>
                <MenuItem @click="editSpace(space)">
                  <div class="flex-row-center">
                    <span class="material-icons">edit</span>
                    <span>编辑</span>
                  </div>
                </MenuItem>
                <MenuItem @click="deleteSpaceConfirm(space.id)" class="flex-row-center">
                  <div class="flex-row-center">
                    <span class="material-icons">delete</span>
                    <span>删除</span>
                  </div>
                </MenuItem>
              </Menu>
            </template>
          </Dropdown>
        </div>
      </template>
      <div class="workSpace">
        <div class="userBox">
          <Avatar class="avatar" :size="48" src="https://s2.loli.net/2022/05/10/6NZgpvlQx8PBG3o.png"></Avatar>
          <span class="userName">{{ store.currentUser.username }}</span>
        </div>
        <span class="material-icons menu">menu</span>
      </div>
    </Popover>
    <Modal v-model:visible="visible" :title="title">
      <template #footer>
        <span class="material-icons clickable noSelect" @click="reset">close</span>
        <span class="material-icons clickable noSelect" @click="saveSpace">check</span>
      </template>
      <div style="display: flex;justify-content: space-around;align-items: center;">
        <Upload
            v-model:file-list="fileList"
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeIconUpload"
            @change="handleIconChange"
        >
          <img style="width: 100%; height: 100%" v-if="space.iconUrl" :src="space.iconUrl" alt="avatar" />
          <div v-else>
            <div class="ant-upload-text">Upload</div>
          </div>
        </Upload>
        <span>
          <span style="padding-right: 10px;">空间名</span>
          <input v-model="space.name" />
        </span>
      </div>
    </Modal>
  </div>
</template>

<script>
import space from '@/apis/space'
import { store } from '@/store/store'
import Avatar from 'ant-design-vue/lib/avatar'
import Popover from 'ant-design-vue/lib/popover'
import Upload from 'ant-design-vue/lib/upload'
import { Modal } from 'ant-design-vue'
import Dropdown from 'ant-design-vue/lib/dropdown'
import 'ant-design-vue/lib/dropdown/style'
import Menu, { MenuItem } from 'ant-design-vue/lib/menu'
import 'ant-design-vue/lib/menu/style'

import 'ant-design-vue/lib/avatar/style'
import 'ant-design-vue/lib/popover/style'
import 'ant-design-vue/lib/upload/style'
import 'ant-design-vue/lib/modal/style'

export default {
  name: 'WorkSpace',
  components: {
    Avatar,
    Popover,
    Upload,
    Modal,
    Dropdown,
    Menu,
    MenuItem
  },
  data () {
    return {
      store,
      visible: false,
      title: '新增工作空间',
      spaceList: [],
      space: {
        iconUrl: '',
        name: ''
      },
      fileList: [],
      iconUploading: false
    }
  },
  methods: {
    init () {
      this.getSpaceList()
    },
    async getSpaceList () {
      this.spaceList = await space.listSpace()
    },
    showEditSpace (title) {
      this.title = title
      this.visible = true
    },
    async saveSpace () {
      await space.addSpace(this.space)
      this.$message.success('操作成功')
      await this.getSpaceList()
      this.reset()
    },
    editSpace (curSpace) {
      this.space = curSpace
      this.showEditSpace('编辑工作空间')
    },
    deleteSpaceConfirm (id) {
      this.$confirm({
        title: '提示',
        content: '确定删除?',
        async onOk() {
          await space.deleteSpace(id)
          this.$message.success('操作成功')
          this.getSpaceList()
        }
      })
    },
    reset () {
      this.fileList = []
      this.iconUploading = false
      this.space = {
        iconUrl: '',
        name: ''
      }
      this.visible = false
    },
    beforeIconUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('只支持 png / jpeg 格式的图片!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('文件大小必须小于 2MB!')
      }
      return isJpgOrPng && isLt2M
    },
    handleIconChange (info) {
      if (info.file.status === 'uploading') {
        this.iconUploading = true
        return
      }
      if (info.file.status === 'done') {
        const getBase64 = function (img, callback) {
          const reader = new FileReader()
          reader.addEventListener('load', () => callback(reader.result))
          reader.readAsDataURL(img)
        }

        getBase64(info.file.originFileObj, base64Url => {
          this.space.iconUrl = base64Url
          this.iconUploading = false
        })
      }
      if (info.file.status === 'error') {
        this.iconUploading = false
        this.$message.error('上传错误')
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
/*todo 这里的padding为什么不生效？？？*/
::v-deep(.ant-popover-inner-content) {
  padding: 0;
}

::v-deep(.ant-upload-picture-card-wrapper) {
  width: unset;
}

.label-button-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.workSpace {
  display: flex;
  height: 64px;
  padding: 2px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.workSpace:hover {
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