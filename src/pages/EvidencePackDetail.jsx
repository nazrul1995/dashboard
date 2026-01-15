import React from 'react';
import { Link } from 'react-router-dom';

const EvidencePackDetail = () => {
    return (
        <div className="max-w-[1200px] w-full flex flex-col gap-6 mx-auto">
            {/* Breadcrumbs / Back Link */}
            <div className="flex items-center gap-2">
                <Link to="/packs" className="flex items-center text-primary text-sm font-medium hover:underline gap-1">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Back to Evidence Packs
                </Link>
                <span className="text-gray-400 text-sm">/</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Acme Corp Compliance Pack</span>
            </div>

            {/* Page Heading & Status */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Acme Corp Compliance Pack</h1>
                        <div className="flex h-7 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 border border-emerald-200 dark:border-emerald-800">
                            <span className="size-1.5 rounded-full bg-emerald-500"></span>
                            <p className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">Ready</p>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl">Standard evidence collection for Acme Corp SOC2 readiness and annual compliance review.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all">
                        <span className="material-symbols-outlined text-lg">edit_note</span>
                        <span>Manage Documents</span>
                    </button>
                </div>
            </div>

            {/* Metadata Summary Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#1a242e] shadow-sm">
                <div className="flex flex-col gap-1 p-5 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <span className="material-symbols-outlined text-lg">person</span>
                        <p className="text-xs font-semibold uppercase tracking-wider">Created By</p>
                    </div>
                    <p className="text-[#111418] dark:text-white text-base font-semibold">Sarah Jenkins</p>
                </div>
                <div className="flex flex-col gap-1 p-5 border-b sm:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <span className="material-symbols-outlined text-lg">description</span>
                        <p className="text-xs font-semibold uppercase tracking-wider">Total Docs</p>
                    </div>
                    <p className="text-[#111418] dark:text-white text-base font-semibold">24 Documents</p>
                </div>
                <div className="flex flex-col gap-1 p-5 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <span className="material-symbols-outlined text-lg">update</span>
                        <p className="text-xs font-semibold uppercase tracking-wider">Last Updated</p>
                    </div>
                    <p className="text-[#111418] dark:text-white text-base font-semibold">Oct 12, 2023</p>
                </div>
                <div className="flex flex-col gap-1 p-5">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        <p className="text-xs font-semibold uppercase tracking-wider">Access Count</p>
                    </div>
                    <p className="text-[#111418] dark:text-white text-base font-semibold">156 times</p>
                </div>
            </div>

            {/* Document Table Section */}
            <div className="bg-white dark:bg-[#1a242e] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/20">
                    <h3 className="text-lg font-bold">Evidence Documents</h3>
                    <div className="flex gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800/40 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Doc Name</th>
                                <th className="px-6 py-4">Doc Type</th>
                                <th className="px-6 py-4">Version</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Employee Security Training Logs</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">PDF Document</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono">v2.4.1</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-blue-500">link</span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">AWS Infrastructure Config Audit</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">External Link</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono">Current</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-emerald-500">verified</span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">SOC2 Type II - Final Report 2023</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Certification</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono">v1.0</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-amber-500">article</span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Access Control Policy</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Policy Doc</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono">v3.2</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-purple-500">folder_zip</span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Penetration Test Evidence Bundle</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Archive</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono">v1.1</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 24 documents</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvidencePackDetail;
