"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"

const options = {
	numberOfSlides: 5,
	intervalInMs: 3000,
}

interface Props {
	params: {
		number: string
	}
}

export default function Slide({ params }: Props) {
	const { number } = params

	const currentNumber = parseInt(number)

	const router = useRouter()

	const nextNumber = currentNumber == options.numberOfSlides ? 1 : currentNumber + 1
	const previousNumber = currentNumber == 1 ? options.numberOfSlides : currentNumber - 1

	useEffect(() => {
		const handleRightArrow = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				router.push(`/templates/slide/${nextNumber}`)
			}
		}

		const handleLeftArrow = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				router.push(`/templates/slide/${previousNumber}`)
			}
		}

		document.addEventListener("keydown", handleRightArrow)
		document.addEventListener("keydown", handleLeftArrow)

		return () => {
			document.removeEventListener("keydown", handleRightArrow)
			document.removeEventListener("keydown", handleLeftArrow)
		}
	}, [])

	useEffect(() => {
		const intervalId = setInterval(
			() => router.push(`/templates/slide/${nextNumber}`),
			options.intervalInMs
		)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<main className="flex h-screen justify-center items-center">
			<h1 className="text-4xl">slide number {currentNumber}</h1>
		</main>
	)
}
