export const presetScenarios = [
  {
    id: "baseline",
    name: "Baseline",
    badge: "Current Project",
    description: "Original project parameters as submitted in Project DNA.",
    parameters: {
      investmentCr: 25,
      productionCapacity: 10000,
      employmentCount: 120,
      location: "Nagpur, Maharashtra",
      environmentalCategory: "Orange (Moderate)",
      powerRequirementKVA: 450,
      waterRequirementKLD: 85,
    },
    impact: {
      affectedApprovalsCount: 0,
      newDocumentsCount: 0,
      bottleneckRiskFrom: "Medium",
      bottleneckRiskTo: "Medium",
      readinessFrom: 78,
      readinessTo: 78,
      approvalReadinessFrom: 78,
      approvalReadinessTo: 78,
      deltaApprovalsLabel: "0",
      deltaDocsLabel: "0",
      isElevatedRisk: false,
    },
    affectedDependencies: [
      { name: "Environmental Documentation", impact: "MEDIUM", status: "Requires DSC Signature", tag: "MPCB CTE" },
      { name: "Utility Planning", impact: "LOW", status: "On Track", tag: "MSEDCL HT" },
      { name: "Factory Safety Layout", impact: "LOW", status: "DISH Scrutiny", tag: "DISH Act" },
    ],
    whyDidThisChange: "Standard baseline configuration. All dependencies reflect the initial 10,000 tonnes/year operational scale in MIDC Butibori.",
    recommendedAction: "Resolve existing DSC signature query on Annexure IV for MPCB CTE to maintain scheduled timeline.",
    rippleNodes: [
      { id: "p1", title: "Project Capacity", subtitle: "10,000 T/yr", state: "normal" },
      { id: "p2", title: "Production Scale", subtitle: "Medium Enterprise", state: "normal" },
      { id: "p3", title: "Approval Dependencies", subtitle: "Standard Orange Category", state: "normal" },
      { id: "p4", title: "Environmental Docs", subtitle: "Baseline ETP (85 KLD)", state: "warning" },
      { id: "p5", title: "Inspection Readiness", subtitle: "Scheduled Post-Civil", state: "normal" },
      { id: "p6", title: "Operational Readiness", subtitle: "Launch Nov 2026", state: "normal" },
    ],
    criticalPathAddition: null
  },
  {
    id: "scenario-a",
    name: "Scenario A",
    badge: "Capacity Surge (+100%)",
    description: "Production capacity doubled from 10,000 → 20,000 tonnes/year.",
    parameters: {
      investmentCr: 25,
      productionCapacity: 20000,
      employmentCount: 165,
      location: "Nagpur, Maharashtra",
      environmentalCategory: "Orange (High-Capacity Threshold)",
      powerRequirementKVA: 820,
      waterRequirementKLD: 170,
    },
    impact: {
      affectedApprovalsCount: 3,
      newDocumentsCount: 4,
      bottleneckRiskFrom: "Medium",
      bottleneckRiskTo: "High",
      readinessFrom: 78,
      readinessTo: 69,
      approvalReadinessFrom: 78,
      approvalReadinessTo: 66,
      deltaApprovalsLabel: "+3",
      deltaDocsLabel: "+4",
      isElevatedRisk: true,
    },
    affectedDependencies: [
      { name: "Environmental Documentation", impact: "HIGH", status: "ETP & Air Load Recalculation", tag: "MPCB CTE Amendment", iconColor: "rose" },
      { name: "Inspection Requirement", impact: "MEDIUM", status: "Joint Field Verification Mandate", tag: "MPCB / DISH", iconColor: "amber" },
      { name: "Factory-Related Compliance", impact: "MEDIUM", status: "Worker Density & Ventilation Sanction", tag: "DISH Rule 67", iconColor: "amber" },
      { name: "Utility Planning", impact: "LOW", status: "Transformer Bay Capacity Check", tag: "MSEDCL Grid 820kVA", iconColor: "blue" },
    ],
    whyDidThisChange: "Production capacity increased by 100%, which changes the project's scale profile. INDUSTRIA therefore flags environmental documentation and related compliance dependencies for review.",
    recommendedAction: "Review environmental applicability and update supporting documentation before proceeding with the capacity change.",
    rippleNodes: [
      { id: "p1", title: "Project Capacity", subtitle: "20,000 T/yr (+100%)", state: "alert" },
      { id: "p2", title: "Production Scale", subtitle: "High-Volume Food Unit", state: "alert" },
      { id: "p3", title: "Approval Dependencies", subtitle: "Recategorization Trigger", state: "alert" },
      { id: "p4", title: "Environmental Docs", subtitle: "ETP Expansion (170 KLD)", state: "critical" },
      { id: "p5", title: "Inspection Readiness", subtitle: "Mandatory Joint Audit", state: "warning" },
      { id: "p6", title: "Operational Readiness", subtitle: "Estimated 2–3 Wks Delay", state: "critical" },
    ],
    criticalPathAddition: {
      id: "CP-ADD-01",
      title: "Recalibrate ETP Scheme & Apply CTE Amendment (Capacity Doubling)",
      impactStage: "ENVIRONMENT",
      delayRiskWeeks: "2–3 weeks",
      sourceScenario: "Scenario A: Capacity 20,000 T/yr",
      severity: "High",
      details: "Higher hydraulic load requires expansion from 85 KLD to 170 KLD ETP and updated stack emission calculation before building approval sign-off."
    }
  },
  {
    id: "scenario-b",
    name: "Scenario B",
    badge: "Capex Expansion (₹40 Cr)",
    description: "Investment increased from ₹25 Cr → ₹40 Cr (Large Enterprise Threshold).",
    parameters: {
      investmentCr: 40,
      productionCapacity: 15000,
      employmentCount: 180,
      location: "Nagpur, Maharashtra",
      environmentalCategory: "Orange (Moderate)",
      powerRequirementKVA: 650,
      waterRequirementKLD: 120,
    },
    impact: {
      affectedApprovalsCount: 2,
      newDocumentsCount: 3,
      bottleneckRiskFrom: "Medium",
      bottleneckRiskTo: "Medium-High",
      readinessFrom: 78,
      readinessTo: 72,
      approvalReadinessFrom: 78,
      approvalReadinessTo: 71,
      deltaApprovalsLabel: "+2",
      deltaDocsLabel: "+3",
      isElevatedRisk: true,
    },
    affectedDependencies: [
      { name: "Scheme Incentives (PSI 2019)", impact: "HIGH", status: "Large Scale Mega/Ultra Status Review", tag: "DIC High-Power Committee", iconColor: "emerald" },
      { name: "Bank & Financial Scrutiny", impact: "MEDIUM", status: "Consortium Appraisal Addendum", tag: "State Level Bankers", iconColor: "amber" },
      { name: "Boiler & Equipment Sanction", impact: "MEDIUM", status: "Higher Evaporation Class Boiler", tag: "Steam Boilers Directorate", iconColor: "amber" },
      { name: "Environmental Documentation", impact: "LOW", status: "Capital Fee Differential Stamp", tag: "MPCB Consent Fee", iconColor: "blue" },
    ],
    whyDidThisChange: "Capex expansion over ₹25 Cr elevates the plant to Medium-to-Large industrial category under Maharashtra Industrial Policy 2019, opening tier-higher capital subsidies but requiring high-power committee sanction.",
    recommendedAction: "File for Special Industrial Incentive tier with Maharashtra Industry Directorate before committing procurement contracts.",
    rippleNodes: [
      { id: "p1", title: "Project Capex", subtitle: "₹40 Crore (+60%)", state: "alert" },
      { id: "p2", title: "Enterprise Tier", subtitle: "Large Scale Candidate", state: "alert" },
      { id: "p3", title: "Approval Dependencies", subtitle: "DIC State Committee", state: "warning" },
      { id: "p4", title: "Financial Addenda", subtitle: "Consortium Appraisal", state: "warning" },
      { id: "p5", title: "Incentive Roadmap", subtitle: "PSI Mega Tier Access", state: "normal" },
      { id: "p6", title: "Operational Readiness", subtitle: "Estimated 1–2 Wks Shift", state: "warning" },
    ],
    criticalPathAddition: {
      id: "CP-ADD-02",
      title: "Submit High-Value Capex Dossier for DIC High-Power Committee Clearance",
      impactStage: "FINAL COMPLIANCE",
      delayRiskWeeks: "1–2 weeks",
      sourceScenario: "Scenario B: Capex ₹40 Cr",
      severity: "Medium",
      details: "Capex elevation demands revised bank syndicate appraisal and higher stamp duty exemption registration."
    }
  }
];

