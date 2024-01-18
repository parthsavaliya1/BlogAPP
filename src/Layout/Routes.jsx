// AppRoutes.js

import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import withLayout from './withLayout';
import Home from '../components/Home';
import Login from '../components/Login';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';
import Register from '../components/Register';
import HomePage from '../admin';
import { AuthContext } from '../context/AuthContext';
import withAdminLayout from '../admin/layout/AdminLayout';
import Dashboard from '../admin/components/Dashboard';
import Tag from '../admin/components/Tag';
import Comment from '../admin/components/Comment';
import User from '../admin/components/User';
import Setting from '../admin/components/Setting';
import Analytics from '../admin/components/Analytics';
import ProtectedRoute from './ProtectRoute';
import AddorEditPost from '../admin/components/post/AddorEditPost';
import Post from '../admin/components/post/Post';
import { useLocation } from 'react-router-dom';


const HomeWithLayout = withLayout(Home);
const AboutWithLayout = withLayout(About);
const ContactWithLayout = withLayout(Contact);
const PricingWithLayout = withLayout(Pricing);
const DashboardWithAdminLayout = withAdminLayout(Dashboard);
const PostWithAdminLayout = withAdminLayout(Post);
const TagWithAdminLayout = withAdminLayout(Tag);
const CommentWithAdminLayout = withAdminLayout(Comment);
const UserWithAdminLayout = withAdminLayout(User);
const SettingWithAdminLayout = withAdminLayout(Setting);
const AnalyticsWithAdminLayout = withAdminLayout(Analytics);

const AddorEditPostWithAdminLayout = withAdminLayout(AddorEditPost)

export const AppRoutes = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const currentUrl = location.pathname;
    useEffect(() => {
        if(currentUrl === '/login' || currentUrl === '/register') {
            if(user) {
                navigate('/')
            }
        }
    }, [user])

    return (
        <Routes>
            <Route path="/" element={<HomeWithLayout />} />
            <Route path="/about" element={<AboutWithLayout />} />
            <Route path="/contact" element={<ContactWithLayout />} />
            <Route path="/pricing" element={<PricingWithLayout />} />
            <Route path="/login" element={user ? <HomeWithLayout /> : <Login />} />
            <Route path="/register" element={user ? <HomeWithLayout /> : <Register />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/admin/dashboard" element={<DashboardWithAdminLayout />} />
                <Route path="/admin/post" element={<PostWithAdminLayout />} />
                <Route path="/admin/tags" element={<TagWithAdminLayout />} />
                <Route path="/admin/comments" element={<CommentWithAdminLayout />} />
                <Route path="/admin/users" element={<UserWithAdminLayout />} />
                <Route path="/admin/settings" element={<SettingWithAdminLayout />} />
                <Route path="/admin/analytics" element={<AnalyticsWithAdminLayout />} />
                <Route path="/admin/post/add" element={<AddorEditPostWithAdminLayout />} />

            </Route>


        </Routes>
    );
};
