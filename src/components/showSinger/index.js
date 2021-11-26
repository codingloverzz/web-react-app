import React, { memo } from 'react'

import { ShowSingerWrapper } from "./style"
export default memo(function ShowSinger(props) {
  const { info } = props
  return (
    <ShowSingerWrapper>
      <div className="left">
        <img src={info.img} alt="" />
      </div>
      <div className="info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="intro text-nowrap">{info.intro}</div>
      </div>
    </ShowSingerWrapper>
  )
})
