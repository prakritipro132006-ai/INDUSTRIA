# INDUSTRIA — Intelligent Industrial Approval & Compliance Navigator

> **"Know what you need. Know what's next. Stay compliant."**  
> *Smart India Hackathon 2026 Prototype*  
> **Organization:** Government of Maharashtra  
> **Department:** Maharashtra State Innovation Society (MSInS), Department of Skills, Employment, Entrepreneurship and Innovation  

---

## 🚀 Overview

**INDUSTRIA** is an enterprise-grade intelligence and orchestration layer designed to sit on top of industrial single-window clearance portals like **MAITRI** and **NSWS**. 

Instead of treating compliance as a static checklist, INDUSTRIA introduces:
1. **Project DNA**: Deep parametric fingerprinting of an enterprise (Capex, capacity, employment, environmental classification, and site zoning).
2. **Approval Impact Simulator (The Wow Feature)**: What-if predictive engine that calculates the regulatory ripple effects of project scale changes *before* committing capital.
3. **Regulatory Ripple Effect**: Visual multi-node cascade tracking how scale shifts propagate through statutory bodies (MPCB, DISH, MIDC, Fire Directorate).
4. **Dependency-Based Approval Roadmap**: Stage-by-stage clearance graph mapping upstream prerequisites and downstream blockers.
5. **Reverse Planning / Critical Path**: Backward-scheduled timeline from target commercial launch date to isolate high-risk bottlenecks.
6. **Document Intelligence & Pre-Validation**: Automated heuristic pre-screening for digital signatures, validity windows, and missing annexures.
7. **Bottleneck Intelligence**: Upstream/downstream cascade modeling with dynamic risk scoring (72/100).
8. **Statutory Compliance Center**: Time-based tracking of recurring audits, water sample tests, and license renewals.
9. **Smart Scheme Matching**: Algorithmic compatibility scoring for Maharashtra Package Scheme of Incentives (PSI 2019) and subsidies.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom enterprise navy & state theme tokens
- **Icons**: Lucide React
- **Architecture**: Modular component architecture with central reactive state store (`ProjectContext`)
- **Data Engine**: Deterministic regulatory heuristics modeled after Maharashtra industrial regulations

---

## 🏃 How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000/
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🎯 The 2-Minute SIH Judge Demonstration Flow

1. **Start on Landing Page (`/`)**:
   - Point out the positioning: *"Existing systems bring approvals together; INDUSTRIA makes the journey intelligent."*
   - Click **"Explore Demo (Sahyadri Foods)"**.

2. **Executive Overview (Dashboard)**:
   - Introduce the benchmark company: **Sahyadri Foods Pvt. Ltd.** (Nagpur, ₹25 Cr Capex, 10,000 tonnes/year).
   - Point out **Project Regulatory Readiness (78%)** and the **Next Best Action** (*"Resolve Environmental Documentation"*).

3. **Trigger the WOW MOMENT (Approval Impact Simulator)**:
   - Click **"Impact Simulator"** in the sidebar.
   - Show the Left Panel (*Current Project Baseline*) vs. Right Panel (*What-If Scenario Sandbox*).
   - Drag or click **Scenario A: 20k T/yr** (doubling production capacity from 10,000 → 20,000 tonnes/year).
   - Click **"SIMULATE IMPACT"**.
   - Watch the animated **Regulatory Ripple Effect** fire across connected nodes:
     `Project Capacity → Production Scale → Approval Dependencies → Environmental Docs → Inspection Readiness → Operational Readiness`.
   - Show the dynamic deltas:
     - **Potentially Affected Approvals**: `+3`
     - **Potentially New Documents**: `+4`
     - **Bottleneck Risk**: `Medium → High`
     - **Project Readiness**: `78% → 69%`
   - Read the explainability panel (*"Why did this change?"*).

4. **Inject into Critical Path**:
   - Click **"Add to Critical Path"**.
   - Watch it smoothly transition into **Reverse Planning**, highlighting the new simulated blocker on the critical timeline with an estimated `2–3 Weeks` delay!

5. **Show Document Pre-Validation**:
   - Navigate to **"Documents"**.
   - Click **"Run Document Pre-Validation"**.
   - Point out the 12 documents analyzed, 1 critical failure detected on Annexure IV of the ETP layout.
   - Click **"Simulate: Sign with DSC & Fix"** to watch the score rebound and the Next Best Action automatically advance!

6. **Review Schemes & Compliance**:
   - Click **"Schemes"** to show 92% match with Maharashtra PSI 2019 in Vidarbha Zone D+.
   - Highlight the persistent statutory disclaimer: *"Preliminary guidance and risk indicators only. Final legal approvals remain with competent statutory authorities."*
