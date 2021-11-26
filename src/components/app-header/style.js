import styled from "styled-components"


export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  background-color: #242424;
  color:#fff;
  .content{
    height: 70px;
    display: flex;

    justify-content: space-between;
  }
  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  .logo{
    display: block;
    width: 176px;
    height: 59px;
    background-position: 0 0;
  }
  .select-list{
    display: flex;
    line-height: 70px;
    .select-item{
      position: relative;
      a{
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a{
        position: relative;
        ::after{
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png").default});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,a.active{
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }
      .active .icon{
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%,0);
        background-position: -226px 0;
      }
    }
    
  }

`
export const HeaderRight = styled.div`
 display: flex;
 align-items: center;
 font-size: 12px;
 color: #ccc;
 .login-btn{
   cursor: pointer;
 }
 .search{
   width: 158px;
   height: 32px;
   border-radius: 16px;
   input{
     ::placeholder{
       font-size: 12px;
     }
   }
 }
 .center{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 90px;
   height: 32px;
   color: #ccc;
   border: 1px solid #4f4f4f;
   border-radius: 16px;
   margin: 0 16px;
 }
 .center:hover{
   text-decoration: none;
   border-color: #fff;
 }
 .avatar{
   img{
     border-radius: 30px;
     width: 30px;
     height: 30px;
   }
 }
`