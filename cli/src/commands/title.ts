import chalk from "chalk"
import figlet from "figlet"
import gradient from "gradient-string"

export default async function showTitle(): Promise<void> {
	return new Promise<void>(function (resolve) {
		figlet.text("Web Primer Shell", { font: "Doom" }, function (err, data) {
			if (err) {
				console.log(chalk.bgRed("Error while initializing"))
				console.log(chalk.red(err + "\n"))

				process.exit(1)
			}

			console.log(gradient.retro(data))

			return resolve()
		})
	})
}
