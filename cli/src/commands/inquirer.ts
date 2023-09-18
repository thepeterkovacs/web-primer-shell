import inquirer from "inquirer"

export async function askIsReady() {
	return await inquirer.prompt([
		{
			name: "ready",
			type: "confirm",
			message: "Ready to clone Web Primer Shell from GitHub?",
		},
	])
}

export async function askProjectName() {
	return await inquirer.prompt([
		{
			name: "name",
			type: "input",
			message: "What is the name of your project?",
		},
	])
}
