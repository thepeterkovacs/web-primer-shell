import cliSpinners from "cli-spinners"
import { execa } from "execa"
import { oraPromise } from "ora"

import error from "../utils/error.js"

export async function checkIfGitExists(): Promise<void> {
	try {
		await execa("git", ["--version"])
	} catch (err) {
		error("Git is not installed", err)
	}
}

export async function cloneRepository(name: string): Promise<void> {
	try {
		await oraPromise(
			execa("git", ["clone", "https://github.com/thepeterkovacs/web-primer-shell.git", name]),
			{
				text: "Cloning repository...",
				successText: "Repository cloned successfully",
				spinner: cliSpinners.binary,
				color: "yellow",
			}
		)
	} catch (err) {
		error("Error while cloning repository", err)
	}
}
