## ADDED Requirements

### Requirement: Save tasks to LocalStorage
The system SHALL save the current state of tasks to the browser's LocalStorage whenever a task is created, updated, or deleted.

#### Scenario: Saving on task change
- **WHEN** the task list state changes
- **THEN** system serialized the task list to JSON and saves it in LocalStorage

### Requirement: Load tasks on initialization
The system SHALL retrieve and render saved tasks from LocalStorage when the application starts.

#### Scenario: Loading tasks on reload
- **WHEN** user opens the application page
- **THEN** system successfully reads tasks from LocalStorage and displays them
