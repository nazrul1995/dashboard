import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const getBreadcrumbs = () => {
        const path = location.pathname;

        if (path === '/') return <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Dashboard</span>;

        if (path.startsWith('/evidence')) {
            if (path === '/evidence') {
                return <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Evidence Vault</span>;
            }
            // Detail page (for now, generic)
            return (
                <>
                    <Link to="/evidence" className="text-sm text-gray-500 font-medium hover:text-gray-900 dark:hover:text-gray-300">Evidence Vault</Link>
                    <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Document Detail</span>
                </>
            );
        }

        if (path === '/requests') {
            return (
                <>
                    <Link to="/" className="text-sm text-gray-500 font-medium hover:text-gray-900 dark:hover:text-gray-300">Dashboard</Link>
                    <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Buyer Requests</span>
                </>
            );
        }

        if (path.startsWith('/packs')) {
            if (path === '/packs') {
                return (
                    <>
                        <Link to="/" className="text-sm text-gray-500 font-medium hover:text-gray-900 dark:hover:text-gray-300">Dashboard</Link>
                        <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Evidence Packs</span>
                    </>
                );
            }
            // Detail page
            return (
                <>
                    <Link to="/packs" className="text-sm text-gray-500 font-medium hover:text-gray-900 dark:hover:text-gray-300">Evidence Packs</Link>
                    <span className="material-symbols-outlined text-sm text-gray-400">chevron_right</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Acme Corp Compliance Pack</span>
                </>
            );
        }

        return <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Page</span>;
    };

    return (
        <header className="h-16 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-2">
                {getBreadcrumbs()}
            </div>
            <div className="flex items-center gap-4">
                <button className="size-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1"></div>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SentryLink Comply</span>
                    <div className="size-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">corporate_fare</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
