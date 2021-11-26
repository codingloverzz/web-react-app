import styled from "styled-components";

export const MineMainPageWrapper = styled.div`

border-left: 1px solid rgb(211,211,211);
border-right: 1px solid rgb(211,211,211);
`

export const MineLeft = styled.div`
position: static;
background-color: #fff;
width: 240px;
height: 590px;
overflow: hidden auto;
border-right: 1px solid rgb(211,211,211);
padding-top: 40px;
padding-bottom: 50px;

.title:hover{
  background-color: rgb(238,238,238);
}

.ant-menu .ant-menu-item{
  /* margin-left: -20px; */
  padding-left: 25px !important;
    height: 54px;
    margin:0;
  .ant-menu-title-content .item{
    display: flex;
    align-items: center;
    .info{
      font-size: 12px;
      font-weight: 500;
      line-height:12px ;
      margin-top:5px;
      margin-left: 10px;
      .pic{
        img{
          width: 40px;
          height: 40px;
        }
      }
      .info-title{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        height: 12px;
        width: 135px;
      }
      .count{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        width: 120px;
        color: #999;
        margin-top: 5px;
        height: 12px;
      }
    }
  }
  &.ant-menu-item-selected{
    background-color: rgb(238,238,238) !important;
    border-right: none !important;
  }
  &.ant-menu-item-active{
    background-color: rgb(244,242,242) !important;
  }
}
.ant-menu-inline .ant-menu-selected::after, .ant-menu-inline .ant-menu-item-selected::after{
  display: none;
}
li .ant-menu-title-content{
  font-size: 14px;
  color: #000;
  font-weight: 600;
}
.ant-menu-submenu-title .ant-menu-submenu-arrow{
  right: 95px 
}


`