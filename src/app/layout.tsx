import { ReactNode } from "react"

import "@/styles/globals.css"

import * as fonts from "@/lib/assets/fonts"

import Providers from "@/components/providers/Providers"

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body className={fonts.roboto.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
