import showTitle from "./commands/title.js"
import { sleep } from "./utils/standard.js"

showTitle()

await sleep(1000)

process.exit(0)
