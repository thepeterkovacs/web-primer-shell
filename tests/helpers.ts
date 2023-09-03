import { expect, test } from "@playwright/test"

export type ApiTestCase = {
	title?: string
	request: {
		method: "delete" | "get" | "patch" | "post" | "put"
		url: string
		options?: {
			data?: any
			headers?: { [key: string]: string }
			params?: { [key: string]: string | number | boolean }
			timeout?: number
		}
	}
	response: {
		status: number
		body?: {
			[key: string]: any
		}
	}
}

export function API_TEST_HELPER(
	title: string,
	testCases: ApiTestCase[],
	beforeEach?: Function,
	afterEach?: Function
) {
	test.describe.parallel(title, () => {
		if (beforeEach) {
			test.beforeEach(({}) => {
				beforeEach()
			})
		}

		if (afterEach) {
			test.afterEach(({}) => {
				afterEach()
			})
		}

		testCases.map((testCase) => {
			const { title, request, response } = testCase
			const { method, url, options } = request
			const { status, body } = response

			test(title ?? `${method}__${url}`, async ({ request }) => {
				const response = await request[method](url, options)

				if (status) {
					expect(response.status()).toBe(status)
				}

				if (body) {
					expect(JSON.parse(await response.text())).toMatchObject(body)
				}
			})
		})
	})
}
