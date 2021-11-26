import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from "./style"
import { HOT_RECOMMEND_LIMIT } from "@/common/contants"
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreator'

import SongsCover from '@/components/songs-cover'
export default memo(function HotRecommend() {

  const { hotRecommends = [] } = useSelector(state => (
    {

      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }), shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="热门推荐" keywords={['华语', '民谣', '电子']}></ThemeHeaderRecommend>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item}></SongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
