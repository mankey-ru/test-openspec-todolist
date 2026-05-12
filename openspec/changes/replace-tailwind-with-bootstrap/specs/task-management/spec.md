## MODIFIED Requirements

### Requirement: Task Creation
The UI SHALL allow users to create new tasks styled via Bootstrap components.

#### Scenario: Successful task creation
- **GIVEN** the application is loaded with Bootstrap styling
- **WHEN** user enters a non-empty string in the input field and submits
- **THEN** system appends the new task with Bootstrap classes

### Requirement: Task Completion
The UI SHALL allow users to toggle the completion status of a task.

#### Scenario: Toggling a task to complete
- **GIVEN** an active task exists
- **WHEN** user clicks on the completion checkbox
- **THEN** system marks the task as completed visually using Bootstrap utilities

### Requirement: Task Deletion
The UI SHALL allow users to permanently delete a task using Bootstrap styling.

#### Scenario: Deleting a task
- **GIVEN** an active task exists
- **WHEN** user clicks the delete button on a task
- **THEN** system removes the task from the task list
