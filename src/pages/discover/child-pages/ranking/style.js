import styled from "styled-components";


export const RankingWrapper = styled.div`
height: 5500px;
.content {
  display: flex;
}
`
export const RankingLeft = styled.div`
  width: 240px;
  height: 5500px;

  color: #333333;
  border-left: 1px solid rgb(211,211,211);
  border-right: 1px solid rgb(211,211,211);
  padding-top: 30px;
 
`
export const RankingRight = styled.div`
  width: 740px;
  height: 5500px;

  padding: 40px;
  border-right: 1px solid rgb(211,211,211);
  .pagination{
    margin-top: 20px;
    text-align: center;
  }
  .ant-back-top{
  position: fixed;
  right:200px;
  bottom: 80px;
}
`