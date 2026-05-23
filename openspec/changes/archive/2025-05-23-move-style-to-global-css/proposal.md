## Why

The `<style>` tag in `index.html` mixes CSS rules with the HTML structure, making it harder to maintain styles as the project grows. Moving styles to a dedicated CSS file in `src/assets/` separates concerns, improves readability, and follows the established constraint that all source files belong under `src/`.

## What Changes

- Extract the `<style>` block from `index.html` into a new `src/assets/styles.css` file
- Add a `<link>` tag in `index.html` referencing the new stylesheet
- Remove the inline `<style>` tag from `index.html`

## Capabilities

### New Capabilities
<!-- No new capabilities introduced — this is purely a structural refactor. -->

### Modified Capabilities
<!-- No spec-level requirement changes. Existing behavior is preserved exactly. -->

## Impact

- **Affected files**: `index.html` (remove `<style>`, add `<link>`), new file `src/assets/styles.css`
- **No behavior change**: All styles remain identical; only the location changes
- **No dependency or API changes**
- **Rollback**: Revert to the previous `index.html` with the inline `<style>` block and delete `src/assets/styles.css`