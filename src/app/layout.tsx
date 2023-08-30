import { ReactNode } from "react"

import "@/styles/globals.css"

import Providers from "@/components/providers/Providers"

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
