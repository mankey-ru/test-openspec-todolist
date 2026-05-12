## ADDED Requirements

### Requirement: Add List
The system SHALL provide functionality to add a new task list.

#### Scenario: User creates a new list
- **GIVEN** the multi-list UI is loaded
- **WHEN** user clicks "Add List" and provides a valid, unique name
- **THEN** system creates the list, selects it as active, and persists it

### Requirement: Remove List
The system SHALL provide functionality to remove a list and its associated tasks.

#### Scenario: User deletes a list
- **GIVEN** there are multiple lists available
- **WHEN** user clicks "Delete" on a list
- **THEN** system removes the list, and if it was active, sets another list as the active context

### Requirement: Switch List
The system SHALL display tasks exclusively for the list selected by the user.

#### Scenario: User switches contexts
- **GIVEN** "Work" and "Personal" lists exist
- **WHEN** user selects the "Work" list from the sidebar
- **THEN** system updates the main view to display only tasks from "Work"
