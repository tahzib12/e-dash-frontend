import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent /> } >
          <Route path='/' element={<h1>Product listing component</h1>} />
          <Route path='/product' element={<h1>Add Product listing component</h1>} />
          <Route path='/update' element={<h1>Update Product listing component</h1>} />
          <Route path='/logout' element={<h1>Logout Product listing component</h1>} />
          <Route path='/profile' element={<h1>Profile Product listing component</h1>} />
          </Route>
          <Route path='/signup' element={ <SignUp />} />
          <Route path='/login' element={ <Login />} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
