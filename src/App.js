import { Outlet } from 'react-router-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRouter'; // Corrigido para o nome correto
import { AuthProvider } from './context/authContext';
import Navbar from './views/Navbar';
import Dashboard from './views/Dashboard';
import Loginpage from './views/LoginPage';
import Register from './views/Register';
import Ordempage from './views/Ordempage';
import Homepage from './views/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/loginpage' element={<Loginpage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/ordempage' element={<Ordempage />} />
                    <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
