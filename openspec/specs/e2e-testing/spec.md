# E2E Testing

## Purpose

Defines the end-to-end testing capability for the Todo application using Playwright. The test suite covers core user flows (list and task management), hover-based actions, list switching, and localStorage persistence across reloads.

## Requirements

### Requirement: The system SHALL support automated creation of new lists via the UI
The E2E test suite SHALL verify that typing a name and clicking the add button results in the list appearing in the sidebar.

#### Scenario: Create a new list
- **WHEN** a user types a list name and clicks the add button
- **THEN** the new list appears in the sidebar

### Requirement: The system SHALL support adding tasks inside a selected list
The E2E test suite SHALL verify that selecting a list, typing a task name, and clicking add results in the task appearing in the main view.

#### Scenario: Create a task inside a list
- **WHEN** a user selects a list, types a task name, and clicks add
- **THEN** the task appears in the main task view

### Requirement: The system SHALL support toggling task completion state
The E2E test suite SHALL verify that clicking a task's checkbox toggles its visual completion state and can be toggled back.

#### Scenario: Complete and uncomplete a task
- **WHEN** a user clicks the checkbox of a task
- **THEN** the task shows a visual change indicating completion
- **AND** clicking the checkbox again removes the completion visual state

### Requirement: The system SHALL support deleting individual tasks via hover action
The E2E test suite SHALL verify that hovering a task and clicking its delete button removes the task from the list.

#### Scenario: Delete a task
- **WHEN** a user hovers over a task and clicks the delete button
- **THEN** the task disappears from the list

### Requirement: The system SHALL support deleting lists via hover action
The E2E test suite SHALL verify that hovering a list in the sidebar and clicking its delete button removes the list.

#### Scenario: Delete a list
- **WHEN** a user hovers over a list in the sidebar and clicks the delete button
- **THEN** the list is removed from the sidebar

### Requirement: The system SHALL correctly display tasks when switching between lists
The E2E test suite SHALL verify that creating two lists with different tasks and switching between them shows the correct tasks for each list.

#### Scenario: Switch between lists
- **WHEN** a user creates two lists with separate tasks and switches between them
- **THEN** the correct tasks for the selected list are displayed

### Requirement: The system SHALL persist lists and tasks across page reloads
The E2E test suite SHALL verify that adding lists and tasks, then reloading the page, restores all data from localStorage.

#### Scenario: Tasks survive page reload
- **WHEN** a user adds a list and tasks then reloads the page
- **THEN** all lists and tasks are still present

### Requirement: The system SHALL correctly persist multiple lists and their tasks
The E2E test suite SHALL verify that creating three lists with tasks and reloading restores the complete structure.

#### Scenario: Multiple lists persist
- **WHEN** a user creates three lists with tasks and reloads the page
- **THEN** all three lists and their respective tasks are restored correctly