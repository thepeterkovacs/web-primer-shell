import { PropsWithChildren } from "react"

import QueryProvider from "./QueryProvider"

export default function Providers({ children }: PropsWithChildren): JSX.Element {
	return <QueryProvider>{children}</QueryProvider>
}
