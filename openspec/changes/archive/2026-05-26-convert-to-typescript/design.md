## Context

The project is currently a static vanilla JavaScript application consisting of `index.html` and JavaScript files under `src/`. There is no build step, no type checking, and no modern development tooling. The proposal introduces TypeScript along with a build pipeline to improve code quality and maintainability.

## Goals / Non-Goals

**Goals:**
- Introduce TypeScript for improved type safety and developer experience
- Establish a repeatable build process that compiles TypeScript to JavaScript
- Keep the final output runnable in a browser with minimal friction
- Maintain the existing application behavior and UI

**Non-Goals:**
- Introducing a full frontend framework (React, Vue, Svelte, etc.)
- Setting up advanced bundling features (code splitting, tree shaking) unless necessary
- Migrating to a monorepo or complex project structure
- Adding extensive test coverage as part of this change (separate concern)

## Decisions

- **Build tool choice**: Use `tsc` (TypeScript compiler) for simplicity, with an option to add a bundler (e.g., Vite or esbuild) later. This keeps the initial setup minimal.
- **Output directory**: Compile to `dist/` to keep source (`src/`) and build output clearly separated.
- **Entry point handling**: `index.html` will remain in the root. The build will either copy it to `dist/` or the user will run the app from root while referencing compiled JS.
- **tsconfig.json**: Use strict mode (`strict: true`) from the start to maximize type safety benefits.
- **Source file migration**: All `.js` files in `src/` will be renamed to `.ts` and gradually typed.

## Risks / Trade-offs

- **[Risk]** Developers must run a build step before seeing changes → Mitigation: Provide both `npm run build` and a watch/dev mode (`npm run dev`).
- **[Risk]** Increased complexity for new contributors → Mitigation: Clear `README` instructions and simple npm scripts.
- **[Risk]** Browser `file://` protocol may have issues with modules → Mitigation: Recommend using a local server (e.g., `serve` or VS Code Live Server) during development.