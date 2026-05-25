## Context

The project is a static single-file Todo application with no existing test infrastructure. Adding Playwright tests requires introducing a minimal Node.js setup (`package.json`) while preserving the "no build tools for the app itself" constraint. The chosen approach uses Playwright's built-in `webServer` option to serve the static files during test execution.

## Goals / Non-Goals

**Goals:**
- Provide reliable automated coverage for the 8 specified user flows and persistence behavior
- Use Playwright's `webServer` configuration so tests run against a proper HTTP server instead of `file://`
- Keep the testing setup minimal and non-intrusive to the existing application code
- Enable running tests via a single `npm test` command

**Non-Goals:**
- Adding tests beyond the 8 explicitly listed scenarios
- Modifying any application source code (`index.html`, `src/`)
- Introducing TypeScript to the application source code (only used for Playwright config and test files)
- Setting up CI integration or advanced reporting

## Decisions

- **Use `webServer` instead of `file://`**: Reliability and cross-browser consistency outweigh the slight increase in setup complexity. `file://` has known limitations with Playwright and stricter browser security models.
- **Include TypeScript + basic `tsconfig.json`**: Even though the app itself remains JavaScript, using TypeScript for Playwright config and tests provides better DX and is the recommended approach by Playwright. A minimal `tsconfig.json` will be added with sensible defaults for test files only.
- **Single `playwright.config.ts`**: Use TypeScript for the config file (standard Playwright practice) while keeping the application in plain JavaScript.
- **One test file initially**: All 8 tests will live in a single `tests/todo-app.spec.ts` file for simplicity. Can be split later if needed.
- **Static server choice**: Rely on Playwright's built-in server capability rather than adding an extra dependency like `serve` or `http-server`.
- **Test isolation**: Each test will start with a clean browser context. Persistence tests will explicitly verify localStorage behavior across reloads.

## Risks / Trade-offs

- **[Risk]** Introducing Node.js tooling may lower the barrier to adding more heavy tooling later → Mitigation: Clearly document in README that testing is the only Node dependency; keep application build-tool free.
- **[Risk]** Hover-based action buttons may be flaky in automated tests → Mitigation: Use `page.hover()` explicitly and consider `test.describe` with consistent viewport sizes.
- **[Risk]** localStorage persistence tests can be sensitive to timing → Mitigation: Use Playwright's `page.reload()` and wait for expected elements after reload.