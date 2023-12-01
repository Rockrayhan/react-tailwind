
import { Outlet } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Header from './Shared/Header'

function App() {
  

  return (
    <div>
<Header></Header>
<Outlet></Outlet>
    </div>
  )
}

export default App
