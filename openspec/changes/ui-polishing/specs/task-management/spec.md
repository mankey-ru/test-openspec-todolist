## MODIFIED Requirements

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
