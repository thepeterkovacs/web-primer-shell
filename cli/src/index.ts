#!/usr/bin/env node

import { checkIfGitExists, cloneRepository } from "./commands/git.js"
import { askIsReady, askProjectName } from "./commands/inquirer.js"
import showTitle from "./commands/title.js"
import { validateProjectName, validateReady } from "./commands/validate.js"
import { startVscode } from "./commands/vscode.js"

await showTitle()

const ready = await askIsReady()

validateReady(ready)

const name = await askProjectName()

validateProjectName(name)

await checkIfGitExists()

await cloneRepository(name)

await startVscode(name)

process.exit(0)
