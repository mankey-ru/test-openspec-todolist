# Capability: local-persistence

## Purpose
TBD

## Requirements

### Requirement: Object-based Schema
The system SHALL store lists and their associated tasks using an object mapping strings to arrays.

#### Scenario: Database schema changes
- **GIVEN** tasks state needs to be saved
- **WHEN** application state changes
- **THEN** it is serialized as a dictionary of list names mapping to arrays of tasks

### Requirement: Automatic schema migration
The system SHALL gracefully migrate old flat array data to the new schema format.

#### Scenario: Loading legacy data
- **GIVEN** the application starts with legacy `tasks = [...]` in LocalStorage
- **WHEN** initialization module executes
- **THEN** the system converts the loaded data into `{ "Default": [...] }` and applies formatting
