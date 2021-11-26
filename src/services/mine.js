import request from "./request"

export function getUserSubCount() {
  return request({
    url: `/user/subcount?cookie=${window.localStorage.getItem("cookie")}`,
  })
}

export function getUserPlayList(uid) {
  return request({
    url: `/user/playlist?cookie=${window.localStorage.getItem("cookie")}`,
    params: {
      uid
    }
  })
}