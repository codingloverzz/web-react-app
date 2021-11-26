import { combineReducers } from "redux-immutable"


import { reducer as recommendRecuder } from "../pages/discover/child-pages/recommend/store"

import { reducer as playerReducer } from "../pages/player/store/reducer"

import { reducer as loginReducer } from "../components/user-login/store"
import { reducer as rankingReducer } from "../pages/discover/child-pages/ranking/store"
import { reducer as songsReducer } from "../pages/discover/child-pages/songs/store"
import { reducer as mineReducer } from "../pages/mine/store"
const cReducer = combineReducers({
  recommend: recommendRecuder,
  player: playerReducer,
  login: loginReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  mine: mineReducer
})

export default cReducer