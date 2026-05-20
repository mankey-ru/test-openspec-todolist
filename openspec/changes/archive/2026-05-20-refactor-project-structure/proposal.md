## Why
The project conventions and context have been updated in `project.md`. We must refactor the repository to comply with these rules (using a `src/` directory, Tailwind CSS, Dark theme) to ensure long-term maintainability.

## What Changes
- Move `app.js` and `styles.css` into a `src/` directory.
- Update `index.html` to link to files inside `src/`.
- Replace existing custom CSS with Tailwind CSS (via CDN) styling.
- Update the UI to default to a dark theme.

## Capabilities

### New Capabilities

### Modified Capabilities
- `task-management`: The UI aesthetics and DOM classes will change due to Tailwind and Dark theme.
- `local-persistence`: Logic remains identical, but its location changes to `src/app.js`.

## Impact
- **BREAKING**: Existing folder structure changes, breaking paths if hardcoded anywhere outside root.
- Replaces vanilla custom CSS with Tailwind CSS classes.
