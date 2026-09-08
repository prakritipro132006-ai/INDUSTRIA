import React, { useState } from 'react';
import {
  Dna,
  Zap,
  ArrowRight,
  Sparkles,
  Sliders,
  RotateCcw,
  AlertTriangle,
  FileText,
  Activity,
  CheckCircle2,
  TrendingDown,
  Info,
  CalendarClock,
  Layers,
  Building2,
  MapPin,
  Leaf,
  Scale
} from 'lucide-react';
import { useProject } from '../../context/ProjectContext';
import { presetScenarios } from '../../data/simulationScenarios';
import { LegalDisclaimer } from '../common/LegalDisclaimer';

export const ProjectDNASimulatorView = () => {
  const {
    project,
    activeScenarioId,
    applyPresetScenario,
    customParams,
    setCustomParams,
    simulationResult,
    isSimulating,
    runSimulation,
    addScenarioToCriticalPath,
    navigateTo
  } = useProject();

  const [sliderCapacity, setSliderCapacity] = useState(customParams.productionCapacity);
  const [sliderInvestment, setSliderInvestment] = useState(customParams.investmentCr);
  const [sliderEmployment, setSliderEmployment] = useState(customParams.employmentCount);

  // Sync state if preset applied
  const handlePresetSelect = (scId) => {
    applyPresetScenario(scId);
    const sc = presetScenarios.find((s) => s.id === scId);
    if (sc) {
      setSliderCapacity(sc.parameters.productionCapacity);
      setSliderInvestment(sc.parameters.investmentCr);
      setSliderEmployment(sc.parameters.employmentCount);
    }
  };

  const handleSimulateClick = () => {
    const updated = {
      ...customParams,
      productionCapacity: Number(sliderCapacity),
      investmentCr: Number(sliderInvestment),
      employmentCount: Number(sliderEmployment),
    };
    setCustomParams(updated);
    runSimulation('custom', updated);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* 1. Project DNA Section */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <Dna className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Project DNA</h2>
                <p className="text-xs text-slate-500">Your project's statutory and regulatory fingerprint</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>REGULATORY SENSITIVITY:</span>
              <span className="font-bold uppercase">{project.scores.regulatorySensitivity}</span>
            </div>
            <button
              onClick={() => navigateTo('profile')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Edit DNA
            </button>
          </div>
        </div>

        {/* DNA Characteristic Grid */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Sector / Industry
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block truncate">
              {project.industry}
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block truncate">
              {project.subSector}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Project Location
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block truncate">
              {project.location}
            </span>
            <span className="text-[10px] text-blue-600 font-medium mt-0.5 block truncate">
              Zone D+ (Incentive Tier)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Capex & Investment
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">
              ₹{project.investmentCr} Crore
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">
              Medium Enterprise
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Production Capacity
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">
              {project.productionCapacity.toLocaleString()} tonnes/year
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">
              Continuous Line
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Direct Employment
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">
              {project.employmentCount} Personnel
            </span>
            <span className="text-[10px] text-emerald-600 font-medium mt-0.5 block">
              Workforce Threshold Met
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Environmental Profile
            </span>
            <span className="text-xs font-bold text-amber-700 mt-1 block">
              {project.environmentalCategory}
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">
              Effluent ETP 85 KLD
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Project Stage
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">
              {project.projectStage}
            </span>
            <span className="text-[10px] text-blue-600 font-medium mt-0.5 block">
              Pre-Commissioning
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Land Status
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 block truncate">
              {project.landStatus}
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5 block">
              {project.landAreaAcres} Acres • MIDC Butibori
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE WOW FEATURE: Approval Impact Simulator */}
      <section className="bg-white rounded-2xl border-2 border-blue-500/30 shadow-md overflow-hidden relative">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-7 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-blue-200 text-xs font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>THE WOW FEATURE • APPROVAL IMPACT SIMULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Approval Impact Simulator
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              "What if an entrepreneur could test the regulatory consequences of changing their industrial project BEFORE actually making the change?"
            </p>
          </div>

          {/* Preset Quick Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePresetSelect('baseline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeScenarioId === 'baseline'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Baseline (10k T)
            </button>
            <button
              onClick={() => handlePresetSelect('scenario-a')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeScenarioId === 'scenario-a'
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Scenario A: 20k T/yr
            </button>
            <button
              onClick={() => handlePresetSelect('scenario-b')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeScenarioId === 'scenario-b'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Scenario B: ₹40 Cr Capex
            </button>
          </div>
        </div>

        {/* Dual Panel Comparison: Current vs What-If */}
        <div className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50 border-b border-slate-200">
          {/* Left Panel: Current Project (5 cols) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Current Project Baseline
              </span>
              <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                Locked Profile
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Investment:</span>
                <span className="font-bold text-slate-900">₹25 Cr</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Capacity:</span>
                <span className="font-bold text-slate-900">10,000 tonnes/year</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Employees:</span>
                <span className="font-bold text-slate-900">120 personnel</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Location:</span>
                <span className="font-bold text-slate-900">Nagpur (MIDC Butibori)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Environmental Category:</span>
                <span className="font-bold text-amber-700">Moderate (Orange)</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 italic">
              Baseline regulatory roadmap formulated for 10,000 tonnes/yr fruit processing.
            </div>
          </div>

          {/* Right Panel: What-If Scenario (7 cols) */}
          <div className="lg:col-span-7 bg-blue-50/40 p-5 rounded-xl border border-blue-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-700" />
                What-If Scenario Sandbox
              </span>
              <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                Simulated Parameters
              </span>
            </div>

            <div className="space-y-4">
              {/* Parameter 1: Capacity Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-700">
                    Production Capacity: <strong className="text-blue-900">{Number(sliderCapacity).toLocaleString()} T/yr</strong>
                  </span>
                  <span className={`text-[11px] font-bold ${sliderCapacity > 10000 ? 'text-rose-600' : 'text-slate-500'}`}>
                    {sliderCapacity > 10000 ? `+${((sliderCapacity - 10000) / 100)}% Surge` : 'Baseline'}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="30000"
                  step="1000"
                  value={sliderCapacity}
                  onChange={(e) => setSliderCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5,000 T/yr</span>
                  <span className="font-semibold text-blue-800">10,000 (Current)</span>
                  <span className="font-semibold text-rose-600">20,000 (Double)</span>
                  <span>30,000 T/yr</span>
                </div>
              </div>

              {/* Parameter 2: Capex Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-700">
                    Investment (Capex): <strong className="text-blue-900">₹{sliderInvestment} Cr</strong>
                  </span>
                  <span className={`text-[11px] font-bold ${sliderInvestment > 25 ? 'text-indigo-600' : 'text-slate-500'}`}>
                    {sliderInvestment > 25 ? `+₹${sliderInvestment - 25} Cr Expansion` : 'Baseline'}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={sliderInvestment}
                  onChange={(e) => setSliderInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹10 Cr</span>
                  <span className="font-semibold text-blue-800">₹25 Cr (Current)</span>
                  <span className="font-semibold text-indigo-700">₹40 Cr</span>
                  <span>₹60 Cr</span>
                </div>
              </div>

              {/* Parameter 3: Employment Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-700">
                    Employees: <strong className="text-blue-900">{sliderEmployment} Personnel</strong>
                  </span>
                  <span className="text-[11px] font-bold text-slate-600">
                    {sliderEmployment > 120 ? `+${sliderEmployment - 120} Workers` : 'Baseline'}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={sliderEmployment}
                  onChange={(e) => setSliderEmployment(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Big Simulate Button */}
            <div className="pt-2">
              <button
                onClick={handleSimulateClick}
                disabled={isSimulating}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-sm tracking-wider uppercase shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                {isSimulating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Computing Regulatory Ripple Engine...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>SIMULATE IMPACT</span>
                    <ArrowRight className="w-4 h-4 text-blue-200" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. The Regulatory Ripple Effect Visualization */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-wider border border-blue-400/30">
              <Activity className="w-3 h-3 text-blue-400" />
              <span>Causal Progression</span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-white">
              Regulatory Ripple Effect
            </h3>
            <p className="text-xs text-slate-400">
              Visualizing how the physical parameter shift propagates through statutory gatekeepers
            </p>
          </div>

          {/* Multi-Node Connected Ripple Visual */}
          <div className="mt-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
              {simulationResult.rippleNodes.map((node, index) => {
                const isAlert = node.state === 'alert';
                const isCritical = node.state === 'critical';
                const isWarn = node.state === 'warning';

                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isCritical
                        ? 'bg-rose-950/80 border-rose-500/80 shadow-lg shadow-rose-950'
                        : isAlert
                        ? 'bg-amber-950/80 border-amber-500/80 shadow-lg shadow-amber-950'
                        : isWarn
                        ? 'bg-blue-950/80 border-blue-500/70'
                        : 'bg-slate-800/80 border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                      <span>STEP 0{index + 1}</span>
                      {isCritical && <span className="w-2 h-2 rounded-full bg-rose-500 beacon-dot"></span>}
                      {isAlert && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                    </div>

                    <div className="font-bold text-xs text-white leading-tight">
                      {node.title}
                    </div>

                    <div
                      className={`text-[11px] mt-1.5 font-medium ${
                        isCritical
                          ? 'text-rose-300'
                          : isAlert
                          ? 'text-amber-300'
                          : isWarn
                          ? 'text-blue-300'
                          : 'text-slate-400'
                      }`}
                    >
                      {node.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ripple Flow Line Label */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400 uppercase font-semibold tracking-wider">
              <span>Project Change</span>
              <ArrowRight className="w-3 h-3 text-blue-400" />
              <span>Scale Profile</span>
              <ArrowRight className="w-3 h-3 text-blue-400" />
              <span>Approval Rule Engine</span>
              <ArrowRight className="w-3 h-3 text-blue-400" />
              <span>Downstream Clearances</span>
            </div>
          </div>
        </div>

        {/* 4. Scenario Impact KPI Output */}
        <div className="p-6 sm:p-7 bg-white space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Simulation Results
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                Scenario Impact Metrics
              </h4>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400">Scenario Name:</span>
              <div className="font-bold text-blue-700 text-xs">
                {simulationResult.name} ({simulationResult.badge})
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                Potentially Affected Approvals
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-rose-600">
                  {simulationResult.impact.deltaApprovalsLabel}
                </span>
                <span className="text-xs text-slate-500">approvals flagged</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                MPCB CTE, DISH, MSEDCL
              </span>
            </div>

            {/* Metric 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                Potentially New Documents
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-indigo-600">
                  {simulationResult.impact.deltaDocsLabel}
                </span>
                <span className="text-xs text-slate-500">filings required</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                ETP Revision, Mass Balance
              </span>
            </div>

            {/* Metric 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                Bottleneck Risk Shift
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-sm font-bold text-slate-500">
                  {simulationResult.impact.bottleneckRiskFrom}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className={`text-xl font-black ${simulationResult.impact.isElevatedRisk ? 'text-rose-600' : 'text-slate-800'}`}>
                  {simulationResult.impact.bottleneckRiskTo}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Downstream queue latency
              </span>
            </div>

            {/* Metric 4 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                Project Readiness
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-sm font-bold text-slate-500">
                  {simulationResult.impact.readinessFrom}%
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className={`text-2xl font-black ${simulationResult.impact.readinessTo < simulationResult.impact.readinessFrom ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {simulationResult.impact.readinessTo}%
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Preliminary Readiness Index
              </span>
            </div>
          </div>

          {/* Affected Dependencies List */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Affected Dependencies
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {simulationResult.affectedDependencies.map((dep, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">{dep.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{dep.status}</div>
                    <span className="text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded font-medium mt-1 inline-block">
                      {dep.tag}
                    </span>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        dep.impact === 'HIGH'
                          ? 'bg-rose-100 text-rose-800'
                          : dep.impact === 'MEDIUM'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      Impact: {dep.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explainability & Recommendation Panels */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
            {/* Why did this change? (7 cols) */}
            <div className="md:col-span-7 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                <Info className="w-4 h-4 text-blue-600" />
                <span>WHY DID THIS CHANGE?</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {simulationResult.whyDidThisChange}
              </p>
            </div>

            {/* Recommended Action + Add to Critical Path (5 cols) */}
            <div className="md:col-span-5 p-5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block">
                  RECOMMENDED ACTION
                </span>
                <p className="text-xs font-medium text-slate-800 mt-1 leading-snug">
                  {simulationResult.recommendedAction}
                </p>
              </div>

              <div>
                <button
                  onClick={addScenarioToCriticalPath}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
                >
                  <CalendarClock className="w-4 h-4" />
                  <span>Add to Critical Path</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCENARIO HISTORY */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              SCENARIO HISTORY
            </h3>
            <p className="text-xs text-slate-500">
              Audit log of simulated project variations and evaluated regulatory postures
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            3 Stored Scenarios
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {presetScenarios.map((sc) => {
            const isCurrentActive = activeScenarioId === sc.id;

            return (
              <div
                key={sc.id}
                onClick={() => handlePresetSelect(sc.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isCurrentActive
                    ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{sc.name}</span>
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {sc.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {sc.description}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">
                    Cap: {sc.parameters.productionCapacity.toLocaleString()} T/yr
                  </span>
                  <span
                    className={`font-bold ${
                      sc.impact.affectedApprovalsCount > 0 ? 'text-rose-600' : 'text-emerald-600'
                    }`}
                  >
                    {sc.impact.deltaApprovalsLabel} Approvals
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <LegalDisclaimer />
    </div>
  );
};
