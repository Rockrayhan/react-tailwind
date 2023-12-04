
import { Outlet } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

function App() {
  

  return (
    <div>
    <header>
      
    </header>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default App
