## Context
The current UI features full-width containers up to 900px, somewhat verbose header and input placeholder text, and delete/edit buttons that are constantly visible next to every task and list item. This creates visual clutter.

## Goals / Non-Goals

**Goals:**
- Simplify text strings to be more concise.
- Increase the maximum content width to `1200px` to better utilize modern screen sizes.
- Hide inline action buttons (like delete and edit) until the user hovers over the corresponding list item.
- Ensure the hover effect only applies to devices with pointer capabilities (mouse/trackpad), meaning touch devices should still always see the buttons.

**Non-Goals:**
- Changing application logic or data structure.
- Refactoring the main JavaScript functionality.

## Decisions
- **Max-Width Modification**: Change `max-width: 900px` to `max-width: 1200px` on the main card container in `index.html`.
- **Action Button Visibility**: Use a custom CSS class (e.g. `action-btn-container`) that is hidden by default. Use a CSS media query `@media (hover: hover) { ... }` so that when the parent `.list-group-item` is hovered, the action buttons become visible. Touch devices will naturally evaluate `(hover: hover)` as false, so we will set the default display of these buttons to visible, and only hide them when hover is supported and the item is NOT hovered.
  - *Rationale*: Relying on native CSS `@media (hover: hover)` provides excellent support for differentiating touch screens from mice without messy JavaScript event listeners.

## Risks / Trade-offs
- **[Risk] Touch devices hide buttons** -> If we unconditionally hide buttons on non-hover, touch users can't delete items. *Mitigation*: The CSS logic must explicitly apply the hidden-until-hover state ONLY if `(hover: hover)` matches.
