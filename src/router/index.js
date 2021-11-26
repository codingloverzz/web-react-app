import React from 'react';

import { Redirect } from "react-router-dom";
const MyDiscover = React.lazy(() => import("../pages/discover"))
const MyMine = React.lazy(() => import("../pages/mine"))
const MyFriend = React.lazy(() => import("../pages/friend"))
const Recommend = React.lazy(() => import("../pages/discover/child-pages/recommend"))
const Ranking = React.lazy(() => import("../pages/discover/child-pages/ranking"))
const Artist = React.lazy(() => import("../pages/discover/child-pages/artist"))
const Djradio = React.lazy(() => import("../pages/discover/child-pages/djradio"))
const Album = React.lazy(() => import("../pages/discover/child-pages/album"))
const Songs = React.lazy(() => import("../pages/discover/child-pages/songs"))
const Player = React.lazy(() => import("../pages/player"))
// import MyDiscover from "../pages/discover"
// import MyMine from "../pages/mine"
// import MyFriend from "../pages/friend"
// import Recommend from "../pages/discover/child-pages/recommend"
// import Ranking from "../pages/discover/child-pages/ranking"
// import Artist from "../pages/discover/child-pages/artist"
// import Djradio from "../pages/discover/child-pages/djradio"
// import Album from "../pages/discover/child-pages/album"
// import Songs from "../pages/discover/child-pages/songs"
// import Player from '../pages/player';
const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },

  {
    path: "/discover",
    component: MyDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },
  {
    path: "/mine",
    component: MyMine
  },
  {
    path: "/friend",
    component: MyFriend
  },
]

export default routes


