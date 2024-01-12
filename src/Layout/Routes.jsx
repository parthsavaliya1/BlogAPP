import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import withLayout from './withLayout';
import Home from '../components/Home'
import Login from '../components/Login'
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Register from '../components/Register'
import HomePage from '../admin';
import { AuthContext } from '../context/AuthContext';


const HomeWithLayout = withLayout(Home);
const AboutWithLayout = withLayout(About)
const ContactWithLayout = withLayout(Contact)
const PricingWithLayout = withLayout(Pricing)
const AdminHomeWithLayout = withLayout(HomePage)

export const AppRoutes = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Routes>
            <Route path="/" element={<HomeWithLayout />} />
            <Route path="/about" element={<AboutWithLayout />} />
            <Route path="/contact" element={<ContactWithLayout />} />
            <Route path="/pricing" element={<PricingWithLayout />} />
            <Route path="/login" element={user ? <AdminHomeWithLayout /> : <Login />} />
            <Route path='/admin' element={user ? <AdminHomeWithLayout /> : <Login />} />
            <Route path="/register" element={user ? <AdminHomeWithLayout /> : <Register />} />
        </Routes>
    );
};
