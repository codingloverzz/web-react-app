import styled from "styled-components";

export const TopListWrapper = styled.div`

.title{
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
  }
  .ranking-item{
    width: 100%;
    height: 62px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: rgb(249,249,249);
    &:hover{
      background-color: rgb(244,242,242)  
    }
    &.active{
      background-color: rgb(230,230,230)
    }
    .pic{
      img{
        width: 40px;
        height: 40px;
      }
    }
    .info{
      margin-left: 10px;
      .name{
        height: 20px;
        color: #000;
        
      }
      .update{
        display: flex;
        align-items: flex-end;
        height: 20px;
        color: #999;
      }
    }
  }



`