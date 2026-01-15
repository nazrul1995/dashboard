import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    return (
        <aside className="w-64 bg-sidebar-dark text-white flex flex-col fixed h-full border-r border-white/5 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">shield_person</span>
                </div>
                <div>
                    <h1 className="text-sm font-bold leading-tight">SentryLink Comply</h1>
                    <p className="text-xs text-slate-400">Enterprise Compliance</p>
                </div>
            </div>
            <nav className="flex-1 px-4 mt-4 space-y-1">
                <Link to="/evidence" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/evidence') ? 'active-nav' : 'text-slate-300 hover:bg-white/5'}`}>
                    <span className={`material-symbols-outlined ${isActive('/evidence') ? 'text-primary' : ''}`}>inventory_2</span>
                    <span className="text-sm font-medium">Evidence Vault</span>
                </Link>
                <Link to="/requests" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/requests') ? 'active-nav' : 'text-slate-300 hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined">forum</span>
                    <span className="text-sm font-medium">Buyer Requests</span>
                </Link>
                <Link to="/packs" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/packs') ? 'active-nav' : 'text-slate-300 hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined">package_2</span>
                    <span className="text-sm font-medium">Packs</span>
                </Link>
                <Link to="/settings" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive('/settings') ? 'active-nav' : 'text-slate-300 hover:bg-white/5'}`}>
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-sm font-medium">Settings</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-3 py-2">
                    <div className="size-8 rounded-full bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3WTwWrJa2cZzinzkfThS_ZSJLKfJG8cEV_ck3GQsqaDsEnvpxwCcc627_QT4oFISQhTrt9zQ5LeIlSbeeJxDuR6m03TnlDgbNenUm8nmrB0iOMDUAKqFREVwpASXEF-FpMSINkumTysW2FO7b9kqvj_8fnPKSwN8RJBIyRt6uymLRZTmHkjxWTGdaUYZTn8dI1WOJnJBmQ1vNleWvNI3fLyZNvKr6QuqDUPoZYCvPgYtr76O2eIL0ZCIuiogxDMuq9j6p5l8h1zYh')" }}></div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-xs font-semibold truncate">Factory User</p>
                        <p className="text-[10px] text-slate-400 truncate">factory@sentrylink.com</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">unfold_more</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
