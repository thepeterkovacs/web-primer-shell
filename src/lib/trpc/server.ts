import { appRouter } from "@/server/appRouter"
import { httpBatchLink } from "@trpc/client"

export const trpcServer = appRouter.createCaller({
	links: [
		httpBatchLink({
			url: `${process.env.BASE_URL}/api/trpc`,
		}),
	],
})
