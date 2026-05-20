## Why
The user specifically requested to replace Tailwind CSS with Bootstrap CSS, migrating our UI styling framework. This solves the need to move away from Tailwind to Bootstrap as per manual user override, even though it breaks the tech stack constraint of "Tailwind CSS only via CDN".

## What Changes
- Replace Tailwind CSS CDN script tag with Bootstrap CSS CDN link.
- Update UI classes across the HTML and JS to utilize Bootstrap utility classes and components instead of Tailwind.
- **Rollback Plan**: If Bootstrap is unsatisfactory or errors occur, we will revert `index.html` and `src/app.js` to their previous state to forcefully restore Tailwind styling.
- **Exact files changed**:
  - `index.html`
  - `src/app.js`

## Capabilities

### New Capabilities

### Modified Capabilities
- `task-management`: The visual rendering of the tasks and overall layout will structurally change to use Bootstrap classes.

## Impact
- **BREAKING**: Replaces the entire visual paradigm and utility class system from Tailwind to Bootstrap.
