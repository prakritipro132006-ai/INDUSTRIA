import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProjectData } from '../data/initialProjectData';
import { initialApprovals } from '../data/approvalsData';
import { initialDocuments } from '../data/documentsData';
import { presetScenarios, calculateCustomImpact } from '../data/simulationScenarios';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  // Navigation
  const [activeTab, setActiveTab] = useState('landing');
  const [navigationHistory, setNavigationHistory] = useState(['landing']);

  // Project DNA State
  const [project, setProject] = useState(() => {
    const saved = localStorage.getItem('industria_project');
    return saved ? JSON.parse(saved) : initialProjectData;
  });

  // Simulator State
  const [activeScenarioId, setActiveScenarioId] = useState('baseline');
  const [customParams, setCustomParams] = useState({
    investmentCr: 25,
    productionCapacity: 10000,
    employmentCount: 120,
    location: "Nagpur, Maharashtra",
    environmentalCategory: "Orange (Moderate)",
  });
  
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(() => presetScenarios[0]);
  const [hasSimulated, setHasSimulated] = useState(false);

  // Critical Path dynamic state
  const [criticalPathItems, setCriticalPathItems] = useState([
    {
      id: "CP-01",
      title: "Consent to Establish (CTE) & ETP Sign-off",
      stage: "ENVIRONMENT",
      durationWeeks: 4,
      riskLevel: "High",
      status: "Blocker",
      reason: "Missing authorized signatory on Annexure IV halting scrutiny committee clearance",
      estimatedDelay: "14–21 Days",
      isAddedFromSimulator: false,
    },
    {
      id: "CP-02",
      title: "MSEDCL 450kVA HT Transformer Yard Bay Sanction",
      stage: "UTILITIES",
      durationWeeks: 3,
      riskLevel: "Medium",
      status: "In Progress",
      reason: "Feasibility confirmed; awaiting security deposit challan verification",
      estimatedDelay: "7 Days",
      isAddedFromSimulator: false,
    },
    {
      id: "CP-03",
      title: "DISH Factory Plan & Machinery Gangway Clearance",
      stage: "FACTORY",
      durationWeeks: 3,
      riskLevel: "Medium",
      status: "Scheduled",
      reason: "Pre-condition: requires active MPCB CTE reference number",
      estimatedDelay: "Dependent on CTE",
      isAddedFromSimulator: false,
    },
    {
      id: "CP-04",
      title: "FSSAI Central Food Processing Manufacturing License",
      stage: "FINAL COMPLIANCE",
      durationWeeks: 4,
      riskLevel: "Medium",
      status: "Pending",
      reason: "Pre-condition: Requires potable water test & factory layout certificate",
      estimatedDelay: "10 Days",
      isAddedFromSimulator: false,
    },
    {
      id: "CP-05",
      title: "Consent to Operate (CTO) & Joint Trial Run Audit",
      stage: "OPERATION",
      durationWeeks: 3,
      riskLevel: "High",
      status: "Gatekeeper",
      reason: "Final statutory prerequisite before commercial dispatch",
      estimatedDelay: "Zero Tolerance",
      isAddedFromSimulator: false,
    }
  ]);

  // Documents State
  const [documents, setDocuments] = useState(initialDocuments);
  const [isPreValidating, setIsPreValidating] = useState(false);
  const [validationReport, setValidationReport] = useState({
    lastRun: "Pre-validation run: 2 hours ago",
    analyzed: 12,
    valid: 9,
    warnings: 2,
    critical: 1,
    overallScore: 84
  });

  // Approvals State
  const [approvals, setApprovals] = useState(initialApprovals);
  const [selectedApproval, setSelectedApproval] = useState(null);

  // Toast System
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "info") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev && prev.id ? null : prev));
    }, 4500);
  };

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setNavigationHistory((prev) => [...prev, tab]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop();
      const prevTab = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setActiveTab(prevTab);
    } else {
      setActiveTab('dashboard');
    }
  };

  // Sync project to local storage
  useEffect(() => {
    localStorage.setItem('industria_project', JSON.stringify(project));
  }, [project]);

  // Handle Scenario switching
  const applyPresetScenario = (scenarioId) => {
    const found = presetScenarios.find((s) => s.id === scenarioId);
    if (found) {
      setActiveScenarioId(scenarioId);
      setCustomParams({ ...found.parameters });
      setSimulationResult(found);
      setHasSimulated(true);
    }
  };

  // Trigger Simulation with realistic animation
  const runSimulation = (scenarioIdOrCustom, params = null) => {
    setIsSimulating(true);
    const targetParams = params || customParams;

    setTimeout(() => {
      let result;
      if (scenarioIdOrCustom === 'baseline') {
        result = presetScenarios[0];
        setActiveScenarioId('baseline');
      } else if (scenarioIdOrCustom === 'scenario-a') {
        result = presetScenarios[1];
        setActiveScenarioId('scenario-a');
      } else if (scenarioIdOrCustom === 'scenario-b') {
        result = presetScenarios[2];
        setActiveScenarioId('scenario-b');
      } else {
        result = calculateCustomImpact(project, targetParams);
        setActiveScenarioId('custom');
      }

      setSimulationResult(result);
      setHasSimulated(true);
      setIsSimulating(false);
      showToast(`Simulation computed for ${targetParams.productionCapacity.toLocaleString()} T/yr capacity.`, 'success');
    }, 700);
  };

  // Add Affected Item to Critical Path (The WOW interaction)
  const addScenarioToCriticalPath = () => {
    if (!simulationResult.criticalPathAddition) {
      showToast("Current scenario has no critical path blockers to inject.", "info");
      return;
    }

    const newItem = {
      id: simulationResult.criticalPathAddition.id || `CP-${Date.now()}`,
      title: simulationResult.criticalPathAddition.title,
      stage: simulationResult.criticalPathAddition.impactStage,
      durationWeeks: 3,
      riskLevel: simulationResult.criticalPathAddition.severity,
      status: "Simulated Blocker",
      reason: simulationResult.criticalPathAddition.details,
      estimatedDelay: simulationResult.criticalPathAddition.delayRiskWeeks,
      isAddedFromSimulator: true,
      source: simulationResult.criticalPathAddition.sourceScenario
    };

    // Prevent duplicates
    if (!criticalPathItems.some((item) => item.id === newItem.id)) {
      setCriticalPathItems((prev) => [newItem, ...prev]);
      showToast("Successfully injected into Reverse Planning Critical Path! Opening Reverse Planning...", "success");
      setTimeout(() => {
        navigateTo('criticalPath');
      }, 900);
    } else {
      showToast("This scenario issue is already tracked in your Critical Path.", "warning");
      navigateTo('criticalPath');
    }
  };

  // Run Document Pre-validation
  const runDocumentPreValidation = () => {
    setIsPreValidating(true);
    setTimeout(() => {
      setIsPreValidating(false);
      setValidationReport({
        lastRun: "Pre-validation run: Just now (Freshly Scanned)",
        analyzed: 12,
        valid: 9,
        warnings: 2,
        critical: 1,
        overallScore: 84
      });
      showToast("Pre-validation completed: 1 critical query & 2 warnings identified.", "warning");
    }, 1100);
  };

  // Fix / re-upload a document
  const fixDocument = (docId) => {
    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === docId) {
          return {
            ...doc,
            status: "valid",
            confidenceScore: 99,
            issues: [],
            lastUpdated: "Just now (Authorized DSC Appended)",
            details: "Digitally signed with Director's Class 3 DSC. Scrutiny query resolved."
          };
        }
        return doc;
      })
    );

    // Update report
    setValidationReport((prev) => ({
      ...prev,
      lastRun: "Pre-validation run: Just now (Updated)",
      valid: prev.valid + 1,
      critical: Math.max(0, prev.critical - 1),
      overallScore: 92
    }));

    // Update project scores
    setProject((prev) => ({
      ...prev,
      scores: {
        ...prev.scores,
        overallReadiness: 84,
        documentReadiness: 94,
        bottleneckRisk: "Low-Medium",
        riskScoreNum: 58,
      },
      nextBestAction: {
        id: "NBA-02",
        title: "Submit MSEDCL Power Sanction Security Deposit",
        description: "Your environmental documentation query is resolved. Next critical gate is confirming the 450 kVA transformer bay reservation.",
        primaryApproval: "HT Power Supply - MSEDCL",
        urgency: "Medium",
        actionLabel: "View Utility Status",
        targetTab: "roadmap",
        potentialDelayDays: 7,
      }
    }));

    // Update MPCB approval status in approvals
    setApprovals((prev) =>
      prev.map((app) =>
        app.id === "APP-06"
          ? { ...app, status: "in_progress", bottleneckRisk: "Low", bottleneckReason: "Scrutiny query resolved with signed Annexure IV." }
          : app
      )
    );

    showToast("Document signed and re-validated! Environmental blocker cleared.", "success");
  };

  // Resolve a bottleneck
  const resolveHighestRisk = () => {
    fixDocument("DOC-06");
  };

  return (
    <ProjectContext.Provider
      value={{
        activeTab,
        setActiveTab,
        navigateTo,
        goBack,
        project,
        setProject,
        activeScenarioId,
        setActiveScenarioId,
        customParams,
        setCustomParams,
        simulationResult,
        isSimulating,
        hasSimulated,
        applyPresetScenario,
        runSimulation,
        addScenarioToCriticalPath,
        criticalPathItems,
        setCriticalPathItems,
        documents,
        isPreValidating,
        validationReport,
        runDocumentPreValidation,
        fixDocument,
        approvals,
        selectedApproval,
        setSelectedApproval,
        toast,
        showToast,
        resolveHighestRisk,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
