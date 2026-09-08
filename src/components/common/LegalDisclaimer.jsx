import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';

export const LegalDisclaimer = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="py-2.5 px-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            <strong>Preliminary Guidance Notice:</strong> INDUSTRIA provides preliminary regulatory guidance and risk indicators. Final approval applicability, requirements, and decisions remain strictly with the competent government authority.
          </span>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          Govt. of Maharashtra • SIH 2026 Prototype
        </span>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-slate-600 flex items-start gap-3">
      <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
      <div className="space-y-1">
        <div className="font-semibold text-blue-950">Statutory & Regulatory Advisory Note</div>
        <p className="leading-relaxed">
          INDUSTRIA operates as an intelligence and orchestration layer around official single-window portals (such as MAITRI & NSWS). It delivers predictive impact simulation, document diagnostics, and dependency roadmaps based on deterministic heuristics. Output does not constitute legal counsel or certified administrative determination. Final approvals remain subject to statutory rules and scrutiny by respective authorities (MPCB, MIDC, DISH, Fire Directorate, and FSSAI).
        </p>
      </div>
    </div>
  );
};
