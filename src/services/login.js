import request from "./request"

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}
export function getUserInfo(account, psd) {
  return request({
    url: "/login/cellphone",
    params: {
      phone: account,
      password: psd
    }
  })
}