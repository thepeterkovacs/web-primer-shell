import { checkIfGitExists } from "./commands/git.js"
import { askIsReady, askProjectName } from "./commands/inquirer.js"
import showTitle from "./commands/title.js"
import { validateProjectName, validateReady } from "./commands/validate.js"

await showTitle()

const ready = await askIsReady()

validateReady(ready)

const name = await askProjectName()

validateProjectName(name)

await checkIfGitExists()

process.exit(0)
