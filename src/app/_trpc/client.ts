import { type AppRouter } from "@/server/appRouter"
import { createTRPCReact } from "@trpc/react-query"

export const trpcClient = createTRPCReact<AppRouter>({})