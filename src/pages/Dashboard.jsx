import React from 'react';

const Dashboard = () => {
    return (
        <>
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#111418] dark:text-white">Dashboard Overview</h2>
                    <p className="text-gray-500 mt-1">Manage your compliance posture and buyer requests in one place.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-white/5 dark:border-gray-800 transition-all">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                        Export Report
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                        Add Evidence
                    </button>
                </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <span className="material-symbols-outlined text-primary">rule</span>
                        </div>
                        <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">Controls Monitored</p>
                    <p className="text-3xl font-bold mt-1 text-[#111418] dark:text-white">124</p>
                </div>
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <span className="material-symbols-outlined text-purple-600">description</span>
                        </div>
                        <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">Evidence Collected</p>
                    <p className="text-3xl font-bold mt-1 text-[#111418] dark:text-white">842</p>
                </div>
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <span className="material-symbols-outlined text-red-600">warning</span>
                        </div>
                        <span className="text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded-full">-2%</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">Open Gaps</p>
                    <p className="text-3xl font-bold mt-1 text-[#111418] dark:text-white">12</p>
                </div>
            </div>
            {/* Main Dashboard Card */}
            <div className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <h3 className="text-lg font-bold">Compliance Summary</h3>
                    <select className="bg-gray-50 border-none rounded-lg text-xs font-semibold py-1.5 px-3 focus:ring-0 dark:bg-white/5">
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                    </select>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Progress Section */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium">SOC 2 Readiness</span>
                                    <span className="text-primary font-bold">88%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '88%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium">ISO 27001 Compliance</span>
                                    <span className="text-primary font-bold">64%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '64%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium">GDPR Audit Prep</span>
                                    <span className="text-primary font-bold">42%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '42%' }}></div>
                                </div>
                            </div>
                        </div>
                        {/* Recent Activity List */}
                        <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                            <p className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">Recent Activity</p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-green-600" style={{ fontSize: '16px' }}>check_circle</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Evidence Uploaded: AWS IAM Policy</p>
                                        <p className="text-xs text-gray-500">2 hours ago • Evidence Vault</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-600" style={{ fontSize: '16px' }}>mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">New Buyer Request: Security Questionnaire</p>
                                        <p className="text-xs text-gray-500">5 hours ago • Acme Corp</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-orange-600" style={{ fontSize: '16px' }}>sync</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Auto-Sync failed: Google Workspace</p>
                                        <p className="text-xs text-gray-500">Yesterday • System Integration</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                View Full History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <h4 className="font-bold mb-4">Upcoming Audits</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-lg border-l-4 border-primary">
                            <div>
                                <p className="text-sm font-bold">Annual SOC 2 Review</p>
                                <p className="text-xs text-gray-500">External Auditor: Deloit</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold uppercase text-primary">In 12 Days</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-lg border-l-4 border-gray-300">
                            <div>
                                <p className="text-sm font-bold">HIPAA Internal Assessment</p>
                                <p className="text-xs text-gray-500">Internal Audit Team</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold uppercase text-gray-500">Oct 24, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                    <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-2">Security Packs Ready</h4>
                        <p className="text-white/80 text-sm max-w-[240px]">Share your pre-vetted compliance data with potential buyers instantly.</p>
                    </div>
                    <button className="relative z-10 self-start mt-4 px-5 py-2.5 bg-white text-primary rounded-lg text-sm font-bold hover:bg-gray-100 transition-all">
                        Share Trust Center
                    </button>
                    {/* Decorative background icon */}
                    <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/10" style={{ fontSize: '160px' }}>verified</span>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
