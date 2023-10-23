import { z } from "zod"

const env = z.object({
	BASE_URL: z.string(),
	PS_DB_URL: z.string(),
	NEXTAUTH_URL: z.string(),
	NEXTAUTH_SECRET: z.string(),
})

env.parse(process.env)

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof env> {}
	}
}
