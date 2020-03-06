import * as types from './mutation-types'
import {getUsersData} from '@/services'

export const ActionsSearch = (payload) => {
    return getUsersData(payload)
}

