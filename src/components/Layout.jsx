import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-workspace-bg font-sans text-[#111418] antialiased">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 p-6 lg:p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
