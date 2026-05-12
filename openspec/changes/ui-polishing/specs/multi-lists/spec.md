## MODIFIED Requirements

### Requirement: Remove List
The system SHALL provide functionality to remove a list and its associated tasks. The action buttons SHOULD only be visible upon hovering the list item if the user is on a pointer-enabled device.

#### Scenario: User deletes a list
- **GIVEN** there are multiple lists available
- **WHEN** user clicks "Delete" on a list
- **THEN** system removes the list, and if it was active, sets another list as the active context

#### Scenario: Hide action buttons until hover on pointer devices
- **GIVEN** user is on a device with a mouse/pointer
- **WHEN** the list item is not being hovered
- **THEN** the action buttons (edit/delete) are hidden

#### Scenario: Show action buttons on hover on pointer devices
- **GIVEN** user is on a device with a mouse/pointer
- **WHEN** the user hovers over the list item
- **THEN** the action buttons (edit/delete) are visible

#### Scenario: Always show action buttons on touch devices
- **GIVEN** user is on a touch-only device
- **WHEN** the list item is rendered
- **THEN** the action buttons (edit/delete) are visible by default
