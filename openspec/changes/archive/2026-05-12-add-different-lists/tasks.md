## 1. LocalStorage Schema Migration
- [x] 1.1 Update `src/app.js` internal state variables to an array `lists = []` and string `activeListId = null`
- [x] 1.2 Modify `loadTasks()` to parse legacy flat array data into `{ activeListId: "uuid", lists: [{ id: "uuid", name: "Default", tasks: legacyTasks }] }` automatically, using `crypto.randomUUID()`
- [x] 1.3 Modify `saveTasks()` to write `{ activeListId, lists }` to `localStorage`

## 2. Refactoring HTML Layout
- [x] 2.1 Refactor `index.html` structure to include a grid: left column for the Sidebar, right column for the Task View
- [x] 2.2 Construct the Sidebar HTML layout containing a text input, "Add List" button, and an empty list container `<ul id="lists-container">`
- [x] 2.3 Add a "Zero State" container to the Task View that shows when no lists exist, and hide the task input/list when active.

## 3. Lists Logic Structure
- [x] 3.1 Implement `addList(name)` logic in `src/app.js` to push a new `{ id, name, tasks: [] }` object and set it as active
- [x] 3.2 Implement `switchList(id)` logic to update `activeListId` and re-render both panes
- [x] 3.3 Implement `removeList(id)` logic to delete lists. If active list is deleted, fall back to `lists[0].id` or `null` if empty.
- [x] 3.4 Implement `renameList(id)` logic that prompts the user for a new name via `prompt()`
- [x] 3.5 Implement `renderLists()` to populate the sidebar dynamically, placing the ID in the `title` attribute, highlighting the active list, and rendering Edit/Delete buttons.

## 4. Connecting Tasks to Active Context
- [x] 4.1 Update DOM logic in `src/app.js` (`addTask`, `toggleTask`, `deleteTask`, `renderTasks`) to operate strictly upon the `tasks` array of the active list (`lists.find(l => l.id === activeListId)`).
- [x] 4.2 Update `renderTasks()` to toggle the visibility of the "Zero State" UI vs the Task Input UI based on whether `activeListId` is null.
