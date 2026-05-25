## Why

The Todo app currently has no automated tests. Adding basic end-to-end coverage with Playwright increases confidence when modifying the application, catches regressions early, and documents expected behavior through executable specifications.

## What Changes

- Introduce `package.json` with Playwright and TypeScript as dev dependencies and a `test` script
- Add Playwright configuration (`playwright.config.ts`) using the built-in `webServer` option to serve the static app during tests
- Add a basic `tsconfig.json` for TypeScript configuration of test files
- Create a `tests/` directory containing 8 basic test cases covering core list and task operations plus persistence
- All tests will run against the existing `index.html` without modifying application source code

## Capabilities

### New Capabilities
- `e2e-testing`: Defines the project's automated end-to-end testing capability using Playwright, including test infrastructure, configuration, and coverage of core user flows and persistence behavior.

### Modified Capabilities
<!-- No existing specs are modified. This is a purely additive testing capability. -->

## Impact

- **New files**: `package.json`, `playwright.config.ts`, `tsconfig.json`, `tests/` directory with test files
- **New dependencies**: `@playwright/test`, `typescript` (dev only)
- **No changes** to `index.html`, `src/`, or existing application behavior
- **Rollback plan**: Delete `package.json`, `playwright.config.ts`, `tsconfig.json`, and the `tests/` directory; remove the dev dependencies
- **Note on constraints**: This change introduces Node.js tooling for testing only, while preserving the "no build tools for the app itself" rule