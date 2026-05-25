# AGENTS.md

## AI Agent Guidelines

This repository is a test OpenSpec-driven ToDoList application.

It is optimized for AI coding agents (Continue.dev, Cursor, Claude Code, Aider, etc.).

### Core Principles
- Follow industry-standard file locations first (AGENTS.md, CONVENTIONS.md, CODE_STYLE.md, etc.).
- Treat `openspec/` as the governance and orchestration layer only.
- Industry-wide artifacts are the single source of truth for agnostic content.
- All code and artifacts must be in English.
- Be precise, minimal, and spec-driven where possible.

### Agent Behavior Rules
- Always respect the ownership model defined in `openspec/config.yaml`.
- When editing, check root industry files first, then OpenSpec extensions.
- Never duplicate content between root files and `openspec/`.
- Use clear references and links instead of copying content.

For tool-specific instructions, see `.continue/` and `openspec/specs/` (if present).