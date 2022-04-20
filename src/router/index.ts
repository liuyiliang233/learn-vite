import { lazyLoad, redirect, setRouteBefore } from '../component/routerGuard/fn'

// 全局路由配置
const routes = [
  {
    path: '/',
    element: redirect('/index'),
  },
  {
    path: '/index',
    element: lazyLoad(() => import('../page/home/index'), {
      title: '首页',
      needLogin: true,
    }),
  },
  {
    path: '/mine',
    element: lazyLoad(() => import('../page/mine/index'), {
      title: '我的',
    }),
  },
  {
    path: '*',
    element: lazyLoad(() => import('../page/notFount/index'), {
      title: '404',
    }),
  },
]

/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义数据
 * @return {string} 需要跳转到其他页时返回该页的path路径
 */
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title
  }
  // 判断未登录跳转登录页
  if (meta.needLogin) {
    // if (!isLogin) {
    //   return '/login'
    // }
  }
}
setRouteBefore(onRouteBefore)

export default routes