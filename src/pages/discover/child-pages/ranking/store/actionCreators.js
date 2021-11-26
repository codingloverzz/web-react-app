import * as actionTypes from "./constants"

import { getTopListInfo, getTopListDetail, getCommentInfo } from "@/services/ranking"

const changeTopListInfoAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST_INFO,
  topListInfo: res
})

export const getTopListInfoAction = () => {
  return dispatch => {
    getTopListInfo().then(res => {
      dispatch(changeTopListInfoAction(res))
    })
  }
}
const changeTopListDetailAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST_DETAIL,
  topListDetail: res.playlist
})
export const getTopListDetailAction = (id) => {
  return dispatch => {
    getTopListDetail(id).then(res => {
      dispatch(changeTopListDetailAction(res))
    })
  }
}

const changeCommentInfoAction = (res) => ({
  type: actionTypes.CHANGE_COMMENT_INFO,
  commentInfo: res
})
export const getCommentInfoAction = (id, offset) => {
  return dispatch => {
    getCommentInfo(id, offset).then(res => {
      dispatch(changeCommentInfoAction(res))
    })
  }
}