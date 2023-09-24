import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class values into a single class name string using tailwindcss utilities.
 * @param {...ClassValue[]} inputs Class values to be combined.
 * @returns {string} The combined class name string.
 * @example
 * const output = cn("text-red-500", { "bg-blue-200": false }, { "font-bold": true }, "py-2")
 * //output = "text-red-500 font-bold py-2"
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/**
 * Fetches the HTML content from a specified URL.
 * @param {string} url The URL from which to fetch HTML content.
 * @returns {Promise<string>} A Promise that resolves with the fetched HTML content as a string.
 * @example
 * const output = await getHtmlFromUrl("https://nextjs.org")
 */
export const getHtmlFromUrl = async (url: string): Promise<string> => {
	const res = await fetch(url, { cache: "no-store" })
	return await res.text()
}
