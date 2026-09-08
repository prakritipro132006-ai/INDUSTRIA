import React, { useState } from 'react';
import {
  CalendarClock,
  Calendar,
  AlertTriangle,
  ArrowDown,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  ShieldAlert,
  Layers,
  Flag,
  Sparkles
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const ReversePlanningView = () => {
  const { project, criticalPathItems, navigateTo, activeScenarioId } = useProject();

  const [targetDate, setTargetDate] = useState(project.targetLaunchDate || "2026-11-15");
  const [targetMonths, setTargetMonths] = useState(6);

  const handleDateChange = (months) => {
    setTargetMonths(months);
    const date = new Date(2026, 4, 15); // Base reference
    date.setMonth(date.getMonth() + months);
    setTargetDate(date.toISOString().split('T')[0]);
  };

  const hasSimulatedInjectedItem = criticalPathItems.some((item) => item.isAddedFromSimulator);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner & Date Setting */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold mb-1 border border-indigo-200">
              <CalendarClock className="w-3.5 h-3.5" />
              <span>Reverse Critical Path Scheduling</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Reverse Planning
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Start with your target operational launch date. INDUSTRIA works backwards across statutory processing times to calculate your minimum critical regulatory path.
            </p>
          </div>

          {/* Target Launch Date Selector */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Target Operation Date
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDateChange(4)}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${targetMonths === 4 ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'}`}
              >
                4 Months
              </button>
              <button
                onClick={() => handleDateChange(6)}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${targetMonths === 6 ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'}`}
              >
                6 Months (Default)
              </button>
              <button
                onClick={() => handleDateChange(9)}
                className={`px-2.5 py-1 rounded text-xs font-semibold ${targetMonths === 9 ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border'}`}
              >
                9 Months
              </button>
            </div>
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 pt-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Target Launch: {targetDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Path Health & Delay Estimate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Risk Pill */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Critical Path Risk
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className={`text-2xl font-black ${hasSimulatedInjectedItem ? 'text-rose-600' : 'text-amber-600'}`}>
                {hasSimulatedInjectedItem ? 'High Exposure' : 'Medium'}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              {hasSimulatedInjectedItem ? 'Simulated bottleneck active' : 'Prerequisite queue pressure'}
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
        </div>

        {/* Potential Delay Estimate */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Potential Launch Delay
              </span>
              <span className="text-[9px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded">
                Prototype estimate
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-rose-600">
                2–3 Weeks
              </span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              If current blocker remains unresolved
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
            <Clock className="w-6 h-6 text-rose-600" />
          </div>
        </div>

        {/* Milestone Buffer */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Schedule Compression
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-black text-indigo-600">
                14 Days
              </span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Parallelized MSEDCL + DISH track
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
            <Layers className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Highlight Injected Simulator Blocker Banner (If present) */}
      {hasSimulatedInjectedItem && (
        <div className="p-4 rounded-xl bg-rose-50 border-2 border-rose-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold shrink-0">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-xs font-bold text-rose-950 flex items-center gap-2">
                <span>NEW ITEM INJECTED FROM APPROVAL IMPACT SIMULATOR</span>
                <span className="text-[10px] bg-rose-200 text-rose-800 px-1.5 py-0.2 rounded font-bold">
                  Scenario A Impact
                </span>
              </div>
              <p className="text-[11px] text-rose-900 mt-0.5">
                Capacity expansion to 20,000 T/yr added "Recalibrate ETP & Apply CTE Amendment" onto the critical regulatory path.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateTo('simulator')}
            className="px-3 py-1.5 rounded-lg bg-white border border-rose-300 text-xs font-bold text-rose-800 hover:bg-rose-100 transition-colors shrink-0"
          >
            Review in Simulator
          </button>
        </div>
      )}

      {/* The Backwards Critical Path Pipeline & Next 3 Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Backwards Pipeline (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Reverse Scheduled Workflow
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                The Critical Path: Target Launch → Today
              </h3>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Backwards Calculated
            </span>
          </div>

          {/* Step Nodes working backwards */}
          <div className="space-y-3 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
            {/* Target Launch Node */}
            <div className="relative pl-10">
              <div className="absolute left-2 top-2.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-sm -translate-x-1/2 flex items-center justify-center">
                <Flag className="w-2 h-2 text-white" />
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                    TARGET OPERATIONAL LAUNCH
                  </span>
                  <div className="text-xs font-bold text-emerald-950 mt-0.5">
                    Commercial Production & Food Dispatch
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-white px-2 py-1 rounded border border-emerald-200">
                  {targetDate}
                </span>
              </div>
            </div>

            {/* Critical Path Steps */}
            {criticalPathItems.map((item, idx) => {
              const isSimulatorItem = item.isAddedFromSimulator;
              const isHigh = item.riskLevel === 'High';

              return (
                <div key={item.id} className="relative pl-10">
                  <div
                    className={`absolute left-2 top-4 w-4 h-4 rounded-full border-2 border-white shadow-sm -translate-x-1/2 ${
                      isSimulatorItem
                        ? 'bg-rose-600 ring-2 ring-rose-400/50'
                        : isHigh
                        ? 'bg-amber-500'
                        : 'bg-blue-600'
                    }`}
                  ></div>

                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      isSimulatorItem
                        ? 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          STAGE: {item.stage}
                        </span>
                        {isSimulatorItem && (
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded border border-rose-200">
                            Simulated Ripple Blocker
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isHigh ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        Risk: {item.riskLevel}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                      {item.reason}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">
                        Lead Time: <strong>{item.durationWeeks} Weeks</strong>
                      </span>
                      <span className="font-bold text-rose-600">
                        Delay Risk: {item.estimatedDelay}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Today Genesis Node */}
            <div className="relative pl-10 pt-2">
              <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-sm -translate-x-1/2"></div>
              <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                    PROJECT INITIATION / TODAY
                  </span>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Pre-construction baseline dossier assembled
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  Day 0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right NEXT 3 ACTIONS (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Next 3 Regulatory Actions
              </h3>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Sequenced
              </span>
            </div>

            <div className="space-y-3">
              {/* Action 1 */}
              <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-xs font-bold text-rose-950">
                    Resolve Environmental Documentation
                  </span>
                </div>
                <p className="text-[11px] text-rose-900 pl-7 leading-relaxed">
                  Sign Annexure IV on ETP schematics with Class-3 DSC to clear MPCB scrutiny clock.
                </p>
                <div className="pl-7 pt-1">
                  <button
                    onClick={() => navigateTo('documents')}
                    className="text-[11px] font-bold text-rose-700 hover:underline flex items-center gap-1"
                  >
                    <span>Fix in Documents</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Action 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Complete Land Verification Challan
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 pl-7 leading-relaxed">
                  Ensure Sub-Registrar stamp duty franking receipt is linked to MIDC lease record.
                </p>
              </div>

              {/* Action 3 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    Prepare Factory Registration Documents
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 pl-7 leading-relaxed">
                  Collate machinery specifications and electrical single-line diagram for DISH upload.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Orchestration Intelligence</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Completing Action 1 concurrently clears upstream prerequisites for Actions 2 and 3, saving up to 21 cumulative days.
            </p>
          </div>
        </div>
      </div>

      <LegalDisclaimer />
    </div>
  );
};
