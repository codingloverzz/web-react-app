import React, { memo, useState, useEffect } from 'react'
import { headerLinks } from "../../common/local-data"
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderRight, HeaderLeft } from "./style"
import { useSelector, shallowEqual } from 'react-redux';
import { Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons"
import UserLogin from '../user-login'
import { getSizeImage } from "../../utils/data-format"
export default memo(function MyAppHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  const { userInfo = {} } = useSelector(state => ({
    userInfo: state.getIn(["login", "userInfo"])
  }), shallowEqual)
  useEffect(() => {
    if (userInfo.code === 200) {
      setIsModalVisible(false)
      window.localStorage.setItem("cookie", encodeURIComponent(userInfo.cookie))
      window.localStorage.setItem("userId", userInfo.account.id)
    }
  }, [userInfo, setIsModalVisible])
  return (
    <HeaderWrapper>
      <div className="content  wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">.</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <a href="#1" className="center">创作者中心</a>
          {
            userInfo.code === 200 ? <div className="avatar">
              <img src={getSizeImage(userInfo.profile.avatarUrl, 30)} alt="" />
            </div> : <div onClick={e => showModal()} className="login-btn">登录</div>
          }


        </HeaderRight>

      </div>
      {/* 红色分割线 */}
      <div className="divider"></div>
      <UserLogin
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
      </UserLogin>

    </HeaderWrapper>
  )
})
