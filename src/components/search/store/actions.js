import * as types from './mutation-types'
import {getUsersData} from '@/services'

export const ActionsSearch = ({ commit } ,payload) => {
    return getUsersData(payload).then(resp => {
        commit(types.SET_SEARCH, resp)
    })
}