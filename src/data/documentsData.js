export const initialDocuments = [
  {
    id: "DOC-01",
    name: "Certificate of Incorporation & MoA / AoA",
    category: "Corporate & Identity",
    size: "2.4 MB",
    lastUpdated: "Nov 12, 2025",
    status: "valid",
    authorityRecipient: "RoC / MCA",
    confidenceScore: 98,
    issues: [],
    details: "Digital seal verified via MCA21 registry. Signatories match board resolution."
  },
  {
    id: "DOC-02",
    name: "Udyam MSME Registration Certificate",
    category: "Corporate & Identity",
    size: "1.1 MB",
    lastUpdated: "Nov 20, 2025",
    status: "valid",
    authorityRecipient: "DIC Nagpur",
    confidenceScore: 95,
    issues: [],
    details: "Valid NIC codes 10304 (Manufacture of fruit/vegetable juices and concentrates)."
  },
  {
    id: "DOC-03",
    name: "PAN, GSTIN & Professional Tax Registrations",
    category: "Statutory Tax",
    size: "1.8 MB",
    lastUpdated: "Nov 25, 2025",
    status: "valid",
    authorityRecipient: "GST Council / State Tax",
    confidenceScore: 97,
    issues: [],
    details: "GSTIN verified active. Principal place of business matches Nagpur address."
  },
  {
    id: "DOC-04",
    name: "Detailed Project Report (DPR) & Financial Model",
    category: "Project & Financial",
    size: "8.6 MB",
    lastUpdated: "Dec 05, 2025",
    status: "valid",
    authorityRecipient: "MIDC / MPCB / Banks",
    confidenceScore: 92,
    issues: [],
    details: "Comprehensive Capex breakdown of ₹25.00 Cr and debt-equity ratio verified."
  },
  {
    id: "DOC-05",
    name: "MIDC Allotment Letter & Lease Possession Deed",
    category: "Land & Civil",
    size: "5.2 MB",
    lastUpdated: "Jan 28, 2026",
    status: "valid",
    authorityRecipient: "MIDC / Town Planning",
    confidenceScore: 96,
    issues: [],
    details: "Plot No. 42/B, Butibori Industrial Estate, Nagpur (4.8 Acres) confirmed."
  },
  {
    id: "DOC-06",
    name: "Environmental Management Plan & ETP Layout",
    category: "Environmental & Pollution",
    size: "14.2 MB",
    lastUpdated: "Feb 18, 2026",
    status: "critical",
    authorityRecipient: "MPCB",
    confidenceScore: 48,
    issues: [
      {
        severity: "critical",
        title: "Missing Authorized Signatory on Annexure IV",
        description: "The Effluent Treatment Plant (ETP) hydraulic flow diagram lacks the digital signature and seal of the authorized technical director.",
        risk: "MPCB scrutiny desk will raise query, halting CTE clock and introducing 14–21 days of administrative delay.",
        recommendedFix: "Sign Annexure IV using class 3 DSC or upload signed scanned copy with board authorization."
      }
    ],
    details: "ETP capacity calculated for 85 KLD effluent treatment. Scrutiny flag active."
  },
  {
    id: "DOC-07",
    name: "Water Mass Balance & Industrial Effluent Analysis",
    category: "Environmental & Pollution",
    size: "3.7 MB",
    lastUpdated: "Feb 15, 2026",
    status: "warning",
    authorityRecipient: "MPCB / CGWA",
    confidenceScore: 74,
    issues: [
      {
        severity: "warning",
        title: "NABL Lab Test Report Validity Expiring in 18 Days",
        description: "Source raw water testing report from NABL accredited lab was conducted 162 days ago. MPCB guidelines require baseline water test within 180 days.",
        risk: "Scrutiny officer may demand a fresh water analysis sample test before committee meeting.",
        recommendedFix: "Schedule a fresh water sampling batch test with accredited testing lab in Nagpur."
      }
    ],
    details: "Chemical oxygen demand (COD) and BOD levels within Orange category limits."
  },
  {
    id: "DOC-08",
    name: "Hydrogeological Survey & Rainwater Harvesting Plan",
    category: "Environmental & Pollution",
    size: "6.3 MB",
    lastUpdated: "Jan 10, 2026",
    status: "valid",
    authorityRecipient: "CGWA / Groundwater Authority",
    confidenceScore: 91,
    issues: [],
    details: "Recharge pit dimensions and catchment run-off verified by certified hydrogeologist."
  },
  {
    id: "DOC-09",
    name: "Architectural & Civil Structural Stability Certificate",
    category: "Land & Civil",
    size: "12.0 MB",
    lastUpdated: "Feb 08, 2026",
    status: "valid",
    authorityRecipient: "SPA MIDC / DISH",
    confidenceScore: 94,
    issues: [],
    details: "Signed by licensed structural engineer. Seismic Zone II compliance certified."
  },
  {
    id: "DOC-10",
    name: "Provisional Fire NOC Sanction Drawings",
    category: "Safety & Hazard",
    size: "7.8 MB",
    lastUpdated: "Feb 22, 2026",
    status: "valid",
    authorityRecipient: "Maharashtra Fire Services",
    confidenceScore: 93,
    issues: [],
    details: "External hydrant ring, sprinkler spacing, and static water storage tank (1.5 Lakh Liters) approved."
  },
  {
    id: "DOC-11",
    name: "Plant & Machinery Layout with Safety Clearances",
    category: "Factory & Machinery",
    size: "9.4 MB",
    lastUpdated: "Feb 12, 2026",
    status: "valid",
    authorityRecipient: "DISH Maharashtra",
    confidenceScore: 89,
    issues: [],
    details: "Clear gangway widths (min 1.8m) and machine isolation interlocks marked."
  },
  {
    id: "DOC-12",
    name: "Audited Financial Statements & Net Worth Certificate",
    category: "Project & Financial",
    size: "4.5 MB",
    lastUpdated: "Dec 18, 2025",
    status: "warning",
    authorityRecipient: "DIC Maharashtra / Banks",
    confidenceScore: 71,
    issues: [
      {
        severity: "warning",
        title: "Net Worth Certificate Needs Latest CA UDIN Verification",
        description: "Chartered Accountant certificate is dated from previous quarter without verifiable online UDIN QR verification for PSI eligibility.",
        risk: "DIC subsidy scrutiny team may hold provisional registration until re-validated.",
        recommendedFix: "Obtain updated CA certificate with active UDIN barcode for FY 2025-26."
      }
    ],
    details: "Net worth meets equity contribution criteria for ₹25 Cr capex."
  }
];
