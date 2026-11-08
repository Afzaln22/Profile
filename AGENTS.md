# Agent Operational Guidelines

- **Autonomous End-to-End Execution**:
  Once a user task is initiated, execute all required tasks to completion without stopping to ask for manual permission or confirmation on routine operations. Handle errors, builds, testing, and file operations end-to-end.

- **Incremental Git Push Policy**:
  - Do NOT batch all changes into one single massive commit/push at the very end.
  - Automatically commit and push work incrementally as files/features are completed.
  - If any correction, fix, or revision is made, immediately commit and push that correction as its own commit.
  - Target remote: `origin Main:main` or `origin Main`.

