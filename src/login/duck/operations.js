/**
 * Here, we define any logic surrounding our actions and side effects, including async logic. If an action has no surrounding logic,
 * then we simply forward them as is, like loginRequest.
 */

import {Creators} from './actions'

const loginRequest = Creators.loginRequest

export default {
    loginRequest
}