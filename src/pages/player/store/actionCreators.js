
import { getSongDetail, getLyric } from "@/services/player"
import * as actionTypes from "./constants"

import { getRandomNum } from "../../../utils/math-util"
import { parseLyric } from "../../../utils/parse-lyric"
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})


export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
    switch (sequence) {
      case 1:
        let randomIndex = getRandomNum(playList.length)
        console.log(randomIndex);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNum(playList.length)
        }
        currentSongIndex = randomIndex
        //随机播放
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    //请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    //根据id查找playlist中是否有该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)
    //判断是否找到该歌曲
    let song = null
    if (songIndex !== -1) { //找到了
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(song.id))

    } else {        //没找到
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0]
        if (!song) return

        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
        //3.请求该歌曲的歌词
        if (!song) return
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRICLIST,
  lyricList
})

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})