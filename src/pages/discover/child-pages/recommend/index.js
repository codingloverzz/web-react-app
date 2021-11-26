import React, { memo } from 'react'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style"
import TopBanner from './child-cpns/top-banner'
import HotRecommend from './child-cpns/hot-recommend'
import NewAlbum from './child-cpns/new-album'
import RecommendRanking from "./child-cpns/recommend-ranking"
import RecommendHotAnchor from "./child-cpns/hot-anchor"
import RecommendSettleSinger from "./child-cpns/settle-singer"
import RecommendUserLogin from "./child-cpns/user-login"
// import UserLogin from '@/components/user-login'
import UserInfoCard from './child-cpns/user-info-card'
import { useSelector, shallowEqual } from 'react-redux'


function Recommend(props) {
  const { userInfo = {} } = useSelector(state => ({
    userInfo: state.getIn(["login", "userInfo"])
  }), shallowEqual)

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight>


          {
            userInfo.code === 200 ? <UserInfoCard userInfo={userInfo}></UserInfoCard> : <RecommendUserLogin></RecommendUserLogin>
          }
          <RecommendSettleSinger></RecommendSettleSinger>
          <RecommendHotAnchor></RecommendHotAnchor>
        </RecommendRight>
      </Content>
      {/* <UserLogin></UserLogin> */}
    </RecommendWrapper>
  )
}

export default memo(Recommend)
// function Recommend(props) {
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [])
//   return (
//     <div>
//       <h2>Recommend{topBanners.length}</h2>

//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))