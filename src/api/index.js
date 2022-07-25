import request from '@/utils/request'


export function getNav () {
    return request({
        url: '/getnav'
    })
}


export function getHomeNav () {
    return request({
        url: '/getHomeNav'
    })
}


export function getHomeCotentList () {
    return request({
        url: '/getHomeCotentList'
    })
}

