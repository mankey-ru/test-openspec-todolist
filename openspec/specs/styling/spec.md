"# Styling

## Purpose

Defines how custom CSS styles are organized and served in the application. Custom styles live in an external stylesheet under `src/assets/` rather than being embedded inline in `index.html`.

## Requirements

### Requirement: Styles are served from an external stylesheet

The application SHALL serve all custom CSS rules from an external `src/assets/styles.css` file rather than an inline `<style>` tag in `index.html`.

#### Scenario: Styles load from external file

- **WHEN** the page loads
- **THEN** all visual styling (font, background, hover behavior) SHALL be applied via the external stylesheet, with no visible difference from the previous inline approach"