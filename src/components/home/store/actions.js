import * as types from './mutation-types'
import  { getUsersData } from '@/services'

export const ActionsSetUser = (context)  => {
    return getUsersData().then(response => {
        context.commit(types.SET_USER, response.body)
    })
}