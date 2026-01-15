import React from 'react';

import { Link } from 'react-router-dom';

const EvidenceVault = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2">
                <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#">Home</a>
                <span className="text-slate-400 text-sm">/</span>
                <span className="text-slate-900 dark:text-white text-sm font-semibold">Evidence Vault</span>
            </div>
            {/* Page Heading */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Evidence Vault</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and monitor all compliance documentation across your organization.</p>
                </div>
                <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-primary/90 transition-all active:scale-95">
                    <span className="material-symbols-outlined">upload_file</span>
                    Upload Evidence
                </button>
            </div>
            {/* Filter Bar */}
            <div className="bg-white dark:bg-[#1a242f] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 shadow-sm">
                <div className="flex-1 min-w-[240px] relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all" placeholder="Search by Doc name..." type="text" />
                </div>
                <div className="flex items-center gap-3">
                    <select className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all">
                        <option>Doc Type</option>
                        <option>SOC2 Report</option>
                        <option>ISO Certificate</option>
                        <option>Policy Manual</option>
                    </select>
                    <select className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all">
                        <option>Status</option>
                        <option>Active</option>
                        <option>Expiring Soon</option>
                        <option>Expired</option>
                    </select>
                    <select className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all">
                        <option>Expiry</option>
                        <option>Next 30 days</option>
                        <option>Next 90 days</option>
                        <option>This Year</option>
                    </select>
                </div>
                <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined">filter_list_off</span>
                    Reset
                </button>
            </div>
            {/* Bulk Action Bar */}
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input className="rounded border-slate-300 text-primary focus:ring-primary/20 h-5 w-5" type="checkbox" />
                        <span className="ml-3 text-sm font-semibold text-slate-900 dark:text-white">Select All</span>
                    </label>
                    <span className="h-4 w-[1px] bg-primary/20"></span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">0 items selected</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-sm font-bold cursor-not-allowed" disabled="">
                    <span className="material-symbols-outlined">archive</span>
                    Add to Pack (0 selected)
                </button>
            </div>
            {/* Data Table */}
            <div className="overflow-hidden bg-white dark:bg-[#1a242f] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 w-10"></th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Doc Name</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Doc Type</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Expiry Date</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Versions</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Last Updated</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-sm text-slate-900 dark:text-white">2023 SOC2 Type II Report</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Compliance Report</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Dec 31, 2024</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">v4</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2 days ago</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/evidence/1" className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-bold text-sm transition-colors">View</Link>
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-sm text-slate-900 dark:text-white">ISO 27001 Certification</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Security Standard</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                        Expiring Soon
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Mar 15, 2024</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">v2</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">1 week ago</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/evidence/1" className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-bold text-sm transition-colors">View</Link>
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-sm text-slate-900 dark:text-white">Employee Privacy Policy</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Legal Document</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Jan 01, 2026</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">v1</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">1 month ago</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/evidence/1" className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-bold text-sm transition-colors">View</Link>
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-sm text-slate-900 dark:text-white">AWS Subprocessor Agreement</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Vendor Contract</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Aug 22, 2025</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">v3</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2 months ago</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Link to="/evidence/1" className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-bold text-sm transition-colors">View</Link>
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 4 of 48 entries</span>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded bg-primary text-white text-sm font-bold">1</button>
                        <button className="w-8 h-8 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300">2</button>
                        <button className="w-8 h-8 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300">3</button>
                        <span className="px-1 text-slate-400 text-sm">...</span>
                        <button className="w-8 h-8 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300">12</button>
                        <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvidenceVault;
