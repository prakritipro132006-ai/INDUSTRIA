import React, { useState } from 'react';
import {
  GitMerge,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  FileText,
  Shield,
  Layers,
  Info,
  X,
  Link,
  ChevronRight
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { stagesList } from '../../data/approvalsData';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const ApprovalRoadmapView = () => {
  const { approvals, selectedApproval, setSelectedApproval, navigateTo } = useProject();
  const [activeStageFilter, setActiveStageFilter] = useState('all');

  const filteredApprovals = activeStageFilter === 'all'
    ? approvals
    : approvals.filter((a) => a.stage === activeStageFilter);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return { label: 'Completed', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: CheckCircle2 };
      case 'in_progress':
        return { label: 'In Progress', bg: 'bg-blue-50 text-blue-700 border-blue-200', icon: Clock };
      case 'attention_required':
        return { label: 'Action Required', bg: 'bg-rose-50 text-rose-700 border-rose-200 font-bold', icon: AlertTriangle };
      default:
        return { label: 'Pending Gate', bg: 'bg-slate-100 text-slate-600 border-slate-200', icon: Clock };
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
              <GitMerge className="w-3.5 h-3.5" />
              <span>Multi-Stage Dependency Graph</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Approval Roadmap
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl">
              Understand what needs to happen, what depends on what, and where delays can occur across Maharashtra single-window departments.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-slate-600 font-medium">Completed (9)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-slate-600 font-medium">In Progress (8)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="text-slate-600 font-medium">Action Required (1)</span>
            </div>
          </div>
        </div>

        {/* Sequential Stage Navigation Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveStageFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeStageFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Stages (18)
            </button>
            {stagesList.map((stg, i) => (
              <button
                key={stg.id}
                onClick={() => setActiveStageFilter(stg.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeStageFilter === stg.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="text-[10px] opacity-70">0{i + 1}</span>
                <span>{stg.short}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Roadmap Grid & Dependency Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Node Grid (8 or 12 cols depending on drawer) */}
        <div className={selectedApproval ? "lg:col-span-7 space-y-4" : "lg:col-span-12 space-y-4"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredApprovals.map((app) => {
              const badge = getStatusBadge(app.status);
              const BadgeIcon = badge.icon;
              const isSelected = selectedApproval?.id === app.id;
              const isBlocker = app.status === 'attention_required';

              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApproval(app)}
                  className={`bg-white rounded-xl border p-4.5 cursor-pointer transition-all hover:shadow-md relative ${
                    isSelected
                      ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md'
                      : isBlocker
                      ? 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {app.code}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1 ${badge.bg}`}
                    >
                      <BadgeIcon className="w-3 h-3" />
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  {/* Title & Authority */}
                  <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                    {app.title}
                  </h4>
                  <div className="text-[11px] text-slate-500 mt-1 truncate">
                    {app.authority}
                  </div>

                  {/* Dependencies indicator */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Link className="w-3 h-3 text-slate-400" />
                      <span>Prerequisites: <strong>{app.dependencies.length || 'None (Genesis)'}</strong></span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-600 font-medium">
                      <span>Priority:</span>
                      <span className={app.priority === 'High' ? 'text-rose-600 font-bold' : 'text-slate-700'}>
                        {app.priority}
                      </span>
                    </div>
                  </div>

                  {/* Bottleneck alert pill if high */}
                  {app.bottleneckRisk === 'High' && (
                    <div className="mt-2.5 p-2 rounded-lg bg-rose-50 border border-rose-200 text-[11px] text-rose-800 flex items-center gap-1.5 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span className="truncate">Bottleneck Risk: High (Attention Required)</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Approval Detail Panel / Drawer */}
        {selectedApproval && (
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-blue-500/40 p-6 shadow-xl space-y-5 sticky top-20">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {selectedApproval.code}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1.5">
                  {selectedApproval.title}
                </h3>
                <span className="text-xs text-slate-500">
                  {selectedApproval.authority}
                </span>
              </div>
              <button
                onClick={() => setSelectedApproval(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Status & Priority */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Status</span>
                <span className="font-bold text-slate-800 mt-0.5 block capitalize">
                  {selectedApproval.status.replace('_', ' ')}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Statutory Act</span>
                <span className="font-bold text-slate-800 mt-0.5 block truncate">
                  {selectedApproval.statutoryAct}
                </span>
              </div>
            </div>

            {/* Prerequisite Dependencies */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Prerequisite Approvals ({selectedApproval.dependencies.length})
              </span>
              {selectedApproval.dependencies.length === 0 ? (
                <div className="text-xs text-slate-500 italic p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  No upstream dependencies. This is an entry-level initiation gate.
                </div>
              ) : (
                <div className="space-y-1.5">
                  {selectedApproval.dependencies.map((depId) => {
                    const depObj = approvals.find((a) => a.id === depId);
                    return (
                      <div
                        key={depId}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      >
                        <span className="font-medium text-slate-800 truncate pr-2">
                          {depObj?.title || depId}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                          {depObj?.status === 'completed' ? 'Cleared' : 'In Flight'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Potential Bottleneck & Reason */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Bottleneck Diagnostics</span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                {selectedApproval.bottleneckReason}
              </p>
            </div>

            {/* Next Action */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-blue-900">
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                <span>Next Statutory Action</span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                {selectedApproval.nextAction}
              </p>
            </div>

            {/* CTA to Document or Bottlenecks */}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => navigateTo('documents')}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Linked Documents</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <LegalDisclaimer />
    </div>
  );
};
