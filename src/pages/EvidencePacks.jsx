import { Link } from 'react-router-dom';

const EvidencePacks = () => {
    return (
        <div className="space-y-8">
            {/* Heading */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-[#111418] dark:text-white">Evidence Packs</h2>
                    <p className="text-[#617589] mt-1">Manage and share compliance documentation packages.</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all text-sm">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Create New Pack
                </button>
            </div>

            {/* ... stats ... */}

            {/* Table Card */}
            <div className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
                {/* ... table header inputs ... */}

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        {/* ... thead ... */}
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary/60">description</span>
                                        <span className="font-semibold text-sm text-[#111418] dark:text-white">Annual Audit 2024</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">12 Docs</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Ready
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Oct 12, 2023</td>
                                <td className="px-6 py-4 text-right">
                                    <Link to="/packs/1" className="text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">View Details</Link>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">description</span>
                                        <span className="font-semibold text-sm text-[#111418] dark:text-white">Q3 SOC2 Compliance</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">8 Docs</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                        Draft
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Nov 05, 2023</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">View Details</button>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary/60">description</span>
                                        <span className="font-semibold text-sm text-[#111418] dark:text-white">Vendor Security Review</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">15 Docs</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Ready
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Sep 20, 2023</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">View Details</button>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-gray-400">description</span>
                                        <span className="font-semibold text-sm text-[#111418] dark:text-white">HIPAA Self-Assessment</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">4 Docs</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                        Draft
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Dec 01, 2023</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">View Details</button>
                                </td>
                            </tr>
                            {/* Row 5 */}
                            <tr className="hover:bg-gray-50/80 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4 text-center">
                                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary/60">description</span>
                                        <span className="font-semibold text-sm text-[#111418] dark:text-white">GDPR DPA Pack</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 font-medium">6 Docs</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Ready
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Oct 29, 2023</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-primary font-bold text-xs hover:underline decoration-2 underline-offset-4">View Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-gray-50/50 dark:bg-white/5 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <button className="text-xs font-bold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50" disabled>Previous</button>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold bg-primary text-white size-6 flex items-center justify-center rounded">1</span>
                        <span className="text-xs font-bold text-gray-500 size-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors">2</span>
                        <span className="text-xs font-bold text-gray-500 size-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors">3</span>
                    </div>
                    <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Next</button>
                </div>
            </div>
        </div>
    );
};

export default EvidencePacks;
