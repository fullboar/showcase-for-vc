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

  document.getElementById('root'),
)
