import cliSpinners from "cli-spinners"
import { execa } from "execa"
import { oraPromise } from "ora"

import error from "../utils/error.js"

export async function openVscode(name: string): Promise<void> {
	try {
		await oraPromise(
			execa("code", [name]),

			{
				text: "Opening VSCode...",
				successText: "VSCode opened successfully",
				spinner: cliSpinners.binary,
				color: "yellow",
			}
		)
	} catch (err) {
		error("Error while opening VSCode", err)
	}
}
