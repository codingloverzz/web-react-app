import React, { memo, useState } from 'react'
import UserLogin from '@/components/user-login';

import { UserLoginWrapper } from "./style"
export default memo(function RecommendUserLogin() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <UserLoginWrapper className="sprite_02">
      <div>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div onClick={showModal} href="#/" className="login sprite_02" >用户登录</div>
      <UserLogin isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} ></UserLogin>
    </UserLoginWrapper>
  )
})
