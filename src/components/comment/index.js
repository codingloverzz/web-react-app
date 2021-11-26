import React, { memo } from 'react'
import { CommentWrapper } from "./style"
import { getSizeImage, timestampToTime } from "@/utils/data-format"
export default memo(function Comment(props) {
  const { commentInfo = {} } = props
  const commentList = commentInfo.comments || []
  return (
    <CommentWrapper>
      <div className="header">
        <div className="header-title">
          评论
        </div>
        <div className="comment-count">
          共<span>{commentInfo.total}</span>条评论
        </div>
      </div>
      {/* <div className="comment-list">
        <div className="comment-list-title">
          最新评论
        </div>
        <div className="comment-item">
          <div className="avatar">
            <img src="https://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=50y50" alt="" />
          </div>
          <div className="right">
            <div className="item-top">
              <a href="#/" className="nickname">账号已注销：</a>
              震惊！许嵩殴打黑暗势力成功登上新歌榜第一具体参看《大千世界》MV
            </div>
            <div className="item-bottom">
              <div className="time">2018年6月2日</div>
              <div className="operate">
                <a href="#/" className="like">
                  <i className="icon"></i>
                  (19156)
                </a>
                <a href="#/" className="reply">
                  回复
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="comment-list">
        <div className="comment-list-title">
          最新评论
        </div>
        {
          commentList.map((item, index) => {
            return (
              <div key={index} className="comment-item">
                <div className="avatar">
                  <img src={getSizeImage(item.user.avatarUrl, 50)} alt="" />
                </div>
                <div className="right">
                  <div className="item-top">
                    <a href="#/" className="nickname">{item.user.nickname}：</a>
                    {item.content}
                  </div>
                  <div className="item-bottom">
                    <div className="time">{timestampToTime(item.time)}</div>
                    <div className="operate">
                      <a href="#/" className="like">
                        <i className="icon"></i>
                        {
                          item.likedCount ? <span>({item.likedCount})</span> : ""
                        }
                      </a>
                      <a href="#/" className="reply">
                        回复
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>






    </CommentWrapper>
  )
})
