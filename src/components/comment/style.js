import styled from "styled-components";

export const CommentWrapper = styled.div`
  margin-top: 25px;
.header{
  display: flex;
  height: 35px;
  align-items: center;
  .header-title{
    font-size: 20px;
  }
  .comment-count{
    margin-left: 20px;
    color: #666666;
  }
  border-bottom: 2px solid #c20c0c;
}

.comment-list{
  .comment-list-title{
    height: 21px;
    font-weight: 600;
    border-bottom: 1px solid #cfcfcf;
    color: #333;
  }
  .comment-item{
    display: flex;
    min-height: 84px;
    padding: 15px 0;
    border-bottom: 1px dotted #ccc;
    .right{
      margin-left: 10px;
      .item-top{
      width: 600px;
      .nickname{
      color: #0c73c2;
      }
    }
    .item-bottom{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .time{
        color: rgb(179,153,166);
      }
      .operate{
        display: flex;
        .like{
          display: flex;
          border-right: 1px solid #d3d3d3;
          padding: 0 10px;
          .icon{
            display: inline-block;
            width: 17px;
            height: 17px;
            background:url(${require("@/assets/img/icon2.png").default}) no-repeat -150px 0 ;
            
          }
        }
        .reply{
          margin-left: 10px;
        }
      }
    }
    }
   
    
  }
}
`