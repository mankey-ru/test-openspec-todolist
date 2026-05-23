## Context

Currently, `index.html` contains a `<style>` tag with CSS rules for the body font, background color, and action button hover behavior. The project constraint states all source files must live under `src/`, but these styles are embedded directly in the HTML.

## Goals / Non-Goals

**Goals:**
- Extract inline `<style>` content into a dedicated `src/assets/styles.css` file
- Reference the new CSS file via `<link>` in `index.html`
- Preserve all existing visual behavior exactly

**Non-Goals:**
- Refactoring or rewriting any CSS rules
- Adding new styles or removing existing ones
- Creating a build pipeline or CSS preprocessor

## Decisions

- **File location**: `src/assets/styles.css` — follows the project convention of keeping source files under `src/`, and `assets/` is the natural home for static resources like CSS
- **Single file**: One `styles.css` file rather than splitting into multiple files. The current style block is small; premature splitting adds complexity without benefit
- **Link placement**: The `<link>` tag goes right after the Bootstrap CDN `<link>` in `<head>`, ensuring Bootstrap loads first and custom overrides apply correctly

## Risks / Trade-offs

- **Cache invalidation**: Browsers may cache the old CSS if no cache-busting is used. Mitigation: use a query string version (`?v=1`) on the `<link>` href, or rely on the fact this is a simple local app where cache is not a major concern
- **Broken styles if file not found**: If `src/assets/styles.css` fails to load (404), styles will be lost. Mitigation: the file is co-located in the same repo, so this is only a risk during development if the file is accidentally deleted