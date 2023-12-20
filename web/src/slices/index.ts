import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import charactersSlice from './characters/charactersSlice'
import connectionSlice from './connection/connectionSlice'
import credentialsSlice from './credentials/credentialsSlice'
import onboardingSlice from './onboarding/onboardingSlice'
import preferencesSlice from './preferences/preferencesSlice'
import proofSlice from './proof/proofSlice'
import sectionSlice from './section/sectionSlice'
import useCaseSlice from './useCases/useCasesSlice'
import walletsSlice from './wallets/walletsSlice'

export const VERSION = 4

const rootReducer = combineReducers({
  wallets: walletsSlice,
  characters: charactersSlice,
  connection: connectionSlice,
  credentials: credentialsSlice,
  onboarding: onboardingSlice,
  preferences: preferencesSlice,
  proof: proofSlice,
  section: sectionSlice,
  useCases: useCaseSlice,
})

const persistConfig = {
  key: 'root',
  version: VERSION,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const pReducer = (state: any, action: any) => {
  if (action.type === 'persist/REHYDRATE') {
    const storageVersion = action.payload?._persist.version

    if (storageVersion !== VERSION) {
      return persistedReducer(undefined, action)
    }

    return persistedReducer(action.payload, action)
  }

  if (action.type === 'demo/RESET') {
    return persistedReducer(undefined, action)
  }

  return persistedReducer(state, action)
}

export default pReducer
