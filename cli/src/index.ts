#!/usr/bin/env node
import { removeUnnecessaryFiles } from "./commands/files.js"
import { checkIfGitExists, cloneRepository, removeGitDirectory } from "./commands/git.js"
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

await removeGitDirectory(name)

await removeUnnecessaryFiles(name)

await startVscode(name)

process.exit(0)
