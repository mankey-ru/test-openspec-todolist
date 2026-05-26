## 1. Project Setup

- [x] 1.1 Initialize `package.json` (if not present) and add TypeScript as a dev dependency
- [x] 1.2 Add build-related scripts (`build`, `dev`/`watch`) to `package.json`
- [x] 1.3 Create or update `tsconfig.json` with strict mode enabled

## 2. Build Configuration

- [x] 2.1 Configure `tsconfig.json` to output compiled files to a `dist/` directory
- [x] 2.2 Set up the build script to run `tsc`
- [x] 2.3 Implement a watch/dev script for automatic recompilation during development

## 3. Source Migration

- [x] 3.1 Rename all `.js` files in `src/` to `.ts`
- [x] 3.2 Add appropriate type annotations and fix any type errors
- [x] 3.3 Ensure the application logic remains functionally identical after conversion

## 4. Integration & Verification

- [x] 4.1 Update `index.html` or create a build step so the compiled output can be run in the browser
- [x] 4.2 Run the build successfully with no TypeScript errors
- [x] 4.3 Verify the application works correctly after the build (visually and functionally)