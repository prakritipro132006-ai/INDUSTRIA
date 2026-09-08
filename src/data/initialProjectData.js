export const initialProjectData = {
  id: "PROJ-MH-2026-089",
  companyName: "Sahyadri Foods Pvt. Ltd.",
  cin: "U15400MH2024PTC398214",
  industry: "Food Processing Manufacturing Unit",
  subSector: "Fruit Pulps, Purees & Ready-to-Serve Beverages",
  location: "Nagpur, Maharashtra",
  industrialArea: "MIDC Butibori Industrial Area, Nagpur",
  projectStage: "Setting Up",
  investmentCr: 25,
  employmentCount: 120,
  productionCapacity: 10000,
  capacityUnit: "tonnes/year",
  landStatus: "MIDC Allotted (Lease Executed)",
  landAreaAcres: 4.8,
  environmentalCategory: "Orange (Moderate)",
  powerRequirementKVA: 450,
  waterRequirementKLD: 85,
  targetLaunchMonths: 6,
  targetLaunchDate: "2026-11-15",
  
  // High-level regulatory scores
  scores: {
    overallReadiness: 78,
    approvalReadiness: 78,
    documentReadiness: 84,
    dependencyHealth: 72,
    bottleneckRisk: "Medium",
    riskScoreNum: 72, // out of 100
    regulatorySensitivity: "Medium",
  },

  // KPI Breakdown
  kpis: {
    potentialApprovals: 24,
    completed: 9,
    inProgress: 8,
    pending: 4,
    attentionRequired: 3,
  },

  nextBestAction: {
    id: "NBA-01",
    title: "Resolve Environmental Documentation",
    description: "Your environmental consent application (MPCB CTE) has missing authorized digital signatures on the Effluent Treatment Plan (ETP) design, creating the highest-risk critical path dependency.",
    primaryApproval: "Consent to Establish (CTE) - MPCB",
    urgency: "High",
    actionLabel: "Fix Document & Validate",
    targetTab: "documents",
    potentialDelayDays: 18,
  },

  milestones: [
    { id: 1, title: "MIDC Land Allotment & Lease Possession", status: "completed", date: "Jan 15, 2026", authority: "MIDC" },
    { id: 2, title: "Building Plan Approval & Factory Layout Sanction", status: "completed", date: "Feb 10, 2026", authority: "DISH / Town Planning" },
    { id: 3, title: "Consent to Establish (CTE) Final Scrutiny", status: "in_progress", date: "Target: Mar 20, 2026", authority: "MPCB", critical: true },
    { id: 4, title: "HT Power Sanction & Substation Clearance", status: "in_progress", date: "Target: Apr 05, 2026", authority: "MSEDCL" },
    { id: 5, title: "Factory License Registration & Inspections", status: "pending", date: "Target: May 12, 2026", authority: "DISH Maharashtra" },
    { id: 6, title: "FSSAI Central Manufacturing License & Fire NOC", status: "pending", date: "Target: Jun 30, 2026", authority: "FSSAI & Fire Services" },
    { id: 7, title: "Consent to Operate (CTO) & Commercial Trial Run", status: "pending", date: "Target: Aug 15, 2026", authority: "MPCB / District Industry Centre" },
  ]
};
