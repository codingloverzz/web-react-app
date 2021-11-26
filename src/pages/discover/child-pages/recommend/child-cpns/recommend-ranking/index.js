import React, { memo, useEffect } from 'react'
import ThemeHeaderRecommend from "@/components/theme-header-recommend"
import { RankingWrapper } from "./style"
import { shallowEqual, useDispatch } from 'react-redux'
import TopRanking from '@/components/top-ranking'
import { getTopListAction } from "../../store/actionCreator"
import { useSelector } from 'react-redux'
export default memo(function RecommendRanking() {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单"></ThemeHeaderRecommend>
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
