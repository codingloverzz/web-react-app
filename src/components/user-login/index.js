import React, { memo, useState } from 'react'
import { Modal, Button, Input, Spin } from 'antd';
import { UserLoginWrapper } from "./style"
import { useDispatch } from 'react-redux';
import { getLoginUserInfo } from "./store/actionCreator"
export default memo(function UserLogin(props) {
  const { isModalVisible, setIsModalVisible } = props
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleChange = (e, tag) => {
    if (tag === 0) {
      setAccount(e.target.value)
    }
    else {
      setPassword(e.target.value)
    }
  }
  const handleLogin = () => {
    dispatch(getLoginUserInfo(account, password))
    setIsLoading(true)
  }

  return (
    <UserLoginWrapper>

      <Modal destroyOnClose title="手机登录" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        {/* <Modal title="手机登录" visible={isModalVisible} footer={null} > */}
        <div>
          <div className="account">
            <Input onChange={e => handleChange(e, 0)} placeholder="请输入手机号" ></Input>
          </div>
          <div className="password">
            <Input.Password onChange={e => handleChange(e, 1)} placeholder="请输入密码" ></Input.Password>
          </div>
          <div className="btn">
            <Spin spinning={isLoading}></Spin>
            <Button onClick={handleLogin}>登录</Button>
          </div>
        </div>

      </Modal>

    </UserLoginWrapper>
  )
})
