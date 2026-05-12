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

### Requirement: Task Deletion
The UI SHALL allow users to permanently delete a task exclusively from the active list.

#### Scenario: Deleting a task
- **GIVEN** a task exists in the active list
- **WHEN** user clicks delete
- **THEN** system removes that task from the active list's array
