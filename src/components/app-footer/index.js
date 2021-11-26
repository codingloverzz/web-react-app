import React, { memo } from 'react'
import { footerLinks, footerImages } from "../../common/local-data"
import { FooterLeft, FooterRight, FooterWrapper } from "./style"
export default memo(function MyAppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="top-links">
            {
              footerLinks.map((item, index) => {
                return <a key={item.title} className="top-links-item" href={item.link}>{item.title}</a>
              })
            }
          </div>
          <div className="intro">
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516 &nbsp;&nbsp;&nbsp;举报邮箱：ncm5990@163.com</span>
          </div>
          <div className="bottom">
            <a href="https://beian.miit.gov.cn/">粤B2-20090191-18  工业和信息化部备案管理系统网站 </a>
            <a className="bottom-02" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
              <img src="https://s2.music.126.net/style/web2/img/3rd/police.png?546b40805ab9aba9cce6fc9d111792c6" alt="" />
            </a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"> 浙公网安备 33010902002564号</a>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.title}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
