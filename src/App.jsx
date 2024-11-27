import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import TortePage from './pages/TortePage.jsx'
import Home from './pages/Home.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import DefaultLayout from './components/DefaultLayout.jsx'
import TortaPage from './pages/TortaPage.jsx'
import GlobalContext from './contexts/GlobalContext.jsx'
import './App.css'





function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/torte' element={<TortePage />} />
            <Route path='/torte/:slug' element={<TortaPage />} />
            <Route path='/chisiamo' element={<ChiSiamo />} />
          </Route>
        </Routes>
      </BrowserRouter>







    </>
  )
}

export default App
