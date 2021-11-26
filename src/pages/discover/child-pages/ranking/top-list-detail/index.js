import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { TopListDetailWrapper } from "./style"
import { formatMonthDay, getSizeImage, formatMinuteSecond } from "@/utils/data-format"
import { getSongDetailAction } from "@/pages/player/store/actionCreators"
import { useDispatch } from 'react-redux'


export default memo(function TopListDetail() {
  const { topListDetail } = useSelector(state => ({
    topListDetail: state.getIn(['ranking', 'topListDetail'])
  }), shallowEqual)
  const dispatch = useDispatch()
  const tracks = topListDetail.tracks || [];
  const play = (item) => {
    dispatch(getSongDetailAction(item.id))
    console.log(item.id);
  }
  return (
    <TopListDetailWrapper>
      <div className="header">
        <div className="pic sprite_cover">
          <img src={topListDetail.coverImgUrl} alt="" />
        </div>
        <div className="info">
          <div className="title">
            {topListDetail.name}
          </div>
          <div className="update-time">
            最近更新：{formatMonthDay(1635486127165)}
          </div>
          <div className="operators">
            <button className="btn btn_1 sprite_button">播放</button>
            <button className="btn btn_2 sprite_button">({topListDetail.subscribedCount})</button>
            <button className="btn btn_3 sprite_button">({topListDetail.shareCount})</button>
            <button className="btn btn_4 sprite_button">下载</button>
            <button className="btn btn_5 sprite_button">({topListDetail.commentCount})</button>
          </div>
        </div>
      </div>
      <div className="song-list">
        <div className="head">
          <div className="title">歌曲列表</div>
          <div className="song-count">{topListDetail.trackCount}首歌</div>
          <div className="play-count">播放:<span>{topListDetail.playCount}</span>次</div>
        </div>
        <div className="content">
          <table className="table-class">
            <thead>
              <tr>
                <th className="rank-class"></th>
                <th className="title-class">标题</th>
                <th className="duration-class">时长</th>
                <th className="singer-class">歌手</th>
              </tr>
            </thead>
            <tbody>
              {
                tracks.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <div>
                          <span>{index + 1}</span>
                          <span className="icon sprite_icon2"></span>
                        </div>
                      </td>
                      <td>
                        <span className="song-name">
                          {index < 3 ?
                            <img src={getSizeImage(item.al.picUrl, 50)} alt="" /> : ""
                          }
                          <span onClick={e => play(item)} className="play sprite_table"></span>
                          <span className="name text-nowrap">{item.name}</span>
                        </span>
                      </td>
                      <td>{formatMinuteSecond(item.dt)}</td>
                      <td>{item.ar[0].name}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </TopListDetailWrapper >
  )
})
