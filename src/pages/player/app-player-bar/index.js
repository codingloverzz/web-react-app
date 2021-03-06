import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from "./style"
import { getSizeImage, formatDate, getPlaySong } from "@/utils/data-format"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators';
import { NavLink } from 'react-router-dom';

import { message } from 'antd';

export default memo(function AppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(['player', 'sequence']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricIndex: state.getIn(['player', "currentLyricIndex"])
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(1859245776))
  }, [dispatch])

  const audioRef = useRef()
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ""
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime, "mm:ss")
  //处理函数
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChanging) {
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }
    //获取当前歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break
      }
    }
    if (currentLyricIndex !== i - 1) {
      // console.log(i - 1);
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        content: content,
        duration: 0,
        key: "lyric",
        className: "lyric-class"
      })

    }
  }
  const sliderChange = useCallback(value => {
    setIsChanging(true)
    const currentTime = value / 100 * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }, [duration])
  const sliderAfterChange = useCallback(value => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) { //单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)

    })
  }, [currentSong])
  // const progress = currentTime / duration * 100

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded(e)} />
    </PlaybarWrapper>
  )
})

