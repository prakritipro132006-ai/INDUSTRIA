import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Activity,
  Zap,
  Wrench,
  Layers,
  ArrowDown
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const BottleneckView = () => {
  const { project, resolveHighestRisk, navigateTo } = useProject();

  const isHighRiskResolved = project.scores.riskScoreNum < 65;

  const bottleneckList = [
    {
      id: "BN-01",
      name: "Environmental Documentation (MPCB CTE)",
      risk: isHighRiskResolved ? "LOW" : "HIGH",
      color: isHighRiskResolved ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-rose-700 bg-rose-50 border-rose-200",
      badgeColor: isHighRiskResolved ? "bg-emerald-600" : "bg-rose-600",
      reason: isHighRiskResolved
        ? "Digital signatures verified; CTE application proceeding through scrutiny."
        : "Incomplete documentation (missing digital signatures on ETP annexures) creates high scrutiny rejection risk.",
      downstreamImpact: "Blocks Factory Layout Sanction under DISH and subsequent FSSAI license grant.",
      affectedApprovals: ["MPCB CTE", "DISH Section 6", "FSSAI Central"],
      action: isHighRiskResolved ? "Application under processing" : "Re-upload signed ETP schematics with Class-3 DSC"
    },
    {
      id: "BN-02",
      name: "Land Verification & Registration",
      risk: "MEDIUM",
      color: "text-amber-700 bg-amber-50 border-amber-200",
      badgeColor: "bg-amber-600",
      reason: "Dependent on Sub-Registrar stamp duty clearance and MIDC registered lease deed dispatch.",
      downstreamImpact: "Delays site commencement notice and permanent electrical meter room sanction.",
      affectedApprovals: ["MIDC Possession", "Building Sanction", "MSEDCL HT Supply"],
      action: "Track challan verification with Joint District Registrar"
    },
    {
      id: "BN-03",
      name: "Factory Compliance & Fire Hydrant Erection",
      risk: "LOW",
      color: "text-blue-700 bg-blue-50 border-blue-200",
      badgeColor: "bg-blue-600",
      reason: "Fabrication works on schedule; provisional fire NOC already issued by Fire Services.",
      downstreamImpact: "Final Occupancy Certificate issuance subject to physical pressure testing.",
      affectedApprovals: ["DISH License", "Final Fire NOC"],
      action: "Conduct scheduled on-site safety audit"
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold mb-2 border border-rose-200">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Pre-emptive Risk Diagnostics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Bottleneck Intelligence
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Identify where your project may slow down before the delay happens. Uncover hidden prerequisite deadlocks across government single-window desks.
          </p>
        </div>

        {/* Resolve Highest Risk Button */}
        <div className="shrink-0">
          <button
            onClick={resolveHighestRisk}
            disabled={isHighRiskResolved}
            className={`px-5 py-3 rounded-xl font-bold text-xs shadow-md flex items-center gap-2 transition-all ${
              isHighRiskResolved
                ? 'bg-emerald-100 text-emerald-800 cursor-default'
                : 'bg-rose-600 hover:bg-rose-700 text-white hover:scale-105 shadow-rose-600/20'
            }`}
          >
            {isHighRiskResolved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Highest Risk Cleared</span>
              </>
            ) : (
              <>
                <Wrench className="w-4 h-4 text-white" />
                <span>Resolve Highest Risk</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Risk Visualization & Metric Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Score Gauge (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Composite Risk Index
              </span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                isHighRiskResolved ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
              }`}>
                {isHighRiskResolved ? 'Stabilized' : 'Elevated Exposure'}
              </span>
            </div>

            <div className="py-8 text-center flex flex-col items-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F1F5F9"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={isHighRiskResolved ? "#10B981" : "#EF4444"}
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - project.scores.riskScoreNum / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-900">
                    {project.scores.riskScoreNum}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    / 100 Risk
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <span className="text-xs font-bold text-slate-800">
                  {isHighRiskResolved ? 'Low-Medium Bottleneck Probability' : 'Medium-High Bottleneck Probability'}
                </span>
                <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                  Calculated based on pending prerequisite queries, statutory review queues, and multi-agency dependencies.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Critical Path Stall:</span>
            <span className="font-bold text-rose-600">
              {isHighRiskResolved ? '0 Days (Cleared)' : 'Est. 14–21 Days'}
            </span>
          </div>
        </div>

        {/* Right Causal Flow Visualizer (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                Downstream Cascade Visualizer
              </span>
              <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                STAGE-CASCADE-MODEL
              </span>
            </div>

            {/* Causal Flow Chain */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-rose-400 uppercase block mb-1">
                  1. Potential Bottleneck
                </span>
                <div className="text-xs font-bold text-white leading-snug">
                  {isHighRiskResolved ? "Query Resolved" : "ETP Signature Omission"}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Scrutiny query halting MPCB committee
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">
                  2. Affected Approvals
                </span>
                <div className="text-xs font-bold text-white leading-snug">
                  MPCB CTE & DISH Layout
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Prerequisites cannot be cross-referenced
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">
                  3. Downstream Impact
                </span>
                <div className="text-xs font-bold text-white leading-snug">
                  Factory Construction Stall
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Civil contractor cannot pour foundations
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">
                  4. Recommended Action
                </span>
                <div className="text-xs font-bold text-emerald-300 leading-snug">
                  {isHighRiskResolved ? "Proceed to Power Sanction" : "Re-sign Annexure IV"}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Digital sign via Document Intel
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Pre-emptive intervention reduces average industrial commissioning latency by 34%.</span>
            <button
              onClick={() => navigateTo('criticalPath')}
              className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
            >
              <span>Inspect Critical Path</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Risk Cards Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Ranked Vulnerability Horizon
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottleneckList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 font-bold">
                    {item.id}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${item.color}`}
                  >
                    Risk: {item.risk}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 mt-2 leading-snug">
                  {item.name}
                </h4>

                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong>Reason:</strong> {item.reason}
                </p>

                <div className="mt-3 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 block">Downstream Impact:</span>
                  <span className="text-slate-600 mt-0.5 block">{item.downstreamImpact}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-medium text-blue-700 truncate pr-2">
                  Action: {item.action}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <LegalDisclaimer />
    </div>
  );
};
