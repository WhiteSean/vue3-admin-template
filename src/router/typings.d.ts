import 'vue-router'
// 可以通过扩展 RouteMeta 接口来输入 meta 字段：
declare module 'vue-router' {
  interface RouteMeta {
    // options
    roles?: string[]
    // every route must declare
    requiresAuth: boolean // need login
    icon?: string
    locale?: string
    // menu select key
    menuSelectKey?: string
    hideInMenu?: boolean
  }
}
