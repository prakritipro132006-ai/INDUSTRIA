import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Zap,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  FileCheck2,
  Building2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const LandingPage = () => {
  const { navigateTo } = useProject();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white flex flex-col justify-between">
      {/* Top Banner */}
      <header className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-white">
              INDUSTRIA
            </div>
            <div className="text-[10px] text-blue-400 font-medium tracking-wide uppercase">
              Govt. of Maharashtra • SIH 2026
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="hidden md:inline text-slate-400">
            Maharashtra State Innovation Society (MSInS)
          </span>
          <button
            onClick={() => navigateTo('dashboard')}
            className="px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors font-medium"
          >
            Go to App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-14 sm:py-20 text-center flex-1 flex flex-col justify-center items-center">
        {/* Department Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>Intelligent Industrial Approval & Compliance Navigator</span>
        </div>

        {/* Tagline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          Know what you need. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Know what's next.
          </span>{' '}
          Stay compliant.
        </h1>

        {/* Supporting Statement */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          An intelligent regulatory navigation layer for industrial projects — helping businesses understand approvals, anticipate bottlenecks, validate documents, and plan their compliance journey.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigateTo('profile')}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <span>Start Project Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigateTo('dashboard')}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02]"
          >
            <span>Explore Demo (Sahyadri Foods)</span>
          </button>
        </div>

        {/* Visual Pipeline Concept */}
        <div className="mt-16 w-full max-w-3xl p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 text-center">
            How INDUSTRIA Orchestrates Industrial Clearances
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-blue-900/60 text-blue-400 flex items-center justify-center font-bold text-xs mb-2">
                01
              </div>
              <div className="font-semibold text-xs text-white">Project DNA</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Synthesize sector, location, capex & scale into a regulatory fingerprint.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-indigo-900/60 text-indigo-400 flex items-center justify-center font-bold text-xs mb-2">
                02
              </div>
              <div className="font-semibold text-xs text-white">Regulatory Intel</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Deterministic rules map MPCB, MIDC, DISH & Fire mandates.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-sky-900/60 text-sky-400 flex items-center justify-center font-bold text-xs mb-2">
                03
              </div>
              <div className="font-semibold text-xs text-white">Approval Roadmap</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Dependency-linked graphs reveal the exact critical path.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center font-bold text-xs mb-2">
                04
              </div>
              <div className="font-semibold text-xs text-white">Next Best Action</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Simulate impact & resolve blockers before downstream delays occur.
              </div>
            </div>
          </div>
        </div>

        {/* Three Value Propositions */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">DISCOVER</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Identify all potential state, central, and local approvals automatically based on deep industrial characteristics rather than generic keyword searches.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl">
              Key Innovation
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">PREDICT</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Simulate how project modifications—like scaling capacity or capex—trigger regulatory ripple effects across environmental and safety dependencies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">ACT</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Know your single next-best action, pre-validate document signatures, and isolate bottlenecks weeks before they can delay commercial operations.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 px-6 max-w-7xl mx-auto w-full text-center text-xs text-slate-400 space-y-2">
        <div>
          INDUSTRIA is a prototype developed for the <strong>Smart India Hackathon 2026</strong>.
        </div>
        <div className="text-[11px] text-slate-400">
          Government of Maharashtra • Department of Skills, Employment, Entrepreneurship and Innovation • MSInS
        </div>
        <div className="text-[11px] text-slate-400">
          Preliminary guidance and risk indicators only. Final legal approvals remain with competent statutory authorities.
        </div>
      </footer>
    </div>
  );
};
