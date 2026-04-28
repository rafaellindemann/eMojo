import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GlobalContextProvider } from './contexts/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Navbar className="sidebar" />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </GlobalContextProvider>
  )
}

export default App
