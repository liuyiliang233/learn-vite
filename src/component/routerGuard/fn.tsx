import React, { Suspense, lazy, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import Guard from './guard'

// 路由懒加载
export function lazyLoad (importFn: any, meta: any) {
  const Element = lazy(importFn)
  const lazyElement = (
    <Suspense fallback={<div>loading...</div>}>
      <Element _meta={meta}/>
    </Suspense>
  )
  return <Guard element={lazyElement} meta={meta} />
}

// 路由常规加载
export function load (element: JSX.Element, meta: any) {
  return <Guard element={element} meta={meta} />
}

// 设置路由导航守卫函数
let handleRouteBefore: null | Function = null 
export function setRouteBefore (fn: Function) {
  handleRouteBefore = fn
}
export function getRouteBefore () {
  return handleRouteBefore
}

// 路由重定向
export function redirect (path: string) {
  return <Navigate to={path} />
}