import React, { memo } from 'react'
import { Button } from 'antd'
import { UserInfoCardWrapper } from "./style"
import { getSizeImage } from "@/utils/data-format"
export default memo(function UserInfoCard(props) {
  const { userInfo } = props
  return (
    <UserInfoCardWrapper>
      <div className="info">
        <div className="left">
          <img src={getSizeImage(userInfo.profile.avatarUrl, 80)} alt="" />
        </div>
        <div className="right">
          <div className="nickname">{userInfo.profile.nickname}</div>
          <Button className="btn">签到</Button>
        </div>

      </div>
      <div className="detail">
        <div className="detail-item">
          <div>
            {userInfo.profile.eventCount}
          </div>
          <div>动态</div>
        </div>
        <div className="detail-item">
          <div>
            {userInfo.profile.follows}
          </div>
          <div>关注</div>
        </div>
        <div className="detail-item">
          <div>
            {userInfo.profile.followeds}
          </div>
          <div>粉丝</div>
        </div>
      </div>
    </UserInfoCardWrapper>
  )
})
