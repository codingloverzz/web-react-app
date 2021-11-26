import styled from "styled-components";

export const MineWrapper = styled.div`


.content{
  height: 982px;
  border-left: 1px solid #636363;
  border-right: 1px solid #636363;
  background-color: #fff;
  padding-top: 100px;
  .pic{
    width: 807px;
    height: 247px;
    margin: 0px auto;
    padding: 50px 0;
    background: url(${require("@/assets/img/mymusic.png").default}) no-repeat
  }
  .btn{
    text-indent: -9999px;
    display: block;
    width: 167px;
    height: 45px;
    margin:-45px 0 0 568px;
    background-position: 0 9999px;
  }
  .btn:hover{
    background: url(${require("@/assets/img/mymusic.png").default}) no-repeat 0 -278px;
  }
}

`