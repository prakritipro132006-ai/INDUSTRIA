import React from 'react';
import {
  LayoutDashboard,
  Dna,
  Zap,
  GitMerge,
  FileCheck2,
  AlertOctagon,
  CalendarClock,
  ClipboardList,
  Award,
  Sparkles,
  Info,
  HelpCircle,
  Building2,
  ChevronRight
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';

export const Sidebar = () => {
  const { activeTab, navigateTo, project } = useProject();

  const navigationItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, badge: null },
    { id: 'profile', label: 'Project DNA', icon: Dna, badge: null },
    { id: 'simulator', label: 'Impact Simulator', icon: Zap, badge: 'WOW', isHighlight: true },
    { id: 'roadmap', label: 'Approval Roadmap', icon: GitMerge, badge: '24' },
    { id: 'documents', label: 'Documents', icon: FileCheck2, badge: '1 Query' },
    { id: 'bottlenecks', label: 'Bottlenecks', icon: AlertOctagon, badge: '72/100' },
    { id: 'criticalPath', label: 'Critical Path', icon: CalendarClock, badge: null },
    { id: 'compliance', label: 'Compliance', icon: ClipboardList, badge: '3 Due' },
    { id: 'schemes', label: 'Schemes', icon: Award, badge: '92%' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 select-none min-h-screen">
      {/* Brand Header */}
      <div 
        onClick={() => navigateTo('landing')}
        className="p-5 border-b border-slate-800 cursor-pointer group hover:bg-slate-800/40 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              INDUSTRIA
            </div>
            <div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
              Compliance Navigator
            </div>
          </div>
        </div>
      </div>

      {/* Active Project Pill */}
      <div className="px-4 pt-4 pb-2">
        <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            <span className="flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              Active Project
            </span>
            <span className="text-emerald-400 text-[10px] bg-emerald-950/80 border border-emerald-800/60 px-1.5 py-0.5 rounded font-mono">
              STAGE 2
            </span>
          </div>
          <div className="font-medium text-white text-xs truncate">
            {project.companyName}
          </div>
          <div className="text-[11px] text-slate-400 truncate mt-0.5">
            {project.location} • ₹{project.investmentCr} Cr
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-3 pb-1">
          Intelligence & Operations
        </div>

        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm font-semibold'
                  : item.isHighlight
                  ? 'text-blue-300 hover:bg-blue-950/60 hover:text-blue-100 bg-blue-950/30 border border-blue-800/40'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive
                      ? 'text-white'
                      : item.isHighlight
                      ? 'text-blue-400 group-hover:text-blue-300'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />
                <span>{item.label}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-semibold tracking-wide ${
                      isActive
                        ? 'bg-blue-800 text-blue-100'
                        : item.isHighlight
                        ? 'bg-blue-500 text-white animate-pulse'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-200" />}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer Info & Demo Mode */}
      <div className="p-4 border-t border-slate-800 space-y-3">
        {/* Demo Mode Badge */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-dot"></span>
            <div>
              <div className="text-[11px] font-semibold text-white tracking-wide">
                DEMO SIMULATION
              </div>
              <div className="text-[10px] text-slate-400">
                Deterministic Mock Data
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/50 px-1.5 py-0.5 rounded uppercase">
            SIH 2026
          </span>
        </div>

        {/* Quick Nav to Landing */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
          <button
            onClick={() => navigateTo('landing')}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Product Vision</span>
          </button>
          <span className="text-[10px] text-slate-400">v1.2-beta</span>
        </div>
      </div>
    </aside>
  );
};
