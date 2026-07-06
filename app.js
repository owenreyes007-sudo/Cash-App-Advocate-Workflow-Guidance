const articles = [
  {
    title: "Voice - PII",
    updated: "2026-04-01",
    tags: ["Verification", "Voice", "TTC"],
    summary:
      "Manual PII, Tap to Confirm, failed verification handling, sponsored account notes, and social engineering guardrails.",
  },
  {
    title: "Accounts - Identity Verification (IDV)",
    updated: "2026-03-20",
    tags: ["IDV", "KYC", "Identity Hub"],
    summary:
      "Identity verification requirements, pending verification, pushback, retry guidance, and IDV issue triage.",
  },
  {
    title: "Account Access - Overview, Identification, and Troubleshooting",
    updated: "2026-03-31",
    tags: ["Account Access", "Troubleshooting"],
    summary:
      "When Account Access applies, terminology, login troubleshooting, account recovery, duplicate cases, and rejected attempts.",
  },
  {
    title: "Account Access - Pre Action Steps",
    updated: "2026-05-07",
    tags: ["Account Access", "Pre-Action"],
    summary:
      "Required checklist before using Account Access, including PII, ATO, Risk closure, lost device, balances, and possible issue checks.",
  },
  {
    title: "Account Access - Voice",
    updated: "2026-01-06",
    tags: ["Account Access", "Voice", "Regulator"],
    summary:
      "Voice action assessment for reopen account, temporary access, grant account access, balance transfer, and regulator errors.",
  },
  {
    title: "Account Access - Messaging and Email",
    updated: "2026-01-06",
    tags: ["Account Access", "Messaging", "Email"],
    summary:
      "Messaging and email account access action assessment and tool guidance after pre-action steps are complete.",
  },
  {
    title: "Account Access - Cash Families",
    updated: "2026-03-30",
    tags: ["Sponsored Accounts", "Account Access"],
    summary:
      "Sponsored account access requirements, sponsor involvement, balance transfer, granting access, and reassignment guidance.",
  },
  {
    title: "Support - Misdirected or Missing P2P Payments",
    updated: "2026-02-18",
    tags: ["Payments", "P2P"],
    summary:
      "Sender and recipient paths for missing or misdirected P2P payments, including old account and incorrect recipient handling.",
  },
  {
    title: "Cash App Card - Block or Unblock a Merchant",
    updated: "Article reference",
    tags: ["Cash Card", "Merchant"],
    summary:
      "Manual merchant block and unblock support when the customer cannot complete the action in app.",
  },
  {
    title: "Voice - Account Takeovers (ATO)",
    updated: "Article reference",
    tags: ["ATO", "Unauthorized Activity", "Risk"],
    summary:
      "ATO indicators, exclusions, PII requirements, before-action checks, and escalation workflow.",
  },
  {
    title: "Voice - Case standard practices",
    updated: "2026-05-19",
    tags: ["Voice", "Transfers", "Documentation"],
    summary:
      "Inbound call handling, routing, holds, documentation, transfers, screenshots, and minimum app version guidance.",
  },
  {
    title: "Voice - CSAT closing statements",
    updated: "2026-04-01",
    tags: ["CSAT", "Call Closure"],
    summary:
      "Closing statement options for routine, challenging, transfer, follow-up, resolved, and compromised-resolution interactions.",
  },
  {
    title: "Accounts - Closing Accounts",
    updated: "2026-01-06",
    tags: ["Accounts", "Closure"],
    summary:
      "Customer and support-driven account closure, balances, investing, gift cards, account access, and linked account scenarios.",
  },
  {
    title: "Investing - What Is Stock Investing?",
    updated: "2025-12-01",
    tags: ["Investing", "Transfer"],
    summary:
      "Investing basics, regulatory disclaimer, and transfer guidance for voice cases involving brokerage topics.",
  },
];

const quickTextLibrary = [
  {
    name: "Cash App {Account Access - Confirm Access}",
    keywords: ["accountAccess", "access", "grant", "verify", "account"],
    workflowIds: ["accountAccess"],
    stepTitles: ["Choose Account Access action", "Perform access action"],
    text:
      "Based on the information you provided, we will attempt to grant you access to your previous account and close your current account. If successful, you will be able to access the previous account's payment history and balance.",
  },
  {
    name: "Cash App {Account Access - Confirm Balance Transfer}",
    keywords: ["accountAccess", "balance", "transfer", "cash"],
    workflowIds: ["accountAccess"],
    stepTitles: ["Transfer eligible cash balance"],
    text:
      "Based on the information you provided, we will attempt a one-time balance transfer. This should only be used for eligible cash balances and not stock, gift card, savings, or bitcoin balances.",
  },
  {
    name: "Cash App {Account Access - Complete}",
    keywords: ["accountAccess", "complete", "resolved", "access"],
    workflowIds: ["accountAccess"],
    stepTitles: ["Document and close"],
    text:
      "We’ve granted you access to your previous account and closed your current account. You now have full access to the previous account's payment history and balance.",
  },
  {
    name: "Cash App {IDV - General Info - Pushback}",
    keywords: ["idv", "verification", "identity", "pushback"],
    stepTitles: ["IDV status assessment", "Identity verification assistance"],
    text:
      "I understand it can be alarming to enter personal info. Cash App verifies customer information to help provide a safe and secure environment to send and receive money.",
  },
  {
    name: "Cash App {IDV - Retry}",
    keywords: ["idv", "retry", "verification", "identity"],
    stepTitles: ["Identity verification assistance"],
    text:
      "To continue, please verify your identity from Cash App on your mobile device and follow the prompts. Be sure to open the link from the device where you use Cash App.",
  },
  {
    name: "Cash Risk {IDV Attempts Exhausted}",
    keywords: ["idv", "failed", "unable", "attempts", "verification"],
    stepTitles: ["Unable to verify PII"],
    text:
      "After reviewing your account, we were unable to verify the personal information provided. You may still be able to use Cash App within unverified account limits.",
  },
  {
    name: "Cash App {ATO Lock}",
    keywords: ["ato", "locked", "security", "account takeover"],
    workflowIds: ["ato"],
    stepTitles: ["Confirm ATO indicators", "ATO escalation workflow"],
    text:
      "We noticed some unusual activity and temporarily locked your account for your security. You will receive a notification within 24-48 hours confirming the review outcome.",
  },
  {
    name: "Cash App {ATO in Progress}",
    keywords: ["ato", "escalate", "investigation", "progress"],
    workflowIds: ["ato"],
    stepTitles: ["ATO escalation workflow", "Close and document"],
    text:
      "I can confirm that your case has been escalated to the appropriate team and an investigation is in progress. You can expect to hear back about the status of your claim.",
  },
  {
    name: "Cash App {ACH - Merchant Block - Complete}",
    keywords: ["unauthorizedCard", "merchant", "block", "card"],
    workflowIds: ["unauthorizedCard"],
    stepTitles: ["Block or unblock merchant"],
    text:
      "Transactions with the merchant are now blocked. Any new transactions with them will be returned. If you need to unblock them later, you can reach back out and we can help.",
  },
  {
    name: "Misdirected Payment - Sender Contact Guidance",
    keywords: ["p2pMisdirected", "payment", "sender", "missing"],
    workflowIds: ["p2pMisdirected"],
    stepTitles: ["Classify the recipient scenario", "Exhaust payment-location resources"],
    text:
      "The best way to trace these funds is to have the sender contact us directly. This helps us review the sender's transaction details and determine what happened.",
  },
];

const sharedVerificationSteps = [
  {
    stage: "Verification",
    title: "Caller classification",
    body:
      "Determine whether the caller is the account holder, a sponsored account or sponsor, or a third party. Do not disclose account-specific information to third parties.",
    actions: ["Classify caller type", "Confirm the call channel", "Apply sponsored account rules when relevant"],
    articles: ["Voice - PII", "Account Access - Cash Families"],
    tools: ["CF1 Lightning"],
    scripts: ["To start, I’ll need a few more pieces of information before we further discuss your question."],
    options: [
      { label: "Account holder or eligible sponsor", next: 1 },
      { label: "Third party / non-customer", next: "thirdPartyEnd" },
    ],
  },
  {
    stage: "Verification",
    title: "Tap to Confirm status",
    body:
      "Check whether Tap to Confirm is already complete, available but pending, failed, expired, or unavailable.",
    actions: ["Review TTC status", "Ask customer to complete TTC when available", "Move to manual PII if TTC cannot be completed"],
    articles: ["Voice - PII", "PII Verification workbook"],
    tools: ["CF1 Lightning", "Cash App in-app prompt"],
    scripts: [
      "We sent a prompt to your Cash App account to help make sure that it's really you requesting support. Please open your app and look for a screen that says, 'Are you requesting support?' and tap 'Yes, I am'.",
    ],
    options: [
      { label: "TTC successful", next: 3 },
      { label: "TTC failed or unavailable", next: 2 },
    ],
  },
  {
    stage: "Verification",
    title: "Manual PII verification",
    body:
      "Verify the approved Voice PII details without hints. If a detail does not match, retry only the failed item and track attempts.",
    actions: ["Request full legal name and account identifier", "Validate required PII", "Allow up to three attempts"],
    articles: ["Voice - PII", "Accounts - Identity Verification (IDV)"],
    tools: ["CF1 Lightning", "Manual verification flow"],
    scripts: ["That does not match what we have in the system. Is there different information we can try?"],
    options: [
      { label: "Manual PII successful", next: 3 },
      { label: "Three attempts failed", next: "unableToVerify" },
    ],
  },
  {
    stage: "Verification",
    title: "IDV status assessment",
    body:
      "Determine whether the account is identity verified and whether the customer’s issue is IDV-related before continuing into the issue workflow.",
    actions: ["Check IDV status", "Identify IDV-related blockers", "Route to Identity Hub guidance when needed"],
    articles: ["Accounts - Identity Verification (IDV)", "Voice - PII"],
    tools: ["Identity Hub", "CF1 Lightning"],
    scripts: ["Verification helps Cash App provide a safe and secure environment to send and receive money."],
    options: [
      { label: "Verified or TTC sufficient", next: "workflowStart" },
      { label: "IDV support needed", next: "idvSupport" },
    ],
  },
];

