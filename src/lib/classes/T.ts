export default class T {
	private days: number
	private hours: number
	private minutes: number
	private seconds: number
	private milliseconds: number

	constructor() {
		this.days = 0
		this.hours = 0
		this.minutes = 0
		this.seconds = 0
		this.milliseconds = 0
	}

	h(hours: number): T {
		this.hours = hours
		return this
	}

	m(minutes: number): T {
		this.minutes = minutes
		return this
	}

	s(seconds: number): T {
		this.seconds = seconds
		return this
	}

	ms(milliseconds: number): T {
		this.milliseconds = milliseconds
		return this
	}

	toD(): number {
		return (
			this.days +
			this.hours / 24 +
			this.minutes / 60 / 24 +
			this.seconds / 60 / 60 / 24 +
			this.milliseconds / 1000 / 60 / 60 / 24
		)
	}

	toH(): number {
		return (
			this.days * 24 +
			this.hours +
			this.minutes / 60 +
			this.seconds / 60 / 60 +
			this.milliseconds / 1000 / 60 / 60
		)
	}

	toM(): number {
		return (
			this.days * 24 * 60 +
			this.hours * 60 +
			this.minutes +
			this.seconds / 60 +
			this.milliseconds / 1000 / 60
		)
	}

	toS(): number {
		return (
			this.days * 24 * 60 * 60 +
			this.hours * 60 * 60 +
			this.minutes * 60 +
			this.seconds +
			this.milliseconds / 1000
		)
	}

	toMs(): number {
		return (
			this.days * 24 * 60 * 60 * 1000 +
			this.hours * 60 * 60 * 1000 +
			this.minutes * 60 * 1000 +
			this.seconds * 1000 +
			this.milliseconds
		)
	}
}