export function calculateCustomImpact(current, proposed) {
  const capDiff = proposed.productionCapacity - current.productionCapacity;
  const invDiff = proposed.investmentCr - current.investmentCr;
  const empDiff = proposed.employmentCount - current.employmentCount;

  let affectedApprovals = 0;
  let newDocs = 0;
  let readinessDrop = 0;
  let riskLevel = "Medium";
  let explanation = "";
  let action = "";

  if (capDiff > 5000 || invDiff > 10 || empDiff > 40) {
    affectedApprovals = Math.min(6, Math.max(2, Math.round(capDiff / 3500 + invDiff / 10)));
    newDocs = Math.min(7, Math.max(3, Math.round(capDiff / 2500 + 2)));
    readinessDrop = Math.min(15, Math.max(5, Math.round((capDiff / 1000) * 0.8 + invDiff * 0.3)));
    riskLevel = "High";
    explanation = `Production capacity altered by ${Math.round((capDiff / current.productionCapacity) * 100)}% and capex adjusted to ₹${proposed.investmentCr} Cr. This shifts your environmental load footprint and requires mandatory recalibration of effluent treatment, grid power sanction, and worker safety zoning.`;
    action = "Review environmental applicability and update supporting documentation before proceeding with project modifications.";
  } else if (capDiff !== 0 || invDiff !== 0 || empDiff !== 0) {
    affectedApprovals = 1;
    newDocs = 2;
    readinessDrop = 3;
    riskLevel = "Medium";
    explanation = `Minor parameter adjustment detected (${capDiff > 0 ? '+' : ''}${capDiff} T/yr capacity, ₹${invDiff > 0 ? '+' : ''}${invDiff} Cr capex). Primary regulatory frameworks remain stable with minor paperwork revisions.`;
    action = "File procedural intimation with District Industries Centre and confirm MSEDCL load reserve.";
  } else {
    affectedApprovals = 0;
    newDocs = 0;
    readinessDrop = 0;
    riskLevel = "Medium";
    explanation = "Parameters match the baseline project profile. No regulatory deviations detected.";
    action = "Proceed with scheduled critical path approvals on current timeline.";
  }

  const newReadiness = Math.max(55, current.scores.overallReadiness - readinessDrop);

  return {
    affectedApprovalsCount: affectedApprovals,
    newDocumentsCount: newDocs,
    bottleneckRiskFrom: "Medium",
    bottleneckRiskTo: riskLevel,
    readinessFrom: current.scores.overallReadiness,
    readinessTo: newReadiness,
    deltaApprovalsLabel: affectedApprovals > 0 ? `+${affectedApprovals}` : "0",
    deltaDocsLabel: newDocs > 0 ? `+${newDocs}` : "0",
    isElevatedRisk: riskLevel === "High",
    whyDidThisChange: explanation,
    recommendedAction: action,
    affectedDependencies: [
      { name: "Environmental Documentation", impact: capDiff > 4000 ? "HIGH" : "MEDIUM", status: "ETP & Emissions Recalculation", tag: "MPCB Consent" },
      { name: "Inspection Requirement", impact: capDiff > 4000 ? "MEDIUM" : "LOW", status: "Field Validation Audit", tag: "DISH / MPCB" },
      { name: "Factory-Related Compliance", impact: empDiff > 30 ? "HIGH" : "MEDIUM", status: "Occupancy & Amenities Recalibration", tag: "Factories Act" },
      { name: "Utility Planning", impact: "LOW", status: "Feasibility Review", tag: "MSEDCL Grid" },
    ],
    rippleNodes: [
      { id: "p1", title: "Project Capacity", subtitle: `${proposed.productionCapacity.toLocaleString()} T/yr`, state: capDiff > 0 ? "alert" : "normal" },
      { id: "p2", title: "Production Scale", subtitle: proposed.productionCapacity > 15000 ? "High Volume" : "Medium Enterprise", state: capDiff > 0 ? "alert" : "normal" },
      { id: "p3", title: "Approval Dependencies", subtitle: "Regulatory Thresholds", state: capDiff > 5000 ? "alert" : "normal" },
      { id: "p4", title: "Environmental Docs", subtitle: "Effluent Mass Balance", state: capDiff > 0 ? "critical" : "normal" },
      { id: "p5", title: "Inspection Readiness", subtitle: "Compliance Checks", state: "warning" },
      { id: "p6", title: "Operational Readiness", subtitle: `${readinessDrop > 0 ? `-${readinessDrop}% Shift` : 'Stable'}`, state: readinessDrop > 0 ? "critical" : "normal" },
    ],
    criticalPathAddition: capDiff > 0 ? {
      id: `CP-CUSTOM-${Date.now()}`,
      title: `Recalibrate Clearances for ${proposed.productionCapacity.toLocaleString()} T/yr Capacity`,
      impactStage: "ENVIRONMENT",
      delayRiskWeeks: "2–3 weeks",
      sourceScenario: `Custom: ${proposed.productionCapacity} T/yr, ₹${proposed.investmentCr} Cr`,
      severity: "High",
      details: "Simulated capacity variation introduces supplementary documentation checks on environmental consent and power sanction."
    } : null
  };
}
