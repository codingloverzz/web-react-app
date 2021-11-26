import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style"

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>playerSimiSongs</h2>
          <h2>SongContent</h2>
          <h2>下载客户端</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
