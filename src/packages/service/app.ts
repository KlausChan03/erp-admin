import { post } from '@/packages/http/request'


/**
 * 获取路由
 * @param params
 */
const apiAppRouter = (params?: object) => {
    return post('/app/router', params, { relink: true })
}

/**
 * 获取网络http异步组件
 */
const apiAppLibrary = () => {
    return post('/app/library')
}


/**
 * 通知
 */
const apiAppNotice = () => {
    return post('/app/notice')
}

export {
    apiAppRouter,
    apiAppLibrary,
    apiAppNotice,
}
