import { reactive } from 'vue'

export const store = reactive({
    treeData: [],
    // 当前页
    currentPage: {
        dataRef: {}
    },
    // 当前空间
    currentSpace: {},
    // 配置项
    config: {
        readOnly: false,
        darkMode: false
    }
})