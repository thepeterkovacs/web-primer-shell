import { execa } from "execa"

import error from "../utils/error.js"

export async function checkIfGitExists(): Promise<void> {
	try {
		await execa("git", ["--version"])
	} catch (err) {
		error("Git is not installed", err)
	}
}
