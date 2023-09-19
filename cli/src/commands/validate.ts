import chalk from "chalk"

export function validateReady(ready: boolean): void {
	if (!ready) {
		process.exit(0)
	}
}

export function validateProjectName(name: string): void {
	if (!/^[^\\/:\*\?"<>\|]+$/.test(name)) {
		console.log(chalk.bgRed('Project name does not match regex /^[^\\/:*?"<>|]+$/' + "\n"))
		process.exit(1)
	}
}
