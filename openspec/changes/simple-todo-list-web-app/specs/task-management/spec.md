## ADDED Requirements

### Requirement: Task Creation
The system SHALL allow users to create new tasks with a text description.

#### Scenario: Successful task creation
- **WHEN** user enters a non-empty string in the input field and submits
- **THEN** system appends the new task to the task list

### Requirement: Task Completion
The system SHALL allow users to toggle the completion status of a task.

#### Scenario: Toggling a task to complete
- **WHEN** user clicks on the completion checkbox of an active task
- **THEN** system marks the task as completed and updates the visual state

### Requirement: Task Deletion
The system SHALL allow users to permanently delete a task.

#### Scenario: Deleting a task
- **WHEN** user clicks the delete button on a task
- **THEN** system removes the task from the task list
