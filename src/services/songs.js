import request from "./request"


export function getSongsInfo(offset = 0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      limit,
      offset
    }
  })
}