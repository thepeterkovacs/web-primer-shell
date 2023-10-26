import { type AppRouter } from "@/server/api/appRouter"
import { appRouter } from "@/server/api/appRouter"
import { httpBatchLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"

export const trpcClient = createTRPCReact<AppRouter>({})

export const trpcServer = appRouter.createCaller({
	links: [
		httpBatchLink({
			url: `${process.env.BASE_URL}/api/trpc`,
		}),
	],
})
