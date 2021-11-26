import React, { memo } from 'react'
import { SettleSinger } from "./style"
import ShowSinger from '@/components/showSinger'
import { hotAnchor } from "@/common/local-data"
export default memo(function RecommendHotAnchor() {
  return (
    <SettleSinger>
      <div className="title">
        <div>热门主播</div>
      </div>
      <div className="content">
        {
          hotAnchor.map((item, index) => {
            return <ShowSinger key={index} info={item}></ShowSinger>
          })
        }
      </div>

    </SettleSinger>
  )
})
