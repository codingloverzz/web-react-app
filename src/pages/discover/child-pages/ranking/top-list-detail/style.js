import styled from "styled-components";

export const TopListDetailWrapper = styled.div`

.header{
  height: 200px;
  width: 100%;
  display: flex;
  .pic{
    img{
      width: 150px;
      height: 150px;
    }
    
  }
  .info{
    margin-left: 20px;
    .title{
      font-size: 20px;
      margin-top: 20px;

      font-weight: normal;
    }
    .update-time{
      font-size: 12px;
      color: #666;
      margin-top: 15px;
    }
    .operators{
      margin-top: 25px;
     
      .btn_1{
        color: #333;
        width: 85px;
        height: 31px;
        margin:0 5px;
        background-position: right -388px;
      }
      .btn_2{
        height: 30px;
        text-indent: 20px;
        background-position: 0 -977px;
        margin-right: 10px;
      }
      .btn_3{
        height: 30px;
        text-indent: 20px;
        background-position: 0 -1225px;
        margin-right: 10px;
      }
      .btn_4{
        width: 60px;
        height: 30px;
        text-indent: 20px;
        background-position: 0 -2761px;
        margin-right: 10px;
      }
      .btn_5{
        height: 30px;
        text-indent: 20px;
        background-position: 0 -1465px;
        margin-right: 10px;
      }
    }
  }
}

.song-list{
  .head{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  }
  .title{
    color: #333;
    font-size: 20px;
  }
  .song-count{
    color: #666;
    font-size: 12px;
    margin-right: 400px;
    margin-top: 6px;
  }
  .play-count{
    color: #666;
    span{
      color: #c20c0c;
    }
  }
 
  .content{
    width: 660px;
    .table-class{
      border-collapse: collapse;
      thead,th{
        background-color: rgb(245,245,245);
        border: 1px solid rgb(230,230,230);
        border-top: none;
        text-align: left;
        height: 34px;
        padding: 0 10px;
      }
      tr{
       height: 30px;
       background-color: rgb(247,247,247);
        border-left: 1px solid rgb(230,230,230);
        border-right: 1px solid rgb(230,230,230);
        td{
          padding: 0px 10px;
          img{
            margin: 10px 0;
            width: 50px;
            height: 50px;
          }
          
          .play{
            display: inline-block;
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            line-height: 70px;
            margin: 0 10px;
          }
          div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon{
            display: inline-block;
            width: 32px;
            height: 17px;
            background-position: -67px -283px;
          }
          }
          .song-name{
            display: flex;
            align-items: center;
            width: 326px;
            .name{
              display: inline-block;
              width: 230px;
            }
          }
        }
      }

      tr:nth-child(2n+1){
         background-color:#eee
      }
      .rank-class{
        width: 78px;
      }
      .title-class{
        width: 326px;
      }
      .duration-class{
        width: 91px;
      }
      .singer-class{
        width: 174px;
      }
    }
  }
 
}
border-bottom: 1px solid #d3d3d3;
`