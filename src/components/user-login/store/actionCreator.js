import * as actionTypes from "./constants"
import { getUserInfo } from "../../../services/login"

const changeUserInfo = (userInfo) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})

export const getLoginUserInfo = (account, password) => {
  return dispatch => {
    getUserInfo(account, password).then(res => {
      dispatch(changeUserInfo(res))
    })
  }
}