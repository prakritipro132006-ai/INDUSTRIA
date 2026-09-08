import React from 'react';
import {
  FileCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  Zap,
  Activity,
  ShieldAlert,
  Compass,
  Building,
  TrendingUp,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const MainDashboardView = () => {
  const { project, navigateTo } = useProject();

  const kpis = [
    {
      label: "Potential Approvals",
      value: project.kpis.potentialApprovals,
      sub: "Total identified in DNA",
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      label: "Completed Clearances",
      value: project.kpis.completed,
      sub: "37.5% milestone reached",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      label: "In Progress",
      value: project.kpis.inProgress,
      sub: "Under departmental scrutiny",
      icon: Clock,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
    },
    {
      label: "Attention Required",
      value: project.kpis.attentionRequired,
      sub: "High-risk prerequisite gates",
      icon: AlertTriangle,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Executive Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <span>Executive Command View</span>
            <span>•</span>
            <span className="text-emerald-300">Phase: {project.projectStage}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Good morning, {project.companyName}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-blue-400" />
              {project.industry}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              {project.location} ({project.industrialArea})
            </span>
            <span>•</span>
            <span className="text-slate-200 font-medium">
              Capex: ₹{project.investmentCr} Cr | Capacity: {project.productionCapacity.toLocaleString()} T/yr
            </span>
          </div>
        </div>

        {/* Prominent CTA: Run What-If Simulation */}
        <div className="shrink-0">
          <button
            onClick={() => navigateTo('simulator')}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/20 flex items-center gap-2 border border-blue-400/30 transition-all hover:scale-105"
          >
            <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Run What-If Simulation</span>
            <ArrowRight className="w-4 h-4 text-blue-200" />
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
                  {kpi.label}
                </span>
                <span className="text-3xl font-black text-slate-900 mt-1 block">
                  {kpi.value}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  {kpi.sub}
                </span>
              </div>
              <div className={`w-12 h-12 rounded-xl ${kpi.bg} ${kpi.border} border flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Intelligence Section: Readiness & Next Best Action */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Project Readiness Dial / Card (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Project Regulatory Readiness
              </h3>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Real-time Index
              </span>
            </div>

            {/* Circular Graphic */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E2E8F0"
                    strokeWidth="9"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#2563EB"
                    strokeWidth="9"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - project.scores.overallReadiness / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {project.scores.overallReadiness}%
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Score
                  </span>
                </div>
              </div>

              <div className="text-center mt-3">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Stage 2: Setting Up Benchmark
                </span>
                <p className="text-xs text-slate-500 mt-2 max-w-xs">
                  Readiness combines clearance velocity, document validity, and critical path dependency risks.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Target Launch:</span>
            <span className="font-semibold text-slate-800">{project.targetLaunchDate} (in 6 months)</span>
          </div>
        </div>

        {/* Next Best Action Card (8 cols) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-blue-900 to-indigo-950 p-6 sm:p-7 rounded-2xl text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 beacon-dot"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  NEXT BEST ACTION
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold">
                Priority Blocker • Risk Score High
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {project.nextBestAction.title}
              </h3>
              <p className="mt-2 text-sm text-blue-100 leading-relaxed max-w-2xl">
                {project.nextBestAction.description}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-blue-200 uppercase font-semibold block">
                  Primary Approval Affected
                </span>
                <span className="text-xs font-bold text-white mt-0.5 block truncate">
                  {project.nextBestAction.primaryApproval}
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-blue-200 uppercase font-semibold block">
                  Downstream Bottleneck
                </span>
                <span className="text-xs font-bold text-amber-300 mt-0.5 block">
                  Blocks DISH Factory License
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-blue-200 uppercase font-semibold block">
                  Estimated Timeline Save
                </span>
                <span className="text-xs font-bold text-emerald-300 mt-0.5 block">
                  ~{project.nextBestAction.potentialDelayDays} Days Delay Averted
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-blue-200">
              Scrutiny query clock is ticking at MPCB regional desk.
            </span>
            <button
              onClick={() => navigateTo(project.nextBestAction.targetTab)}
              className="px-5 py-2.5 rounded-xl bg-white text-blue-950 hover:bg-blue-50 font-bold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <span>{project.nextBestAction.actionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Regulatory Health Matrix & Upcoming Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Regulatory Health (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Regulatory Health Matrix
            </h3>
            <span className="text-xs font-semibold text-slate-700">Multi-Factor Analysis</span>
          </div>

          <div className="space-y-4">
            {/* Approval Readiness */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-700">Approval Readiness</span>
                <span className="font-bold text-slate-900">{project.scores.approvalReadiness}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${project.scores.approvalReadiness}%` }}
                ></div>
              </div>
            </div>

            {/* Document Readiness */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-700">Document Readiness</span>
                <span className="font-bold text-slate-900">{project.scores.documentReadiness}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${project.scores.documentReadiness}%` }}
                ></div>
              </div>
            </div>

            {/* Dependency Health */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-700">Dependency Health</span>
                <span className="font-bold text-slate-900">{project.scores.dependencyHealth}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${project.scores.dependencyHealth}%` }}
                ></div>
              </div>
            </div>

            {/* Bottleneck Risk */}
            <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-700">Bottleneck Risk:</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                {project.scores.bottleneckRisk} ({project.scores.riskScoreNum}/100)
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('bottlenecks')}
              className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View In-Depth Bottleneck Diagnostics</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Upcoming Milestones (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Sequential Milestone Horizon
            </h3>
            <button
              onClick={() => navigateTo('roadmap')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Full Roadmap</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {project.milestones.slice(0, 5).map((m) => {
              const isDone = m.status === 'completed';
              const isInProg = m.status === 'in_progress';

              return (
                <div
                  key={m.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isDone
                          ? 'bg-emerald-100 text-emerald-700'
                          : isInProg
                          ? 'bg-blue-100 text-blue-700 font-bold text-xs animate-pulse'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : <span>{m.id}</span>}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                        <span>{m.title}</span>
                        {m.critical && (
                          <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200">
                            Critical Gate
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Authority: {m.authority}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isDone
                          ? 'text-emerald-700 bg-emerald-50'
                          : isInProg
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-500 bg-slate-100'
                      }`}
                    >
                      {m.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <LegalDisclaimer compact />
    </div>
  );
};
