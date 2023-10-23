import { newTracker, enableActivityTracking, trackPageView } from '@snowplow/browser-tracker'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './index.css'
import * as Redux from './store/configureStore'
import { KBar } from './utils/KBar'

const { store, persistor } = Redux
const SMode = StrictMode as any
const PGate = PersistGate as any
newTracker('sp1', 'spm.apps.gov.bc.ca', {
  appId: 'Snowplow_standalone_DIG',
  cookieLifetime: 86400 * 548,
  platform: 'web',
  contexts: {
    webPage: true,
  },
})
enableActivityTracking({ minimumVisitLength: 15, heartbeatDelay: 30 })
trackPageView()
render(
  <SMode>
    <Provider store={store}>
      <PGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <KBar>
            <App />
          </KBar>
        </BrowserRouter>
      </PGate>
    </Provider>
  </SMode>,

  document.getElementById('root')
)
