import React from 'react';

import { Link } from 'react-router-dom';

const EvidenceVault = () => {
    // Mock Data
    const initialDocuments = [
        {
            id: 1,
            name: '2023 SOC2 Type II Report',
            type: 'SOC2 Report', // Changed to match dropdown option
            category: 'Compliance Report',
            status: 'Active',
            expiryDate: '2024-12-31',
            version: 'v4',
            lastUpdated: '2 days ago'
        },
        {
            id: 2,
            name: 'ISO 27001 Certification',
            type: 'ISO Certificate', // Changed to match dropdown option
            category: 'Security Standard',
            status: 'Expiring Soon',
            expiryDate: '2024-03-15',
            version: 'v2',
            lastUpdated: '1 week ago'
        },
        {
            id: 3,
            name: 'Employee Privacy Policy',
            type: 'Policy Manual', // Changed to match dropdown option
            category: 'Legal Document',
            status: 'Active',
            expiryDate: '2026-01-01',
            version: 'v1',
            lastUpdated: '1 month ago'
        },
        {
            id: 4,
            name: 'AWS Subprocessor Agreement',
            type: 'Vendor Contract', // This doesn't match a filter option, so might be filtered out if "Doc Type" is strict, but "Doc Type" option in UI only had 3 specific ones. Let's assume these are the options.
            category: 'Vendor Contract',
            status: 'Active',
            expiryDate: '2025-08-22',
            version: 'v3',
            lastUpdated: '2 months ago'
        }
    ];

    const [documents, setDocuments] = React.useState(initialDocuments);
    const [selectedIds, setSelectedIds] = React.useState([]);
    const [filters, setFilters] = React.useState({
        search: '',
        docType: '',
        status: '',
        expiry: ''
    });

    // Filtering Logic
    const filteredDocuments = documents.filter(doc => {
        // Search Filter
        const matchesSearch = doc.name.toLowerCase().includes(filters.search.toLowerCase());

        // Doc Type Filter
        const matchesType = filters.docType === '' || filters.docType === 'Doc Type' || doc.type === filters.docType;

        // Status Filter
        const matchesStatus = filters.status === '' || filters.status === 'Status' || doc.status === filters.status;

        // Expiry Filter
        let matchesExpiry = true;
        if (filters.expiry && filters.expiry !== 'Expiry') {
            const today = new Date();
            const expiryDate = new Date(doc.expiryDate);
            const diffTime = expiryDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (filters.expiry === 'Next 30 days') {
                matchesExpiry = diffDays >= 0 && diffDays <= 30;
            } else if (filters.expiry === 'Next 90 days') {
                matchesExpiry = diffDays >= 0 && diffDays <= 90;
            } else if (filters.expiry === 'This Year') {
                matchesExpiry = expiryDate.getFullYear() === today.getFullYear();
            } else if (filters.expiry === 'Expired') { // In case we add this option
                matchesExpiry = diffDays < 0;
            }
        }

        return matchesSearch && matchesType && matchesStatus && matchesExpiry;
    });

    // Selection Logic
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(filteredDocuments.map(doc => doc.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(itemId => itemId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleReset = () => {
        setFilters({
            search: '',
            docType: '',
            status: '',
            expiry: ''
        });
        setSelectedIds([]);
    };

    const isAllSelected = filteredDocuments.length > 0 && selectedIds.length === filteredDocuments.length;
    const isIndeterminate = selectedIds.length > 0 && selectedIds.length < filteredDocuments.length;

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
                    <input 
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all" 
                        placeholder="Search by Doc name..." 
                        type="text" 
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <select 
                        className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all"
                        value={filters.docType}
                        onChange={(e) => handleFilterChange('docType', e.target.value)}
                    >
                        <option>Doc Type</option>
                        <option>SOC2 Report</option>
                        <option>ISO Certificate</option>
                        <option>Policy Manual</option>
                    </select>
                    <select 
                        className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all"
                        value={filters.status}
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                    >
                        <option>Status</option>
                        <option>Active</option>
                        <option>Expiring Soon</option>
                        <option>Expired</option>
                    </select>
                    <select 
                        className="form-input-select text-sm font-medium min-w-[140px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-3 focus:ring-primary/20 focus:border-primary transition-all"
                        value={filters.expiry}
                        onChange={(e) => handleFilterChange('expiry', e.target.value)}
                    >
                        <option>Expiry</option>
                        <option>Next 30 days</option>
                        <option>Next 90 days</option>
                        <option>This Year</option>
                    </select>
                </div>
                <button 
                    onClick={handleReset}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-semibold flex items-center gap-1"
                >
                    <span className="material-symbols-outlined">filter_list_off</span>
                    Reset
                </button>
            </div>
            {/* Bulk Action Bar */}
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <label className="inline-flex items-center cursor-pointer">
                        <input 
                            className="rounded border-slate-300 text-primary focus:ring-primary/20 h-5 w-5" 
                            type="checkbox" 
                            checked={isAllSelected}
                            ref={input => { if (input) input.indeterminate = isIndeterminate; }}
                            onChange={handleSelectAll}
                        />
                        <span className="ml-3 text-sm font-semibold text-slate-900 dark:text-white">Select All</span>
                    </label>
                    <span className="h-4 w-[1px] bg-primary/20"></span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{selectedIds.length} items selected</span>
                </div>
                <button 
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                        selectedIds.length > 0 
                        ? 'bg-primary text-white shadow-sm hover:bg-primary/90' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                    disabled={selectedIds.length === 0}
                >
                    <span className="material-symbols-outlined">archive</span>
                    Add to Pack ({selectedIds.length} selected)
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
                            {filteredDocuments.length > 0 ? (
                                filteredDocuments.map((doc) => (
                                    <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <input 
                                                className="rounded border-slate-300 text-primary focus:ring-primary/20" 
                                                type="checkbox" 
                                                checked={selectedIds.includes(doc.id)}
                                                onChange={() => handleSelectRow(doc.id)}
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-sm text-slate-900 dark:text-white">{doc.name}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{doc.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                                doc.status === 'Active' 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                                            }`}>
                                                {doc.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                            {new Date(doc.expiryDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{doc.version}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{doc.lastUpdated}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link to={`/evidence/${doc.id}`} className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-bold text-sm transition-colors">View</Link>
                                                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                                        No documents found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Showing {filteredDocuments.length} entries</span>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded bg-primary text-white text-sm font-bold">1</button>
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
