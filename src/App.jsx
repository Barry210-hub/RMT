import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
        <Routes>
          <Route  path='/RMT'  element={  <Home />} />
        </Routes>
    </div>
  )
}

export default App
