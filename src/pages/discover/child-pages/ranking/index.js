import React, { memo, useEffect, useState } from 'react'
import { RankingWrapper, RankingLeft, RankingRight } from "./style"
import TopList from './top-list'
import TopListDetail from './top-list-detail'
import Comment from '@/components/comment'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getCommentInfoAction } from "./store/actionCreators"
import MyPagination from '@/components/my-pagination'
import { BackTop } from 'antd'

export default memo(function Ranking() {
  const [currentId, setCurrentId] = useState(19723756)

  const [current, setCurrent] = useState(1)
  const dispatch = useDispatch()
  const { commentInfo } = useSelector(state => ({
    commentInfo: state.getIn(["ranking", "commentInfo"])
  }), shallowEqual)
  useEffect(() => {
    // dispatch(getCommentInfoAction(19723756, 20))
    dispatch(getCommentInfoAction(currentId, 0))
  }, [dispatch, currentId])
  //当左侧榜单改变时获取对应的评论信息
  const getCommentInfo = (id) => {
    setCurrentId(id)
    //点击左侧列表时把评论页码切换成1
    setCurrent(1)
    dispatch(getCommentInfoAction(currentId, 0))
  }
  const pageChangeCallback = (currentPage) => {
    //当页码改变时获取评论
    setCurrent(currentPage)
    dispatch(getCommentInfoAction(currentId, (current - 1) * 20))
  }
  const total = commentInfo ? commentInfo.total : 0
  return (
    <RankingWrapper>
      <div className="content wrap-v2">
        <RankingLeft>
          <TopList getCommentInfo={getCommentInfo}></TopList>
        </RankingLeft>
        <RankingRight>
          <TopListDetail></TopListDetail>
          <Comment commentInfo={commentInfo}></Comment>
          <div className="pagination">
            <MyPagination current={current} defaultPageSize={20} total={total} pageChangeCallback={pageChangeCallback}></MyPagination>
          </div>
          <BackTop visibilityHeight></BackTop>
        </RankingRight>
      </div>
    </RankingWrapper>
  )
})
