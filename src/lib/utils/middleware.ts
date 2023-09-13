import { NextMiddleware, NextResponse } from "next/server"

type Middleware = (middleware: NextMiddleware) => NextMiddleware

/**
 * Chains an array of middleware functions together and returns a composed middleware.
 * @param {Middleware[]} functions Array of middleware functions to be chained.
 * @param {number} i Index of the current middleware being processed.
 * @returns {NextMiddleware} The composed middleware function.
 * @example
 * const output = chainMiddlewares([auth, i18n])
 */
export default function chainMiddlewares(functions: Middleware[], i: number = 0): NextMiddleware {
	const current = functions[i]

	if (current) {
		return current(chainMiddlewares(functions, i + 1)) as NextMiddleware
	}

	return () => NextResponse.next()
}
