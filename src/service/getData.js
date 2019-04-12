/*
 * 获取数据
 * */
export const getmusic = (word) => fetch('/apy?id=' + word + '&type=' + 'song')

export const getfast = (word) => fetch('/apy?id=' + word + '&type=' + 'song')

export const register = (params) => fetch('/apx/register', params)

export const login = (params) => fetch('/apx/login', params)
export const gw = (params) => fetch('/apx/gw')
export const news = (params) => fetch('/apx/gw')
export const addtopic = (params) => fetch('/apx/topic/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
})
export const gettopic = (params) => fetch('/apx/topic/look', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: params
})
export const gettopicById = (params) => fetch('/apx/topic/topicdetail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: params
})
export const getuser = (params) => fetch(`/apx/user/get?${params}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const addReply = (params) => fetch('/apx/reply/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: params
})
export const getReply = (params) => fetch('/apx/reply/read', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: params
})