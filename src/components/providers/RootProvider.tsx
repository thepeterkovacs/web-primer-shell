import { getServerSession } from "next-auth"

import { PropsWithChildren } from "react"

import options from "@/lib/auth/options"

import DevTools from "../tools/DevTools"
import { Toaster } from "../tools/Toaster"
import QueryProvider from "./QueryProvider"
import SessionProvider from "./SessionProvider"
import ThemeProvider from "./ThemeProvider"

export default async function RootProvider({ children }: PropsWithChildren): Promise<JSX.Element> {
	const session = await getServerSession(options)

	return (
		<SessionProvider session={session}>
			<QueryProvider>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
					<Toaster />
					<DevTools />
				</ThemeProvider>
			</QueryProvider>
		</SessionProvider>
	)
}
