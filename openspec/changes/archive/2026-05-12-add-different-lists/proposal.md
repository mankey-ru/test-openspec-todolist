## Why
The user requested the ability to organize tasks into different functional lists. Currently, all tasks exist sequentially within a single bucket. We need to implement a sidebar interface to add, switch between, rename, and remove discrete lists to allow better organization of tasks.

## What Changes
- Add a left sidebar interface with "Add List", "Rename List" (via prompt), and "Remove List" functionality.
- Update the main UI to render tasks strictly from the currently selected list.
- Handle an "empty state" when all lists are deleted by hiding the task input and showing a helpful message.
- **Rollback Plan**: To rollback, we revert `index.html` by removing the sidebar columns, and revert `src/app.js` by removing multi-list tracking to restore a single flat list schema.
- **Exact Files Changed**:
  - `index.html`
  - `src/app.js`

## Capabilities

### New Capabilities
- `multi-lists`: Functionality to create, delete, rename, and switch between different task lists via a sidebar interface.

### Modified Capabilities
- `task-management`: Modifies the requirement context because tasks must now be associated with specific lists rather than a global bucket.
- `local-persistence`: The requirement to load and save tasks changes structurally from an array of tasks to an object containing a lists array and an active list ID.

## Impact
- **BREAKING**: LocalStorage schema changes. Old single-list task data must be migrated into a "Default" list object with a unique ID upon the first load.
- Substantial HTML layout restructuring introducing a 2-column grid layout (sidebar + main content) and empty state logic.
