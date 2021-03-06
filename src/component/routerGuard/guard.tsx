import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getRouteBefore } from './fn'

let temp: null | ReactNode = null // 用于防止重复渲染

function Guard (params: { element: JSX.Element, meta: any }) {
  let { element, meta } = params;
  const location = useLocation()
  const { pathname } = location
  meta = meta || {}

  const handleRouteBefore = getRouteBefore()
  if (handleRouteBefore) {
    if (temp === element) {
      return element
    }
    const newPath = handleRouteBefore({ pathname, meta })
    if (newPath && newPath !== pathname) {
      element = <Navigate to={newPath} />
    }
  }

  temp = element
  return element
}

export default Guard