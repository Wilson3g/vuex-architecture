import * as types from './mutation-types'
import { getUsersData } from '@/services'

export const ActionsSearch = ({ commit }, payload) => {
    console.log(payload)
    commit(types.SET_SEARCH, payload)
}