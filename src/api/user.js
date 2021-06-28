import axios from './axios'

/**
 * 获取用户信息
 * @param {module:Model~user} data
 * @returns {*}
 */

export const UIL_USER = '/gateway/openimport/open/person/getPersonInfoByJobNo'
export const API_USER = (params, header = {}) => axios.post(UIL_USER, params, header)

export const URL_GROUP = '/xuntong/ecLite/convers/v3/createGroup.action'
export const API_GROUP_CREAT = (params, header = {}) => axios.post(UIL_USER, params, header)

export const URL_GROUP_LIST = '/openapi/client/v1/groupassist/classify/listClassify'
export const API_GROUP_LIST = (params, header = {}) => axios.post(UIL_USER, params, header)
