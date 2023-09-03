import { PropsWithChildren } from "react"

import DevTools from "../tools/DevTools"
import QueryProvider from "./QueryProvider"
import ThemeProvider from "./ThemeProvider"

export default function Providers({ children }: PropsWithChildren): JSX.Element {
	return (
		<QueryProvider>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				{children}
				<DevTools />
			</ThemeProvider>
		</QueryProvider>
	)
}
