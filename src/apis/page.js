import request from '@/utils/request'

/**
 * 命名规范：get, update, delete, add
 * 增加：addPage
 * 删除：deletePage
 * 修改：updatePage
 * 查询：getPage、listPage(获取多个对象)
 */
export default {
    listPageTree (params) {
        return request({
            url: '/page/tree',
            method: 'get',
            params
        })
    },
    addPage (data) {
        return request({
            url: '/page',
            method: 'post',
            data
        })
    },
    deletePage (params) {
        return request({
            url: `/page/${ params.id }`,
            method: 'delete'
        })
    },
    updatePage (params, data) {
        return request({
            url: `/page/${ params.id }`,
            method: 'put',
            data
        })
    }
}
