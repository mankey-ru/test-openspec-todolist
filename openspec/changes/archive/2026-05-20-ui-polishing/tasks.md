## 1. UI Text Updates

- [x] 1.1 Change header text in `index.html` from "Manage your daily goals" to "Manage your goals"
- [x] 1.2 Change task input placeholder in `index.html` from "What needs to be done?" to "New task name"

## 2. Layout Updates

- [x] 2.1 Update max-width of the main card container in `index.html` from `900px` to `1200px`

## 3. Hover Styles (CSS)

- [x] 3.1 Add a CSS class `.action-btn-container` to the `<style>` block in `index.html`
- [x] 3.2 Add a media query `@media (hover: hover)` targeting `.action-btn-container` inside `.list-group-item` to hide it by default and show it on hover (`.list-group-item:hover .action-btn-container { opacity: 1; pointer-events: auto; }` vs `opacity: 0; pointer-events: none;`)

## 4. Apply Hover Classes (JS Rendering)

- [x] 4.1 Update `renderLists()` in `src/app.js` to add the `action-btn-container` class to the `actionsDiv` that wraps the edit and delete buttons
- [x] 4.2 Update `renderTasks()` in `src/app.js` to add the `action-btn-container` class to the task `deleteBtn` element
