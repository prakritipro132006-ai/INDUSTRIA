import React from 'react';
import {
  Sparkles,
  Zap,
  ArrowLeft,
  Search,
  Building,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';

export const TopHeader = () => {
  const { activeTab, navigateTo, goBack, project, applyPresetScenario } = useProject();

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return { title: 'Executive Overview', subtitle: 'Regulatory readiness & operational posture' };
      case 'profile':
        return { title: 'Project DNA Configuration', subtitle: "Build and inspect your project's regulatory fingerprint" };
      case 'simulator':
        return { title: 'Approval Impact Simulator', subtitle: 'Simulate regulatory ripple effects before committing changes' };
      case 'roadmap':
        return { title: 'Approval Dependency Roadmap', subtitle: 'Multistage pipeline with prerequisite graph linkages' };
      case 'documents':
        return { title: 'Document Intelligence & Pre-Validation', subtitle: 'Automated document diagnostics and compliance pre-screening' };
      case 'bottlenecks':
        return { title: 'Bottleneck Intelligence', subtitle: 'Predict upstream stalls and downstream critical path delays' };
      case 'criticalPath':
        return { title: 'Reverse Planning & Critical Path', subtitle: 'Backward scheduling from target commercial launch date' };
      case 'compliance':
        return { title: 'Statutory Compliance Center', subtitle: 'Track periodic filings, audit dates, and operational renewals' };
      case 'schemes':
        return { title: 'Smart Scheme Matcher', subtitle: 'Maharashtra Package Scheme of Incentives & financial assistance' };
      default:
        return { title: 'INDUSTRIA', subtitle: 'Regulatory Navigator' };
    }
  };

  const { title, subtitle } = getPageTitle();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3.5 flex items-center justify-between shadow-sm">
      {/* Left Title & Breadcrumb */}
      <div className="flex items-center gap-3">
        {activeTab !== 'landing' && activeTab !== 'dashboard' && (
          <button
            onClick={goBack}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            title="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-bold text-slate-900 tracking-tight">{title}</h1>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 hidden sm:inline-block">
              {project.companyName}
            </span>
          </div>
          <p className="text-xs text-slate-500 hidden md:block">{subtitle}</p>
        </div>
      </div>

      {/* Right Controls & Quick Actions */}
      <div className="flex items-center gap-3">
        {/* State Govt Label */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
          <span className="font-medium">Govt. of Maharashtra</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">MSInS / DSEEI</span>
        </div>

        {/* What-If Simulator Quick Button (When not on simulator screen) */}
        {activeTab !== 'simulator' && (
          <button
            onClick={() => navigateTo('simulator')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Run What-If Simulation</span>
          </button>
        )}

        {/* Demo Mode Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-800 font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="hidden sm:inline">DEMO MODE</span>
          <span className="sm:hidden">DEMO</span>
        </div>
      </div>
    </header>
  );
};
