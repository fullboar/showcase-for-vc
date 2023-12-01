import { combineReducers } from 'redux'

import connectionSlice from './connection/connectionSlice'
import credentialsSlice from './credentials/credentialsSlice'
import proofSlice from './proof/proofSlice'

export const VERSION = 4

const rootReducer = combineReducers({
  connection: connectionSlice,
  credentials: credentialsSlice,
  proof: proofSlice,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pReducer = (state: any, action: any) => {
  if (action.type === 'persist/REHYDRATE') {
    const storageVersion = action.payload?._persist.version

    if (storageVersion !== VERSION) {
      return rootReducer(undefined, action)
    }

    return rootReducer(action.payload, action)
  }

  if (action.type === 'demo/RESET') {
    return rootReducer(undefined, action)
  }

  return rootReducer(state, action)
}

export default pReducer
