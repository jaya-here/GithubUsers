import './App.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import User from './pages/User'
import Userlist from './pages/Userlist'

function App() {

  return (
    <>
    <Routes>
      <Route index element={
        <Navigate replace to="userlist"/>} />
      <Route path="userlist" element={<Userlist/>}></Route>
      <Route path="user/:username" element={<User/>}></Route>
    </Routes>
    </>
  )
}

export default App
