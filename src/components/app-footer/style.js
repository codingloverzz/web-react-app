import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  .content{
    display: flex;
    justify-content: space-between;
  }  

`
export const FooterLeft = styled.div`

  .top-links{
    padding-top: 15px;
  }
  .top-links-item{
    padding:0 10px;
    border-right: 1px solid #ccc;
  }
  
  .intro{
    padding-top: 10px;
    span{
      padding:10px;
    }
  }
  .report{
    padding: 10px 10px;
  }
  .bottom{
    padding: 0 10px;
    .bottom-02{
      margin-left: 10px;
      img{
        width: 15px;
        height: 15px;
      }
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      
      background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`