# Cash App Advocate Workflow Assistant

A browser-based decision-support tool that guides advocates from customer verification through investigation, resolution, documentation, and call closure.

The application is a static single-page app built with HTML, CSS, and vanilla JavaScript. It can be opened locally or deployed to a static host such as GitHub Pages.

## Current Features

- Conditional Line of Business, channel, category, scenario, and sub-scenario intake
- Workflow lock until **Load Workflow** is selected
- Shared Tap to Confirm, PII, and IDV verification flow
- Decision-based navigation with no generic Next Step bypass
- Step-aware recommended actions with exact tool navigation
- Step-aware Knowledge Article sections
- Contextual Quick Text suggestions
- Escalation tiles shown only after applicable probing outcomes
- Mandatory call closing and post-call survey language
- Previous step, restart, and resolution controls
- Searchable Knowledge Hub
- Browser-local user profile and avatar initials
- Passcode-protected Admin console
- Workflow add, edit, duplicate, delete, import, and export functions

## Included Workflows

1. Account Access Recovery
2. Missing Direct Deposit
3. P2P Misdirected Payment
4. Unauthorized Cash Card Transaction
5. Account Takeover

The P2P Misdirected Payment workflow contains the most detailed implementation, including sender and recipient paths, payment status, old accounts, alias comparison, reimbursement review, escalation eligibility, and documentation.

> The official Missing Direct Deposit process article was not included with the project sources. Its current guidance is marked as scope-based and pending validation against an approved Knowledge Article.

## Running the Tool

Open [index.html](./index.html) in a modern browser.

No installation, build process, backend, or development server is currently required.

Keep the following files and folders together:

```text
Cash App Workflow Tool/
|-- index.html
|-- styles.css
|-- app.js
|-- README.md
`-- data/
    |-- access-config.js
    |-- misdirected-payment-workflow.js
    `-- workflow-data.js
```

## Using a Workflow

1. Select an Issue Category.
2. Select an available Scenario.
3. Select the appropriate Sub-Scenario.
4. Press **Load Workflow**.
5. Complete the shared verification flow.
6. Select a response to each probing question.
7. Follow the step-aware Recommended Action, Knowledge Article, tools, and script guidance.
8. Complete documentation and the required call closing.
9. Mark the case as resolved during Call Closure.

Changing an intake selection relocks the workflow. The advocate must press **Load Workflow** again to prevent a previously loaded process from being used with a new scenario.

## Resource Tiles

### Recommended Action

Shows:

- The tool or system to open
- The exact area, status, field, or graph to inspect
- Ordered advocate actions for the active step

### Knowledge Base Articles

Shows only the Knowledge Article and section relevant to the active step. **View More Articles** opens the Knowledge Hub using the closest available article or category filter.

### Escalation

Hidden unless the active path has reached a valid escalation condition. For example, a Misdirected Payment escalation appears only after probing confirms reimbursement-review eligibility, a truly misdirected payment, or an eligible payment to the official verified Cash App account.

### Approved Script / Verbiage

Shows the approved step script and, when available, one explicitly mapped Quick Text. Suggestions use exact workflow-step matching rather than broad keyword matching.

Customer-facing scripts must not reveal internal retry or information-attempt limits. Those limits belong only in internal advocate actions and decision logic.

## Required Call Closing

Every `Call Closure` step automatically requires the advocate to:

1. Ask whether the customer needs help with anything else.
2. Pause and address any additional concern.
3. Inform the customer that they will be transferred to a brief survey after the call.

Quick Text suggestions are suppressed during Call Closure so they do not conflict with the required closing.

## User Profile

Select the profile in the top-right corner to change the displayed name and role.

The profile is stored in browser `localStorage`. A static website cannot securely read the Windows or browser account name. A future authenticated version can populate this information from the signed-in user.

## Admin Console

Select **Admin** in the left navigation and enter the temporary MVP passcode:

```text
Admin2026!
```

Admin access lasts only for the current browser-tab session. Use **Lock Admin** to remove access immediately.

Administrators can:

- Create workflows
- Edit workflow metadata
- Add and remove steps
- Edit actions, tools, scripts, and decision options
- Duplicate or delete workflows
- Import workflow data from JSON
- Export the complete workflow dataset to JSON
- Reset browser-local changes

### Decision Option Format

Admin decision options use:

```text
Button label => next step index
```

Example:

```text
Eligible for escalation => 6
Not eligible => 8
```

Step indexes are zero-based within the issue-specific workflow. Test every branch after changing step order or decision targets.

## Data Storage

### Permanent Source Files

- `app.js` contains application behavior, shared verification, the fallback data seed, Quick Text mappings, and step-aware resource guidance.
- `data/misdirected-payment-workflow.js` contains the detailed Misdirected Payment workflow.
- `data/workflow-data.js` is the external Phase 2 data hook.
- `data/access-config.js` contains the temporary Admin passcode hash.

### Browser-Local Changes

Admin edits are saved in browser `localStorage`. They are available only in that browser profile and are not automatically written back to the project files.

To move Admin changes to another computer or browser:

1. Open Admin.
2. Select **Export JSON**.
3. Move the exported JSON file to the target environment.
4. Open Admin on the target browser.
5. Select **Import JSON**.

## Sharing

### ZIP or OneDrive

Share the entire project folder, not only `index.html`. The CSS, JavaScript, and `data` folder are required.

### GitHub Pages

Upload the complete folder contents to a repository, then enable GitHub Pages for the repository branch and root directory.

Before publishing, confirm that the Knowledge Article, script, and Quick Text content is approved for the intended audience and hosting location.

## Security Limitations

The current Admin passcode is a client-side MVP access gate. It prevents ordinary users from opening the Admin interface through the application, but it is not tamper-proof security.

Because the application has no backend:

- Users with file or developer-tool access can inspect client-side code.
- There is no centrally managed user account or role.
- Admin edits are not centrally synchronized.
- The passcode hash is distributed with the static files.

Production-grade access control requires:

- User authentication
- Server-side authorization
- Admin and Advocate roles
- Central database storage
- Audit history
- Draft, review, approval, and published workflow states
- Server-side validation of workflow changes

## Recommended Phase 2 Backend

A future hosted version should separate:

```text
Frontend
|-- Advocate workflow player
|-- Knowledge Hub
`-- Admin workflow builder

Backend
|-- Authentication and roles
|-- Workflow API
|-- Knowledge Article and Quick Text API
|-- Versioning and approval history
`-- Audit logs

Database
|-- Workflows
|-- Steps and decision options
|-- Knowledge references
|-- Quick Text mappings
|-- Published versions
`-- User roles
```

## Validation Checklist

Before publishing a workflow:

- Confirm every decision option points to a valid step.
- Confirm the workflow cannot advance without a selected response.
- Confirm Recommended Actions identify the correct tool location.
- Confirm the Knowledge Article tile shows the correct section.
- Confirm scripts match the active process step.
- Confirm scripts do not provide clues or expose internal attempt limits.
- Confirm escalation appears only after eligibility is established.
- Confirm sensitive information is not unnecessarily displayed or documented.
- Confirm the required closing and survey expectation appear.
- Confirm all content matches the latest approved Knowledge Articles.

## Important

This tool is a workflow-guidance layer. Approved Knowledge Articles and operational policies remain the authoritative source.
