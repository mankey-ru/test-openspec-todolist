## MODIFIED Requirements

### Requirement: Task Creation
The UI SHALL allow users to create new tasks with a text description, styled with a dark theme and Tailwind CSS.

#### Scenario: Successful task creation
- **WHEN** user enters a non-empty string in the input field and submits
- **THEN** system appends the new task to the task list with dark-themed styling

### Requirement: Task Completion
The UI SHALL allow users to toggle the completion status of a task using modern styling.

#### Scenario: Toggling a task to complete
- **WHEN** user clicks on the completion checkbox of an active task
- **THEN** system marks the task as completed and updates the visual state to reflect Tailwind styling

### Requirement: Task Deletion
The UI SHALL allow users to permanently delete a task using Tailwind styling.

#### Scenario: Deleting a task
- **WHEN** user clicks the delete button on a task
- **THEN** system removes the task from the task list
