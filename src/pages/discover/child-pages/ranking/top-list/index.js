import React, { memo, useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopListInfoAction, getTopListDetailAction } from "../store/actionCreators"
import { TopListWrapper } from "./style"
export default memo(function TopList(props) {
  const { getCommentInfo } = props
  const [currentItem, setCurrentItem] = useState(0)
  const { topListInfo = {} } = useSelector(state => ({
    topListInfo: state.getIn(["ranking", "topListInfo"])
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListInfoAction())
    dispatch(getTopListDetailAction(19723756))

  }, [dispatch])
  const list = topListInfo.list || []


  const itemClick = useCallback((index, item) => {
    setCurrentItem(index)
    dispatch(getTopListDetailAction(item.id))
    getCommentInfo(item.id)
  }, [dispatch, getCommentInfo])
  return (
    <TopListWrapper>
      <div className="title">
        云音乐特色榜
      </div>
      {
        list.slice(0, 4).map((item, index) => {
          return (
            <div className={currentItem === index ? "ranking-item active" : "ranking-item"} key={item.id} onClick={e => itemClick(index, item)}>
              <div className="pic">
                <img src={item.coverImgUrl} alt="" />
              </div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          )
        })
      }
      <div className="title">
        全球媒体榜
      </div>
      {
        list.slice(4,).map((item, index) => {
          return (
            <div className={currentItem === (index + 4) ? "ranking-item active" : "ranking-item"} key={item.id} onClick={e => itemClick(index + 4, item)} >
              <div className="pic">
                <img src={item.coverImgUrl} alt="" />
              </div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          )
        })
      }

    </TopListWrapper>
  )
})
