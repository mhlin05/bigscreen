import request from '@/utils/request'

export function updateControlNodeStatu(uusid, greenhouseID, statusname, statu) {
    return request({
      url: '/testBackend/api/controlernodedata/update',
      method: 'get',
      params: { uusid, greenhouseID, statusname, statu },
      baseURL: 'http://116.62.9.209:8080'
    })
  }

  export function fetchControlNodeByuusid(uusid) {
    return request({
      url: '/testBackend/api/controlernodedata/queryById',
      method: 'get',
      params: { uusid },
      baseURL: 'http://116.62.9.209:8080'
    })
  }