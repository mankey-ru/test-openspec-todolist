## Context
The application is currently a single-list application where all tasks exist inside one single global list. We need to implement a UI that supports multiple lists that a user can freely create, destroy, rename, and switch between.

## Goals / Non-Goals
**Goals**:
- Provide a sidebar on the left side of the screen displaying the user's lists.
- Allow adding, removing, and renaming lists via UI buttons.
- Renaming will be handled via a browser `prompt()` triggered by an Edit (✏️) button.
- Dynamically show tasks corresponding to the currently selected list.
- Allow the user to delete any list, including the active and last list, displaying an empty state when 0 lists exist.
- Migrate existing flat LocalStorage data silently.

**Non-Goals**:
- Changing the tech stack (must remain strict HTML/JS/CSS without build tools).
- Modifying how individual tasks operate (Add/Delete/Toggle works exactly the same but within a local context).

## Diagram
```mermaid
graph TD
    A[SideBar] -->|Select List ID| B[ActiveListId = 'uuid']
    B --> C[MainPane: Render tasks for ActiveListId]
    A -->|Add List| D[Create {id, name, tasks: []} in state]
```

## Decisions
- **Layout Structure**: Use Bootstrap grid `row` and `col` to split the screen into a sidebar (e.g. `col-md-4`) and main tasks area (`col-md-auto`).
- **LocalStorage Schema**: Change the root level storage object from an array of tasks to an object with unique IDs generated via `crypto.randomUUID()`: 
  `{ activeListId: "uuid-1", lists: [{ id: "uuid-1", name: "Default", tasks: [{id: 1, text: "task", completed: false}] }] }`.
  - *Rationale*: An array of objects with stable IDs allows lists to be renamed without migrating task data or updating active state references. The list ID will also be placed in the `title` attribute of the sidebar list elements.

## Risks / Trade-offs
- **[Risk] User deletes the final list** -> If the user deletes all lists, they have no list to add tasks to. *Mitigation*: We will detect when `activeListId` is null and hide the task input, showing a clear "Empty State" message instructing them to create a list.
