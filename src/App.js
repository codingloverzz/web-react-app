import React, { memo, Suspense } from 'react'
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'
import store from "./store"

import routes from './router'

import MyAppHeader from "@/components/app-header"

import MyAppFooter from "@/components/app-footer"

import AppPlayerBar from './pages/player/app-player-bar'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MyAppHeader />
        <Suspense fallback={<div>没加载苏来哈哈</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <MyAppFooter />
        <AppPlayerBar />

      </HashRouter>
    </Provider>
  )
})
