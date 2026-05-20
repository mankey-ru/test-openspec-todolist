## Why
The UI currently has some slightly verbose wording, a constrained width that doesn't utilize larger screens well, and visual clutter from action buttons that are always visible. This change polishes the user interface to make it cleaner, more modern, and better adapted to larger screens.

## What Changes
- Change the header text from "Manage your daily goals" to "Manage your goals".
- Change the task input placeholder from "What needs to be done?" to "New task name".
- Increase the maximum width of the main content card from its current value (e.g. 900px) to `1200px`.
- Add a CSS media query `@media (hover: hover)` to hide list item action buttons (edit/delete for lists, delete for tasks) by default, and only show them when hovering over the respective list item.
- **Rollback Plan**: Revert changes in `index.html` (text labels, inline styles/classes) and `src/app.js` (rendered HTML strings) to restore the previous state.
- **Exact Files Changed**:
  - `index.html`
  - `src/app.js`

## Capabilities
### New Capabilities
None.

### Modified Capabilities
- `task-management`: The task management interface rendering will change slightly (hover logic for action buttons).
- `multi-lists`: The list management interface rendering will change slightly (hover logic for action buttons).

## Impact
- Only impacts the frontend UI rendering logic and CSS.
- No data schema changes, no backend or local storage changes.
