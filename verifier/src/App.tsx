import { Routes, Route } from 'react-router-dom'

import { PageNotFound } from './PageNotFound'
import { QRVerifyPage } from './QRVerifyPage'

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<QRVerifyPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
