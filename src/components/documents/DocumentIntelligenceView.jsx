import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Sparkles,
  UploadCloud,
  FileText,
  RotateCw,
  ArrowRight,
  ShieldCheck,
  Cpu,
  PenTool,
  Check
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const DocumentIntelligenceView = () => {
  const {
    documents,
    isPreValidating,
    validationReport,
    runDocumentPreValidation,
    fixDocument,
    showToast
  } = useProject();

  const [filter, setFilter] = useState('all');

  const filteredDocs = filter === 'all'
    ? documents
    : documents.filter((d) => d.status === filter);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Banner & Scan Action */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Powered by Document Intelligence • Heuristic Pre-Validation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Document Intelligence
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Pre-validate documents before submission to MAITRI and departmental desks to prevent rejection, query cycles, and costly administrative delays.
          </p>
        </div>

        {/* Big Pre-Validation Button */}
        <div className="shrink-0">
          <button
            onClick={runDocumentPreValidation}
            disabled={isPreValidating}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-105 disabled:opacity-60"
          >
            {isPreValidating ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin text-blue-200" />
                <span>Scanning 12 Statutory Dossiers...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Run Document Pre-Validation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Pre-Validation Diagnostics Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Diagnostic Analysis Overview
            </h3>
            <span className="text-xs text-slate-400 mt-0.5 block">
              {validationReport.lastRun}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              All ({documents.length})
            </button>
            <button
              onClick={() => setFilter('valid')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filter === 'valid' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}`}
            >
              Valid ({validationReport.valid})
            </button>
            <button
              onClick={() => setFilter('warning')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filter === 'warning' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800'}`}
            >
              Warnings ({validationReport.warnings})
            </button>
            <button
              onClick={() => setFilter('critical')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filter === 'critical' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-800'}`}
            >
              Critical ({validationReport.critical})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Documents Analyzed
            </span>
            <span className="text-2xl font-black text-slate-900 mt-1 block">
              {validationReport.analyzed}
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">Full Project Dossier</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[10px] uppercase font-bold text-emerald-800 block">
              Submission Valid
            </span>
            <span className="text-2xl font-black text-emerald-700 mt-1 block">
              {validationReport.valid}
            </span>
            <span className="text-[10px] text-emerald-600 mt-0.5 block">Scrutiny Ready</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-[10px] uppercase font-bold text-amber-800 block">
              Potential Warnings
            </span>
            <span className="text-2xl font-black text-amber-700 mt-1 block">
              {validationReport.warnings}
            </span>
            <span className="text-[10px] text-amber-600 mt-0.5 block">Discretionary Query</span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
            <span className="text-[10px] uppercase font-bold text-rose-800 block">
              Critical Blockers
            </span>
            <span className="text-2xl font-black text-rose-700 mt-1 block">
              {validationReport.critical}
            </span>
            <span className="text-[10px] text-rose-600 mt-0.5 block">Guaranteed Rejection</span>
          </div>
        </div>
      </div>

      {/* Flagged Critical Query Spotlight (If any critical issues) */}
      {documents.find((d) => d.status === 'critical') && (
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border-2 border-rose-300 shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-600 beacon-dot"></span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-800">
                CRITICAL PRE-VALIDATION FAILURE DETECTED
              </span>
            </div>
            <span className="text-xs font-bold text-rose-900 bg-rose-200/70 px-2 py-0.5 rounded">
              MPCB CTE Application
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 space-y-2">
              <h4 className="text-base font-bold text-rose-950">
                Environmental Management Plan & ETP Layout (DOC-06)
              </h4>
              <div className="text-xs text-rose-900 space-y-1.5">
                <p>
                  <strong>Issue:</strong> Missing authorized signatory on Annexure IV (ETP hydraulic schematics).
                </p>
                <p>
                  <strong>Risk:</strong> Submission will be returned by MPCB regional desk for query compliance, halting the statutory clock by 14–21 days.
                </p>
                <p>
                  <strong>Recommended Fix:</strong> Affix Class-3 Digital Signature Certificate (DSC) of Director and re-upload.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-end">
              <button
                onClick={() => fixDocument('DOC-06')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <PenTool className="w-4 h-4" />
                <span>Simulate: Sign with DSC & Fix</span>
              </button>
              <span className="text-[10px] text-rose-600 mt-1">
                Clears query & updates readiness to 84%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Document Dossier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.map((doc) => {
          const isValid = doc.status === 'valid';
          const isWarning = doc.status === 'warning';
          const isCritical = doc.status === 'critical';

          return (
            <div
              key={doc.id}
              className={`p-4.5 rounded-xl border bg-white shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${
                isCritical
                  ? 'border-rose-300 ring-1 ring-rose-300 bg-rose-50/10'
                  : isWarning
                  ? 'border-amber-300 bg-amber-50/10'
                  : 'border-slate-200'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono text-slate-400 font-bold">
                    {doc.id} • {doc.size}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                      isValid
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isWarning
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {isValid && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                    {isWarning && <AlertTriangle className="w-3 h-3 text-amber-600" />}
                    {isCritical && <AlertOctagon className="w-3 h-3 text-rose-600" />}
                    <span className="capitalize">{doc.status}</span>
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {doc.name}
                </h4>
                <div className="text-[11px] text-slate-500 mt-1">
                  Recipient: <strong className="text-slate-700">{doc.authorityRecipient}</strong>
                </div>

                <p className="text-[11px] text-slate-600 mt-2.5 leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100">
                  {doc.details}
                </p>

                {/* Specific Issue Callout */}
                {doc.issues.length > 0 && (
                  <div className="mt-2.5 space-y-1">
                    {doc.issues.map((iss, i) => (
                      <div
                        key={i}
                        className="text-[11px] p-2 rounded-lg bg-white border border-amber-200 text-amber-900 space-y-1"
                      >
                        <div className="font-bold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>{iss.title}</span>
                        </div>
                        <p className="text-[10px] text-slate-600 leading-normal">
                          {iss.recommendedFix}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{doc.lastUpdated}</span>
                <span className="font-semibold text-slate-700">
                  Confidence: {doc.confidenceScore}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <LegalDisclaimer />
    </div>
  );
};
