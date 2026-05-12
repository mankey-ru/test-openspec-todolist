## Context

This project introduces a new, simple web-based todolist application to help users track tasks. The target audience needs a clean, intuitive, and accessible way to manage daily tasks without complex onboarding. The current approach uses simple HTML, vanilla CSS, and vanilla JS. Data will be stored using the browser's LocalStorage API.

## Goals / Non-Goals

**Goals:**
- Provide a responsive UI for managing tasks (add, mark complete, delete).
- Persist data locally so that reloading the page does not lose data.
- Ensure visual excellence with a modern, dynamic UI.
- Structure the application to allow easy future expansions.

**Non-Goals:**
- User authentication or multi-user support.
- Cloud syncing or backend REST API integration.
- Advanced task features like subtasks, due dates, or file attachments for the initial version.

## Decisions

- **Storage**: Use `localStorage` instead of `IndexedDB`.
  - *Rationale*: For a simple todo list, `localStorage` is extremely easy to use, synchronous, and widely supported. Data requirements are small enough that the 5MB limit is sufficient.
  - *Alternatives considered*: `IndexedDB` (too complex for this use-case), `sessionStorage` (data is lost on tab close).
- **Framework**: Use Vanilla HTML/CSS/JS.
  - *Rationale*: A simple app doesn't strictly need a heavy framework and can keep the implementation simple while maintaining performance.
  - *Alternatives considered*: React/Vue (might be overkill for a very simple todolist without complex state).

## Risks / Trade-offs

- **[Risk] Data Loss on Device Change** -> Users won't have their tasks if they switch browsers or clear cache. *Mitigation:* Clearly set expectations that this is a local-only application at the moment.
