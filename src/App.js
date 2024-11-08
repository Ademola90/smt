import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

import Register from './pages/register';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
