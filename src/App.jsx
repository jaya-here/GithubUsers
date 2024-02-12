import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import User from './pages/Userdetail';
import Userlist from './pages/Userlist';
import Errorboundary from './components/Utils/Errorboundary';
import Error from './components/Utils/Error';

function App() {

  return (
    <>
    <Errorboundary fallback={<Error></Error>}>
    <Routes>
      <Route index element={
        <Navigate replace to="userlist"/>} />
      <Route path="userlist" element={<Userlist/>}></Route>
      <Route path="userdetails/:username" element={<User/>}></Route>
      <Route path="*" element={<Error message='Page not found'></Error>} />
    </Routes>
    </Errorboundary>
    </>
  );
}

export default App
