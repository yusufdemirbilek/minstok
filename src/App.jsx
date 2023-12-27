import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import StokDuzenle from './pages/StokDuzenle';
import QrOlustur from './pages/QrOlustur';
import Navbar from './components/Navbar';
import StokArama from './pages/StokArama';
import ChangePassword from './pages/ChangePassword';
function App() {

  // Not : Bağladıktan sonra Protected ı bu şekilde kullanabilirsin.
//   <Route
//   path="/profile"
//   element={
//     <Protected>
//       <Navbar />
//       <Profile />
//     </Protected>
//   }
// />
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
 
      <Route path='/stokduzenle' element={<StokDuzenle/>}/>
      <Route path='/qrolustur' element={<QrOlustur/>}/>
      <Route path='/stokarama' element={<StokArama/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
