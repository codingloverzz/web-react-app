import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getTopBannerAction } from "../../store/actionCreator"
import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style"

export default memo(function TopBanner() {
  //记录轮播图滚到哪里了
  const [currentIndex, setCurrentIndex] = useState(0)

  //通过这两个hook，就可以不用写mapStateToProps和mapDispatchToProps了
  const dispatch = useDispatch()
  const { topBanners = [] } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  //获取banner组件
  const bannerRef = useRef()
  //定义轮播图切换的回调函数
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  //获取高斯模糊的图片
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                )
              })
            }
          </Carousel>,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
