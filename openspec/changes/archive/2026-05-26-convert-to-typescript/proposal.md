## Why

The current project is a vanilla JavaScript application with no type safety, build process, or modern tooling. As the codebase grows, the lack of TypeScript makes refactoring, onboarding, and catching errors harder. Introducing TypeScript with a build step improves maintainability and aligns the project with modern web development practices.

## What Changes

- Add TypeScript as a development dependency
- Add to existing `tsconfig.json` new fields if needed
- Add a build script that compiles TypeScript to JavaScript in a `dist/`
- Move source files from `src/` (currently `.js`) to TypeScript (`.ts`)
- Update `index.html` to reference the compiled output when running the built version
- Add `npm run build` and `npm run dev` (or equivalent) scripts

## Capabilities

### New Capabilities
- `typescript-build`: Defines the project's TypeScript compilation, type checking, and build pipeline capability. Covers configuration, build scripts, and output structure.

### Modified Capabilities
<!-- No existing specs require requirement-level changes. -->

## Impact

- **New files**: `package.json` (if not present), `tsconfig.json` (if not present), build configuration
- **Changed files**: All `.js` files in `src/` will be converted to `.ts`
- **New dependencies**: `typescript`, possibly `@types/*` and a bundler (vite)
- **Breaking changes**: Running the app may now require a build step instead of directly opening `index.html`
- **Rollback plan**: Keep original JavaScript files or maintain a separate branch until the migration is stable