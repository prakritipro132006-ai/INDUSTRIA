import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building,
  Coins,
  MapPin,
  Users,
  Layers,
  ShieldCheck,
  Info
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { industrialSchemes } from '../../data/schemesData';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const SchemeMatchingView = () => {
  const { project } = useProject();
  const [expandedSchemeId, setExpandedSchemeId] = useState("SCH-01");

  const toggleExpand = (id) => {
    setExpandedSchemeId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Govt. of Maharashtra Fiscal Incentives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Smart Scheme Matcher
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Discover government subsidies, fiscal incentives, and capital grants tailored to your Project DNA parameters (Nagpur Zone D+, ₹25 Cr Capex, Food Processing).
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 text-right shrink-0 backdrop-blur-sm">
          <span className="text-[10px] text-blue-200 uppercase font-semibold block">
            Top Matched Scheme
          </span>
          <span className="text-xl font-black text-amber-300 block">
            92% Match
          </span>
          <span className="text-[11px] text-slate-300 block mt-0.5">
            Maharashtra PSI 2019
          </span>
        </div>
      </div>

      {/* Scheme Cards List */}
      <div className="space-y-4">
        {industrialSchemes.map((scheme) => {
          const isExpanded = expandedSchemeId === scheme.id;

          return (
            <div
              key={scheme.id}
              className={`bg-white rounded-2xl border transition-all shadow-sm ${
                isExpanded
                  ? 'border-blue-500/50 ring-2 ring-blue-500/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Main Card Header */}
              <div
                onClick={() => toggleExpand(scheme.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {scheme.id}
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {scheme.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {scheme.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {scheme.name}
                  </h3>
                  <div className="text-xs text-slate-500">
                    Department: <strong className="text-slate-700">{scheme.department}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 border-t md:border-t-0 pt-3 md:pt-0">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Compatibility Score
                    </span>
                    <span className="text-2xl font-black text-emerald-600">
                      {scheme.matchPercentage}%
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(scheme.id);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Eligibility'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Collapsible Deep-Dive Panel */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 border-t border-slate-100 pt-5 space-y-5 bg-slate-50/50 rounded-b-2xl">
                  {/* Why this matches your project */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Why this may match your project</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-0.5">
                          Sector Alignment
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {scheme.whyItMatches.sector}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-0.5">
                          Location Advantage
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {scheme.whyItMatches.location}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-0.5">
                          Investment Threshold
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {scheme.whyItMatches.investment}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-0.5">
                          Employment Scale
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {scheme.whyItMatches.employment}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 sm:col-span-2">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block mb-0.5">
                          Project Stage Readiness
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {scheme.whyItMatches.projectStage}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Benefits */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Incentive Entitlements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scheme.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Statutory Disclaimer */}
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-slate-600 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{scheme.disclaimer}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <LegalDisclaimer />
    </div>
  );
};
