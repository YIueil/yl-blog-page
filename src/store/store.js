import { reactive } from 'vue'

export const store = reactive({
    treeData: [],
    currentPage: {
        dataRef: {}
    },
    config: {
        readOnly: false,
        darkMode: false
    }
})