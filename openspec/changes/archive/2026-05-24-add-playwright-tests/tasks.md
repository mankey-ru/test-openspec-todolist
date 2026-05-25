## 1. Project Setup

- [x] 1.1 Initialize `package.json` in the project root
- [x] 1.2 Add `@playwright/test` and `typescript` as dev dependencies
- [x] 1.3 Add a `test` script that runs Playwright

## 2. Configuration

- [x] 2.1 Create a basic `tsconfig.json` for TypeScript configuration of test files
- [x] 2.2 Create `playwright.config.ts` using the `webServer` option to serve the static app
- [x] 2.3 Configure the server to use a local port (e.g., 8080) and point to the project root

## 3. Test Implementation

- [x] 3.1 Create `tests/` directory and `tests/todo-app.spec.ts`
- [x] 3.2 Implement "Create a new list" test
- [x] 3.3 Implement "Create a task inside a list" test
- [x] 3.4 Implement "Complete / uncomplete a task" test
- [x] 3.5 Implement "Delete a task" test
- [x] 3.6 Implement "Delete a list" test
- [x] 3.7 Implement "Switch between lists" test
- [x] 3.8 Implement "Tasks survive page reload" test
- [x] 3.9 Implement "Multiple lists persist" test

## 4. Verification

- [x] 4.1 Run `npm test` and confirm all 8 tests pass
- [x] 4.2 Verify that tests run reliably using the `webServer` configuration (not `file://`)