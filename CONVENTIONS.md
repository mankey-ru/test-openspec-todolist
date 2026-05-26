# CONVENTIONS.md

## Project Conventions & Contribution Guidelines

This is a test ToDoList project developed with OpenSpec (Spec-Driven Development).

### General Conventions
- All documentation is in English.
- Use Markdown for all artifacts.
- Use kebab-case for directories and files when possible.
- Follow `.editorconfig` (the canonical source for formatting and editor settings).
- All code must be readable and maintainable.
- Prefer explicit over implicit.
- Follow language-specific community standards (TypeScript, CSS, etc.).

### Code Style
- Use consistent formatting via the root `.editorconfig` file.
- Industry-agnostic conventions live in root files.
- Tool-specific configurations go into `.continue/`, `openspec/`, or standard dotfiles.
- Use clear, concise language in documentation.
- Include examples when helpful.

### Contribution Workflow
1. Read the relevant root industry-wide files first.
2. Check `openspec/config.yaml` for ownership rules and extensions.
3. For changes to industry files (AGENTS.md, CONVENTIONS.md, etc.): edit them directly — they are the masters.

**For detailed rules about the reference-based ownership model and AI agent behavior, see `AGENTS.md`.**

### Naming & Structure
- Industry-wide / permanent information lives at the repository root.
- Feature-specific specifications live in `openspec/specs/`.

See also: `GLOSSARY.md`, `.editorconfig`.