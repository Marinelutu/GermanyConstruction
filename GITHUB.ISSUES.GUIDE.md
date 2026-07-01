# GitHub Issues & Milestone Management Guide for AI Dev Agents

This guide defines the standard operating procedures for managing GitHub Issues and Milestones. As an AI development agent, you must follow these rules strictly to ensure that progress is transparent, organized, and properly aligned with project goals.

---

## 1. Core Principles
* **Single Source of Truth**: GitHub issues are the absolute source of truth for work items. If it is not in an issue, it doesn't exist.
* **Proactive Updates**: Update issues *before*, *during*, and *after* performing work.
* **Milestone Alignment**: Every issue must belong to a milestone to track release goals.

---

## 2. Workflow Integration

### Phase 1: Task Initialization (Before Writing Code)
1. **Find or Create the Issue**:
   * Search existing issues to see if a ticket already exists for the task.
   * If no issue exists, create a new one using the standard template below.
2. **Assign the Issue**:
   * Assign the issue to yourself (or the active developer/agent).
3. **Associate Milestone**:
   * Ensure the issue is linked to the active milestone.
4. **Transition State**:
   * Add a comment to the issue stating: *"Starting work on this task. Target file(s)/scope: [List proposed files/modules]."*

### Phase 2: Implementation & Progress (During Work)
1. **Incremental Comments**:
   * If a task takes multiple sessions or is complex, post updates on progress.
   * Format: *"Status Update: Completed layout styling. Next step: Hooking up APIs."*
2. **Blockers & Divergences**:
   * If you encounter an unexpected issue, a bug, or require design clarification, document it immediately as a comment in the issue and ask the user.
3. **Commit Association**:
   * Reference the issue number in all commit messages (e.g., `feat: implement login page (#12)`).

### Phase 3: Resolution & Verification (After Completion)
1. **Provide a Walkthrough**:
   * Post a final summary of changes, listing:
     * Completed files/modules.
     * Verification/test results.
2. **Close the Issue**:
   * Close the issue automatically via commit messages (e.g. `closes #12` or `fixes #12` in the merge commit / final commit) or manually through the API/MCP tool.
3. **Verify Milestone Progress**:
   * Check the status of the associated milestone to verify if all tasks for the milestone are complete.

---

## 3. Issue Templates (Markdown Structures)
Issue templates are the markdown layouts used for the **body description** of the issue. They ensure that we capture all necessary context consistently when creating new issues.

### Feature / Task Template
```markdown
## Description
<!-- Describe what needs to be built and why -->

## Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2

## Implementation Plan Outline
- [ ] Action item 1
- [ ] Action item 2
```

### Bug Template
```markdown
## Description of Bug
<!-- Describe the current vs expected behavior -->

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Root Cause Analysis (To be filled by agent)
<!-- Explain why the issue occurred -->

## Resolution Checklist
- [ ] Fix identified issue
- [ ] Verify fix locally
```

---

## 4. Issue Labels (Metadata Tags)
Labels are metadata tags assigned to issues to help categorize, filter, and organize them on GitHub. Always apply the most relevant labels when creating or updating an issue:

* **`bug`**: Something isn't working as expected.
* **`enhancement`**: New features or design updates.
* **`documentation`**: Improvements or additions to documentation/guidelines.
* **`chore`**: Technical debt, refactoring, dependencies, or repository maintenance.
* **`blocker`**: Issues that prevent progress on other tasks.

---

## 5. MCP Tools & API Integration Guide (For AI Agents)
When using the GitHub MCP server, execute the following sequences:

* **To check for existing issues**: Use `search_issues` or `list_issues` with query filters.
* **To create issues**: Use `issue_write` (or equivalent tool) with a clear title, structured markdown template body, and appropriate labels/milestones.
* **To update status**: Use `add_issue_comment` to document progress or findings.
* **To link milestones**: When creating or updating an issue, ensure the `milestone` field/parameter is populated with the correct milestone number or ID.

