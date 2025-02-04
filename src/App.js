import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import GQNN from './Components/GQNN';
import GQNN_Docs from './Components/GQNN_Docs';
function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gqnn" element={<GQNN />} />
      <Route path="/gqnn_docs" element={<GQNN_Docs />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
