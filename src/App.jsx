import React, { useState } from 'react';
import { ProjectProvider, useProject } from './context/ProjectContext';
import { Sidebar } from './components/common/Sidebar';
import { TopHeader } from './components/common/TopHeader';
import { Toast } from './components/common/Toast';
import { LandingPage } from './components/landing/LandingPage';
import { ProjectProfileView } from './components/profile/ProjectProfileView';
import { MainDashboardView } from './components/dashboard/MainDashboardView';
import { ProjectDNASimulatorView } from './components/simulator/ProjectDNASimulatorView';
import { ApprovalRoadmapView } from './components/roadmap/ApprovalRoadmapView';
import { DocumentIntelligenceView } from './components/documents/DocumentIntelligenceView';
import { BottleneckView } from './components/bottlenecks/BottleneckView';
import { ReversePlanningView } from './components/reversePlanning/ReversePlanningView';
import { ComplianceCenterView } from './components/compliance/ComplianceCenterView';
import { SchemeMatchingView } from './components/schemes/SchemeMatchingView';
import { Menu, X } from 'lucide-react';

const MainAppContent = () => {
  const { activeTab, toast, setToast } = useProject();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (activeTab === 'landing') {
    return (
      <>
        <LandingPage />
        <Toast toast={toast} onClose={() => setToast(null)} />
      </>
    );
  }

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'profile':
        return <ProjectProfileView />;
      case 'dashboard':
        return <MainDashboardView />;
      case 'simulator':
        return <ProjectDNASimulatorView />;
      case 'roadmap':
        return <ApprovalRoadmapView />;
      case 'documents':
        return <DocumentIntelligenceView />;
      case 'bottlenecks':
        return <BottleneckView />;
      case 'criticalPath':
        return <ReversePlanningView />;
      case 'compliance':
        return <ComplianceCenterView />;
      case 'schemes':
        return <SchemeMatchingView />;
      default:
        return <MainDashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:flex shrink-0 h-full">
        <Sidebar />
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative z-10 w-64 h-full bg-slate-900 flex flex-col">
            <div className="p-3 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto" onClick={() => setMobileMenuOpen(false)}>
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Mobile Header Bar with Hamburger */}
        <div className="lg:hidden bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-bold text-sm">INDUSTRIA</span>
          </div>
          <span className="text-[10px] font-mono bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded">
            SIH 2026
          </span>
        </div>

        {/* Top Header */}
        <TopHeader />

        {/* Dynamic Screen View */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderActiveScreen()}
        </main>
      </div>

      {/* Toast Notification Alert */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

export default function App() {
  return (
    <ProjectProvider>
      <MainAppContent />
    </ProjectProvider>
  );
}
