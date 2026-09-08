import React, { useState } from 'react';
import {
  ClipboardList,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText,
  Filter,
  ArrowRight
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const ComplianceCenterView = () => {
  const { showToast } = useProject();
  const [filter, setFilter] = useState('all');

  const complianceTasks = [
    {
      id: "CMP-01",
      title: "Consent to Establish (CTE) Scrutiny Response",
      department: "MPCB (Maharashtra Pollution Control Board)",
      dueDate: "Due in 4 days (Sep 09, 2026)",
      status: "overdue",
      priority: "Critical",
      category: "Environmental",
      actionText: "Upload Signed ETP Annexure",
      details: "Official scrutiny query query period is active; non-response within 7 days results in auto-rejection."
    },
    {
      id: "CMP-02",
      title: "Environmental Monitoring & Baseline Water Sample Renewal",
      department: "MPCB / NABL Laboratory",
      dueDate: "Due in 12 days (Sep 17, 2026)",
      status: "due_soon",
      priority: "High",
      category: "Environmental",
      actionText: "Schedule Sampling Visit",
      details: "Raw borewell and municipal water test report exceeds 160 days validity. MPCB mandates test report within 180 days."
    },
    {
      id: "CMP-03",
      title: "Factory Safety Audit & Egress Layout Compliance",
      department: "DISH Maharashtra (Directorate of Industrial Safety)",
      dueDate: "Due in 28 days (Oct 03, 2026)",
      status: "due_soon",
      priority: "Medium",
      category: "Workplace Safety",
      actionText: "Review Structural Audit",
      details: "Annual factory inspectorate compliance report on ventilation and machine safeguarding."
    },
    {
      id: "CMP-04",
      title: "Fire Hydrant Pressure Certification & Mock Drill Record",
      department: "Directorate of Maharashtra Fire Services",
      dueDate: "Due in 43 days (Oct 18, 2026)",
      status: "upcoming",
      priority: "Medium",
      category: "Fire & Safety",
      actionText: "Submit Drill Certificate",
      details: "Six-monthly fire equipment testing affidavit by certified agency under Fire Act."
    },
    {
      id: "CMP-05",
      title: "MSEDCL HT Substation Earthing Resistance Test Certificate",
      department: "MSEDCL / Chief Electrical Inspector",
      dueDate: "Due in 55 days (Oct 30, 2026)",
      status: "upcoming",
      priority: "Medium",
      category: "Electrical & Grid",
      actionText: "File CEI Form 4",
      details: "Periodic earth pit test electrode verification report for 450 kVA transformer."
    },
    {
      id: "CMP-06",
      title: "FSSAI Food Safety Supervisor Certification Log",
      department: "FSSAI (Food Safety & Standards Authority of India)",
      dueDate: "Due in 68 days (Nov 12, 2026)",
      status: "upcoming",
      priority: "Low",
      category: "Food Standards",
      actionText: "Upload FoSTaC Badges",
      details: "Designate 2 trained food safety supervisors with FoSTaC credentials for commercial trial runs."
    },
    {
      id: "CMP-07",
      title: "Boiler Fabrication Stage-2 Welding Inspection Record",
      department: "Directorate of Steam Boilers, Maharashtra",
      dueDate: "Completed Aug 20, 2026",
      status: "completed",
      priority: "Medium",
      category: "Machinery",
      actionText: "Certificate Logged",
      details: "Radiography test inspection clearance issued for high-pressure steam line."
    }
  ];

  const filteredTasks = filter === 'all'
    ? complianceTasks
    : complianceTasks.filter((t) => t.status === filter);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-2 border border-blue-200">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Statutory Lifecycle Management</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Compliance Center
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">
            Never miss a statutory renewal, compliance audit, or departmental notice across Maharashtra state agencies.
          </p>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
          >
            All Items (12)
          </button>
          <button
            onClick={() => setFilter('due_soon')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'due_soon' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800'}`}
          >
            Due Soon (3)
          </button>
          <button
            onClick={() => setFilter('overdue')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'overdue' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-800'}`}
          >
            Critical Notice (1)
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Active Compliance Items
            </span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              12
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Statutory obligations</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
            <ClipboardList className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
              Due Soon (Within 30 Days)
            </span>
            <span className="text-3xl font-black text-amber-600 mt-1 block">
              3
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Action required</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
              Critical Notice / Due Now
            </span>
            <span className="text-3xl font-black text-rose-600 mt-1 block">
              1
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5 block">MPCB scrutiny query</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-rose-600" />
          </div>
        </div>
      </div>

      {/* Compliance Task List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Statutory Compliance Calendar & Renewals
        </h3>

        <div className="space-y-3">
          {filteredTasks.map((task) => {
            const isOverdue = task.status === 'overdue';
            const isDueSoon = task.status === 'due_soon';
            const isDone = task.status === 'completed';

            return (
              <div
                key={task.id}
                className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                  isOverdue
                    ? 'border-rose-300 bg-rose-50/30'
                    : isDueSoon
                    ? 'border-amber-300 bg-amber-50/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {task.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isOverdue
                          ? 'bg-rose-100 text-rose-800 font-black'
                          : isDueSoon
                          ? 'bg-amber-100 text-amber-800 font-bold'
                          : isDone
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {isOverdue ? 'ACTION REQUIRED' : isDueSoon ? 'DUE SOON' : isDone ? 'COMPLETED' : 'UPCOMING'}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {task.category}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {task.title}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    Authority: <strong className="text-slate-700">{task.department}</strong>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                    {task.details}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 gap-2 border-t sm:border-t-0 pt-2 sm:pt-0">
                  <div className="text-right">
                    <span
                      className={`text-xs font-bold ${
                        isOverdue ? 'text-rose-600' : isDueSoon ? 'text-amber-700' : 'text-slate-600'
                      }`}
                    >
                      {task.dueDate}
                    </span>
                  </div>

                  <button
                    onClick={() => showToast(`Action logged for ${task.title}.`, 'info')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      isOverdue
                        ? 'bg-rose-600 text-white hover:bg-rose-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {task.actionText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <LegalDisclaimer />
    </div>
  );
};
