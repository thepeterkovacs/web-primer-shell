import inquirer from "inquirer"

export async function askIsReady(): Promise<boolean> {
	const answer: { ready: boolean } = await inquirer.prompt([
		{
			name: "ready",
			type: "confirm",
			message: "Ready to clone Web Primer Shell from GitHub?",
		},
	])

	return answer.ready
}

export async function askProjectName(): Promise<string> {
	const answer: { name: string } = await inquirer.prompt([
		{
			name: "name",
			type: "input",
			message: "What is the name of your project?",
		},
	])

	return answer.name
}
