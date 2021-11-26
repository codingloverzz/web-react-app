import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { MineWrapper } from "./style"
// import UserLogin from "../../components/user-login"
import MineMainPage from './mine-main-page';
export default memo(function MyMine() {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  const { userInfo = {} } = useSelector(state => ({
    userInfo: state.getIn(['login', "userInfo"])
  }), shallowEqual)
  useEffect(() => {
    if (userInfo.code === 200) {
      // setIsModalVisible(false)
    }
  }, [userInfo])
  return (
    <MineWrapper>
      <MineMainPage></MineMainPage>
      {/* {
        userInfo.code === 200 ? (<MineMainPage></MineMainPage>) : (<div className="content wrap-v2">
          <div className="pic"></div>
          <div className="btn" onClick={showModal} >立即登录</div>
          <UserLogin isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}></UserLogin>
        </div>)
      } */}

    </MineWrapper>
  )
})
