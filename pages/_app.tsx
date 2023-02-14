import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Fragment } from "react";
import { Navigation } from "@/components/navigation/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen bg-[url('../public/background.svg')]">
			<Navigation />
			<div className="mt-4">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;

