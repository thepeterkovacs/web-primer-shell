import { PropsWithChildren } from "react"

import QueryProvider from "./QueryProvider"
import ThemeProvider from "./ThemeProvider"

export default function Providers({ children }: PropsWithChildren): JSX.Element {
	return (
		<QueryProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</QueryProvider>
	)
}
