import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EvidenceVault from './pages/EvidenceVault';
import EvidenceDetail from './pages/EvidenceDetail';

import BuyerRequests from './pages/BuyerRequests';
import EvidencePacks from './pages/EvidencePacks';
import EvidencePackDetail from './pages/EvidencePackDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="evidence" element={<EvidenceVault />} />
                    <Route path="evidence/:id" element={<EvidenceDetail />} />
                    <Route path="requests" element={<BuyerRequests />} />
                    <Route path="packs" element={<EvidencePacks />} />
                    <Route path="packs/:id" element={<EvidencePackDetail />} />
                    <Route path="settings" element={<div className="p-8 dark:text-white">Settings Content Placeholder</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
