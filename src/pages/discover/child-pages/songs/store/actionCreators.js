
import * as actionTypes from "./constants"
import { getSongsInfo } from "@/services/songs"



const changeSongsInfoAction = (res) => ({
  type: actionTypes.CHANGE_SONGS_INFO,
  songsInfo: res
})
export const getSongsInfoAction = (offset, limit) => {
  return dispatch => {
    getSongsInfo(offset, limit).then(res => {
      dispatch(changeSongsInfoAction(res))
    })

  }
}