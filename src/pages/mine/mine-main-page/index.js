import React, { memo, useEffect } from 'react'
import { Menu } from 'antd';
import { MineMainPageWrapper, MineLeft } from './style'
import { getUserSubCountAction, getUserPlayListAction } from "../store/actionCreators"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImage } from "../../../utils/data-format"
export default memo(function MineMainPage() {
  const { SubMenu } = Menu;
  const { userSubCount, userPlayList } = useSelector(state => ({
    userSubCount: state.getIn(['mine', "userSubCount"]),
    userPlayList: state.getIn(['mine', "userPlayList"]),
  }), shallowEqual)
  const dispatch = useDispatch()
  const userId = window.localStorage.getItem("userId")

  useEffect(() => {
    dispatch(getUserSubCountAction())
    dispatch(getUserPlayListAction(userId))
  }, [dispatch, userId])
  //用户创建的歌单
  //用户收藏的歌单
  const userCreatedPlayList = userPlayList.filter(item => {
    return item.userId === Number(userId)
  })
  const userSubPlayList = userPlayList && userPlayList.filter(item => {
    return item.userId !== Number(userId)
  })
  return (
    <MineMainPageWrapper className="wrap-v2">
      <MineLeft>
        <Menu
          style={{ width: 240 }}
          mode="inline"
          // defaultSelectedKeys={["1"]}
          defaultOpenKeys={["created"]}
        >
          <Menu.Item key="-2"> 我的歌手({userSubCount.artistCount || ""})</Menu.Item>
          <Menu.Item key="-1"> 我的视频({userSubCount.mvCount || ""})</Menu.Item>
          <SubMenu key="created" title={`创建的歌单(${userSubCount.createdPlaylistCount || ""})`}>
            {
              userCreatedPlayList && userCreatedPlayList.map((item, index) => {
                return (
                  <Menu.Item key={index + item.createTime}>
                    <div className="item">
                      <div className="pic">
                        <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                      </div>
                      <div className="info">
                        <div className="info-title text-nowrap">{item.name}</div>
                        <div className="count">{item.trackCount}首</div>
                      </div>
                    </div>
                  </Menu.Item>
                )
              })
            }
          </SubMenu>
          <SubMenu key="sub2" title={`收藏的歌单(${userSubCount.subPlaylistCount || ""})`}>
            {
              userSubPlayList && userSubPlayList.map((item, index) => {
                return (
                  <Menu.Item key={item.createTime}>
                    <div className="item">
                      <div className="pic">
                        <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                      </div>
                      <div className="info">
                        <div className="info-title">{item.name}</div>
                        <div className="count">{item.trackCount}首 by{item.description}</div>
                      </div>
                    </div>
                  </Menu.Item>
                )
              })
            }
          </SubMenu>
        </Menu>
      </MineLeft>
    </MineMainPageWrapper >
  )
})
