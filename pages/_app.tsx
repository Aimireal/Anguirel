import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	const isLoggedIn = true; // ToDo: CHange when login system is complete

	return (
		<div className="min-h-screen bg-[url('../public/background.svg')]">
			<Navigation isLoggedIn={false}/>
			<div className="mt-4">
				<Component {...pageProps} />
			</div>
			<div className="mt-4">
				<Footer />
			</div>
		</div>
	);
}

export default MyApp;

