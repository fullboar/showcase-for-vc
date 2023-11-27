import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import './index.css'
import * as Redux from './store/configureStore'
import { KBar } from './utils/KBar'

const { store, persistor } = Redux
const SMode = StrictMode
const PGate = PersistGate
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
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
)
