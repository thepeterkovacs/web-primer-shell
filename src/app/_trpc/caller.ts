import { appRouter } from "@/server/appRouter"
import { httpBatchLink } from "@trpc/client"

export const caller = appRouter.createCaller({
	links: [
		httpBatchLink({
			url: "http://localhost:3000/api/trpc",
		}),
	],
})
