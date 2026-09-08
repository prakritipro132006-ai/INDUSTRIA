import React, { useState } from 'react';
import {
  Dna,
  Building2,
  MapPin,
  Coins,
  Users,
  Gauge,
  Layers,
  Leaf,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const ProjectProfileView = () => {
  const { project, setProject, navigateTo, showToast } = useProject();

  const [formData, setFormData] = useState({
    companyName: project.companyName || "Sahyadri Foods Pvt. Ltd.",
    industry: project.industry || "Food Processing Manufacturing Unit",
    subSector: project.subSector || "Fruit Pulps, Purees & Ready-to-Serve Beverages",
    location: project.location || "Nagpur, Maharashtra",
    industrialArea: project.industrialArea || "MIDC Butibori Industrial Area, Nagpur",
    projectStage: project.projectStage || "Setting Up",
    investmentCr: project.investmentCr || 25,
    employmentCount: project.employmentCount || 120,
    productionCapacity: project.productionCapacity || 10000,
    capacityUnit: "tonnes/year",
    landStatus: project.landStatus || "MIDC Allotted (Lease Executed)",
    environmentalCategory: project.environmentalCategory || "Orange (Moderate)",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateDNA = (e) => {
    e.preventDefault();
    setProject((prev) => ({
      ...prev,
      ...formData,
      investmentCr: Number(formData.investmentCr),
      employmentCount: Number(formData.employmentCount),
      productionCapacity: Number(formData.productionCapacity),
    }));
    showToast("Project DNA generated! Regulatory fingerprint synchronized.", "success");
    navigateTo('dashboard');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 rounded-2xl text-white shadow-md relative overflow-hidden border border-slate-800">
        <div className="absolute right-0 top-0 bottom-0 w-96 opacity-10 flex items-center justify-center pointer-events-none">
          <Dna className="w-80 h-80 text-white" />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step 1: Regulatory Onboarding</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Build Your Project DNA
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tell INDUSTRIA about your project so we can create a preliminary regulatory profile and discover all relevant statutory dependencies across Maharashtra state departments.
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleGenerateDNA} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
        {/* Section 1: Identity & Location */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>1. Enterprise & Geographical Profile</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company / Enterprise Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
              <span className="text-[11px] text-slate-400 mt-1 block">Default demo enterprise</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Industry Sector
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="Food Processing Manufacturing Unit">Food Processing Manufacturing Unit</option>
                <option value="Pharmaceutical Formulation Unit">Pharmaceutical Formulation Unit</option>
                <option value="Automotive Component Manufacturing">Automotive Component Manufacturing</option>
                <option value="Textile Processing & Garmenting">Textile Processing & Garmenting</option>
                <option value="Chemical & Petrochemical Processing">Chemical & Petrochemical Processing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Sub-Sector / Activity Code
              </label>
              <input
                type="text"
                value={formData.subSector}
                onChange={(e) => handleChange('subSector', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Project Location & District
              </label>
              <select
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="Nagpur, Maharashtra">Nagpur, Maharashtra (Zone D+ Vidarbha)</option>
                <option value="Pune (Chakan/Talegaon), Maharashtra">Pune (Chakan/Talegaon), Maharashtra (Zone A)</option>
                <option value="Aurangabad (Shendra), Maharashtra">Aurangabad (Shendra), Maharashtra (Zone C)</option>
                <option value="Nashik, Maharashtra">Nashik, Maharashtra (Zone B)</option>
                <option value="Thane / Mumbai Suburban">Thane / Mumbai Suburban (Zone A)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Industrial Estate / Specific Cluster
              </label>
              <input
                type="text"
                value={formData.industrialArea}
                onChange={(e) => handleChange('industrialArea', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Scale, Capex & Operations */}
        <div className="border-t border-slate-200 pt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-indigo-600" />
            <span>2. Capital, Employment & Operational Scale</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Total Fixed Investment (₹ Crores)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.investmentCr}
                  onChange={(e) => handleChange('investmentCr', e.target.value)}
                  className="w-full pl-8 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-semibold"
                  min="1"
                  required
                />
                <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Baseline: ₹25 Cr (Medium Scale)</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Expected Employment (Workers)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.employmentCount}
                  onChange={(e) => handleChange('employmentCount', e.target.value)}
                  className="w-full pl-8 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-semibold"
                  min="5"
                  required
                />
                <Users className="w-4 h-4 text-slate-400 absolute left-2.5 top-3" />
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Baseline: 120 employees</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Annual Production Capacity
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.productionCapacity}
                  onChange={(e) => handleChange('productionCapacity', e.target.value)}
                  className="w-full pr-24 pl-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-semibold"
                  min="100"
                  required
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-medium">
                  tonnes/year
                </span>
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">Baseline: 10,000 tonnes/yr</span>
            </div>
          </div>
        </div>

        {/* Section 3: Statutory & Land Classifications */}
        <div className="border-t border-slate-200 pt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>3. Environmental & Land Status</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Current Project Stage
              </label>
              <select
                value={formData.projectStage}
                onChange={(e) => handleChange('projectStage', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="Conceptual Planning">Conceptual Planning</option>
                <option value="Setting Up">Setting Up (Current Stage)</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready for Trial Runs">Ready for Trial Runs</option>
                <option value="Operational Expansion">Operational Expansion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Land Acquisition Status
              </label>
              <select
                value={formData.landStatus}
                onChange={(e) => handleChange('landStatus', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value="MIDC Allotted (Lease Executed)">MIDC Allotted (Lease Executed)</option>
                <option value="Private Non-Agriculture (NA) Land">Private Non-Agriculture (NA) Land</option>
                <option value="MIDC Application Pending">MIDC Application Pending</option>
                <option value="Leasehold in Private Industrial Park">Leasehold in Private Industrial Park</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                MPCB Environmental Category
              </label>
              <select
                value={formData.environmentalCategory}
                onChange={(e) => handleChange('environmentalCategory', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white font-medium text-amber-700"
              >
                <option value="Orange (Moderate)">Orange Category (Moderate Pollution)</option>
                <option value="Red (High Pollution Load)">Red Category (High Pollution Load)</option>
                <option value="Green (Low Pollution Load)">Green Category (Low Pollution Load)</option>
                <option value="White (Exempted Category)">White Category (Exempted Category)</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Parameters pre-populated for Hackathon Demo benchmark</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <span>Generate Project DNA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      <LegalDisclaimer />
    </div>
  );
};
