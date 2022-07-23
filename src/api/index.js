import request from '@/utils/request'
export default {
    test1(data) {
        return request({
            url: `/mock/test/save`,
            method: 'post',
            data: data
        })
    },
    test2(data) {
        return request({
            url: `/mock/test/update`,
            method: 'put',
            data: data
        })
    },
    test3(id) {
        return request({
            url: `/mock/test/get/${id}`,
            method: 'get'
        })
    },
    test4(id) {
        return request({
            url: `/mock/test/remove/${id}`,
            method: 'delete'
        })
    }
}