const terminalSteps = {
  thirdPartyEnd: {
    stage: "Call Closure",
    title: "Third-party caller",
    body: "Provide only general support information. Do not disclose account-specific information.",
    actions: ["Explain privacy limitation", "Redirect account holder to contact support directly", "Document caller type"],
    articles: ["Voice - PII", "Voice - Case standard practices"],
    tools: ["CF1 Lightning"],
    scripts: ["For account security, we can only discuss account-specific details with the account holder after verification."],
    options: [],
  },
  unableToVerify: {
    stage: "Call Closure",
    title: "Unable to verify PII",
    body:
      "Stop account-specific support. Direct the customer to in-app support and attach the Voice Only - Unable to Verify PII guidance.",
    actions: ["Do not disclose account details", "Create manual case if required", "Provide in-app support instructions"],
    articles: ["Voice - PII", "Accounts - Identity Verification (IDV)"],
    tools: ["CF1 Lightning", "In-app Support"],
    scripts: [
      "In order to answer account-specific questions, you’ll need to reach out through your app: Profile icon, Support, select the issue, then Contact Support.",
    ],
    options: [],
  },
  idvSupport: {
    stage: "IDV Support",
    title: "Identity verification assistance",
    body:
      "Use Identity Hub guidance, provide general IDV information, and troubleshoot supported IDV scenarios such as no government ID, no SSN/ITIN, retry requests, underage, or app issues.",
    actions: ["Confirm whether IDV was attempted three times", "Provide Identity Hub guidance", "Use IDV troubleshooting scenario"],
    articles: ["Accounts - Identity Verification (IDV)"],
    tools: ["Identity Hub", "CF1 Lightning"],
    scripts: ["You can manage identity verification from Security & Privacy in the app by choosing Verify."],
    options: [],
  },
};

