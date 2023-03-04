import { Outlet, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { CartasAPIProvider } from './Common/API'
import Display from './Components/Display'
import Mainpage from './Components/Mainpage'
import Navbar from './Components/Navbar'
import './index.scss'

function App() {

  return (
    <>
      <CartasAPIProvider>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<><Navbar/> <Outlet/></>}>
            <Route index element={<Mainpage />}/>
            <Route path="/carta/:id" element={<Display />}/>
          </Route>

          <Route path="*" element={<h2>Not found</h2>}/>
          
        </Routes>

      </BrowserRouter>
      </CartasAPIProvider>
    </>
  )
}

export default App
