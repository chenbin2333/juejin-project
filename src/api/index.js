import request from '@/utils/request'

export const test1 = (data) => {
    return request({
        url: `/mock/test/save`, method: 'post', data: data
    })
}
export const test2 = (data) => {
    return request({
        url: `/mock/test/update`, method: 'put', data: data
    })
}
export const test3 = (id) => {
    return request({
        url: `/mock/test/get/${id}`, method: 'get'
    })
}
export const test4 = (id) => {
    return request({
        url: `/mock/test/remove/${id}`, method: 'delete'
    })
}
