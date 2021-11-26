import React, { memo } from 'react'
import { SettleSinger } from "./style"
import ShowSinger from '@/components/showSinger'
import { settleSingers } from "@/common/local-data"
export default memo(function RecommendSettleSinger() {
  return (
    <SettleSinger>
      <div className="title">
        <div>入驻歌手</div>
        <div>查看全部&gt;</div>
      </div>
      <div className="content">
        {
          settleSingers.map((item, index) => {
            return <ShowSinger key={index} info={item}></ShowSinger>
          })
        }
      </div>

    </SettleSinger>
  )
})
