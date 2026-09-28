/* ==========================================================================
   Management Frameworks Guide — content
   Every framework page is rendered from this single data file.
   ========================================================================== */

const yt = (q) => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

window.CATEGORIES = {
  goals:       { label: "Goals & Metrics",       color: "#6366f1" },
  strategy:    { label: "Strategy",              color: "#0ea5e9" },
  priority:    { label: "Prioritisation",        color: "#f59e0b" },
  delivery:    { label: "Execution & Delivery",  color: "#10b981" },
  people:      { label: "Teams & Delegation",    color: "#ec4899" },
  improvement: { label: "Process Improvement",   color: "#ef4444" }
};

window.FRAMEWORKS = [
  /* ------------------------------------------------------------------ */
  {
    slug: "smart-goals",
    name: "SMART Goals",
    tagline: "Turn vague ambitions into goals that are Specific, Measurable, Achievable, Relevant and Time-bound.",
    category: "goals",
    colors: ["#6366f1", "#8b5cf6"],
    origin: "George T. Doran, Management Review, 1981",
    difficulty: "Beginner",
    time: "15–30 min per goal",
    bestFor: "Individual objectives, team goals, performance reviews, project charters",
    overview: [
      "SMART is a set of five criteria used to check that a goal is well formed. George T. Doran introduced it in the November 1981 issue of Management Review in a paper titled “There’s a S.M.A.R.T. way to write management’s goals and objectives”. The acronym has since become the most widely taught goal-setting heuristic in business, education and healthcare.",
      "The core insight is that most goals fail not because people lack effort but because the goal itself is fuzzy: nobody knows exactly what success looks like, how progress will be tracked, or when the work is due. Running a goal through the five SMART filters removes that ambiguity before any work starts.",
      "SMART does not tell you which goals to choose — it is a quality check on how a goal is written. It pairs naturally with frameworks that decide direction (OKRs, North Star Metric, SWOT) and with frameworks that track execution (KPIs, Lead & Lag measures)."
    ],
    keyIdeas: [
      { title: "Specific", text: "State exactly what will be achieved, by whom and where. Answer the 5 Ws: who, what, where, when, why." },
      { title: "Measurable", text: "Attach a number, a unit and a baseline so that progress and completion are objectively verifiable." },
      { title: "Achievable", text: "Stretching but realistic given the people, budget, skills and time available." },
      { title: "Relevant", text: "Clearly linked to a higher-level objective, strategy or personal development need." },
      { title: "Time-bound", text: "Has a deadline and, ideally, intermediate milestones that create a sense of urgency." }
    ],
    steps: [
      { title: "Write the raw intention", text: "Start with the plain-language wish, e.g. “improve customer satisfaction”. Don’t edit yet — just capture it." },
      { title: "Make it Specific", text: "Narrow the scope: which customers, which product, which channel? Name the owner. “Improve CSAT for support-ticket customers of Product X, owned by the Support Lead.”" },
      { title: "Define the measure and baseline", text: "Pick one primary metric, find today’s value and set the target: “raise CSAT from 78% to 88%”. Decide where the data will come from." },
      { title: "Sanity-check achievability", text: "Compare the target with historical trends and benchmarks, and list the resources required. Adjust the number or add resources until the team genuinely believes it is possible." },
      { title: "Confirm relevance", text: "Write one sentence explaining which company or team objective this goal supports. If you can’t, drop or rewrite the goal." },
      { title: "Set the deadline and milestones", text: "Choose an end date and 2–4 checkpoints (e.g. monthly) with interim targets." },
      { title: "Rewrite as one sentence and review regularly", text: "Combine everything: “By 31 March, the Support team will raise CSAT for Product X tickets from 78% to 88%, measured in Zendesk, to support the company retention objective.” Review progress at each milestone." }
    ],
    example: {
      title: "Before → After",
      text: "<strong>Before:</strong> “Get better at social media.”<br><strong>After:</strong> “By 30 June, the marketing team will grow LinkedIn followers from 4,200 to 6,000 by publishing three posts per week, to support the Q3 lead-generation objective.”"
    },
    checklist: [
      "The goal names a single, clear outcome (not a list of activities)",
      "An owner (person or team) is named",
      "A metric, unit and data source are defined",
      "The current baseline value is known",
      "The target number is explicitly stated",
      "Resources and constraints have been checked — the team believes it is achievable",
      "The link to a higher-level objective is written down",
      "A final deadline is set",
      "Interim milestones and review dates are scheduled",
      "The goal fits in one or two sentences anyone can understand"
    ],
    pitfalls: [
      "Writing activities (“run 5 workshops”) instead of outcomes (“reduce onboarding time by 20%”).",
      "Setting ‘achievable’ so conservatively that the goal no longer motivates anyone.",
      "Measuring something easy to count rather than something that matters.",
      "Setting and forgetting — SMART goals need scheduled check-ins."
    ],
    docs: [
      { title: "SMART criteria — overview and history", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/SMART_criteria" },
      { title: "SMART Goals: How to Make Your Goals Achievable", source: "MindTools", url: "https://www.mindtools.com/a4wo118/smart-goals" },
      { title: "How to write SMART goals (with examples)", source: "Atlassian", url: "https://www.atlassian.com/blog/productivity/how-to-write-smart-goals" },
      { title: "Write SMART goals: templates & examples", source: "Asana", url: "https://asana.com/resources/smart-goals" }
    ],
    videos: [
      { title: "SMART goals explained with examples", url: yt("SMART goals explained examples") },
      { title: "How to write SMART goals for performance reviews", url: yt("how to write SMART goals performance review") },
      { title: "SMART vs OKR — which should you use?", url: yt("SMART goals vs OKRs") }
    ],
    companies: [
      { name: "UK Civil Service", how: "Uses SMART objectives as the standard format for staff performance agreements." },
      { name: "NHS (UK)", how: "Appraisal and personal development plans ask clinicians and staff for SMART objectives." },
      { name: "Atlassian", how: "Publishes SMART goal guidance and templates for teams using Jira and Confluence." },
      { name: "Asana", how: "Builds SMART goal templates into its Goals feature and promotes the method to customers." },
      { name: "HubSpot", how: "Teaches SMART goal setting as the foundation of its marketing and sales planning content." }
    ],
    related: ["okrs", "kpis", "lead-lag-measures"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lead-lag-measures",
    name: "Lead & Lag Measures",
    tagline: "Track the predictive activities you can control (lead) — not just the results you can only observe afterwards (lag).",
    category: "goals",
    colors: ["#4f46e5", "#06b6d4"],
    origin: "Popularised by McChesney, Covey & Huling, The 4 Disciplines of Execution, 2012",
    difficulty: "Intermediate",
    time: "1–2 hours to design, weekly to run",
    bestFor: "Sales teams, operations, habit change, any goal where results arrive late",
    overview: [
      "A lag measure tells you whether you achieved a goal: revenue, profit, customer churn, weight lost. It is accurate but arrives too late to change — by the time you see it, the outcome is history.",
      "A lead measure is a behaviour or input that is (1) predictive of the lag measure and (2) influenceable by the team right now. Sales calls made, proposals sent, preventive-maintenance tasks completed or calories eaten are classic lead measures.",
      "The approach is the second discipline of FranklinCovey’s 4 Disciplines of Execution (4DX): focus on the wildly important goal, act on the lead measures, keep a compelling scoreboard, and create a cadence of accountability. Amazon applies the same principle under the name “controllable input metrics”."
    ],
    keyIdeas: [
      { title: "Lag = outcome", text: "Easy to measure, hard to influence directly. It is the scoreboard result." },
      { title: "Lead = driver", text: "Predictive and influenceable. Moving it should move the lag measure." },
      { title: "Predictive + influenceable", text: "Both properties are required. A measure the team cannot control is not a useful lead measure." },
      { title: "Scoreboard", text: "Make lead and lag visible so that people can tell in 5 seconds if they are winning." },
      { title: "Cadence", text: "Short weekly accountability meetings to review commitments against the lead measures." }
    ],
    steps: [
      { title: "Define the lag measure", text: "Express the goal as “From X to Y by When” (e.g. grow monthly recurring revenue from €80k to €100k by December)." },
      { title: "Brainstorm possible drivers", text: "List every activity that could plausibly move the lag measure. Aim for quantity at this stage." },
      { title: "Filter for predictiveness", text: "Use historical data or expert judgement to keep only the drivers with the strongest link to the outcome." },
      { title: "Filter for influence", text: "Keep drivers the team can control this week without external approval. Drop the rest." },
      { title: "Choose 1–3 lead measures and set targets", text: "E.g. “each rep books 12 qualified demos per week”. Make sure they can be tracked cheaply and frequently." },
      { title: "Build a visible scoreboard", text: "A simple chart, whiteboard or dashboard showing both lead and lag measures against target." },
      { title: "Review weekly and validate", text: "Hold a 20–30 minute weekly meeting. After a few cycles, check whether movement in the lead measure is really moving the lag. If not, pick a better lead." }
    ],
    example: {
      title: "Example: restaurant chain",
      text: "<strong>Lag:</strong> increase average guest rating from 4.1 to 4.5 by year end.<br><strong>Leads:</strong> (1) table check-in by manager within 10 minutes for 90% of tables; (2) food leaves the kitchen within 12 minutes of order for 95% of dishes. Both are tracked daily and reviewed every Monday."
    },
    checklist: [
      "The lag measure is written as “From X to Y by When”",
      "Candidate drivers were brainstormed with the people doing the work",
      "Each chosen lead measure is predictive of the lag measure",
      "Each chosen lead measure is directly influenceable by the team",
      "No more than three lead measures are active",
      "Lead measures can be tracked at least weekly",
      "A visible scoreboard shows lead and lag together",
      "A weekly accountability meeting is scheduled",
      "The correlation between lead and lag is reviewed after several cycles"
    ],
    pitfalls: [
      "Picking lead measures that are just smaller lag measures (e.g. ‘weekly revenue’).",
      "Tracking too many leads so that nobody focuses on any of them.",
      "Lead measures that are expensive to collect and therefore go stale.",
      "Never testing whether the lead actually predicts the lag."
    ],
    docs: [
      { title: "The 4 Disciplines of Execution", source: "FranklinCovey", url: "https://www.franklincovey.com/the-4-disciplines/" },
      { title: "Performance indicator (leading & lagging indicators)", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Performance_indicator" },
      { title: "Leading vs. lagging indicators", source: "Investopedia", url: "https://www.investopedia.com/terms/l/leadingindicator.asp" },
      { title: "Working Backwards — Amazon’s controllable input metrics", source: "workingbackwards.com", url: "https://workingbackwards.com/" }
    ],
    videos: [
      { title: "4 Disciplines of Execution — lead and lag measures", url: yt("4 disciplines of execution lead and lag measures") },
      { title: "Leading vs lagging indicators explained", url: yt("leading vs lagging indicators explained business") },
      { title: "Chris McChesney on acting on lead measures", url: yt("Chris McChesney lead measures") }
    ],
    companies: [
      { name: "Marriott International", how: "Rolled out 4DX lead measures across hotels to drive guest-satisfaction scores." },
      { name: "Amazon", how: "Manages the business on ‘controllable input metrics’ (selection, price, delivery speed) rather than output metrics." },
      { name: "FranklinCovey", how: "Author and consultancy behind 4DX; implements it with thousands of client organisations." },
      { name: "HubSpot", how: "Sales teams track activity metrics (calls, meetings booked) as leading indicators of closed revenue." }
    ],
    related: ["kpis", "north-star-metric", "okrs"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kpis",
    name: "Key Performance Indicators (KPIs)",
    tagline: "A small set of quantifiable measures that show how effectively an organisation is achieving its key objectives.",
    category: "goals",
    colors: ["#2563eb", "#22d3ee"],
    origin: "Rooted in management-by-objectives and the Balanced Scorecard (Kaplan & Norton, 1992)",
    difficulty: "Beginner → Intermediate",
    time: "Half-day workshop to define; continuous monitoring",
    bestFor: "Company dashboards, department health, operational monitoring, investor reporting",
    overview: [
      "A Key Performance Indicator is a measurable value that demonstrates how effectively a company, team or process is achieving a critical objective. The word ‘key’ matters: a KPI is not any metric, it is one of the few metrics that determine success.",
      "KPIs are usually defined at several levels — strategic (e.g. revenue growth, net promoter score), tactical (e.g. customer acquisition cost) and operational (e.g. average handling time). Each KPI should have an owner, a formula, a data source, a target, and a review frequency.",
      "The Balanced Scorecard by Robert Kaplan and David Norton popularised the idea of balancing KPIs across four perspectives — financial, customer, internal process, and learning & growth — so that short-term financial results aren’t achieved at the expense of long-term capability."
    ],
    keyIdeas: [
      { title: "Key, not all", text: "Typically 5–10 KPIs per level. If everything is a KPI, nothing is." },
      { title: "Clearly defined", text: "Formula, unit, data source and frequency are documented so everyone computes it the same way." },
      { title: "Target & thresholds", text: "Each KPI has a target and red / amber / green thresholds for quick interpretation." },
      { title: "Owner", text: "One accountable person who explains variances and drives corrective actions." },
      { title: "Balanced", text: "Mix financial & non-financial, leading & lagging, efficiency & quality measures." }
    ],
    steps: [
      { title: "Start from strategy", text: "List the 3–5 strategic objectives for the period. KPIs must measure progress on these, not on activities." },
      { title: "Ask ‘how would we know?’", text: "For each objective, brainstorm measures that would prove it is being achieved." },
      { title: "Select the vital few", text: "Score candidates on relevance, measurability, cost to collect, and ability to drive action. Keep 1–3 per objective." },
      { title: "Write a KPI definition card", text: "Name, purpose, formula, unit, data source, frequency, owner, baseline, target, thresholds." },
      { title: "Set targets", text: "Use baselines, benchmarks and strategic ambition to set realistic but challenging targets." },
      { title: "Build the dashboard", text: "Visualise KPIs with trend lines and RAG status. Automate data collection where possible." },
      { title: "Review and act", text: "Run a monthly performance review: discuss off-track KPIs, root causes and actions. Retire KPIs that no longer drive decisions." }
    ],
    example: {
      title: "Example KPI definition card",
      text: "<strong>KPI:</strong> Customer Churn Rate · <strong>Formula:</strong> customers lost in month ÷ customers at start of month · <strong>Source:</strong> CRM · <strong>Owner:</strong> Head of Customer Success · <strong>Baseline:</strong> 3.2% · <strong>Target:</strong> ≤ 2.0% · <strong>Thresholds:</strong> green ≤ 2.0%, amber 2.0–2.8%, red > 2.8% · <strong>Review:</strong> monthly."
    },
    checklist: [
      "Each KPI maps to a stated strategic objective",
      "There are no more than 5–10 KPIs per organisational level",
      "Every KPI has a written formula and unit",
      "The data source is reliable and access is automated where possible",
      "Baselines are known for every KPI",
      "Targets and red / amber / green thresholds are set",
      "Each KPI has one named owner",
      "A mix of leading and lagging indicators is included",
      "A regular review meeting is scheduled with clear follow-up actions",
      "KPIs are reviewed at least yearly and retired when no longer useful"
    ],
    pitfalls: [
      "Vanity metrics (page views, downloads) that look good but don’t drive decisions.",
      "Goodhart’s law: once a measure becomes a target, people game it.",
      "Only lagging financial KPIs, leaving no early warning.",
      "Dashboards nobody looks at because there is no review ritual."
    ],
    docs: [
      { title: "Performance indicator", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Performance_indicator" },
      { title: "Balanced scorecard", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Balanced_scorecard" },
      { title: "What is a KPI? Definition & examples", source: "KPI.org (Balanced Scorecard Institute)", url: "https://kpi.org/KPI-Basics" },
      { title: "Key performance indicators (KPIs)", source: "Investopedia", url: "https://www.investopedia.com/terms/k/kpi.asp" }
    ],
    videos: [
      { title: "What is a KPI? Key performance indicators explained", url: yt("what is a KPI key performance indicators explained") },
      { title: "How to choose the right KPIs", url: yt("how to choose the right KPIs for your business") },
      { title: "The Balanced Scorecard explained", url: yt("balanced scorecard explained Kaplan Norton") }
    ],
    companies: [
      { name: "FedEx", how: "Its Service Quality Indicator (SQI) weights daily service failures into a single, company-wide KPI." },
      { name: "Southwest Airlines", how: "Runs its operation on KPIs such as on-time performance and aircraft turnaround time." },
      { name: "Amazon", how: "Weekly Business Review decks track hundreds of defined metrics with owners and targets." },
      { name: "Walmart", how: "Tracks comparable-store sales, inventory turnover and e-commerce growth as headline KPIs." },
      { name: "Starbucks", how: "Reports KPIs such as comparable-store sales and Rewards membership to investors." }
    ],
    related: ["lead-lag-measures", "north-star-metric", "smart-goals"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "swot-analysis",
    name: "SWOT Analysis",
    tagline: "Map internal Strengths and Weaknesses against external Opportunities and Threats to inform strategy.",
    category: "strategy",
    colors: ["#0ea5e9", "#14b8a6"],
    origin: "Associated with Albert Humphrey’s work at Stanford Research Institute, 1960s",
    difficulty: "Beginner",
    time: "1–3 hour workshop",
    bestFor: "Strategic planning, market entry, product launches, personal career planning",
    overview: [
      "SWOT analysis is a structured planning technique that evaluates four elements. Strengths and Weaknesses are internal — things the organisation controls, such as skills, brand, cost structure and technology. Opportunities and Threats are external — market trends, regulation, competitors, technology shifts.",
      "The framework originated in business-policy research in the 1960s and is commonly credited to work at the Stanford Research Institute. Its simplicity makes it the most widely used strategy tool in the world, from boardrooms to classrooms.",
      "A SWOT becomes truly valuable when you move beyond the four lists and build a TOWS matrix: combining the quadrants to generate strategies (SO: use strengths to seize opportunities; WO: fix weaknesses to capture opportunities; ST: use strengths to counter threats; WT: minimise weaknesses and avoid threats)."
    ],
    keyIdeas: [
      { title: "Strengths (internal, +)", text: "Capabilities and resources that give an advantage: expertise, patents, brand, loyal customers." },
      { title: "Weaknesses (internal, –)", text: "Limitations that put you at a disadvantage: skill gaps, high costs, outdated systems." },
      { title: "Opportunities (external, +)", text: "Favourable conditions you could exploit: new markets, regulation changes, emerging tech." },
      { title: "Threats (external, –)", text: "External conditions that could cause trouble: competitors, economic downturns, substitutes." },
      { title: "TOWS strategies", text: "Cross-matching the quadrants turns a diagnostic list into strategic options." }
    ],
    steps: [
      { title: "Define the objective and scope", text: "Be clear what you are analysing (company, product, project, person) and the decision it will inform." },
      { title: "Gather evidence", text: "Collect data first: customer feedback, financials, competitor analysis, PESTLE scan. Evidence beats opinion." },
      { title: "Assemble a diverse group", text: "Include people from different functions and levels to avoid blind spots." },
      { title: "Brainstorm each quadrant", text: "Start internal (S, W), then external (O, T). Write short, specific statements." },
      { title: "Prioritise", text: "Rank the items in each quadrant by impact; keep the top 3–5 per quadrant." },
      { title: "Build the TOWS matrix", text: "Generate SO, WO, ST and WT strategies by combining the prioritised items." },
      { title: "Convert to action", text: "Choose strategies, assign owners and deadlines (SMART goals), and revisit the SWOT at least yearly." }
    ],
    example: {
      title: "Example: independent coffee roaster",
      text: "<strong>S:</strong> award-winning roasts, loyal local community. <strong>W:</strong> small online presence, limited capacity. <strong>O:</strong> growth in home-brewing subscriptions. <strong>T:</strong> rising green-coffee prices, large chains entering specialty.<br><strong>SO strategy:</strong> launch a subscription box featuring award-winning roasts to the existing community."
    },
    checklist: [
      "The objective and scope of the analysis are written down",
      "Evidence (data, customer feedback, competitor info) was collected beforehand",
      "Participants represent several functions and levels",
      "Strengths and weaknesses are internal; opportunities and threats are external",
      "Statements are specific and evidence-based, not generic",
      "Items in each quadrant are prioritised",
      "A TOWS matrix produced concrete strategic options",
      "Selected strategies have owners, goals and deadlines",
      "A date to refresh the SWOT is scheduled"
    ],
    pitfalls: [
      "Confusing internal and external factors (e.g. listing ‘new competitor’ as a weakness).",
      "Long, generic lists (‘good people’) that don’t inform any decision.",
      "Stopping at the four boxes without generating strategies.",
      "One-off exercise that is never revisited as the environment changes."
    ],
    docs: [
      { title: "SWOT analysis", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/SWOT_analysis" },
      { title: "SWOT Analysis: How to develop a strategy", source: "MindTools", url: "https://www.mindtools.com/amtbj63/swot-analysis" },
      { title: "SWOT analysis: what it is and when to use it", source: "Investopedia", url: "https://www.investopedia.com/terms/s/swot.asp" },
      { title: "Are you doing the SWOT analysis backwards?", source: "Harvard Business Review", url: "https://hbr.org/2021/02/are-you-doing-the-swot-analysis-backwards" }
    ],
    videos: [
      { title: "SWOT analysis explained step by step", url: yt("SWOT analysis explained step by step") },
      { title: "TOWS matrix: turning SWOT into strategy", url: yt("TOWS matrix strategy explained") },
      { title: "SWOT analysis real company example", url: yt("SWOT analysis real company example") }
    ],
    companies: [
      { name: "Stanford Research Institute", how: "Where the long-range planning research credited with the method was carried out." },
      { name: "Starbucks", how: "One of the most frequently used SWOT case studies in business schools and strategy courses." },
      { name: "Walmart", how: "Its strategic reviews and public analyses routinely frame growth and risk in SWOT terms." },
      { name: "Small Business Administration (US)", how: "Recommends SWOT as a core step in its official business-planning guidance." },
      { name: "Management consultancies", how: "Firms such as Deloitte and PwC use SWOT as an opening diagnostic in strategy engagements." }
    ],
    related: ["okrs", "pareto-principle", "rice-scoring"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cport",
    name: "CPORT Delegation",
    tagline: "Delegate clearly by covering Context, Purpose, Outcome, Resources and Time — every time you hand over a task.",
    category: "people",
    colors: ["#ec4899", "#f97316"],
    origin: "Delegation checklist popularised by ThenSomehow and adopted by product & engineering leaders",
    difficulty: "Beginner",
    time: "5–15 min per delegated task",
    bestFor: "Delegating tasks, project kick-offs, briefing agencies or freelancers, onboarding",
    overview: [
      "CPORT is a five-part checklist for delegating work well. Most delegation fails not because the person receiving the task lacks skill, but because the brief was incomplete: they didn’t know why it mattered, what ‘good’ looked like, or how much time and money they could spend.",
      "By walking through Context, Purpose, Outcome, Resources and Time, the delegator transfers not just the task but the understanding needed to make good decisions independently. That reduces back-and-forth, rework and micromanagement.",
      "CPORT works in a 1:1 conversation, in a written ticket template, or as a project kick-off agenda. It pairs well with the RACI Matrix (who is responsible) and SMART goals (how the outcome is phrased)."
    ],
    keyIdeas: [
      { title: "Context", text: "The background: what else is going on, history, stakeholders, how this task fits the bigger picture." },
      { title: "Purpose", text: "Why the work matters and what you want to get out of it. Purpose enables good judgement calls." },
      { title: "Outcome", text: "What ‘done’ and ‘good enough’ look like — quality bar, format, acceptance criteria." },
      { title: "Resources", text: "Budget, people, tools, access, documents and experts available (and limits)." },
      { title: "Time", text: "The deadline, checkpoints and how much effort is expected (hours vs. weeks)." }
    ],
    steps: [
      { title: "Choose the right person", text: "Match the task to someone’s skills and development goals. Consider workload before delegating." },
      { title: "Prepare the CPORT brief", text: "Before the conversation, jot down a line or two for each letter. Gaps you find here are gaps they would have hit later." },
      { title: "Explain Context and Purpose first", text: "Start with the ‘why’ — this is the part most often skipped and most valuable for autonomy." },
      { title: "Agree the Outcome", text: "Describe what success looks like, show examples if possible, and agree acceptance criteria." },
      { title: "Clarify Resources and Time", text: "State budget, tools, people and the deadline. Agree checkpoints appropriate to their experience." },
      { title: "Play it back", text: "Ask them to summarise the task in their own words. Fix any misunderstanding now." },
      { title: "Support, don’t hover", text: "Hold the agreed check-ins, remove blockers, and give feedback at the end. Recognise the result." }
    ],
    example: {
      title: "Example: delegating a customer survey",
      text: "<strong>C:</strong> churn rose 2 points last quarter; leadership is debating a pricing change. <strong>P:</strong> understand why customers leave before we decide. <strong>O:</strong> a 2-page summary of the top 5 churn reasons with quotes, ready for the exec meeting. <strong>R:</strong> €500 incentive budget, Typeform account, help from the CS team. <strong>T:</strong> draft by the 14th, final by the 20th; 15-min check-in each Friday."
    },
    checklist: [
      "Context: background, stakeholders and related work are explained",
      "Purpose: the ‘why’ and the intended benefit are clear",
      "Outcome: deliverable, quality bar and acceptance criteria are agreed",
      "Resources: budget, tools, people and access are listed",
      "Time: deadline and effort estimate are agreed",
      "Check-in points match the person’s experience level",
      "Decision rights are clear (what can they decide alone?)",
      "The person has played the brief back in their own words",
      "The brief is written down (message, ticket or doc)"
    ],
    pitfalls: [
      "Skipping Context and Purpose because they feel ‘obvious’ to you.",
      "Specifying how to do the work instead of what outcome is needed.",
      "Forgetting to grant access or budget, so the task stalls on day one.",
      "Delegating responsibility without authority."
    ],
    docs: [
      { title: "How to get better at delegating: use CPORT", source: "ThenSomehow", url: "https://www.thensomehow.com/get-better-delegating-use-cport/" },
      { title: "Delegating effectively using the CPORT technique", source: "Bilue", url: "https://bilue.com.au/article/delegating-effectively-using-the-cport-delegation-technique" },
      { title: "CPORT task definition", source: "Benjamin P. Taylor (Medium)", url: "https://antlerboy.medium.com/cport-task-definition-ae1f8c24ccea" },
      { title: "Successful Delegation", source: "MindTools", url: "https://www.mindtools.com/ah8wbr0/successful-delegation" }
    ],
    videos: [
      { title: "How to delegate effectively", url: yt("how to delegate effectively manager") },
      { title: "CPORT delegation framework", url: yt("CPORT delegation context purpose outcome resources time") },
      { title: "Delegation mistakes new managers make", url: yt("delegation mistakes new managers") }
    ],
    companies: [
      { name: "ThenSomehow", how: "Publishes and teaches CPORT as its core delegation checklist for managers." },
      { name: "Bilue", how: "The Australian digital agency uses CPORT to brief tasks across delivery teams." },
      { name: "Product & engineering teams", how: "Many teams encode CPORT headings directly into Jira or Linear ticket templates." },
      { name: "Agencies & consultancies", how: "Use CPORT-style briefs when handing work to freelancers and client teams." }
    ],
    related: ["raci-matrix", "smart-goals", "eisenhower-matrix"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "eisenhower-matrix",
    name: "Eisenhower Matrix",
    tagline: "Sort tasks by urgency and importance to decide what to Do, Schedule, Delegate or Delete.",
    category: "priority",
    colors: ["#f59e0b", "#ef4444"],
    origin: "Inspired by Dwight D. Eisenhower (1954 speech); popularised by Stephen Covey, 1989",
    difficulty: "Beginner",
    time: "10–20 min daily or weekly",
    bestFor: "Personal time management, managers with overloaded inboxes, weekly planning",
    overview: [
      "The Eisenhower Matrix is a 2×2 grid that classifies tasks along two axes: urgency (does it demand immediate attention?) and importance (does it contribute to long-term goals and values?). It is named after US President Dwight D. Eisenhower, who said in 1954: “I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent.”",
      "Stephen Covey popularised the grid in The 7 Habits of Highly Effective People, calling the Important-but-Not-Urgent quadrant (Quadrant II) the key to effectiveness: planning, relationship building, learning and prevention all live there and are the first things squeezed out by ‘urgent’ noise.",
      "The matrix is a quick, visual way to regain control of a to-do list and to decide what should not be done at all."
    ],
    keyIdeas: [
      { title: "Do first (urgent + important)", text: "Crises, deadlines, real problems. Handle them now — but aim to shrink this quadrant over time." },
      { title: "Schedule (important, not urgent)", text: "Strategy, planning, learning, health, relationships. Block time in the calendar for these." },
      { title: "Delegate (urgent, not important)", text: "Interruptions, many meetings and emails. Hand off or batch them." },
      { title: "Delete (neither)", text: "Busywork and distractions. Eliminate without guilt." },
      { title: "Importance is defined by goals", text: "You can only judge importance if your goals are clear." }
    ],
    steps: [
      { title: "Brain-dump every task", text: "List everything on your plate — projects, emails, errands, requests." },
      { title: "Clarify your goals", text: "Remind yourself of your top 3 goals for the week or quarter; they define importance." },
      { title: "Place each task in a quadrant", text: "Ask: will this matter in a month? (importance). Must it be done in the next 24–48 hours? (urgency)." },
      { title: "Do Quadrant 1 now", text: "Tackle urgent-important items immediately, in order of deadline." },
      { title: "Calendar Quadrant 2", text: "Put important-not-urgent work into fixed time blocks; protect them like meetings." },
      { title: "Delegate Quadrant 3", text: "Use CPORT to hand over urgent-but-not-important tasks, or batch them into one slot per day." },
      { title: "Delete Quadrant 4 and review", text: "Remove low-value items. Repeat the sort daily or weekly and aim to spend more time in Quadrant 2." }
    ],
    example: {
      title: "Example: a project manager’s Monday",
      text: "<strong>Do:</strong> fix the production outage blocking the client demo. <strong>Schedule:</strong> write next quarter’s roadmap (Wed 9–11). <strong>Delegate:</strong> collate weekly status reports → team coordinator. <strong>Delete:</strong> reorganising old email folders."
    },
    checklist: [
      "All current tasks are captured in one list",
      "Top goals for the period are written down",
      "Every task has been placed in one of the four quadrants",
      "Quadrant 1 tasks are ordered by deadline",
      "Quadrant 2 tasks have time blocked in the calendar",
      "Quadrant 3 tasks have a delegate or a batching slot",
      "Quadrant 4 tasks have been removed",
      "A daily or weekly review of the matrix is scheduled",
      "Quadrant 1 recurring crises are analysed to prevent them"
    ],
    pitfalls: [
      "Treating everything as urgent and important.",
      "Confusing ‘urgent for someone else’ with ‘important for you’.",
      "Never scheduling Quadrant 2, so it stays a wish list.",
      "Delegating without clear briefs, creating new urgent problems later."
    ],
    docs: [
      { title: "Time management — The Eisenhower method", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" },
      { title: "Eisenhower’s Urgent/Important Principle", source: "MindTools", url: "https://www.mindtools.com/al1e0k5/eisenhowers-urgentimportant-principle" },
      { title: "The Eisenhower Matrix: introduction & 3-minute video", source: "Eisenhower.me", url: "https://www.eisenhower.me/eisenhower-matrix/" },
      { title: "Eisenhower Matrix guide", source: "Todoist", url: "https://www.todoist.com/productivity-methods/eisenhower-matrix" }
    ],
    videos: [
      { title: "The Eisenhower Matrix explained", url: yt("Eisenhower matrix explained") },
      { title: "Stephen Covey — Big Rocks demonstration", url: yt("Stephen Covey big rocks demonstration") },
      { title: "Urgent vs important: time management", url: yt("urgent vs important time management Covey quadrant 2") }
    ],
    companies: [
      { name: "FranklinCovey", how: "Teaches the Time Management Matrix (Quadrant II focus) in its leadership programmes." },
      { name: "Todoist (Doist)", how: "Publishes Eisenhower templates and priority levels designed around the matrix." },
      { name: "Asana", how: "Offers an Eisenhower Matrix template for team task triage." },
      { name: "Miro", how: "Provides a widely used collaborative Eisenhower Matrix board template." }
    ],
    related: ["rice-scoring", "pareto-principle", "cport"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "rice-scoring",
    name: "RICE Scoring",
    tagline: "Prioritise ideas objectively with (Reach × Impact × Confidence) ÷ Effort.",
    category: "priority",
    colors: ["#f97316", "#eab308"],
    origin: "Developed by Sean McBride and the product team at Intercom, 2016",
    difficulty: "Intermediate",
    time: "5–10 min per idea; 1–2 h per backlog review",
    bestFor: "Product roadmaps, feature backlogs, marketing experiments, internal project portfolios",
    overview: [
      "RICE is a scoring model for prioritising product ideas, features or projects. It was created by Intercom’s product team to replace gut-feel debates with a consistent, comparable number.",
      "Each idea is scored on four factors: Reach (how many people it will affect in a time period), Impact (how much it will affect each person), Confidence (how sure you are about your estimates) and Effort (person-months of work). The RICE score is (Reach × Impact × Confidence) ÷ Effort — essentially ‘total impact per unit of work’.",
      "The Confidence factor is RICE’s distinctive feature: it explicitly penalises exciting ideas backed by little evidence, encouraging teams to validate before investing."
    ],
    keyIdeas: [
      { title: "Reach", text: "People or events per time period, e.g. 2,000 customers per quarter. Use real data when available." },
      { title: "Impact", text: "Per-person effect on the goal on a fixed scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal." },
      { title: "Confidence", text: "Percentage: 100% = high (data), 80% = medium, 50% = low. Below 50% is a moonshot." },
      { title: "Effort", text: "Total person-months across product, design and engineering. Use whole numbers or halves." },
      { title: "Score = R × I × C ÷ E", text: "Higher is better. Compare across the backlog, not in absolute terms." }
    ],
    steps: [
      { title: "Agree the goal and the time window", text: "Impact must be measured against a single goal (e.g. activation) and Reach over a fixed period (e.g. per quarter)." },
      { title: "List candidate ideas", text: "Gather features, projects or experiments into one spreadsheet or tool." },
      { title: "Estimate Reach", text: "Use analytics: how many users/events will this touch in the period?" },
      { title: "Score Impact and Confidence", text: "Use the fixed scales. Be honest — note the evidence behind each Confidence value." },
      { title: "Estimate Effort with the builders", text: "Ask engineering and design for rough person-month estimates." },
      { title: "Calculate and rank", text: "Compute the RICE score and sort. Discuss surprises — they often reveal hidden assumptions." },
      { title: "Decide, then revisit", text: "Use the ranking as input (not a replacement) for judgement. Rescore as new data arrives." }
    ],
    example: {
      title: "Worked example",
      text: "<strong>Idea A — onboarding checklist:</strong> R = 4,000 users/quarter, I = 1, C = 80%, E = 2 → <strong>1,600</strong>.<br><strong>Idea B — AI assistant:</strong> R = 6,000, I = 2, C = 50%, E = 8 → <strong>750</strong>.<br>Despite being more exciting, Idea B ranks lower until its confidence is raised or effort reduced."
    },
    checklist: [
      "A single goal is defined for scoring Impact",
      "A fixed time window is used for Reach",
      "Reach estimates are based on data where available",
      "Impact uses the standard 0.25 / 0.5 / 1 / 2 / 3 scale",
      "Confidence values are justified with evidence notes",
      "Effort is estimated by the people who will do the work",
      "Scores are calculated consistently in one shared sheet/tool",
      "The ranked list was discussed, not blindly accepted",
      "Dependencies and strategic must-dos are considered separately",
      "Scores are refreshed when new data arrives"
    ],
    pitfalls: [
      "Inflating Impact or Confidence for pet projects.",
      "Mixing different time windows for Reach across ideas.",
      "Treating the score as a final decision and ignoring strategy or dependencies.",
      "Scoring tiny tasks that should just be done."
    ],
    docs: [
      { title: "RICE: Simple prioritization for product managers", source: "Intercom", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
      { title: "RICE Scoring Model", source: "ProductPlan", url: "https://www.productplan.com/glossary/rice-scoring-model/" },
      { title: "Prioritization frameworks", source: "Atlassian", url: "https://www.atlassian.com/agile/product-management/prioritization-framework" },
      { title: "Product prioritization frameworks", source: "Productboard", url: "https://www.productboard.com/glossary/product-prioritization-frameworks/" }
    ],
    videos: [
      { title: "RICE prioritization framework explained", url: yt("RICE prioritization framework explained") },
      { title: "Product prioritization: RICE vs ICE vs MoSCoW", url: yt("RICE vs ICE vs MoSCoW prioritization") },
      { title: "How to score a product backlog with RICE", url: yt("RICE scoring product backlog example") }
    ],
    companies: [
      { name: "Intercom", how: "Created RICE to prioritise its own product roadmap and published the method." },
      { name: "Productboard", how: "Ships RICE as a built-in prioritisation formula for product teams." },
      { name: "Atlassian (Jira Product Discovery)", how: "Supports RICE-style custom formulas for ranking ideas." },
      { name: "ProductPlan", how: "Offers RICE scoring in its roadmapping software and teaching material." }
    ],
    related: ["eisenhower-matrix", "north-star-metric", "scrum-agile"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "scrum-agile",
    name: "Scrum & Agile",
    tagline: "Deliver value in short, iterative sprints with continuous feedback, transparency and adaptation.",
    category: "delivery",
    colors: ["#10b981", "#06b6d4"],
    origin: "Agile Manifesto, 2001; Scrum by Ken Schwaber & Jeff Sutherland, 1995",
    difficulty: "Intermediate → Advanced",
    time: "Sprints of 1–4 weeks; 2–3 sprints to stabilise",
    bestFor: "Software development, product teams, complex projects with changing requirements",
    overview: [
      "Agile is a set of values and principles, captured in the 2001 Manifesto for Agile Software Development, that favour individuals and interactions, working product, customer collaboration and responding to change. It is a mindset rather than a method.",
      "Scrum is the most popular framework for putting Agile into practice. Defined in the Scrum Guide by Ken Schwaber and Jeff Sutherland, it organises work into fixed-length Sprints (≤ 1 month) during which a small, cross-functional Scrum Team turns the highest-priority backlog items into a usable Increment.",
      "Scrum rests on three pillars — transparency, inspection and adaptation — and five values: commitment, focus, openness, respect and courage. It deliberately leaves many practices (estimation, engineering techniques) up to the team."
    ],
    keyIdeas: [
      { title: "3 accountabilities", text: "Product Owner (maximises value, owns the backlog), Scrum Master (coaches the team & removes impediments), Developers (build the Increment)." },
      { title: "5 events", text: "The Sprint, Sprint Planning, Daily Scrum (15 min), Sprint Review and Sprint Retrospective." },
      { title: "3 artifacts + commitments", text: "Product Backlog → Product Goal; Sprint Backlog → Sprint Goal; Increment → Definition of Done." },
      { title: "Empiricism", text: "Decisions based on what is observed. Inspect frequently, adapt quickly." },
      { title: "Agile ≠ Scrum", text: "Kanban, XP, SAFe and Lean are other Agile approaches; choose what fits your work." }
    ],
    steps: [
      { title: "Form the Scrum Team", text: "3–10 people with all the skills needed. Name a Product Owner and a Scrum Master." },
      { title: "Create the Product Backlog & Goal", text: "The PO lists and orders features, fixes and improvements toward a clear Product Goal." },
      { title: "Agree a Definition of Done", text: "Quality criteria every increment must meet (tested, reviewed, documented, deployable)." },
      { title: "Sprint Planning", text: "Choose a Sprint length (often 2 weeks), agree a Sprint Goal and select backlog items the team can complete." },
      { title: "Daily Scrum", text: "15-minute daily meeting for the Developers to inspect progress toward the Sprint Goal and adapt the plan." },
      { title: "Sprint Review", text: "Demonstrate the Increment to stakeholders, gather feedback and update the Product Backlog." },
      { title: "Sprint Retrospective", text: "Reflect on people, process and tools (Start-Stop-Continue works well) and commit to 1–2 improvements. Repeat." }
    ],
    example: {
      title: "Example: two-week sprint",
      text: "<strong>Day 1:</strong> Sprint Planning (2 h) — goal: “Customers can pay with Apple Pay”. <strong>Days 2–9:</strong> Daily Scrum at 9:30; backlog refinement mid-sprint. <strong>Day 10:</strong> Sprint Review with sales & support (1 h), then Retrospective (1 h) — team agrees to add automated tests to the Definition of Done."
    },
    checklist: [
      "Product Owner, Scrum Master and Developers are identified",
      "The team has all skills needed to deliver an Increment",
      "A Product Goal and ordered Product Backlog exist",
      "A Definition of Done is written and shared",
      "Sprint length is fixed (1–4 weeks)",
      "Every Sprint has a Sprint Goal",
      "Daily Scrum is held and kept to 15 minutes",
      "Sprint Review includes real stakeholders",
      "Each Retrospective produces at least one concrete improvement",
      "Work in progress is visible on a board (physical or digital)"
    ],
    pitfalls: [
      "‘Scrum-but’: keeping the ceremonies while ignoring the values and empiricism.",
      "Daily Scrum turning into a status report for a manager.",
      "Product Owner without real authority over priorities.",
      "Changing the Sprint Goal mid-sprint or skipping Retrospectives."
    ],
    docs: [
      { title: "The Scrum Guide (official, free)", source: "scrumguides.org", url: "https://scrumguides.org/scrum-guide.html" },
      { title: "Manifesto for Agile Software Development", source: "agilemanifesto.org", url: "https://agilemanifesto.org/" },
      { title: "What is Scrum?", source: "Scrum.org", url: "https://www.scrum.org/resources/what-scrum-module" },
      { title: "Agile coach: Scrum", source: "Atlassian", url: "https://www.atlassian.com/agile/scrum" }
    ],
    videos: [
      { title: "Scrum in under 10 minutes", url: yt("Scrum in under 10 minutes") },
      { title: "Agile product ownership in a nutshell (Henrik Kniberg)", url: yt("Agile product ownership in a nutshell Henrik Kniberg") },
      { title: "Spotify engineering culture", url: yt("Spotify engineering culture part 1") }
    ],
    companies: [
      { name: "Spotify", how: "Famous ‘squads, tribes, chapters and guilds’ model built on Agile team autonomy." },
      { name: "ING Bank", how: "Reorganised its Netherlands headquarters into Agile squads and tribes from 2015." },
      { name: "Microsoft", how: "Azure DevOps teams moved to three-week sprints and publish their Agile practices." },
      { name: "Salesforce", how: "Adopted Scrum company-wide for R&D in 2006 and runs a large Agile release train." },
      { name: "Adobe", how: "Many product teams (e.g. Premiere Pro) adopted Scrum; widely cited case study." }
    ],
    related: ["start-stop-continue", "rice-scoring", "okrs"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "start-stop-continue",
    name: "Start-Stop-Continue",
    tagline: "A simple feedback and retrospective format: what should we Start doing, Stop doing and Continue doing?",
    category: "people",
    colors: ["#22c55e", "#ef4444"],
    origin: "Classic retrospective / feedback format; popularised in Agile retrospectives and management training",
    difficulty: "Beginner",
    time: "30–60 min session",
    bestFor: "Team retrospectives, 360° feedback, project post-mortems, quarterly reviews",
    overview: [
      "Start-Stop-Continue is one of the simplest and most action-oriented feedback formats. Participants answer three questions about a team, project, process or person: What should we start doing? What should we stop doing? What should we continue doing?",
      "Its power lies in turning feedback directly into behaviour change. Rather than vague praise or criticism, every comment is phrased as an action — something to add, remove or keep.",
      "It is widely used as a Sprint Retrospective format in Scrum, as a structure for upward and peer feedback, and in student course evaluations."
    ],
    keyIdeas: [
      { title: "Start", text: "New behaviours, practices or experiments that would improve results." },
      { title: "Stop", text: "Things that are wasteful, harmful or no longer serve the goal." },
      { title: "Continue", text: "What’s working well and should be protected — positive reinforcement." },
      { title: "Actionable by design", text: "Every item is phrased as an observable behaviour." },
      { title: "Psychological safety", text: "Honest ‘stops’ require a safe, blame-free environment." }
    ],
    steps: [
      { title: "Set the scope and prime directive", text: "State what is being reviewed (last sprint, Q2 launch) and remind everyone the aim is improvement, not blame." },
      { title: "Silent writing (5–10 min)", text: "Each person writes items on sticky notes or a digital board under Start, Stop and Continue." },
      { title: "Share and cluster", text: "Go round the room; group similar items and remove duplicates." },
      { title: "Discuss", text: "Ask ‘why?’ for the biggest clusters to uncover root causes." },
      { title: "Vote", text: "Use dot voting (3 votes each) to pick the most valuable changes." },
      { title: "Commit to actions", text: "Turn the top 1–3 items into specific actions with owners and dates." },
      { title: "Follow up", text: "Open the next session by reviewing whether last time’s actions happened." }
    ],
    example: {
      title: "Example: sprint retrospective board",
      text: "<strong>Start:</strong> pairing on complex tickets; writing acceptance criteria before planning. <strong>Stop:</strong> accepting work mid-sprint without PO approval; 1-hour status meetings. <strong>Continue:</strong> Friday demos; code reviews within 24 h.<br><strong>Action:</strong> PO to route all new requests through backlog (owner: Ana, from next sprint)."
    },
    checklist: [
      "The scope and time period for feedback are defined",
      "A blame-free ground rule is stated at the start",
      "Everyone contributes silently before discussion",
      "Items are phrased as concrete behaviours",
      "Similar items are clustered",
      "The team voted to prioritise",
      "No more than 1–3 actions are committed",
      "Each action has an owner and a due date",
      "Previous actions are reviewed at the next session"
    ],
    pitfalls: [
      "The same few voices dominate — use silent writing first.",
      "Lists without owners, so nothing changes.",
      "Only ‘Continue’ items because people fear being negative.",
      "Using it as a disguised performance review for one individual."
    ],
    docs: [
      { title: "Start, Stop, Continue retrospective", source: "Atlassian Team Playbook", url: "https://www.atlassian.com/team-playbook/plays/retrospective" },
      { title: "Retrospectives", source: "GitLab Handbook", url: "https://handbook.gitlab.com/handbook/engineering/management/group-retrospectives/" },
      { title: "What is a Sprint Retrospective?", source: "Scrum.org", url: "https://www.scrum.org/resources/what-is-a-sprint-retrospective" },
      { title: "Start Stop Continue retrospective template", source: "Parabol", url: "https://www.parabol.co/templates/sprint-retrospectives/start-stop-continue/" }
    ],
    videos: [
      { title: "Start Stop Continue retrospective explained", url: yt("start stop continue retrospective") },
      { title: "How to run a great sprint retrospective", url: yt("how to run a sprint retrospective") },
      { title: "Start Stop Continue for feedback", url: yt("start stop continue feedback model") }
    ],
    companies: [
      { name: "Atlassian", how: "Includes retrospective plays with Start/Stop/Continue-style prompts in its Team Playbook." },
      { name: "GitLab", how: "Runs asynchronous team retrospectives documented in its public handbook." },
      { name: "Parabol", how: "Offers Start-Stop-Continue as a built-in template in its retrospective tool." },
      { name: "Universities", how: "Many use Start-Stop-Continue for mid-semester course feedback from students." }
    ],
    related: ["scrum-agile", "cport", "okrs"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pareto-principle",
    name: "Pareto Principle (80/20)",
    tagline: "Roughly 80% of effects come from 20% of causes — find the vital few and focus there.",
    category: "improvement",
    colors: ["#ef4444", "#f59e0b"],
    origin: "Vilfredo Pareto (1896); named & generalised by Joseph M. Juran, 1940s",
    difficulty: "Beginner",
    time: "1–2 hours with data",
    bestFor: "Quality improvement, defect analysis, customer & product profitability, time management",
    overview: [
      "The Pareto Principle states that for many phenomena, roughly 80% of the consequences come from 20% of the causes. Italian economist Vilfredo Pareto observed in 1896 that about 80% of Italy’s land was owned by 20% of the population.",
      "Quality pioneer Joseph M. Juran generalised the idea as ‘the vital few and the trivial many’ and made it a cornerstone of quality management. The Pareto chart — a bar chart sorted in descending order with a cumulative-percentage line — is one of the seven basic tools of quality.",
      "80/20 is a heuristic, not a law: the real split may be 70/30 or 90/10. The point is that impact is rarely distributed evenly, so data-driven focus on the biggest contributors yields disproportionate results."
    ],
    keyIdeas: [
      { title: "Vital few vs. trivial many", text: "A small number of causes usually drive most of the effect." },
      { title: "Pareto chart", text: "Bars sorted descending + cumulative % line; the ‘elbow’ shows where to focus." },
      { title: "Data first", text: "The principle only helps when you measure; intuition often misidentifies the vital few." },
      { title: "Iterate", text: "After fixing the top causes, re-run the analysis — a new vital few emerges." },
      { title: "Not literally 80/20", text: "The numbers needn’t add to 100; it’s about imbalance." }
    ],
    steps: [
      { title: "Define the problem and the metric", text: "E.g. customer complaints, defects, support tickets, revenue by customer." },
      { title: "Choose categories", text: "Decide how to classify causes (defect type, product, customer, root cause)." },
      { title: "Collect data", text: "Gather counts or costs for each category over a representative period." },
      { title: "Sort and calculate cumulative %", text: "Order categories from largest to smallest and compute the running percentage." },
      { title: "Draw the Pareto chart", text: "Plot bars and the cumulative line. Mark the 80% threshold." },
      { title: "Identify the vital few", text: "Categories to the left of the 80% line are your priorities." },
      { title: "Act and re-measure", text: "Run root-cause analysis on the vital few, fix them, then repeat the Pareto analysis." }
    ],
    example: {
      title: "Example: e-commerce returns",
      text: "Of 1,200 monthly returns, <strong>‘wrong size’ (540)</strong> and <strong>‘looks different from photo’ (400)</strong> make up 78%. Adding a size-guide widget and better product photography addresses the vital few, while the eight other reasons together cause only 22%."
    },
    checklist: [
      "The problem and the measured effect are clearly defined",
      "Mutually exclusive cause categories are agreed",
      "Data covers a representative time period",
      "Categories are sorted from largest to smallest",
      "Cumulative percentages are calculated",
      "A Pareto chart has been drawn",
      "The vital few (≈ 80% of impact) are identified",
      "Root-cause analysis is planned for the vital few",
      "A date to re-run the analysis after fixes is set"
    ],
    pitfalls: [
      "Using opinions instead of data to name the ‘20%’.",
      "Ignoring severity — the most frequent issue isn’t always the most costly.",
      "Categories that overlap or are too broad (‘other’ is the biggest bar).",
      "Neglecting the ‘trivial many’ entirely when some are safety-critical."
    ],
    docs: [
      { title: "Pareto principle", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pareto_principle" },
      { title: "What is a Pareto chart?", source: "ASQ (American Society for Quality)", url: "https://asq.org/quality-resources/pareto" },
      { title: "Pareto Analysis", source: "MindTools", url: "https://www.mindtools.com/ax7xx2w/pareto-analysis" },
      { title: "Pareto principle (80/20 rule)", source: "Investopedia", url: "https://www.investopedia.com/terms/p/paretoprinciple.asp" }
    ],
    videos: [
      { title: "The 80/20 rule explained", url: yt("Pareto principle 80/20 rule explained") },
      { title: "How to create a Pareto chart in Excel", url: yt("how to create a Pareto chart in Excel") },
      { title: "Pareto analysis in quality management", url: yt("Pareto analysis quality management Juran") }
    ],
    companies: [
      { name: "Microsoft", how: "Found that fixing the top 20% of most-reported bugs eliminated about 80% of related errors and crashes (2002)." },
      { name: "Toyota", how: "Uses Pareto charts as a standard quality tool within the Toyota Production System." },
      { name: "Motorola", how: "Pareto analysis is part of the Six Sigma toolkit Motorola pioneered in the 1980s." },
      { name: "General Electric", how: "Embedded Pareto analysis in its Six Sigma programme under Jack Welch." }
    ],
    related: ["theory-of-constraints", "eisenhower-matrix", "kpis"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "okrs",
    name: "Objectives & Key Results (OKRs)",
    tagline: "Pair an inspiring qualitative Objective with 2–5 measurable Key Results to align and focus the whole organisation.",
    category: "goals",
    colors: ["#8b5cf6", "#ec4899"],
    origin: "Andy Grove at Intel, 1970s; brought to Google by John Doerr, 1999",
    difficulty: "Intermediate",
    time: "Quarterly cycles; 1–2 days to set company OKRs",
    bestFor: "Company-wide alignment, ambitious growth goals, cross-team focus",
    overview: [
      "OKRs are a collaborative goal-setting framework. An Objective is what you want to achieve — significant, concrete, action-oriented and inspiring. Key Results are how you will know you got there — specific, time-bound and measurable, typically 2–5 per Objective.",
      "Andy Grove developed the approach at Intel in the 1970s as an evolution of Peter Drucker’s management by objectives. John Doerr, who learned it at Intel, introduced OKRs to Google in 1999, and the method spread across Silicon Valley and beyond. Doerr’s book Measure What Matters (2018) is the standard reference.",
      "OKRs are usually set quarterly, are transparent to everyone in the company, and combine top-down direction with bottom-up input. Many companies distinguish committed OKRs (must be met) from aspirational ‘moonshot’ OKRs, where 60–70% achievement is a success."
    ],
    keyIdeas: [
      { title: "Objective = direction", text: "Qualitative, memorable, motivating. “Delight first-time customers.”" },
      { title: "Key Results = evidence", text: "Quantitative outcomes, not tasks. “Raise onboarding NPS from 32 to 50.”" },
      { title: "Focus", text: "3–5 Objectives per level per quarter at most." },
      { title: "Transparency & alignment", text: "Everyone can see everyone’s OKRs, including the CEO’s." },
      { title: "Stretch & scoring", text: "Graded 0.0–1.0; ~0.7 on stretch goals is healthy. Not tied to compensation." }
    ],
    steps: [
      { title: "Set company OKRs", text: "Leadership defines 3–5 Objectives linked to the mission and annual strategy, each with 2–5 Key Results." },
      { title: "Teams draft their OKRs", text: "Teams propose OKRs that contribute to company OKRs — roughly half bottom-up." },
      { title: "Align and resolve dependencies", text: "Review drafts across teams, remove duplicates, surface shared Key Results." },
      { title: "Publish transparently", text: "Put all OKRs in one visible place (tool, wiki or spreadsheet)." },
      { title: "Weekly check-ins", text: "Update confidence and progress for each Key Result; discuss blockers." },
      { title: "Mid-quarter review", text: "Adjust or drop OKRs that no longer make sense." },
      { title: "Grade and reflect", text: "At quarter end, score each KR 0.0–1.0, run a retrospective, and feed learnings into next quarter." }
    ],
    example: {
      title: "Example OKR",
      text: "<strong>Objective:</strong> Make our mobile app the fastest way to reorder groceries.<br><strong>KR1:</strong> Reduce median reorder time from 3m 40s to 60s.<br><strong>KR2:</strong> Increase weekly reorders via app from 18k to 30k.<br><strong>KR3:</strong> Raise App Store rating from 4.1 to 4.6."
    },
    checklist: [
      "No more than 3–5 Objectives per team per quarter",
      "Each Objective is qualitative, clear and inspiring",
      "Each Objective has 2–5 Key Results",
      "Key Results are measurable outcomes, not tasks",
      "Baselines and targets are defined for every Key Result",
      "Team OKRs link visibly to company OKRs",
      "Committed vs. aspirational OKRs are labelled",
      "OKRs are published where everyone can see them",
      "Weekly check-ins are scheduled",
      "End-of-quarter grading and retrospective are planned",
      "OKRs are decoupled from bonuses and compensation"
    ],
    pitfalls: [
      "Writing to-do lists as Key Results (“launch feature X”).",
      "Too many OKRs — focus disappears.",
      "Set-and-forget: no weekly check-ins.",
      "Tying OKRs to pay, which kills ambition and honesty."
    ],
    docs: [
      { title: "What Matters — OKR resources", source: "whatmatters.com (John Doerr)", url: "https://www.whatmatters.com/faqs/okr-meaning-definition-example" },
      { title: "Google re:Work — Set goals with OKRs", source: "Google re:Work", url: "https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/" },
      { title: "OKR", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/OKR" },
      { title: "OKRs: the ultimate guide", source: "Atlassian", url: "https://www.atlassian.com/agile/agile-at-scale/okr" }
    ],
    videos: [
      { title: "John Doerr — Why the secret to success is setting the right goals (TED)", url: "https://www.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals" },
      { title: "How Google sets goals: OKRs (Rick Klau)", url: yt("Startup Lab workshop How Google sets goals OKRs Rick Klau") },
      { title: "OKRs explained with examples", url: yt("OKRs explained with examples") }
    ],
    companies: [
      { name: "Intel", how: "Birthplace of OKRs under Andy Grove, used to align the company around ‘Operation Crush’." },
      { name: "Google", how: "Has used OKRs since 1999, with company OKRs visible to all employees." },
      { name: "LinkedIn", how: "Used OKRs to scale alignment during rapid growth." },
      { name: "Adobe", how: "Aligns product and go-to-market teams around quarterly OKRs." },
      { name: "Bill & Melinda Gates Foundation", how: "Uses OKRs to set and track philanthropic goals (per John Doerr)." }
    ],
    related: ["smart-goals", "north-star-metric", "kpis"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "north-star-metric",
    name: "North Star Metric",
    tagline: "The single metric that best captures the core value your product delivers to customers — and predicts long-term growth.",
    category: "strategy",
    colors: ["#0ea5e9", "#6366f1"],
    origin: "Popularised by Sean Ellis (growth hacking) and Amplitude’s North Star Playbook, 2010s",
    difficulty: "Intermediate",
    time: "1–2 workshops to define; reviewed quarterly",
    bestFor: "Product-led companies, growth teams, aligning product, marketing and engineering",
    overview: [
      "A North Star Metric (NSM) is the one metric that best reflects the value customers get from your product. When it grows sustainably, the business grows. It acts as a shared compass for every team.",
      "A good North Star sits between customer value and business results: it is a leading indicator of revenue, it measures value delivered (not just activity), and it can be influenced by many teams.",
      "The NSM is supported by a small set of input metrics — the levers teams can pull (e.g. breadth, depth, frequency and efficiency of usage). Amplitude’s North Star Playbook formalised this ‘North Star + inputs’ tree."
    ],
    keyIdeas: [
      { title: "Expresses value", text: "Measures the moment customers get the product’s core value." },
      { title: "Leading indicator", text: "Predicts future revenue and retention rather than reporting past revenue." },
      { title: "Actionable", text: "Teams can influence it through input metrics." },
      { title: "Input metrics", text: "3–5 drivers — e.g. new users activated, frequency of use, depth of engagement." },
      { title: "One, not many", text: "Deliberately singular so it forces trade-off conversations." }
    ],
    steps: [
      { title: "Identify your core value moment", text: "When exactly do customers experience the value you promise? (a ride completed, a song listened to, a night booked)." },
      { title: "Classify your game", text: "Attention (time spent), transaction (purchases) or productivity (tasks completed)? It shapes the metric type." },
      { title: "Draft candidate metrics", text: "Brainstorm 3–5 candidates that quantify the value moment." },
      { title: "Test candidates", text: "Is it a leading indicator of revenue? Does it reflect customer value? Is it measurable and understandable? Can teams influence it?" },
      { title: "Choose one and map inputs", text: "Select the NSM and break it into 3–5 input metrics owned by teams." },
      { title: "Communicate widely", text: "Put the NSM on dashboards, all-hands slides and OKRs; explain the ‘why’." },
      { title: "Review regularly", text: "Check quarterly that the NSM still correlates with retention and revenue; evolve it as the business matures." }
    ],
    example: {
      title: "Well-known North Stars",
      text: "<strong>Airbnb:</strong> nights booked · <strong>Spotify:</strong> time spent listening · <strong>Slack:</strong> messages sent within teams · <strong>Facebook (early):</strong> daily active users · <strong>Uber:</strong> rides completed per week · <strong>Amplitude:</strong> weekly learning users."
    },
    checklist: [
      "The core customer value moment is clearly described",
      "The metric measures delivered value, not vanity activity",
      "It is a leading indicator of revenue / retention (validated with data)",
      "It is simple enough for every employee to understand",
      "3–5 input metrics are defined and have owners",
      "Guardrail metrics (e.g. quality, cost) prevent gaming",
      "The NSM is visible on a shared dashboard",
      "Team OKRs link to the input metrics",
      "The NSM is reviewed at least quarterly"
    ],
    pitfalls: [
      "Choosing revenue itself — it’s a lagging result, not a value measure.",
      "Vanity metrics like sign-ups or page views.",
      "Multiple ‘North Stars’ that pull teams in different directions.",
      "No guardrails, so teams optimise the metric at customers’ expense."
    ],
    docs: [
      { title: "The North Star Playbook", source: "Amplitude", url: "https://amplitude.com/books/north-star" },
      { title: "What is a North Star Metric?", source: "Amplitude blog", url: "https://amplitude.com/blog/product-north-star-metric" },
      { title: "North Star Metric", source: "Mixpanel", url: "https://mixpanel.com/blog/north-star-metric/" },
      { title: "Every product needs a North Star metric", source: "Reforge", url: "https://www.reforge.com/blog/north-star-metric-growth" }
    ],
    videos: [
      { title: "North Star Metric explained", url: yt("North Star Metric explained product") },
      { title: "How to find your North Star Metric", url: yt("how to find your North Star Metric Amplitude") },
      { title: "Sean Ellis on growth and the North Star", url: yt("Sean Ellis North Star Metric growth") }
    ],
    companies: [
      { name: "Airbnb", how: "Nights booked — captures value for both guests and hosts." },
      { name: "Spotify", how: "Time spent listening — reflects how much value users get from the catalogue." },
      { name: "Slack", how: "Messages sent — teams sending 2,000+ messages were found to retain." },
      { name: "Facebook / Meta", how: "Daily active users; early growth focused on ‘7 friends in 10 days’." },
      { name: "Amplitude", how: "Weekly learning users — accounts that share insights others consume." }
    ],
    related: ["okrs", "lead-lag-measures", "kpis"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "raci-matrix",
    name: "RACI Matrix",
    tagline: "Clarify who is Responsible, Accountable, Consulted and Informed for every task or decision.",
    category: "people",
    colors: ["#d946ef", "#6366f1"],
    origin: "Responsibility assignment matrix; formalised in project management practice (PMI PMBOK)",
    difficulty: "Beginner",
    time: "1–2 hours per project",
    bestFor: "Cross-functional projects, process design, change management, avoiding ‘who owns this?’",
    overview: [
      "A RACI matrix (also called a responsibility assignment matrix) is a table that lists tasks or decisions in rows and people or roles in columns. Each cell shows the role that person plays: Responsible, Accountable, Consulted or Informed.",
      "It eliminates the two most common coordination failures: work that nobody owns, and work that too many people think they own. By making roles explicit up front, it speeds decisions and reduces conflict.",
      "Variants include RASCI (adds Support), RACI-VS (Verifier, Signatory), and DACI (Driver, Approver, Contributors, Informed) — the latter originated at Intuit and is used in Atlassian’s Team Playbook for decisions."
    ],
    keyIdeas: [
      { title: "Responsible (R)", text: "Does the work. Can be several people." },
      { title: "Accountable (A)", text: "Owns the outcome and signs off. Exactly one per task." },
      { title: "Consulted (C)", text: "Gives input before the work or decision — two-way communication." },
      { title: "Informed (I)", text: "Kept up to date after decisions — one-way communication." },
      { title: "One A per row", text: "The golden rule. Multiple A’s means no real accountability." }
    ],
    steps: [
      { title: "List the tasks or decisions", text: "Use the project’s work breakdown or process steps as rows. Keep them at a meaningful level." },
      { title: "List the roles", text: "Use roles rather than names where possible (Product Manager, Legal, QA)." },
      { title: "Assign A first", text: "For each row, name the single Accountable role." },
      { title: "Assign R, C and I", text: "Fill in who does the work, who must be consulted and who needs to be informed." },
      { title: "Analyse the matrix", text: "Check rows: exactly one A, at least one R, not too many C’s. Check columns: no one overloaded with R’s, no role without purpose." },
      { title: "Validate with the people", text: "Review the matrix with all stakeholders and resolve disagreements." },
      { title: "Publish and maintain", text: "Store it with the project plan and update it when scope or team changes." }
    ],
    example: {
      title: "Example: website redesign",
      text: "<strong>Approve design:</strong> CMO = A, Design Lead = R, Sales = C, Support = I.<br><strong>Build pages:</strong> Tech Lead = A, Developers = R, Design Lead = C, CMO = I.<br><strong>Publish content:</strong> Content Manager = A/R, Legal = C, All staff = I."
    },
    checklist: [
      "All key tasks or decisions are listed as rows",
      "All relevant roles are listed as columns",
      "Every row has exactly one Accountable",
      "Every row has at least one Responsible",
      "Consulted roles are kept to those who truly add value",
      "No person is overloaded with R’s across the matrix",
      "Every role column has at least one assignment",
      "Stakeholders have reviewed and agreed the matrix",
      "The matrix is stored with the project documentation and kept current"
    ],
    pitfalls: [
      "More than one Accountable per task.",
      "Consulting everyone, which slows decisions to a crawl.",
      "Rows so granular that the matrix becomes unmaintainable.",
      "Creating it once and never updating it as people change."
    ],
    docs: [
      { title: "Responsibility assignment matrix", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Responsibility_assignment_matrix" },
      { title: "RACI chart: what it is and how to use it", source: "Atlassian", url: "https://www.atlassian.com/work-management/project-management/raci-chart" },
      { title: "DACI decision-making framework", source: "Atlassian Team Playbook", url: "https://www.atlassian.com/team-playbook/plays/daci" },
      { title: "RACI charts guide", source: "Asana", url: "https://asana.com/resources/raci-chart" }
    ],
    videos: [
      { title: "RACI matrix explained", url: yt("RACI matrix explained") },
      { title: "How to create a RACI chart", url: yt("how to create a RACI chart project management") },
      { title: "RACI vs DACI", url: yt("RACI vs DACI decision making") }
    ],
    companies: [
      { name: "Project Management Institute", how: "The PMBOK Guide describes the responsibility assignment matrix as a core resource-planning tool." },
      { name: "ITIL / AXELOS", how: "ITIL service-management guidance uses RACI to define process roles." },
      { name: "Atlassian", how: "Uses the DACI variant for team decisions and publishes it in its Team Playbook." },
      { name: "Intuit", how: "Where the DACI decision-making variant originated." },
      { name: "Deloitte & other consultancies", how: "Use RACI in operating-model and transformation engagements." }
    ],
    related: ["cport", "scrum-agile", "start-stop-continue"]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "theory-of-constraints",
    name: "Theory of Constraints (TOC)",
    tagline: "Every system has one bottleneck that limits its output. Find it, exploit it, and elevate it.",
    category: "improvement",
    colors: ["#dc2626", "#7c3aed"],
    origin: "Eliyahu M. Goldratt, The Goal, 1984",
    difficulty: "Advanced",
    time: "Weeks of analysis; continuous improvement cycle",
    bestFor: "Manufacturing, operations, supply chains, software delivery pipelines, project management",
    overview: [
      "The Theory of Constraints, introduced by Dr. Eliyahu Goldratt in his 1984 business novel The Goal, argues that any system’s throughput is limited by at least one constraint — its bottleneck. Improving anything other than the constraint is an illusion: it doesn’t increase the output of the system.",
      "TOC provides a focused improvement process, the Five Focusing Steps, and a scheduling method called Drum-Buffer-Rope. It measures success with three financial measures: Throughput (rate of generating money through sales), Inventory (money tied up in the system) and Operating Expense.",
      "The ideas have been extended to project management (Critical Chain), distribution and supply chains, and are the direct inspiration for The Phoenix Project and much of the DevOps movement."
    ],
    keyIdeas: [
      { title: "A chain is as strong as its weakest link", text: "The constraint dictates the pace of the whole system." },
      { title: "Five Focusing Steps", text: "Identify → Exploit → Subordinate → Elevate → Repeat (avoid inertia)." },
      { title: "Drum-Buffer-Rope", text: "The constraint sets the drum beat; a time buffer protects it; the rope limits release of work." },
      { title: "Throughput accounting", text: "Increase throughput, reduce inventory and operating expense — in that order of priority." },
      { title: "Local optima ≠ global optimum", text: "An hour lost at the bottleneck is an hour lost for the entire system." }
    ],
    steps: [
      { title: "1. Identify the constraint", text: "Map the process flow and look for where work piles up, the longest queue, or the resource at 100% utilisation." },
      { title: "2. Exploit the constraint", text: "Get maximum output from it with no new investment: eliminate downtime, remove non-essential work, ensure perfect-quality inputs." },
      { title: "3. Subordinate everything else", text: "Align all other steps to the constraint’s pace. Stop overproducing upstream (Drum-Buffer-Rope)." },
      { title: "4. Elevate the constraint", text: "If still limiting, invest: add capacity, people, equipment or redesign the process." },
      { title: "5. Repeat — beware inertia", text: "Once broken, the constraint moves elsewhere. Go back to step 1 and don’t let old policies become the new constraint." },
      { title: "Measure throughput", text: "Track system throughput, work-in-progress and operating expense to confirm improvement." },
      { title: "Address policy constraints", text: "Use TOC Thinking Processes (e.g. Current Reality Tree) when the constraint is a rule or behaviour, not a machine." }
    ],
    example: {
      title: "Example: software delivery",
      text: "Developers finish 20 features a sprint but only 8 are released — they queue for <strong>manual QA</strong> (the constraint). <strong>Exploit:</strong> QA stops attending non-essential meetings; devs deliver fully-tested builds. <strong>Subordinate:</strong> limit work-in-progress so devs help test. <strong>Elevate:</strong> invest in test automation. Release rate rises to 15; the constraint moves to deployment approval."
    },
    checklist: [
      "The end-to-end process flow is mapped",
      "The goal of the system and its throughput measure are defined",
      "The constraint is identified with data (queues, utilisation)",
      "Idle time and waste at the constraint are eliminated",
      "Inputs to the constraint are quality-checked",
      "Upstream work release is paced to the constraint (rope)",
      "A buffer protects the constraint from disruption",
      "Investment options to elevate the constraint are evaluated",
      "Throughput, WIP and operating expense are tracked",
      "The analysis is repeated once the constraint moves"
    ],
    pitfalls: [
      "Optimising non-constraints and calling it improvement.",
      "Jumping straight to ‘elevate’ (spending money) before exploiting.",
      "Keeping everyone 100% busy, which only builds inventory.",
      "Missing policy constraints — rules can be bottlenecks too."
    ],
    docs: [
      { title: "Theory of constraints", source: "Wikipedia", url: "https://en.wikipedia.org/wiki/Theory_of_constraints" },
      { title: "Theory of Constraints Institute", source: "TOC Institute", url: "https://www.tocinstitute.org/theory-of-constraints.html" },
      { title: "Theory of Constraints (TOC)", source: "Lean Production", url: "https://www.leanproduction.com/theory-of-constraints/" },
      { title: "The Five Focusing Steps", source: "TOC Institute", url: "https://www.tocinstitute.org/five-focusing-steps.html" }
    ],
    videos: [
      { title: "Theory of Constraints — the Five Focusing Steps", url: yt("Theory of Constraints five focusing steps") },
      { title: "The Goal by Goldratt — summary", url: yt("The Goal Goldratt book summary") },
      { title: "Drum-Buffer-Rope explained", url: yt("drum buffer rope explained") }
    ],
    companies: [
      { name: "US Marine Corps Maintenance Center Albany", how: "Applied TOC to cut vehicle repair cycle times dramatically — a Franz Edelman award finalist case." },
      { name: "Boeing", how: "Used TOC/Critical Chain principles in production and engineering flow." },
      { name: "Procter & Gamble", how: "Reported large inventory reductions using TOC in its supply chain." },
      { name: "Warner Robins Air Logistics Center (USAF)", how: "Used Critical Chain to increase aircraft maintenance throughput." },
      { name: "Tata Steel", how: "Applied TOC to production and distribution to improve throughput." }
    ],
    related: ["pareto-principle", "scrum-agile", "kpis"]
  }
];