const workflowDefinitions = [
  {
    id: "accountAccess",
    category: "Account Access",
    title: "Account Access Recovery",
    purpose: "Assist customers who cannot access their account.",
    articleTitles: [
      "Account Access - Overview, Identification, and Troubleshooting",
      "Account Access - Pre Action Steps",
      "Account Access - Voice",
      "Account Access - Cash Families",
      "Voice - PII",
      "Accounts - Identity Verification (IDV)",
    ],
    steps: [
      {
        stage: "Investigation",
        title: "Complete pre-action checklist",
        body:
          "Confirm account status, Risk closure, ATO indicators, lost or stolen device claims, balances, and whether Account A and Account B can be located.",
        actions: ["Complete Account Access pre-action steps", "Do not unlink aliases unless the workflow states to", "Gather Account A and Account B identifiers"],
        tools: ["CF1 Lightning", "Regulator", "Shared Assets graph"],
        scripts: ["To help you recover your Cash App account, please try logging in with another linked alias or $cashtag first."],
        options: [
          { label: "Checklist complete", next: 1 },
          { label: "Account recovery may work", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "Choose Account Access action",
        body:
          "Select the correct action: Reopen Account for closed-account documents or disputes, Temporary Access for Investing or Borrow, Grant Account Access for remaining Bitcoin/Savings/Gift Card balances, or Balance Transfer for cash-only balance scenarios.",
        actions: ["Assess balances and product flags", "Confirm consent before Regulator action", "Escalate Investing or Borrow cases as required"],
        tools: ["Regulator", "Investing Triage queue"],
        scripts: ["Based on the information you provided, we’ll move the appropriate login access or balance after you confirm how you’d like to proceed."],
        options: [
          { label: "Reopen / temporary / grant access", next: 3 },
          { label: "Balance transfer", next: 4 },
        ],
      },
      {
        stage: "Resolution",
        title: "Login troubleshooting first",
        body:
          "If another alias exists, guide the customer through Account Recovery before using manual Account Access actions.",
        actions: ["Have customer sign out of accidental new account if needed", "Use $cashtag recovery path", "Return to pre-action steps if recovery fails"],
        tools: ["Cash App", "CF1 Lightning"],
        scripts: ["Open Cash App, tap Add a profile to this device, tap '?', then Get help logging in, and choose $Cashtag."],
        options: [{ label: "Recovery failed, continue access workflow", next: 1 }],
      },
      {
        stage: "Resolution",
        title: "Perform access action",
        body:
          "Use the selected Regulator workflow and handle user errors or all other Regulator errors according to the article.",
        actions: ["Confirm required aliases", "Execute selected action in Regulator", "Handle 400 or other Regulator errors"],
        tools: ["Regulator", "CF1 Lightning"],
        scripts: ["I’m going to attempt the access action now. I’ll let you know what the next step is once the system response comes back."],
        options: [{ label: "Action complete", next: 5 }],
      },
      {
        stage: "Resolution",
        title: "Transfer eligible cash balance",
        body:
          "Use Balance Transfer only when the customer wants to move cash from Account B to Account A and no other balance types are present.",
        actions: ["Confirm Account B has cash only", "Confirm sponsorship status if relevant", "Transfer cash balance and document outcome"],
        tools: ["Regulator"],
        scripts: ["I can help move the eligible cash balance after confirming there are no other balance types that need a different process."],
        options: [{ label: "Transfer complete", next: 5 }],
      },
      {
        stage: "Call Closure",
        title: "Document and close",
        body:
          "Document verification, assessment, action taken, result, customer guidance, and any remaining next steps.",
        actions: ["Document outcome", "Provide final customer guidance", "Use CSAT closing statement"],
        tools: ["CF1 Lightning"],
        scripts: ["Thank you for your patience as we worked through this. After we disconnect, a brief survey will be available for your feedback."],
        options: [],
      },
    ],
  },
  {
    id: "missingDirectDeposit",
    category: "Payments",
    title: "Missing Direct Deposit",
    purpose: "Assist customers reporting missing or delayed direct deposits.",
    articleTitles: ["Voice - PII", "Accounts - Identity Verification (IDV)", "Voice - Case standard practices"],
    steps: [
      {
        stage: "Investigation",
        title: "Gather deposit details",
        body:
          "Capture expected deposit date, payer or employer, amount, previous deposit pattern, and whether the sender has confirmed release.",
        actions: ["Collect expected date and amount", "Ask whether payer released funds", "Check account and routing context"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’ll check what we can see on this account and ask a few details about the deposit so we can identify the right next step."],
        options: [{ label: "Details gathered", next: 1 }],
      },
      {
        stage: "Assessment",
        title: "Determine status",
        body:
          "Assess whether the deposit is pending, rejected, posted to another account, outside expected timing, or requires escalation.",
        actions: ["Review transaction activity", "Compare expected timing", "Determine if escalation criteria are met"],
        tools: ["CF1 Lightning", "Regulator", "Escalation queue"],
        scripts: ["If the payer has not sent the deposit yet, they’ll need to release it before Cash App can receive it."],
        options: [
          { label: "Provide guidance", next: 2 },
          { label: "Escalation needed", next: 3 },
        ],
      },
      {
        stage: "Resolution",
        title: "Provide deposit guidance",
        body:
          "Explain current status, payer dependency, standard timing, and the customer’s next action.",
        actions: ["Explain findings", "Set expectation for payer or bank timing", "Document details"],
        tools: ["CF1 Lightning"],
        scripts: ["Based on what I can see, the next best step is to confirm the deposit status with the payer."],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Resolution",
        title: "Escalate deposit issue",
        body:
          "Escalate when the deposit cannot be resolved with available account details and meets the internal escalation threshold.",
        actions: ["Capture required escalation details", "Route to proper queue", "Set follow-up expectations"],
        tools: ["Escalation queue", "CF1 Lightning"],
        scripts: ["I’m going to route this for additional review. Please keep an eye on your preferred contact method for updates."],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document deposit details, status, guidance, escalation path if used, and closing statement.",
        actions: ["Document outcome", "Use relevant CSAT close", "Confirm no other issues"],
        tools: ["CF1 Lightning"],
        scripts: ["After we disconnect, a brief survey will be available to share your feedback about today’s service."],
        options: [],
      },
    ],
  },
  {
    id: "p2pMisdirected",
    category: "Payments",
    title: "P2P Misdirected Payment",
    purpose: "Assist customers who sent money to an unintended recipient or cannot locate a payment.",
    articleTitles: ["Support - Misdirected or Missing P2P Payments", "Voice - PII", "Accounts - Identity Verification (IDV)"],
    steps: [
      {
        stage: "Investigation",
        title: "Identify who is contacting",
        body:
          "Determine whether the sender, intended recipient, actual recipient, or recipient of an unrecognized payment is contacting support.",
        actions: ["Classify contact party", "Identify specific payment", "Exclude scams, unauthorized transactions, gift cards, and cancel requests"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["Do you know if the sender sees the payment on their end? If they reach out to Cash App support, we can help identify where they sent the funds."],
        options: [
          { label: "Sender is contacting", next: 1 },
          { label: "Recipient is contacting", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "Sender path",
        body:
          "Determine whether funds were sent to the intended recipient’s old account, incorrect recipient, or cannot be located.",
        actions: ["Review sender transaction details", "Check recipient identifier used", "Assess old-account possibility"],
        tools: ["Regulator", "CF1 Lightning"],
        scripts: ["I’ll review the payment details to help identify where the funds were sent and what options are available."],
        options: [{ label: "Resolution identified", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Recipient path",
        body:
          "If the recipient cannot see the payment, they may need the sender to contact support because sender transaction details are required.",
        actions: ["Confirm payment amount and sender information", "Check if payment arrived", "Ask sender to contact support when required"],
        tools: ["CF1 Lightning"],
        scripts: ["While I can only view your account details, the best way to trace these funds is to have the sender contact us directly."],
        options: [{ label: "Guidance provided", next: 3 }],
      },
      {
        stage: "Resolution",
        title: "Resolve or escalate",
        body:
          "Provide guidance, help locate an old account when appropriate, or escalate the concern when adequate information exists.",
        actions: ["Give next steps", "Escalate the concern if criteria are met", "Document payment identifiers"],
        tools: ["Escalation process", "CF1 Lightning"],
        scripts: ["Do you know if you had any other Cash App accounts that might have received this payment?"],
        options: [{ label: "Close call", next: 4 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document contact party, payment details, classification, guidance, and escalation outcome.",
        actions: ["Document outcome", "Use CSAT close", "Confirm no other issue"],
        tools: ["CF1 Lightning"],
        scripts: ["Thank you for working through this with me today. A brief survey will be available after we disconnect."],
        options: [],
      },
    ],
  },
  {
    id: "unauthorizedCard",
    category: "Cash Card",
    title: "Unauthorized Cash Card Transaction",
    purpose: "Assist customers reporting unauthorized card activity.",
    articleTitles: ["Cash App Card - Block or Unblock a Merchant", "Voice - PII", "Accounts - Identity Verification (IDV)"],
    steps: [
      {
        stage: "Investigation",
        title: "Classify card issue",
        body:
          "Confirm whether the customer is reporting an unauthorized card transaction, a merchant block or unblock request, a pending charge, or another card dispute path.",
        actions: ["Identify transaction type", "Check card vs Cash App Pay", "Confirm whether merchant block applies"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’ll review the transaction details and confirm whether this is a dispute path or a merchant blocking request."],
        options: [
          { label: "Merchant block / unblock", next: 1 },
          { label: "Unauthorized transaction", next: 2 },
        ],
      },
      {
        stage: "Resolution",
        title: "Block or unblock merchant",
        body:
          "Use the card or Cash App Pay merchant block guidance. Blocking does not restrict existing subscriptions, recurring charges, outstanding balances, or pending transactions.",
        actions: ["Send correct quick text", "Manually block or unblock if customer cannot in app", "Explain limitations"],
        tools: ["CF1 Lightning", "Merchant controls"],
        scripts: ["Blocking a merchant helps prevent new transactions, but it may not stop existing subscriptions or pending transactions."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Unauthorized card activity",
        body:
          "If the claim only includes Cash App Card transactions, follow the appropriate dispute handling path instead of ATO.",
        actions: ["Confirm device possession context", "Avoid ATO route for card-only claims", "Route to dispute workflow"],
        tools: ["CF1 Lightning", "Dispute workflow"],
        scripts: ["Since this is card-only activity, I’ll route this through the correct card dispute process."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body: "Document transaction type, action taken, limitation explained, and any dispute route used.",
        actions: ["Document result", "Use CSAT close", "Confirm customer understands next steps"],
        tools: ["CF1 Lightning"],
        scripts: ["After we disconnect, a brief survey will be available for your feedback about today’s service."],
        options: [],
      },
    ],
  },
  {
    id: "ato",
    category: "Account Safety",
    title: "Account Takeover (ATO)",
    purpose: "Assist customers reporting unauthorized account access.",
    articleTitles: ["Voice - Account Takeovers (ATO)", "Voice - PII", "Accounts - Identity Verification (IDV)", "Voice - Case standard practices"],
    steps: [
      {
        stage: "Investigation",
        title: "Confirm ATO indicators",
        body:
          "ATO may apply when the customer’s device was in possession, activity includes multiple transaction types, or the customer was directed by fake support to download an app.",
        actions: ["Confirm device possession", "Identify transaction types", "Check for fake support or remote-access indicators"],
        tools: ["CF1 Lightning", "Regulator"],
        scripts: ["I’m going to ask a few questions to understand whether this was unauthorized account access or another dispute path."],
        options: [
          { label: "ATO indicators present", next: 1 },
          { label: "Card-only or lost/stolen device", next: 2 },
        ],
      },
      {
        stage: "Assessment",
        title: "ATO escalation workflow",
        body:
          "Check account closure, locate transactions, review optional answers, and determine if the customer authorized any part of the transaction.",
        actions: ["Review account lock or closure", "Locate provided transactions", "Check duplicate or existing ATO cases"],
        tools: ["Regulator", "Risk ATO queue"],
        scripts: ["I’ll document what you’ve shared and route the case to the team that reviews account takeover reports."],
        options: [{ label: "Escalate or document outcome", next: 3 }],
      },
      {
        stage: "Assessment",
        title: "Use alternate workflow",
        body:
          "Do not escalate to ATO if the device was lost or stolen at the time of activity, or if the claim only includes Cash App Card transactions.",
        actions: ["Route card-only claims to dispute handling", "Route lost/stolen device scenarios appropriately", "Document why ATO was not used"],
        tools: ["CF1 Lightning", "Dispute workflow"],
        scripts: ["This situation follows a different workflow, so I’ll make sure it goes through the correct path."],
        options: [{ label: "Close call", next: 3 }],
      },
      {
        stage: "Call Closure",
        title: "Close and document",
        body:
          "Document ATO indicators, exclusions, customer statements, transactions reviewed, escalation decision, and closing statement.",
        actions: ["Document required details", "Set expectation for review", "Use CSAT close"],
        tools: ["CF1 Lightning", "Risk ATO queue"],
        scripts: ["I understand this has been a challenging experience, and I appreciate your time working through this with me."],
        options: [],
      },
    ],
  },
];

const STORAGE_KEY = "cashAppWorkflowTool.v2.data";
const PROFILE_STORAGE_KEY = "cashAppWorkflowTool.userProfile";

const defaultWorkflowData = cloneData({
  articles,
  quickTexts: quickTextLibrary,
  sharedVerificationSteps,
  terminalSteps,
  workflows: workflowDefinitions,
});

applyWorkflowData(loadWorkflowData());

const workflowSelect = document.querySelector("#workflowSelect");
const loadWorkflowButton = document.querySelector("#loadWorkflow");
const resetWorkflowButton = document.querySelector("#resetWorkflow");
const prevStepButton = document.querySelector("#prevStep");
const decisionOptions = document.querySelector("#decisionOptions");
const progressTrack = document.querySelector("#progressTrack");
const knowledgeGrid = document.querySelector("#knowledgeGrid");
const knowledgeSearch = document.querySelector("#knowledgeSearch");
const adminWorkflowList = document.querySelector("#adminWorkflowList");
const adminSteps = document.querySelector("#adminSteps");
const adminStatus = document.querySelector("#adminStatus");
const categorySelect = document.querySelector("#categorySelect");
const subScenarioSelect = document.querySelector("#subScenarioSelect");
const workflowView = document.querySelector("#workflowView");
const IS_ADMIN_BUILD = document.body.dataset.appMode === "admin";

let currentWorkflow = workflowDefinitions.find((workflow) => workflow.id === "p2pMisdirected") || workflowDefinitions[0];
let currentStepKey = 0;
let historyStack = [];
let adminSelectedWorkflowId = workflowDefinitions[0]?.id || "";

const subScenarioDefinitions = {
  accountAccess: [
    "Unable to sign in",
    "Incorrect password or locked account",
    "Lost access to phone or email",
    "Old or secondary account",
    "Balance transfer",
    "Temporary access",
  ],
  missingDirectDeposit: [
    "Deposit is delayed",
    "Deposit is missing",
    "Deposit was rejected",
    "Deposit may be on another account",
  ],
  p2pMisdirected: [
    "Sender: sent to incorrect recipient",
    "Sender: sent to intended recipient's old account",
    "Sender: completed payment is missing",
    "Recipient: expected payment is missing",
    "Recipient: payment went to an old account",
    "Recipient: received an unrecognized payment",
    "Payment cannot be located",
    "Official $Cashapp account payment",
  ],
  unauthorizedCard: [
    "Unauthorized Cash Card transaction",
    "Merchant block or unblock",
    "Cash App Pay merchant issue",
    "Pending card transaction",
  ],
  ato: [
    "Multiple unauthorized transaction types",
    "Account accessed from another device",
    "Fake support or remote access",
    "ATO-locked account",
    "Existing ATO investigation",
  ],
};

const recommendedActionGuidance = {
  p2pMisdirected: {
    "Confirm this workflow applies": {
      article: "Support - Misdirected or Missing P2P Payments > Overview",
      toolFocus: "CF1 Lightning case details and Regulator payment search",
      actions: [
        "Open the specific P2P payment using the amount, date, and customer account.",
        "Confirm the customer is reporting a specific missing or misdirected P2P payment.",
        "If the concern is a gift card, scam, unauthorized payment, balance confusion, or cancellation request, stop and open the related KA instead.",
      ],
    },
    "Identify who is contacting support": {
      article: "Support - Misdirected or Missing P2P Payments > Recipient contacts support / Sender contacts support",
      toolFocus: "CF1 Lightning contact record and Regulator payment participants",
      actions: [
        "Confirm the verified customer attached to the current case.",
        "Open the payment and identify the sender and recipient shown in Regulator.",
        "Classify the caller as sender, intended recipient, actual recipient, or recipient of an unrecognized payment.",
        "Document the caller role before opening the corresponding KA section.",
      ],
    },
    "Classify the recipient scenario": {
      article: "Support - Misdirected or Missing P2P Payments > Recipient contacts support",
      toolFocus: "Regulator payment status, recipient activity, and Connected User graph",
      actions: [
        "Open the recipient’s payment activity and locate the expected payment.",
        "Check whether the payment is Complete, Waiting on Recipient, Waiting on Sender, or Failed.",
        "If the payment is absent, ask whether the customer recognizes an old or secondary account without disclosing linked-account details.",
        "Select the recipient path that matches the status and customer statement.",
      ],
    },
    "Review intended-recipient payment status": {
      article: "Support - Misdirected or Missing P2P Payments > Funds sent to the intended recipient",
      toolFocus: "CF1 Lightning restrictions panel, Regulator payment status, and Identity Hub",
      actions: [
        "Check Regulator for Complete, Waiting on Recipient, Waiting on Sender, or Failed status.",
        "In the CF1 Lightning panel, review IDV status, P2P limits, suspected-minor restriction, and risky-unverified suspension.",
        "For Waiting on Recipient, determine whether acceptance, verification, sponsorship, P2P limits, or name setup is blocking the payment.",
        "For Failed status, open Support - P2P Payment Regulator Status.",
      ],
    },
    "Investigate the recipient’s old account": {
      article: "Support - Misdirected or Missing P2P Payments > Funds sent to the intended recipient’s old account",
      toolFocus: "Regulator > Connected User graph > Fullscreen > Unshared Assets",
      actions: [
        "Open the customer’s Connected User graph in Regulator and select Fullscreen.",
        "Review Unshared Assets for hard links through SSN, phone number, or email.",
        "If the customer recognizes the old account, open Account Access - Overview, Identification, and Troubleshooting.",
        "If the customer does not recognize another account, do not disclose it; use the Transaction Not Found guidance.",
      ],
    },
    "Handle an unrecognized payment received": {
      article: "Support - Misdirected or Missing P2P Payments > Recipient of Misdirected/Unrecognized payment contacts",
      toolFocus: "CF1 Lightning Quick Texts and Cash App P2P refund flow",
      actions: [
        "Use Unknown/Unrecognized Payment - Recipient to explain the refund path.",
        "If assistance is needed, open the payment and guide the customer through Refund Payment.",
        "Check whether the Cash App balance can cover the refund; if not, use Add Money guidance.",
        "Use Block/Unblock Cash Customer only if the recipient requests blocking.",
      ],
    },
    "Classify the sender scenario": {
      article: "Support - Misdirected or Missing P2P Payments > Sender contacts support",
      toolFocus: "Regulator > Payment detail > recipient alias and status",
      actions: [
        "Open the exact payment in Regulator.",
        "Compare the recipient alias used with the recipient the sender intended.",
        "Ask whether the intended recipient previously used that alias or an old account.",
        "Choose old account, incorrect recipient, missing completed payment, or official $Cashapp.",
      ],
    },
    "Check old-account payment status": {
      article: "Support - Misdirected or Missing P2P Payments > Sender > Funds sent to intended recipient’s old account",
      toolFocus: "Regulator payment status, account type, account state, and linked aliases",
      actions: [
        "Check whether the payment is Complete or Waiting on Recipient.",
        "Confirm whether the sender is Personal or Cash App for Business/Pro.",
        "For an orphaned or closed recipient account, verify that a phone number or email is linked.",
        "Use Cancel Funds - Sender P2P only when the payment is eligible for sender cancellation.",
      ],
    },
    "Check incorrect-recipient balance and status": {
      article: "Support - Misdirected or Missing P2P Payments > Sender > Funds sent to incorrect recipient",
      toolFocus: "Regulator recipient account > balance, Waiting to Pay Out, Gateway ID, and frozen-balance indicators",
      actions: [
        "Open the actual recipient account and check whether the available balance covers the reversal amount.",
        "If Waiting to Pay Out, check whether a Gateway ID is present.",
        "Review the account for frozen-balance indicators using Risk - Frozen Customer Balance.",
        "Confirm Personal versus Business/Pro before choosing the next branch.",
      ],
    },
    "Assess courtesy reimbursement eligibility": {
      article: "Support - Misdirected or Missing P2P Payments > Sender > Funds sent to incorrect recipient",
      toolFocus: "CF1 Lightning > Account Info > Experiments & Eligibility and Cash App Green Status Benefits",
      actions: [
        "Open Account Info in the CF1 Lightning panel.",
        "Select Experiments & Eligibility and locate Reimburse Mistaken Payments Experiment.",
        "Confirm the experiment shows Enabled.",
        "Return to Account Info and review Cash App Green Status Benefits and status history.",
        "Proceed to escalation only when both required eligibility conditions are satisfied; do not promise reimbursement.",
      ],
    },
    "Handle Waiting on Recipient": {
      article: "Support - Misdirected or Missing P2P Payments > Sender > Funds sent to incorrect recipient",
      toolFocus: "Regulator payment status, created date, and account type",
      actions: [
        "Confirm the payment is Waiting on Recipient.",
        "Calculate whether it has been waiting fewer or more than 14 calendar days.",
        "For Personal under 14 days, use Cancel Funds - Sender P2P.",
        "For Personal over 14 days, open Accounts - Functionality and complete glitchy-app troubleshooting.",
        "For Business/Pro cases requiring support cancellation, follow the escalation path.",
      ],
    },
    "Collect intended-recipient information": {
      article: "Support - Misdirected or Missing P2P Payments > Adequate information for escalation",
      toolFocus: "CF1 Lightning Quick Text and Regulator intended-recipient search",
      actions: [
        "Collect the intended recipient’s full legal name when linked.",
        "Collect the intended $cashtag and either phone number or email.",
        "Search Regulator using the information supplied; do not give clues or confirm partial matches.",
        "Record whether the information is complete and correct using the internal attempt tracker.",
      ],
    },
    "Verify true-misdirected eligibility": {
      article: "Support - Misdirected or Missing P2P Payments > Adequate information for escalation",
      toolFocus: "Regulator alias comparison and intended-recipient Sign Up date",
      actions: [
        "Compare intended and actual $cashtags, phone numbers, and email addresses.",
        "Confirm an obvious traceable mistake or no more than four character differences.",
        "Do not qualify the payment using display-name similarity alone.",
        "Check the intended recipient’s Sign Up date in the upper-right Regulator account summary.",
        "Confirm the intended account existed before the payment date and document the exact account link.",
      ],
    },
    "Escalate the concern": {
      article: "Support - Misdirected or Missing P2P Payments > Escalation section",
      toolFocus: "Regulator direct links, mandatory escalation snippet, and Live Agent",
      actions: [
        "Copy the direct Regulator link to the payment.",
        "Copy the direct link to the intended recipient account.",
        "Include caller role, intended legal name or Not linked, intended $cashtag, and phone/email.",
        "Explain exactly how the intended and actual accounts are linked.",
        "Submit the mandatory escalation snippet and set expectations without promising reversal.",
      ],
    },
    "Investigate a completed payment reported missing": {
      article: "Support - Misdirected or Missing P2P Payments > Missing payments",
      toolFocus: "Regulator payment status, recipient balance, and payout destination",
      actions: [
        "Open the completed payment and inspect the recipient-side status.",
        "Determine whether funds remain in Cash App balance, were paid out, or reached another account.",
        "Use Waiting on Sender or Waiting on Recipient - Sender when an action is outstanding.",
        "Use Paid Out Sender - Refund Request when the recipient reports they cannot locate paid-out funds.",
      ],
    },
    "Exhaust payment-location resources": {
      article: "Support - Misdirected or Missing P2P Payments > Payment cannot be located",
      toolFocus: "CF1 Lightning account activity and Regulator payment search",
      actions: [
        "Search by payment date, amount, sender, and recipient identifier.",
        "Review all available customer accounts that can be discussed.",
        "Use Transaction Not Found to request missing payment details.",
        "If still unresolved, use Misdirected Payment - Recipient and the matching pushback guidance.",
      ],
    },
    "Escalate official $Cashapp payment": {
      article: "Support - Misdirected or Missing P2P Payments > Official Cash App account",
      toolFocus: "Regulator payment recipient and escalation submission",
      actions: [
        "Open the payment and confirm the recipient is the official verified $Cashapp account.",
        "Copy the direct Regulator payment link.",
        "Escalate the concern for reversal review and document the submission.",
      ],
    },
    "Provide alternate or no-resolution guidance": {
      article: "Support - Misdirected or Missing P2P Payments > Relevant resolution section",
      toolFocus: "CF1 Lightning Quick Texts and the related KA identified during probing",
      actions: [
        "Document the exact reason the payment is ineligible or belongs to another workflow.",
        "Open the related KA for scams, unauthorized payments, gift cards, balance confusion, or cancellations.",
        "For an ineligible completed payment, use Misdirected Payment - No Resolution.",
        "When appropriate, guide the sender to submit an in-app refund request to the recipient.",
      ],
    },
    "Document and close the case": {
      article: "Support - Misdirected or Missing P2P Payments and Voice - Case standard practices",
      toolFocus: "CF1 Lightning case notes and escalation result",
      actions: [
        "Document caller role, payment link, amount, date, status, and account type.",
        "Record actual and intended recipient details without copying unnecessary sensitive information.",
        "Record the internal attempt result, alias comparison, account timeline, and eligibility decision.",
        "Document Quick Texts used, escalation result, and final customer guidance.",
        "Complete the required call closing and survey expectation.",
      ],
    },
  },
  shared: {
    "Caller classification": {
      article: "Voice - PII > Manual PII workflow and Sponsored Accounts",
      toolFocus: "CF1 Lightning customer profile and caller/account relationship",
      actions: [
        "Open the customer profile attached to the call in CF1 Lightning.",
        "Confirm whether the caller is the account holder, sponsor, sponsored customer, or third party.",
        "If the caller is a third party, do not open or disclose account-specific information.",
        "For sponsored accounts, open the sponsored-account verification section before continuing.",
      ],
    },
    "Tap to Confirm status": {
      article: "Voice - PII > Tap to Confirm",
      toolFocus: "CF1 Lightning verification status and the customer’s in-app confirmation prompt",
      actions: [
        "Check whether Tap to Confirm is completed, pending, expired, failed, or unavailable.",
        "If pending, ask the customer to open Cash App and complete the confirmation prompt.",
        "If the prompt is unavailable or unsuccessful, move to Manual PII without giving clues.",
      ],
    },
    "Manual PII verification": {
      article: "Voice - PII > Manual PII (identity confirmation) workflow",
      toolFocus: "CF1 Lightning > Verify Customer",
      actions: [
        "Locate the account using a complete $cashtag, phone number, or email.",
        "Open Verify Customer and request the approved verification details.",
        "Compare complete answers only; do not confirm partial matches or provide hints.",
        "Retry only the field that did not match and track the result internally.",
      ],
    },
    "IDV status assessment": {
      article: "Accounts - Identity verification (IDV) > Handling Voice IDV cases",
      toolFocus: "CF1 Lightning IDV status and Identity Hub",
      actions: [
        "Check whether the account is identity verified.",
        "Determine whether the customer’s current issue is caused by IDV.",
        "If IDV support is required, open Identity Hub and the matching IDV scenario.",
        "Do not disclose account-specific information when PII verification was not completed.",
      ],
    },
    "Third-party caller": {
      article: "Voice - PII > Unverified callers, non-customers, and IDV",
      toolFocus: "CF1 Lightning case notes only",
      actions: [
        "Do not disclose or confirm account-specific information.",
        "Provide only general guidance and ask the account holder to contact Support directly.",
        "Document that the caller was not eligible for account-specific assistance.",
      ],
    },
    "Unable to verify PII": {
      article: "Voice - PII > What to do if PII verification fails",
      toolFocus: "CF1 Lightning manual case process and in-app Support instructions",
      actions: [
        "Stop account-specific investigation and actions.",
        "Create the required manual case and attach the unable-to-verify guidance.",
        "Direct the customer to Profile > Support > issue category > Contact Support.",
        "Document the verification outcome without listing sensitive answers.",
      ],
    },
    "Identity verification assistance": {
      article: "Accounts - Identity verification (IDV) > Identity Hub and IDV troubleshooting",
      toolFocus: "Identity Hub and CF1 Lightning IDV status",
      actions: [
        "Open Identity Hub and identify the displayed verification requirement or status.",
        "Select the matching scenario: missing ID, SSN/ITIN issue, underage, pending review, or app issue.",
        "Use the corresponding approved guidance without suggesting answers.",
        "Document the IDV state and next action.",
      ],
    },
  },
  accountAccess: {
    "Complete pre-action checklist": {
      article: "Account Access - Pre Action Steps > Pre-Action Checklist",
      toolFocus: "CF1 Lightning, Regulator account status, Risk status, and Shared Assets graph",
      actions: [
        "Confirm PII is verified before viewing or discussing either account.",
        "Locate Account A and Account B using customer-provided aliases and Shared Assets.",
        "Check ATO claim, Risk closure, lost/stolen device, IDV status, sponsorship, and account balances.",
        "Do not unlink cards, bank accounts, or aliases unless the selected workflow explicitly requires it.",
      ],
    },
    "Choose Account Access action": {
      article: "Account Access - Voice > Action assessment",
      toolFocus: "Regulator balances, product flags, account state, and login aliases",
      actions: [
        "Check both accounts for Investing, Borrow, Bitcoin, Savings, Gift Card, and cash balances.",
        "Use Reopen Account only for eligible closed-account documents or dispute access.",
        "Use Temporary Access when Investing or Borrow must remain attached.",
        "Use Grant Account Access for the applicable remaining balance/product conditions.",
        "Use Balance Transfer only for eligible cash-only scenarios.",
      ],
    },
    "Login troubleshooting first": {
      article: "Account Access - Overview, Identification, and Troubleshooting > Account Recovery",
      toolFocus: "Cash App login screen and Regulator linked aliases",
      actions: [
        "Check Regulator for another phone number or email linked to the old account.",
        "Guide the customer to Add a profile > Get help logging in > $Cashtag.",
        "Have the customer sign out of an accidentally created new account when applicable.",
        "Return to the manual Account Access path only after Account Recovery fails.",
      ],
    },
    "Perform access action": {
      article: "Account Access - Voice > Reopen Account, Temporary Access, or Granting Access",
      toolFocus: "Regulator > Actions and the selected Account Access tool",
      actions: [
        "Confirm the customer’s consent using the approved Quick Text or talking point.",
        "Confirm the required login aliases are present before running the action.",
        "Open Regulator > Actions and select the action chosen during assessment.",
        "Review the system result and follow the documented 400-error or other-error path.",
        "Document the source and destination accounts without copying unnecessary PII.",
      ],
    },
    "Transfer eligible cash balance": {
      article: "Account Access - Voice > Balance Transfer",
      toolFocus: "Regulator Account B balance, Sponsorship details, and Balance Transfer",
      actions: [
        "Confirm Account B contains eligible cash only and no stock, Bitcoin, Savings, or Gift Card balance.",
        "Review Sponsorship details and confirm the required sponsorship state.",
        "Capture the correct Account B customer token and destination account.",
        "Run Balance Transfer and verify the resulting balance before documenting completion.",
      ],
    },
    "Document and close": {
      article: "Account Access - Voice and Voice - Case standard practices > Documentation requirements",
      toolFocus: "CF1 Lightning case notes and Regulator action result",
      actions: [
        "Document verification, Account A/Account B identification, balances, and selected action.",
        "Record consent, tool result, errors, escalation, and final access state.",
        "Provide any required sign-in or document-retrieval instructions.",
        "Complete the required call closing and survey expectation.",
      ],
    },
  },
  missingDirectDeposit: {
    "Gather deposit details": {
      article: "Phase 1 Missing Direct Deposit workflow specification — official process KA pending",
      toolFocus: "CF1 Lightning customer account and Regulator direct-deposit activity",
      actions: [
        "Collect the expected amount, expected date, payer/employer, and previous deposit pattern.",
        "Confirm whether the payer states the deposit was released.",
        "Open the customer’s direct-deposit activity and search the expected date range.",
        "Do not promise arrival timing without the official process status.",
      ],
    },
    "Determine status": {
      article: "Phase 1 Missing Direct Deposit workflow specification — official process KA pending",
      toolFocus: "Regulator deposit status, destination account, and rejection details",
      actions: [
        "Check whether the deposit is pending, posted, rejected, returned, or absent.",
        "Confirm the account and routing destination used by the payer.",
        "Compare the expected date with any applicable processing window shown in the tool.",
        "Use only documented status details when deciding guidance versus escalation.",
      ],
    },
    "Provide deposit guidance": {
      article: "Phase 1 Missing Direct Deposit workflow specification — official process KA pending",
      toolFocus: "CF1 Lightning case communication and the verified Regulator status",
      actions: [
        "Explain the status visible in the tool without estimating an unsupported completion date.",
        "If the payer has not released the deposit, direct the customer back to the payer.",
        "If rejected or returned, provide the documented reason and next responsible party.",
        "Record the status and guidance in the case.",
      ],
    },
    "Escalate deposit issue": {
      article: "Phase 1 Missing Direct Deposit workflow specification — official process KA pending",
      toolFocus: "Regulator deposit record and Payments escalation process",
      actions: [
        "Confirm the issue cannot be resolved from the visible deposit status.",
        "Capture the deposit identifier, payer, amount, expected date, and relevant account links.",
        "Use the approved Payments escalation path and include all required evidence.",
        "Set expectations without promising a resolution date.",
      ],
    },
    "Close and document": {
      article: "Voice - Case standard practices > Documentation requirements",
      toolFocus: "CF1 Lightning case notes",
      actions: [
        "Document deposit details, tool status, payer guidance, and any escalation reference.",
        "Record the customer’s confirmed contact method for updates.",
        "Complete the required call closing and survey expectation.",
      ],
    },
  },
  unauthorizedCard: {
    "Classify card issue": {
      article: "Cash App Card - Refunds, disputes, and merchants - Block or unblock a merchant > Overview",
      toolFocus: "CF1 Lightning transaction type and Regulator card/Cash App Pay transaction detail",
      actions: [
        "Open the transaction and confirm Cash App Card versus Cash App Pay.",
        "Determine whether the request is merchant block/unblock, unauthorized activity, pending transaction, or another dispute type.",
        "Confirm whether the claim contains card-only activity or multiple transaction types.",
        "Open the applicable merchant-control or dispute workflow.",
      ],
    },
    "Block or unblock merchant": {
      article: "Cash App Card - Refunds, disputes, and merchants - Block or unblock a merchant > Steps",
      toolFocus: "Cash App Card spending controls or Cash App Pay merchant controls",
      actions: [
        "Confirm the merchant and whether the transaction used Cash App Card or Cash App Pay.",
        "Use Card - Spending Controls - Block/Unblock Merchants for card transactions.",
        "Use CAP - Merchant Block - Add On for Cash App Pay.",
        "If the customer cannot complete the action in app, use the approved manual merchant control.",
        "Explain that existing subscriptions, recurring charges, balances, and pending transactions may not be stopped.",
      ],
    },
    "Unauthorized card activity": {
      article: "Voice - Account Takeovers (ATO) > Difference between account takeover and dispute",
      toolFocus: "CF1 Lightning transaction list and the card dispute workflow",
      actions: [
        "Confirm the claim contains Cash App Card transactions only.",
        "Check device-possession context and whether any other transaction type is disputed.",
        "Do not route a card-only claim through the account-takeover process.",
        "Open the approved card dispute workflow and document the transaction links.",
      ],
    },
    "Close and document": {
      article: "Voice - Case standard practices > Documentation requirements",
      toolFocus: "CF1 Lightning case notes and merchant/dispute result",
      actions: [
        "Document transaction type, merchant, action taken, and applicable limitations.",
        "Record whether the concern was routed to merchant controls or card dispute handling.",
        "Confirm the customer understands the next step.",
        "Complete the required call closing and survey expectation.",
      ],
    },
  },
  ato: {
    "Confirm ATO indicators": {
      article: "Voice - Account Takeovers (ATO) > Overview and Before taking action",
      toolFocus: "CF1 Lightning account banner, Regulator transaction history, and device-possession details",
      actions: [
        "Confirm whether the customer possessed their device when the activity occurred.",
        "Identify every unauthorized transaction type, not only card activity.",
        "Ask whether the customer interacted with fake support or installed a remote-access app.",
        "Check for an ATO lock banner and existing account-security cases.",
        "Route lost/stolen-device and card-only claims to their alternate workflows.",
      ],
    },
    "ATO escalation workflow": {
      article: "Voice - Account Takeovers (ATO) > ATO escalation workflow",
      toolFocus: "Regulator account state, transaction links, optional-question responses, and security-review queue",
      actions: [
        "Check whether the account is closed or currently security-locked.",
        "Open and link every transaction provided by the customer.",
        "Review whether the customer authorized any part of the activity.",
        "Check for duplicate or active account-security cases.",
        "Submit the concern to the account security review team with complete documentation.",
      ],
    },
    "Use alternate workflow": {
      article: "Voice - Account Takeovers (ATO) > Do not escalate to account takeover",
      toolFocus: "CF1 Lightning issue classification and the applicable dispute/lost-device workflow",
      actions: [
        "Document why the concern does not meet account-takeover criteria.",
        "For card-only activity, open the card dispute workflow.",
        "For activity during a lost or stolen device event, open the applicable lost-device/dispute workflow.",
        "Preserve all transaction links and customer statements in the case notes.",
      ],
    },
    "Close and document": {
      article: "Voice - Account Takeovers (ATO) and Voice - Case standard practices",
      toolFocus: "CF1 Lightning case notes and account-security review status",
      actions: [
        "Document device possession, transaction types, customer authorization statements, and account state.",
        "Record the selected escalation or alternate workflow and all linked transactions.",
        "Set expectations using the approved account-security guidance.",
        "Complete the required call closing and survey expectation.",
      ],
    },
  },
};

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function loadWorkflowData() {
  const externalSource = window.WORKFLOW_DATA || {};
  const externalHasPayload = Array.isArray(externalSource.workflows) && externalSource.workflows.length > 0;
  const externalData = normalizeWorkflowData(externalSource);
  const baseData = externalHasPayload ? externalData : cloneData(defaultWorkflowData);
  if (window.MISDIRECTED_PAYMENT_WORKFLOW && !externalHasPayload) {
    const index = baseData.workflows.findIndex((workflow) => workflow.id === "p2pMisdirected");
    if (index >= 0) baseData.workflows[index] = cloneData(window.MISDIRECTED_PAYMENT_WORKFLOW);
  }
  if (document.body.dataset.appMode !== "admin") return baseData;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return baseData;
    const parsed = normalizeWorkflowData(JSON.parse(saved));
    replaceEscalationJargon(parsed);
    if (parsed.quickTexts.some((quickText) => !Array.isArray(quickText.stepTitles))) {
      parsed.quickTexts = cloneData(defaultWorkflowData.quickTexts);
    }
    const savedMisdirected = parsed.workflows.find((workflow) => workflow.id === "p2pMisdirected");
    if (window.MISDIRECTED_PAYMENT_WORKFLOW && (!savedMisdirected || savedMisdirected.steps.length <= 5)) {
      const index = parsed.workflows.findIndex((workflow) => workflow.id === "p2pMisdirected");
      if (index >= 0) parsed.workflows[index] = cloneData(window.MISDIRECTED_PAYMENT_WORKFLOW);
      else parsed.workflows.push(cloneData(window.MISDIRECTED_PAYMENT_WORKFLOW));
    } else if (savedMisdirected) {
      const informationStep = savedMisdirected.steps.find((step) => step.title === "Collect intended-recipient information");
      if (informationStep?.scripts?.some((script) => script.toLowerCase().includes("two attempts"))) {
        informationStep.scripts = [
          "To review whether this can be reversed, I need the complete and accurate information you intended to use for the recipient.",
        ];
      }
    }
    return hasWorkflowPayload(parsed) ? parsed : baseData;
  } catch {
    return baseData;
  }
}

function normalizeWorkflowData(data) {
  return {
    articles: Array.isArray(data.articles) ? data.articles : cloneData(defaultWorkflowData.articles),
    quickTexts: Array.isArray(data.quickTexts) ? data.quickTexts : cloneData(defaultWorkflowData.quickTexts),
    sharedVerificationSteps: Array.isArray(data.sharedVerificationSteps)
      ? data.sharedVerificationSteps
      : cloneData(defaultWorkflowData.sharedVerificationSteps),
    terminalSteps: data.terminalSteps && typeof data.terminalSteps === "object" ? data.terminalSteps : cloneData(defaultWorkflowData.terminalSteps),
    workflows: Array.isArray(data.workflows) ? data.workflows : cloneData(defaultWorkflowData.workflows),
  };
}

function hasWorkflowPayload(data) {
  return Array.isArray(data.workflows) && data.workflows.length > 0;
}

function applyWorkflowData(data) {
  replaceArray(articles, data.articles);
  replaceArray(quickTextLibrary, data.quickTexts);
  replaceArray(sharedVerificationSteps, data.sharedVerificationSteps);
  replaceObject(terminalSteps, data.terminalSteps);
  replaceArray(workflowDefinitions, data.workflows);
}

function getCurrentWorkflowData() {
  return cloneData({
    schemaVersion: 1,
    articles,
    quickTexts: quickTextLibrary,
    sharedVerificationSteps,
    terminalSteps,
    workflows: workflowDefinitions,
  });
}

function saveWorkflowData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getCurrentWorkflowData(), null, 2));
}

function replaceArray(target, source) {
  target.splice(0, target.length, ...cloneData(source || []));
}

function replaceObject(target, source) {
  Object.keys(target).forEach((key) => delete target[key]);
  Object.assign(target, cloneData(source || {}));
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function replaceEscalationJargon(value) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      value[index] = replaceEscalationJargon(item);
    });
    return value;
  }
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = replaceEscalationJargon(value[key]);
    });
    return value;
  }
  if (typeof value !== "string") return value;
  return value
    .replace(/Escalate to AET/gi, "Escalate the concern")
    .replace(/needs AET/gi, "needs escalation")
    .replace(/AET reversed payment/gi, "Payment was reversed")
    .replace(/AET could not reverse/gi, "Payment could not be reversed")
    .replace(/submit it to AET/gi, "escalate the concern")
    .replace(/AET escalation snippet/gi, "escalation snippet")
    .replace(/AET escalation/gi, "escalation process")
    .replace(/AET criteria/gi, "escalation criteria")
    .replace(/AET result/gi, "escalation result")
    .replace(/\bAET\b/gi, "the escalation team");
}

function getCurrentStep() {
  if (typeof currentStepKey === "number" && currentStepKey < sharedVerificationSteps.length) {
    return sharedVerificationSteps[currentStepKey];
  }
  if (currentStepKey === "workflowStart") {
    return currentWorkflow.steps[0];
  }
  if (typeof currentStepKey === "number") {
    return currentWorkflow.steps[currentStepKey - sharedVerificationSteps.length];
  }
  return terminalSteps[currentStepKey];
}

function workflowStepToGlobal(index) {
  return sharedVerificationSteps.length + index;
}

function resolveNext(next) {
  if (next === "workflowStart") return workflowStepToGlobal(0);
  if (typeof next === "number" && currentStepKey >= sharedVerificationSteps.length) {
    return workflowStepToGlobal(next);
  }
  return next;
}

function setView(viewName) {
  if (!viewName) return;
  if (viewName === "admin" && IS_ADMIN_BUILD && !window.isAdminUnlocked?.()) {
    window.openAdminAccessDialog?.();
    return;
  }
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  const targetView = document.querySelector(`#${viewName}View`);
  if (targetView) targetView.classList.add("active");
}

function renderResources(step) {
  renderRecommendedActions(step);
  renderStepKnowledgeArticles(step);
  renderList("#toolsList", [
    "Do not share OTP or security codes.",
    "Always verify before attempting any reset.",
    "Document all steps taken in the case notes.",
    ...(step.tools || []).map((tool) => `Use ${tool} when required.`),
  ]);
  updateEscalationCard(step);

  const scriptsList = document.querySelector("#scriptsList");
  scriptsList.innerHTML = "";
  (step.scripts || ["No script guidance for this step."]).forEach((script) => {
    const box = document.createElement("div");
    box.className = "script-box";
    box.innerHTML = `<strong>Script</strong><p>${escapeHtml(script)}</p>`;
    scriptsList.appendChild(box);
  });

  if (step.stage === "Call Closure") {
    const box = document.createElement("div");
    box.className = "script-box required-closing";
    box.innerHTML = `
      <strong>Required Call Closing</strong>
      <p>Before we wrap up, is there anything else I can help you with today?</p>
      <p class="script-direction">Pause and address any additional concern before continuing.</p>
      <p>Thank you for contacting Cash App Support. After our call ends, you’ll be transferred to a brief survey where you can share feedback about the support you received today.</p>
    `;
    scriptsList.appendChild(box);
  }

  const suggestions = getQuickTextSuggestions(step);
  suggestions.forEach((qt) => {
    const box = document.createElement("div");
    box.className = "script-box";
    box.innerHTML = `<span class="qt-name">${escapeHtml(qt.name)}</span><p>${escapeHtml(qt.text)}</p>`;
    scriptsList.appendChild(box);
  });
}

function renderRecommendedActions(step) {
  const guidance = getRecommendedActionGuidance(currentWorkflow.id, step);
  const context = document.querySelector("#recommendedContext");
  context.innerHTML = `
    <span><strong>Tool focus:</strong> ${escapeHtml(guidance.toolFocus)}</span>
  `;
  renderList("#actionsList", guidance.actions);
}

function renderStepKnowledgeArticles(step) {
  const guidance = getRecommendedActionGuidance(currentWorkflow.id, step);
  const relatedArticles = unique([
    guidance.article,
    ...(step.articles || []),
  ]);
  document.querySelector("#knowledgeStepContext").textContent = `Current step: ${step.title}`;
  renderList("#articlesList", relatedArticles);
}

function getRecommendedActionGuidance(workflowId, step) {
  const workflowGuidance =
    recommendedActionGuidance[workflowId]?.[step.title] ||
    recommendedActionGuidance.shared?.[step.title];
  if (workflowGuidance) return workflowGuidance;
  return {
    article: currentWorkflow.articleTitles?.[0] || "Current workflow knowledge article",
    toolFocus: (step.tools || []).join(", ") || "Follow the current knowledge article",
    actions: step.actions || [],
  };
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";
  if (!items.length) {
    const li = document.createElement("li");
    li.textContent = "No resources assigned.";
    list.appendChild(li);
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function updateEscalationCard(step) {
  const card = document.querySelector("#escalationCard");
  const target = document.querySelector("#escalationTarget");
  const condition = document.querySelector("#escalationCondition");
  const config = getEscalationConfig(currentWorkflow.id, step.title);

  card.hidden = !config;
  if (!config) return;
  target.textContent = config.target;
  condition.textContent = config.condition;
}

function getEscalationConfig(workflowId, stepTitle) {
  const configurations = {
    p2pMisdirected: {
      "Escalate the concern": {
        target: "Payment escalation team",
        condition: "The customer has been confirmed eligible for reimbursement review or the payment has been confirmed as truly misdirected.",
      },
      "Escalate official $Cashapp payment": {
        target: "Payment escalation team",
        condition: "The payment is confirmed as sent to the official verified $Cashapp account.",
      },
    },
    missingDirectDeposit: {
      "Escalate deposit issue": {
        target: "Payments escalation team",
        condition: "The deposit cannot be resolved with available account details and meets the documented escalation criteria.",
      },
    },
    unauthorizedCard: {
      "Unauthorized card activity": {
        target: "Card dispute support",
        condition: "The activity is confirmed as a card-only unauthorized transaction requiring the dispute process.",
      },
    },
    ato: {
      "ATO escalation workflow": {
        target: "Account security review team",
        condition: "Probing confirms account-takeover indicators and the concern is not a card-only or lost/stolen-device case.",
      },
    },
  };

  return configurations[workflowId]?.[stepTitle] || null;
}

function renderProgress() {
  const steps = [
    { title: "Verify Customer", body: "Confirm customer identity", stages: ["Verification", "IDV Support"] },
    { title: "Check Account Status", body: "Determine account standing", stages: ["Investigation", "Assessment"] },
    { title: "Resolve the Issue", body: "Follow recommended actions", stages: ["Resolution"] },
    { title: "Closure & Documentation", body: "Wrap up and document the case", stages: ["Call Closure"] },
  ];
  const currentStage = getCurrentStep().stage;
  progressTrack.innerHTML = "";
  steps.forEach((step, index) => {
    const chip = document.createElement("div");
    chip.className = "progress-step";
    chip.classList.toggle("active", step.stages.includes(currentStage));
    chip.innerHTML = `
      <span class="progress-number">${index + 1}</span>
      <span class="progress-copy">
        <strong>${step.title}</strong>
        <span>${step.body}</span>
      </span>
    `;
    progressTrack.appendChild(chip);
  });
}

function renderStep() {
  const step = getCurrentStep();
  document.querySelector("#stepMeta").textContent = getStepMeta(step);
  document.querySelector("#stepTitle").textContent = step.title;
  document.querySelector("#stepBody").textContent = step.body;

  decisionOptions.innerHTML = "";
  (step.options || []).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "decision-button";
    button.textContent = option.label;
    button.addEventListener("click", () => {
      decisionOptions.querySelectorAll(".decision-button").forEach((decisionButton) => {
        decisionButton.classList.remove("selected");
        decisionButton.disabled = true;
      });
      button.classList.add("selected");
      window.setTimeout(() => {
        historyStack.push(currentStepKey);
        currentStepKey = resolveNext(option.next);
        renderStep();
      }, 140);
    });
    decisionOptions.appendChild(button);
  });

  prevStepButton.disabled = historyStack.length === 0;
  const markResolvedButton = document.querySelector("#markResolvedButton");
  markResolvedButton.disabled = step.stage !== "Call Closure";
  markResolvedButton.textContent = "✓ Mark as Resolved";
  renderProgress();
  renderResources(step);
}

function loadWorkflow() {
  currentWorkflow = workflowDefinitions.find((workflow) => workflow.id === workflowSelect.value) || workflowDefinitions[0];
  currentStepKey = 0;
  historyStack = [];
  workflowView.classList.add("loaded");
  setView("workflow");
  renderStep();
}

function renderKnowledge(filter = "") {
  const normalizedFilter = filter.trim().toLowerCase();
  knowledgeGrid.innerHTML = "";
  articles
    .filter((article) => {
      const haystack = `${article.title} ${article.summary} ${article.tags.join(" ")}`.toLowerCase();
      return haystack.includes(normalizedFilter);
    })
    .forEach((article) => {
      const card = document.createElement("article");
      card.className = "knowledge-card";
      card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
        <div class="tag-row">
          <span class="tag">${article.updated}</span>
          ${article.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      `;
      knowledgeGrid.appendChild(card);
    });
}

function refreshCategorySelect(selectedCategory = currentWorkflow?.category) {
  const categories = unique(workflowDefinitions.map((workflow) => workflow.category));
  categorySelect.innerHTML = "";
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
  if (selectedCategory && categories.includes(selectedCategory)) {
    categorySelect.value = selectedCategory;
  }
}

function refreshWorkflowSelect(selectedId = currentWorkflow?.id) {
  const availableWorkflows = workflowDefinitions.filter((workflow) => workflow.category === categorySelect.value);
  workflowSelect.innerHTML = "";
  availableWorkflows.forEach((workflow) => {
    const option = document.createElement("option");
    option.value = workflow.id;
    option.textContent = workflow.title;
    workflowSelect.appendChild(option);
  });
  if (selectedId && availableWorkflows.some((workflow) => workflow.id === selectedId)) {
    workflowSelect.value = selectedId;
  }
  refreshSubScenarioSelect();
}

function refreshSubScenarioSelect() {
  const scenarios = subScenarioDefinitions[workflowSelect.value] || ["General guidance"];
  subScenarioSelect.innerHTML = "";
  scenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario;
    option.textContent = scenario;
    subScenarioSelect.appendChild(option);
  });
}

function lockWorkflowForIntakeChange() {
  workflowView.classList.remove("loaded");
}

function syncIntakeToWorkflow(workflow) {
  if (!workflow) return;
  refreshCategorySelect(workflow.category);
  refreshWorkflowSelect(workflow.id);
}

function refreshSummaryMetrics() {
  document.querySelector("#workflowCount").textContent = workflowDefinitions.length;
  document.querySelector("#articleCount").textContent = articles.length;
  document.querySelector("#toolCount").textContent = unique(workflowDefinitions.flatMap((workflow) => workflow.steps.flatMap((step) => step.tools || []))).length;
}

function renderAdminWorkflowList() {
  adminWorkflowList.innerHTML = "";
  workflowDefinitions.forEach((workflow) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "admin-workflow-item";
    button.classList.toggle("active", workflow.id === adminSelectedWorkflowId);
    button.innerHTML = `<strong>${escapeHtml(workflow.title)}</strong><span>${escapeHtml(workflow.category)} · ${workflow.steps.length} steps</span>`;
    button.addEventListener("click", () => {
      adminSelectedWorkflowId = workflow.id;
      renderAdmin();
    });
    adminWorkflowList.appendChild(button);
  });
}

function renderAdminEditor() {
  const workflow = getAdminWorkflow();
  if (!workflow) return;
  document.querySelector("#adminWorkflowId").value = workflow.id;
  document.querySelector("#adminWorkflowCategory").value = workflow.category || "";
  document.querySelector("#adminWorkflowTitle").value = workflow.title || "";
  document.querySelector("#adminWorkflowPurpose").value = workflow.purpose || "";
  document.querySelector("#adminWorkflowArticles").value = (workflow.articleTitles || []).join("\n");
  adminSteps.innerHTML = "";
  workflow.steps.forEach((step, index) => adminSteps.appendChild(createAdminStepCard(step, index)));
}

function createAdminStepCard(step, index) {
  const card = document.createElement("article");
  card.className = "admin-step-card";
  card.dataset.stepIndex = String(index);
  card.innerHTML = `
    <div class="admin-step-title">
      <strong>Step ${index + 1}</strong>
      <button class="danger-action" data-remove-step="${index}" type="button">Remove</button>
    </div>
    <div class="admin-step-grid">
      <label>Stage <input data-step-field="stage" type="text" value="${escapeAttribute(step.stage || "")}" /></label>
      <label>Title <input data-step-field="title" type="text" value="${escapeAttribute(step.title || "")}" /></label>
    </div>
    <label>Body <textarea data-step-field="body" rows="3">${escapeHtml(step.body || "")}</textarea></label>
    <div class="admin-step-grid">
      <label>Recommended Actions <textarea data-step-field="actions" rows="4" placeholder="One action per line">${escapeHtml((step.actions || []).join("\n"))}</textarea></label>
      <label>Tools / Reminders <textarea data-step-field="tools" rows="4" placeholder="One tool per line">${escapeHtml((step.tools || []).join("\n"))}</textarea></label>
    </div>
    <div class="admin-step-grid">
      <label>Scripts <textarea data-step-field="scripts" rows="4" placeholder="One script per line">${escapeHtml((step.scripts || []).join("\n"))}</textarea></label>
      <label>Decision Options <textarea data-step-field="options" rows="4" placeholder="Label => next index, e.g. Verified => 1">${escapeHtml(formatOptions(step.options || []))}</textarea></label>
    </div>
  `;
  card.querySelector("[data-remove-step]").addEventListener("click", () => {
    const workflow = getAdminWorkflow();
    if (!workflow || workflow.steps.length <= 1) {
      setAdminStatus("A workflow needs at least one step.", "error");
      return;
    }
    workflow.steps.splice(index, 1);
    renderAdmin();
    setAdminStatus("Step removed. Save the workflow to keep this change.", "ok");
  });
  return card;
}

function renderAdmin() {
  if (!workflowDefinitions.some((workflow) => workflow.id === adminSelectedWorkflowId)) {
    adminSelectedWorkflowId = workflowDefinitions[0]?.id || "";
  }
  renderAdminWorkflowList();
  renderAdminEditor();
}

function getAdminWorkflow() {
  return workflowDefinitions.find((workflow) => workflow.id === adminSelectedWorkflowId);
}

function saveAdminWorkflow() {
  const original = getAdminWorkflow();
  if (!original) return;
  const nextWorkflow = collectAdminWorkflow();
  if (!nextWorkflow.id || !nextWorkflow.title) {
    setAdminStatus("Workflow ID and title are required.", "error");
    return;
  }
  const duplicate = workflowDefinitions.find((workflow) => workflow.id === nextWorkflow.id && workflow !== original);
  if (duplicate) {
    setAdminStatus("Workflow ID must be unique.", "error");
    return;
  }
  Object.assign(original, nextWorkflow);
  adminSelectedWorkflowId = nextWorkflow.id;
  saveWorkflowData();
  syncIntakeToWorkflow(nextWorkflow);
  currentWorkflow = workflowDefinitions.find((workflow) => workflow.id === nextWorkflow.id) || workflowDefinitions[0];
  renderStep();
  renderKnowledge(knowledgeSearch.value);
  refreshSummaryMetrics();
  renderAdmin();
  setAdminStatus("Workflow saved locally in this browser.", "ok");
}

function collectAdminWorkflow() {
  return {
    id: document.querySelector("#adminWorkflowId").value.trim(),
    category: document.querySelector("#adminWorkflowCategory").value.trim(),
    title: document.querySelector("#adminWorkflowTitle").value.trim(),
    purpose: document.querySelector("#adminWorkflowPurpose").value.trim(),
    articleTitles: parseLines(document.querySelector("#adminWorkflowArticles").value),
    steps: [...adminSteps.querySelectorAll(".admin-step-card")].map((card) => ({
      stage: card.querySelector('[data-step-field="stage"]').value.trim(),
      title: card.querySelector('[data-step-field="title"]').value.trim(),
      body: card.querySelector('[data-step-field="body"]').value.trim(),
      actions: parseLines(card.querySelector('[data-step-field="actions"]').value),
      tools: parseLines(card.querySelector('[data-step-field="tools"]').value),
      scripts: parseLines(card.querySelector('[data-step-field="scripts"]').value),
      options: parseOptions(card.querySelector('[data-step-field="options"]').value),
    })),
  };
}

function createNewWorkflow() {
  const id = `newWorkflow${Date.now()}`;
  workflowDefinitions.push({
    id,
    category: "New Category",
    title: "New Workflow",
    purpose: "Describe the workflow purpose.",
    articleTitles: [],
    steps: [createBlankStep()],
  });
  adminSelectedWorkflowId = id;
  saveWorkflowData();
  syncIntakeToWorkflow(workflowDefinitions.find((workflow) => workflow.id === id));
  refreshSummaryMetrics();
  renderAdmin();
  setAdminStatus("New workflow created. Edit the details and save.", "ok");
}

function duplicateWorkflow() {
  const workflow = getAdminWorkflow();
  if (!workflow) return;
  const copy = cloneData(workflow);
  copy.id = `${workflow.id}Copy${Date.now()}`;
  copy.title = `${workflow.title} Copy`;
  workflowDefinitions.push(copy);
  adminSelectedWorkflowId = copy.id;
  saveWorkflowData();
  syncIntakeToWorkflow(copy);
  refreshSummaryMetrics();
  renderAdmin();
  setAdminStatus("Workflow duplicated.", "ok");
}

function deleteWorkflow() {
  if (workflowDefinitions.length <= 1) {
    setAdminStatus("At least one workflow is required.", "error");
    return;
  }
  const index = workflowDefinitions.findIndex((workflow) => workflow.id === adminSelectedWorkflowId);
  if (index === -1) return;
  workflowDefinitions.splice(index, 1);
  adminSelectedWorkflowId = workflowDefinitions[0].id;
  currentWorkflow = workflowDefinitions[0];
  saveWorkflowData();
  syncIntakeToWorkflow(currentWorkflow);
  refreshSummaryMetrics();
  renderStep();
  renderAdmin();
  setAdminStatus("Workflow deleted locally.", "ok");
}

function addAdminStep() {
  const workflow = getAdminWorkflow();
  if (!workflow) return;
  workflow.steps.push(createBlankStep());
  renderAdmin();
  setAdminStatus("Step added. Save the workflow to keep this change.", "ok");
}

function createBlankStep() {
  return {
    stage: "Investigation",
    title: "New step",
    body: "Describe what the advocate should decide or do.",
    actions: ["Add recommended action"],
    tools: ["CF1 Lightning"],
    scripts: ["Add approved script guidance"],
    options: [],
  };
}

function exportWorkflowData() {
  const blob = new Blob([JSON.stringify(getCurrentWorkflowData(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cash-app-workflow-data.json";
  link.click();
  URL.revokeObjectURL(url);
  setAdminStatus("Workflow data exported.", "ok");
}

function exportDeploymentData() {
  const payload = JSON.stringify(getCurrentWorkflowData(), null, 2);
  const source = `// Generated by the Admin Workflow Management build.\nwindow.WORKFLOW_DATA = ${payload};\n`;
  const blob = new Blob([source], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "workflow-data.js";
  link.click();
  URL.revokeObjectURL(url);
  setAdminStatus("Advocate deployment data exported. Replace data/workflow-data.js and publish the update.", "ok");
}

function importWorkflowData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = normalizeWorkflowData(JSON.parse(String(reader.result)));
      if (!hasWorkflowPayload(data)) throw new Error("No workflows found.");
      applyWorkflowData(data);
      saveWorkflowData();
      adminSelectedWorkflowId = workflowDefinitions[0].id;
      currentWorkflow = workflowDefinitions[0];
      syncIntakeToWorkflow(currentWorkflow);
      refreshSummaryMetrics();
      renderKnowledge(knowledgeSearch.value);
      renderStep();
      renderAdmin();
      setAdminStatus("Workflow data imported and saved locally.", "ok");
    } catch (error) {
      setAdminStatus(`Import failed: ${error.message}`, "error");
    }
  });
  reader.readAsText(file);
}

function resetAdminData() {
  localStorage.removeItem(STORAGE_KEY);
  applyWorkflowData(normalizeWorkflowData(window.WORKFLOW_DATA || defaultWorkflowData));
  adminSelectedWorkflowId = workflowDefinitions[0].id;
  currentWorkflow = workflowDefinitions[0];
  syncIntakeToWorkflow(currentWorkflow);
  refreshSummaryMetrics();
  renderKnowledge(knowledgeSearch.value);
  renderStep();
  renderAdmin();
  setAdminStatus("Local changes reset.", "ok");
}

function parseLines(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseOptions(value) {
  return parseLines(value)
    .map((line) => {
      const [label, next] = line.split("=>").map((part) => part.trim());
      if (!label || next === undefined || next === "") return null;
      const numericNext = Number(next);
      return { label, next: Number.isNaN(numericNext) ? next : numericNext };
    })
    .filter(Boolean);
}

function formatOptions(options) {
  return options.map((option) => `${option.label} => ${option.next}`).join("\n");
}

function setAdminStatus(message, type) {
  adminStatus.textContent = message;
  adminStatus.className = type === "error" ? "admin-status-error" : "admin-status-ok";
}

function init() {
  syncIntakeToWorkflow(currentWorkflow);

  refreshSummaryMetrics();
  initializeProfile();
  if (IS_ADMIN_BUILD) window.initializeAdminAccess?.();

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  categorySelect.addEventListener("change", () => {
    refreshWorkflowSelect();
    lockWorkflowForIntakeChange();
  });
  workflowSelect.addEventListener("change", () => {
    refreshSubScenarioSelect();
    lockWorkflowForIntakeChange();
  });
  subScenarioSelect.addEventListener("change", lockWorkflowForIntakeChange);
  document.querySelector("#lobSelect").addEventListener("change", lockWorkflowForIntakeChange);
  document.querySelector("#channelSelect").addEventListener("change", lockWorkflowForIntakeChange);
  loadWorkflowButton.addEventListener("click", loadWorkflow);
  resetWorkflowButton.addEventListener("click", loadWorkflow);
  prevStepButton.addEventListener("click", () => {
    if (!historyStack.length) return;
    currentStepKey = historyStack.pop();
    renderStep();
  });
  document.querySelector("#toggleScript").addEventListener("click", (event) => {
    const scriptsList = document.querySelector("#scriptsList");
    const hidden = scriptsList.style.display === "none";
    scriptsList.style.display = hidden ? "" : "none";
    event.currentTarget.textContent = hidden ? "Hide Script ^" : "Show Script v";
  });
  document.querySelector("#markResolvedButton").addEventListener("click", (event) => {
    event.currentTarget.textContent = "✓ Resolved";
    event.currentTarget.disabled = true;
  });
  document.querySelector("#viewMoreArticlesButton").addEventListener("click", () => {
    const guidance = getRecommendedActionGuidance(currentWorkflow.id, getCurrentStep());
    const primaryTitle = guidance.article.split(" > ")[0].split(" and ")[0];
    const query = articles.some((article) => article.title === primaryTitle)
      ? primaryTitle
      : currentWorkflow.category;
    knowledgeSearch.value = query;
    renderKnowledge(query);
    setView("knowledge");
  });
  if (IS_ADMIN_BUILD) {
    document.querySelector("#newWorkflowButton").addEventListener("click", createNewWorkflow);
    document.querySelector("#duplicateWorkflowButton").addEventListener("click", duplicateWorkflow);
    document.querySelector("#deleteWorkflowButton").addEventListener("click", deleteWorkflow);
    document.querySelector("#addStepButton").addEventListener("click", addAdminStep);
    document.querySelector("#saveWorkflowButton").addEventListener("click", saveAdminWorkflow);
    document.querySelector("#exportWorkflowButton").addEventListener("click", exportWorkflowData);
    document.querySelector("#exportDeploymentButton").addEventListener("click", exportDeploymentData);
    document.querySelector("#resetAdminDataButton").addEventListener("click", resetAdminData);
    document.querySelector("#importWorkflowInput").addEventListener("change", (event) => {
      importWorkflowData(event.target.files[0]);
      event.target.value = "";
    });
  }
  knowledgeSearch.addEventListener("input", (event) => renderKnowledge(event.target.value));

  renderKnowledge();
  if (IS_ADMIN_BUILD) renderAdmin();
  setView("workflow");
  renderStep();
}

init();

function initializeProfile() {
  const profileButton = document.querySelector("#profileButton");
  const profileDialog = document.querySelector("#profileDialog");
  const profileForm = document.querySelector("#profileForm");
  const profileNameInput = document.querySelector("#profileNameInput");
  const profileRoleInput = document.querySelector("#profileRoleInput");
  let profile = loadUserProfile();
  renderUserProfile(profile);

  profileButton.addEventListener("click", () => {
    profileNameInput.value = profile.name;
    profileRoleInput.value = profile.role;
    profileDialog.showModal();
  });

  profileForm.addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    if (!profileForm.reportValidity()) return;
    profile = {
      name: profileNameInput.value.trim(),
      role: profileRoleInput.value.trim(),
    };
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    renderUserProfile(profile);
    profileDialog.close();
  });
}

function loadUserProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));
    if (saved?.name && saved?.role) return saved;
  } catch {
    // Use the local default when saved profile data is unavailable.
  }
  return { name: "Owen Reyes", role: "Advocate" };
}

function renderUserProfile(profile) {
  document.querySelector("#profileGreeting").textContent = `Hello, ${profile.name}`;
  document.querySelector("#profileRoleLabel").textContent = profile.role;
  document.querySelector("#profileInitials").textContent = getInitials(profile.name);
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "CA";
}

function getQuickTextSuggestions(step) {
  if (step.stage === "Call Closure") return [];
  return quickTextLibrary
    .filter((qt) => !qt.workflowIds || qt.workflowIds.includes(currentWorkflow.id))
    .filter((qt) => !qt.stepTitles || qt.stepTitles.includes(step.title))
    .slice(0, 1);
}

function getStepMeta(step) {
  const total = sharedVerificationSteps.length + currentWorkflow.steps.length;
  let index = 1;
  if (typeof currentStepKey === "number") {
    index = currentStepKey < sharedVerificationSteps.length ? currentStepKey + 1 : currentStepKey + 1;
  }
  return `Step ${Math.min(index, total)} of ${total}: ${step.stage}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("\n", "&#10;");
}
