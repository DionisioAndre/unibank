import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRouter'; // Verifique se o nome do arquivo está correto
import { AuthProvider } from './context/authContext';
import Navbar from './views/Navbar';
import { AtivoProvider } from './views/AtivoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
// Lazy loading do StockChart
const StockChart = React.lazy(() => import('./views/StockChart'));
const HomeBroker = React.lazy(() => import('./views/HomeBroker'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Loginpage = React.lazy(() => import('./views/LoginPage'));
const Register = React.lazy(() => import('./views/Register'));
const AccountPage = React.lazy(() => import('./views/AccountPage'));
const Ordempage = React.lazy(() => import('./views/Ordempage'));
const MinhaConta = React.lazy(() => import('./views/MinhaConta'));
const Homepage = React.lazy(() => import('./views/Homepage'));
const FQA = React.lazy(() => import('./views/FAQ'));

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/HomeBroker' element={<AtivoProvider><HomeBroker /></AtivoProvider>} />
                        <Route path='/' element={<Homepage />} />
                        <Route path='/help' element={<FQA />} />
                        <Route path='/StockChart' element={<StockChart />} />
                        <Route path='/loginpage' element={<Loginpage />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/account/:user_id' element={<AccountPage />} />
                        <Route path='/ordempage' element={<Ordempage />} />
                        <Route path='/MinhaConta' element={<MinhaConta />} />
                        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    </Routes>
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
