<!-- THIS COMMENT IS NOT FOR AI
Должен содержать роли агентов, инструкции, ограничения, список разрешённых GitHub-инструментов, правила взаимодействия с OpenSpec.
-->
# AGENTS.md

## AI Agent Guidelines

This repository is a test OpenSpec-driven ToDoList application.

It is optimized for AI coding agents (Continue.dev, Cursor, Claude Code, Aider, etc.).

### Core Principles
- Follow industry-standard file locations first (AGENTS.md, CONVENTIONS.md,editorconfig, etc.).
- Treat `openspec/` as the governance and orchestration layer only.
- **Industry-wide artifacts at the repository root are the single source of truth** for agnostic content.
- All code and artifacts must be in English.
- Be precise, minimal, and follow the reference-based ownership model.

### Agent Behavior Rules
- Always respect the ownership model defined in `openspec/config.yaml`.
- When working, check root industry files first.
- Never duplicate content between root files and `openspec/`.
- Use clear references and links instead of copying content.

For tool-specific instructions, see `.continue/` (if present) and `openspec/config.yaml`.

