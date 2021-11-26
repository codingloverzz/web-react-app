import styled from "styled-components";

export const SongsWrapper = styled.div`
background-color: rgb(245,245,245);
.content{
  padding: 40px;
  border-left: 1px solid rgb(211,211,211);
  border-right: 1px solid rgb(211,211,211);
  background-color: rgb(255,255,255);
}

.header{
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  justify-content: space-between;
  .title{
    font-size: 24px;
  }
  .hot{
    font-size: 12px;
    a{
      display: inline-block;
      color: #Fff;
      height: 29px;
      width: 46px;
      background-color:#c20c0c;
      border-radius: 3px;
      text-align: center;
      line-height: 29px;
    }
  }
}

.list{
  width: 980px;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 190px;
    height: 218px;
  }
  
}
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