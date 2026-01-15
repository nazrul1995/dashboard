import React, { useState } from 'react';

const BuyerRequests = () => {
    // Mock Data State
    const [requests, setRequests] = useState([
        {
            id: 1,
            name: 'SOC 2 Type II Report',
            buyer: 'Acme Corp',
            buyerInitials: 'AC',
            dueDate: 'Oct 28, 2024',
            daysLeft: 'In 3 days',
            status: 'Pending',
            statusColor: 'bg-yellow-50 text-yellow-700 border-yellow-100'
        },
        {
            id: 2,
            name: 'Security Questionnaire (VSA)',
            buyer: 'Global Logistics Ltd.',
            buyerInitials: 'GL',
            dueDate: 'Nov 1, 2024',
            daysLeft: 'In 7 days',
            status: 'Under Review',
            statusColor: 'bg-blue-50 text-blue-700 border-blue-100'
        },
        {
            id: 3,
            name: 'ISO 27001 Certification',
            buyer: 'TechX Dynamics',
            buyerInitials: 'TX',
            dueDate: 'Nov 6, 2024',
            daysLeft: 'In 12 days',
            status: 'Pending',
            statusColor: 'bg-yellow-50 text-yellow-700 border-yellow-100'
        },
        {
            id: 4,
            name: 'Data Privacy Addendum (DPA)',
            buyer: 'Nexa Solutions',
            buyerInitials: 'NS',
            dueDate: 'Oct 24, 2024',
            daysLeft: 'Yesterday',
            status: 'In Progress',
            statusColor: 'bg-orange-50 text-orange-700 border-orange-100'
        }
    ]);

    const [isFulfillModalOpen, setIsFulfillModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [evidenceSource, setEvidenceSource] = useState(''); // 'vault' or 'upload'
    const [selectedVaultItem, setSelectedVaultItem] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleOpenModal = (request) => {
        setSelectedRequest(request);
        // Reset form state
        setEvidenceSource('');
        setSelectedVaultItem('');
        setUploadedFile(null);
        setIsFulfillModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsFulfillModalOpen(false);
        setSelectedRequest(null);
    };

    const handleVaultSelection = (e) => {
        setSelectedVaultItem(e.target.value);
        if (e.target.value) {
            setEvidenceSource('vault');
            setUploadedFile(null);
        } else {
            setEvidenceSource('');
        }
    };

    const handleFileUpload = () => {
        // Mock file upload
        setUploadedFile({ name: 'new_evidence.pdf' });
        setEvidenceSource('upload');
        setSelectedVaultItem('');
    };

    const handleFulfill = () => {
        if (!selectedRequest) return;

        setRequests(prevRequests => prevRequests.map(req => {
            if (req.id === selectedRequest.id) {
                return {
                    ...req,
                    status: 'Completed',
                    statusColor: 'bg-green-50 text-green-700 border-green-100'
                };
            }
            return req;
        }));

        handleCloseModal();
    };

    const isFormValid = (evidenceSource === 'vault' && selectedVaultItem) || (evidenceSource === 'upload' && uploadedFile);

    return (
        <div className="flex-1 overflow-y-auto w-full">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-[#111418] dark:text-white">Buyer Requests</h2>
                        <p className="text-gray-500 mt-1">Review and fulfill information requests from prospective buyers.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-white/5 dark:border-gray-800 transition-all">
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
                            Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pending Requests</p>
                        <div className="flex items-end justify-between mt-2">
                            <p className="text-4xl font-black text-primary">{requests.filter(r => r.status === 'Pending').length + 20}</p>
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <span className="material-symbols-outlined text-primary">pending_actions</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">In Progress</p>
                        <div className="flex items-end justify-between mt-2">
                            <p className="text-4xl font-black text-gray-900 dark:text-white">{requests.filter(r => r.status === 'In Progress' || r.status === 'Under Review').length + 10}</p>
                            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                <span className="material-symbols-outlined text-orange-600">sync</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Completed</p>
                        <div className="flex items-end justify-between mt-2">
                            <p className="text-4xl font-black text-gray-900 dark:text-white">{requests.filter(r => r.status === 'Completed').length + 186}</p>
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <span className="material-symbols-outlined text-green-600">task_alt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                        <h3 className="text-lg font-bold">Request Queue</h3>
                        <div className="flex gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">All Requests</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">Due Soon</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-gray-800">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Requested Item</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Requesting Buyer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Due Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {requests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-gray-400">description</span>
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{request.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="size-6 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-700 dark:text-gray-300">
                                                    {request.buyerInitials}
                                                </div>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{request.buyer}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className={`text-sm font-medium ${request.daysLeft === 'Yesterday' ? 'text-gray-400' : 'text-red-600'}`}>{request.daysLeft}</span>
                                                <span className="text-[10px] text-gray-400">{request.dueDate}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${request.statusColor}`}>
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            {request.status !== 'Completed' ? (
                                                <button
                                                    onClick={() => handleOpenModal(request)}
                                                    className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm"
                                                >
                                                    Fulfill Request
                                                </button>
                                            ) : (
                                                <span className="text-xs font-bold text-green-600 flex items-center justify-end gap-1">
                                                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                                                    Fulfilled
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Fulfill Request Modal */}
            {isFulfillModalOpen && selectedRequest && (
                <>
                    {/* Modal Backdrop */}
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={handleCloseModal}></div>

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="w-full max-w-[600px] bg-white dark:bg-[#1a2632] rounded-xl shadow-2xl overflow-hidden border border-[#dbe0e6] dark:border-[#2d3a49]">
                            {/* Header Section */}
                            <div className="border-b border-[#dbe0e6] dark:border-[#2d3a49] p-6 relative">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-tight">Fulfill Request</h1>
                                    <p className="text-[#617589] dark:text-[#94a3b8] text-sm font-medium">Fulfilling: <span className="text-primary">{selectedRequest.name}</span> for {selectedRequest.buyer}</p>
                                </div>
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-6 right-6 text-[#617589] hover:text-[#111418] dark:hover:text-white"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 space-y-6">
                                {/* Section 1: Vault Selection */}
                                <div className="flex flex-col gap-2">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-[#111418] dark:text-white text-sm font-semibold leading-normal">Select from Evidence Vault</span>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-[#617589] text-[20px]">search</span>
                                            </div>
                                            <select
                                                value={selectedVaultItem}
                                                onChange={handleVaultSelection}
                                                className="form-input block w-full pl-10 pr-10 py-3 rounded-lg border border-[#dbe0e6] dark:border-[#2d3a49] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none text-sm transition-all"
                                            >
                                                <option value="">Type to search documents...</option>
                                                <option value="soc2-23">SOC2 Type II Report - 2023</option>
                                                <option value="pen-test">Latest Penetration Test Summary</option>
                                                <option value="iso-27001">ISO 27001 Certificate</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text--[#617589] text-[20px]">expand_more</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>

                                {/* Divider */}
                                <div className="relative flex items-center justify-center py-2">
                                    <div className="flex-grow border-t border-[#dbe0e6] dark:border-[#2d3a49]"></div>
                                    <span className="px-4 text-[#617589] text-xs font-bold tracking-widest uppercase bg-white dark:bg-[#1a2632] z-10">OR</span>
                                    <div className="flex-grow border-t border-[#dbe0e6] dark:border-[#2d3a49]"></div>
                                </div>

                                {/* Section 2: Upload Area */}
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111418] dark:text-white text-sm font-semibold leading-normal px-1">Upload & Create New Evidence</p>
                                    <div
                                        onClick={handleFileUpload}
                                        className={`flex flex-col items-center gap-4 rounded-xl border-2 border-dashed px-6 py-10 transition-colors cursor-pointer ${uploadedFile
                                                ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10'
                                                : 'border-[#dbe0e6] dark:border-[#2d3a49] bg-[#f8fafc] dark:bg-[#101922]/50 hover:border-primary/50'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${uploadedFile ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                                            <span className="material-symbols-outlined text-[28px]">{uploadedFile ? 'check' : 'cloud_upload'}</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 text-center">
                                            <p className="text-[#111418] dark:text-white text-base font-bold leading-tight">
                                                {uploadedFile ? uploadedFile.name : 'Click to upload or drag and drop'}
                                            </p>
                                            {!uploadedFile && <p className="text-[#617589] dark:text-[#94a3b8] text-xs font-normal">PDF, JPG, or PNG (up to 10MB)</p>}
                                        </div>
                                        {!uploadedFile && (
                                            <button className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-[#2d3a49] rounded-lg text-sm font-bold text-[#111418] dark:text-white hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] transition-colors">
                                                Select File
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center justify-end gap-3 p-6 bg-background-light dark:bg-[#101922]/30 border-t border-[#dbe0e6] dark:border-[#2d3a49]">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-6 py-2.5 rounded-lg text-sm font-bold text-[#617589] hover:text-[#111418] dark:text-[#94a3b8] dark:hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleFulfill}
                                    disabled={!isFormValid}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${isFormValid
                                            ? 'bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-0.5'
                                            : 'bg-[#dbe0e6] dark:bg-[#2d3a49] text-[#94a3b8] dark:text-[#617589] cursor-not-allowed'
                                        }`}
                                >
                                    Mark as Fulfilled
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BuyerRequests;
