# Advocate Workflow Guidance Tool

A static browser-based decision-support tool for guiding advocates through verification, investigation, resolution, documentation, and call closure.

The project now has two separate surfaces:

- **Advocate build:** Public/internal operational interface with no Admin tab, password form, or access configuration.
- **Admin build:** Local or internally hosted workflow-management interface. This folder is excluded from Git by default.

## Project Structure

```text
Cash App Workflow Tool/
|-- index.html                         # Advocate build entry point
|-- app.js                             # Shared workflow engine
|-- styles.css                         # Shared interface styles
|-- README.md
|-- .gitignore                         # Excludes the Admin build
|-- data/
|   |-- workflow-data.js               # Published advocate workflow dataset
|   `-- misdirected-payment-workflow.js
`-- admin/                             # Local/internal only; ignored by Git
    |-- index.html                     # Admin build entry point
    |-- admin-access.js                # Local Admin access behavior
    |-- access-config.js               # Temporary local access configuration
    `-- README.md                       # Local Admin instructions
```

## Advocate Build

Open:

```text
index.html
```

The Advocate build includes:

- Conditional category, scenario, and sub-scenario intake
- Workflow lock until **Load Workflow** is selected
- Shared Tap to Confirm, PII, and IDV verification
- Decision-based workflow navigation
- Step-aware recommended actions
- Exact tool locations and fields to inspect
- Step-aware Knowledge Article sections
- Contextual Quick Text suggestions
- Outcome-driven escalation visibility
- Mandatory call closing and survey expectation
- Searchable Knowledge Hub
- Browser-local display profile

It also displays this notice:

> Internal workflow guidance only. This site never requests customer passwords, Cash PINs, one-time passcodes, payment credentials, or customer PII.

The public page does not load or contain the Admin passcode form.

## Admin Build

Open locally:

```text
admin/index.html
```

Local access instructions are stored inside the ignored `admin/` folder. Admin access lasts for the current browser-tab session. The current protection is an MVP client-side gate, not production authentication.

Administrators can:

- Create workflows
- Edit metadata and workflow steps
- Add or remove decisions
- Edit actions, tools, scripts, and article references
- Duplicate or delete workflows
- Import and export JSON backups
- Export a deployment-ready Advocate data file

## Publishing Workflow Updates

The Admin build cannot directly write to files on disk because it runs in a browser. Use the deployment export:

1. Open `admin/index.html`.
2. Make and save the workflow changes.
3. Test every decision branch in the Admin build.
4. Select **Export Advocate Data**.
5. The browser downloads:

   ```text
   workflow-data.js
   ```

6. Replace:

   ```text
   data/workflow-data.js
   ```

   with the downloaded file.

7. Commit and push the updated `data/workflow-data.js`.
8. Advocates refresh the website to receive the update.

The Advocate build always reads the deployed workflow data and does not use Admin draft data stored in another browser.

## Updating Advocate Files

### Workflow-content change only

Examples:

- New or edited workflow
- Updated actions
- Updated scripts or Quick Text mappings
- Changed decision path
- Updated Knowledge Article reference

Only distribute or publish:

```text
data/workflow-data.js
```

For a hosted website, advocates only need to refresh the page.

For advocates using downloaded/offline copies, send them the new `workflow-data.js` and have them replace the existing file inside their `data` folder.

### Application or design change

Examples:

- New interface control
- Layout or color change
- Workflow-engine behavior change
- Security or navigation change

Publish or redistribute:

```text
index.html
app.js
styles.css
data/workflow-data.js
data/misdirected-payment-workflow.js
```

For offline users, replacing the full Advocate folder is safer for application changes.

## GitHub Pages Deployment

Publish the repository root, which contains the Advocate build.

The `admin/` directory is listed in `.gitignore` and should not be committed or deployed.

Before pushing, verify:

```text
git status
```

The output should not include:

```text
admin/index.html
admin/access-config.js
```

If the Admin folder was committed previously, remove it from Git tracking without deleting the local files:

```powershell
git rm -r --cached admin
git commit -m "Remove local admin build from public deployment"
git push
```

Do not disable browser security warnings or ask users to bypass them.

## Safe Deployment Practices

- Prefer a client-approved internal domain and hosting environment.
- Use HTTPS.
- Keep the repository private when it contains internal process material.
- Do not publish the Admin build or passcode configuration.
- Do not collect customer PII, passwords, PINs, OTPs, or payment credentials.
- Keep the internal-use notice visible.
- Validate the deployed URL with Google Search Console and Safe Browsing.
- If the site was previously flagged, request a security review after deploying the cleaned Advocate build.

## Current Workflows

1. Account Access Recovery
2. Missing Direct Deposit
3. P2P Misdirected Payment
4. Unauthorized Cash Card Transaction
5. Account Takeover

The P2P Misdirected Payment process currently has the deepest decision model.

> The official Missing Direct Deposit Knowledge Article was not supplied. Guidance for that workflow remains marked as scope-based and pending source validation.

## Resource Behavior

### Recommended Action

Shows only:

- Tool or system to open
- Exact section, graph, status, or field to inspect
- Ordered advocate actions

### Knowledge Base Articles

Shows the Knowledge Article and section relevant to the current step.

### Escalation

Remains hidden until probing reaches a valid escalation outcome.

### Approved Script / Verbiage

Uses exact workflow-step mappings. Customer-facing scripts must not reveal internal retry or information-attempt limits.

### Call Closure

Every `Call Closure` step requires the advocate to:

1. Ask whether the customer needs anything else.
2. Pause and address additional concerns.
3. Explain that the customer will be transferred to a brief survey after the call.

## Validation Checklist

Before publishing workflow data:

- Confirm every decision points to a valid step.
- Confirm the workflow cannot advance without a selected response.
- Confirm Recommended Actions identify the correct tool location.
- Confirm the Knowledge Article tile shows the correct section.
- Confirm scripts match the active step.
- Confirm scripts do not provide hints or reveal internal attempt limits.
- Confirm escalation appears only after eligibility is established.
- Confirm sensitive information is not requested or unnecessarily displayed.
- Confirm closure includes the additional-needs question and survey expectation.
- Confirm content matches the latest approved Knowledge Articles.

## Production Security

The local Admin passcode is not sufficient for production. A production Admin system requires:

- Central authentication
- Server-side Admin and Advocate roles
- Database-backed workflow storage
- Audit history
- Draft, review, approval, and published states
- Server-side validation
- Secure deployment through an approved company environment

The workflow tool is a guidance layer. Approved Knowledge Articles and operational policies remain authoritative.
