import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EvidenceDetail = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    return (
        <div className="p-8 max-w-6xl mx-auto w-full">
            {/* Navigation Link */}
            <Link to="/evidence" className="flex items-center gap-1 text-primary text-sm font-medium mb-6 hover:underline group">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Evidence Vault
            </Link>

            {/* Page Heading */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">ISO 27001 Certificate</h2>
                    <div className="flex h-7 items-center justify-center gap-x-1.5 rounded-full bg-emerald-100 px-3 border border-emerald-200">
                        <span className="size-1.5 rounded-full bg-emerald-600"></span>
                        <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Valid</p>
                    </div>
                </div>
            </div>

            {/* Metadata Card */}
            <div className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Doc Type</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Certificate</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Expiry Date</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Dec 31, 2025</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Last Updated</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Oct 12, 2023</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Versions</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">4</p>
                    </div>
                </div>
            </div>

            {/* Versions Section Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Version History</h3>
                <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
                >
                    <span className="material-symbols-outlined text-lg">upload</span>
                    Upload New Version
                </button>
            </div>

            {/* Versions Table */}
            <div className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Version</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Upload Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Uploaded By</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Notes</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32 text-right">File Size</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4"><span className="font-bold text-gray-900 dark:text-gray-100">v4.0</span> <span className="ml-2 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">LATEST</span></td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Oct 12, 2023</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Jane Doe</td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 italic">Annual renewal submission</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 text-right">1.2 MB</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">v3.0</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Oct 11, 2022</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">John Smith</td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Previous annual audit certificate</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 text-right">1.1 MB</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">v2.1</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Jun 04, 2022</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Jane Doe</td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Corrected signatory information</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 text-right">1.2 MB</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">v1.0</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Oct 09, 2021</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Jane Doe</td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Initial document upload</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 text-right">1.0 MB</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-primary">
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Preview Area Placeholder */}
            <div className="mt-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-12 flex flex-col items-center justify-center text-center">
                <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-gray-400 text-3xl">visibility</span>
                </div>
                <h4 className="text-gray-900 dark:text-gray-100 font-bold mb-1">Document Preview</h4>
                <p className="text-sm text-gray-500 max-w-xs">Select a version to see a preview of the document directly in your browser.</p>
            </div>

            {/* Modal Backdrop */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    {/* Modal Container */}
                    <div className="bg-white dark:bg-slate-900 w-full max-w-[600px] rounded-xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                            <h2 className="text-[#111418] dark:text-white text-xl font-bold">Upload New Version</h2>
                            <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="px-6 py-6 flex flex-col gap-6">
                            {/* File Drop Zone */}
                            <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-xl p-10 bg-slate-50 dark:bg-slate-800/50 transition-colors cursor-pointer">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <span className="material-symbols-outlined text-3xl">upload_file</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-[#111418] dark:text-white font-medium">Drag and drop your file here, or <span className="text-primary underline">browse</span></p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">PDF, PNG, JPG up to 10MB</p>
                                </div>
                                <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                            </div>
                            {/* Fields Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Expiry Date Field */}
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111418] dark:text-white text-sm font-medium pb-2">Expiry Date</p>
                                    <div className="relative">
                                        <input className="form-input flex w-full rounded-lg text-[#111418] dark:text-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-sm font-normal" type="date" />
                                    </div>
                                </label>
                                {/* Status/Version Tag (Optional UI addition for context) */}
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#111418] dark:text-white text-sm font-medium pb-2">Version Name</p>
                                    <input className="form-input flex w-full rounded-lg text-[#111418] dark:text-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-sm font-normal" placeholder="e.g. v2.1.0" type="text" />
                                </label>
                            </div>
                            {/* Notes Field */}
                            <label className="flex flex-col">
                                <p className="text-[#111418] dark:text-white text-sm font-medium pb-2">Internal Notes</p>
                                <textarea className="form-input flex w-full min-h-[100px] resize-none rounded-lg text-[#111418] dark:text-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-400 p-4 text-sm font-normal" placeholder="Add details about this version for the compliance team..."></textarea>
                            </label>
                        </div>
                        {/* Modal Footer */}
                        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800">
                            <button onClick={() => setIsUploadModalOpen(false)} className="px-5 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm transition-colors">
                                Cancel
                            </button>
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-sm transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">check_circle</span>
                                Upload Version
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EvidenceDetail;
