import request from '@/utils/request'

export default {
    listSpace () {
        return request({
            url: '/space/list',
            method: 'get'
        })
    },
    addSpace (data) {
        return request({
            url: '/space',
            method: 'post',
            data
        })
    },
    deleteSpace (params) {
        console.log(params)
    },
    updateSpace (params) {
        console.log(params)
    }
}
