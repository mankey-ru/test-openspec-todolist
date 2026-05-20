## Context
The project conventions enforce that all source files be contained in `src/`. The frontend must use Tailwind CSS via CDN and default to a dark theme. Currently, the app lives in the root directory with vanilla CSS.

## Goals / Non-Goals

**Goals:**
- Move source files to `src/`.
- Replace `styles.css` styling with Tailwind CSS utility classes.
- Make the default theme dark.
- Update `index.html` script and link tags.

**Non-Goals:**
- Changing current Javascript functionality (task loading, adding, toggling, removing).
- Adding complex build processes (must remain zero-build).

## Decisions
- **Styling**: Remove the need for `styles.css` completely and rely 100% on Tailwind CSS CDN.
  - *Rationale*: Tailwind handles all required styling for a simple dark mode todo list.
- **Dark Theme**: Default to dark theme layout using Tailwind's core utility classes.
  - *Rationale*: Meets the newly requested project rule natively.

## Risks / Trade-offs
- **[Risk] Path Breakage** -> Since files are moving to `src/`, `index.html` references will break if not updated. *Mitigation*: Update paths in `<script>` and `<link>` tags.
