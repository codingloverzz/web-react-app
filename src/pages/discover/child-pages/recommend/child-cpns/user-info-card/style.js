import styled from "styled-components";

export const UserInfoCardWrapper = styled.div`
height: 165px;
padding: 15px 20px;
border-bottom: 1px solid rgb(178,178,178);

.info{
  display: flex;
  .right{
    margin-left: 20px;
    .nickname{
      font-size: 16px;
      font-weight: 600;
    }
    .btn{
      width: 80px;
      margin-top: 20px;
    }
  }
}
.detail{
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  justify-content: first baseline;
  .detail-item{
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid rgb(244,244,244);
  } 
}
`