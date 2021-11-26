import styled from "styled-components";

export const ShowSingerWrapper = styled.div`
margin-top: 10px;
background-color: rgb(250,250,250);
height: 64px;
width: 210px;
border: 1px solid #d3d3d3;
display: flex;
.left{
  height: 62px;
  width: 62px;
}
.info{
  padding: 8px 20px;
  .name{
    color: #333333;
    font-size: 16px;
    font-weight: 600;
    width:100px ;
  }
  .intro{
    color: #666666;
    margin-top: 5px;
    width: 110px;
  }
 
}
&:hover{
    background-color: rgb(244,244,244);
  }
`