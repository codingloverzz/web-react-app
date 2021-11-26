import React, { memo } from 'react'
import { SongsCoverWrapper } from "./style"
import { getCount, getSizeImage } from "@/utils/data-format"
export default memo(function SongsCover(props) {
  const { info } = props
  const creator = info.creator || ""
  const url = info.picUrl || info.coverImgUrl
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(url, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
