# Capability: task-management

## Purpose
TBD

## Requirements

### Requirement: Task Creation
The UI SHALL allow users to create new tasks associated strictly with the currently active list.

#### Scenario: Successful task creation
- **GIVEN** the "Work" list is currently selected as active
- **WHEN** user enters a new task and submits
- **THEN** system appends the task ONLY to the "Work" list context

### Requirement: Task Completion
The UI SHALL allow users to toggle the completion status of a task.

#### Scenario: Toggling a task to complete
- **GIVEN** an active task exists
- **WHEN** user clicks on the completion checkbox
- **THEN** system marks the task as completed visually using Bootstrap utilities

### Requirement: Task Deletion
The UI SHALL allow users to permanently delete a task exclusively from the active list. The delete action SHOULD only be visible upon hovering the task item if the user is on a pointer-enabled device.

#### Scenario: Deleting a task
- **GIVEN** a task exists in the active list
- **WHEN** user clicks delete
- **THEN** system removes that task from the active list's array

#### Scenario: Hide action button until hover on pointer devices
- **GIVEN** user is on a device with a mouse/pointer
- **WHEN** the task item is not being hovered
- **THEN** the delete action is hidden

#### Scenario: Show action button on hover on pointer devices
- **GIVEN** user is on a device with a mouse/pointer
- **WHEN** the user hovers over the task item
- **THEN** the delete action is visible

#### Scenario: Always show action button on touch devices
- **GIVEN** user is on a touch-only device
- **WHEN** the task item is rendered
- **THEN** the delete action is visible by default
