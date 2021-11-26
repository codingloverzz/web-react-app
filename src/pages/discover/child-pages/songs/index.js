import React, { memo, useEffect, useState } from 'react'
import { SongsWrapper } from "./style"
import { getSongsInfoAction } from "./store/actionCreators"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SongsCover from "@/components/songs-cover"
import MyPagination from "@/components/my-pagination"
import { BackTop } from 'antd';
export default memo(function Sons() {
  const [current, setCurrent] = useState(1)
  const dispatch = useDispatch()
  const { songsInfo } = useSelector(state => ({
    songsInfo: state.getIn(['songs', "songsInfo"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getSongsInfoAction(0, 35))
  }, [dispatch])
  const playlists = songsInfo.playlists || []
  const pageChangeCallback = (currentPage) => {
    setCurrent(currentPage)
    dispatch(getSongsInfoAction((currentPage - 1) * 35, 35))
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  return (
    <SongsWrapper >
      <div className="content wrap-v2">
        <div className="header">
          <div className="title">
            全部
          </div>
          <div className="hot">
            <a href="#/">热门</a>
          </div>
        </div>
        <div className="list">
          {
            playlists.map((item, index) => {
              return (<div key={index} className="item">
                <SongsCover info={item}></SongsCover>
              </div>)
            })
          }
        </div>
        <div className="pagination">
          <MyPagination current={current} defaultCurrent={1} defaultPageSize={35} total={songsInfo.total} pageChangeCallback={pageChangeCallback} ></MyPagination>
        </div>
        <div className="back">
          <BackTop visibilityHeight></BackTop>
        </div>
      </div>

    </SongsWrapper>
  )
})
