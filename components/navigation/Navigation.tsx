import { Fragment } from "react";
import Link from "next/link";

interface NavbarProps {
	isLoggedIn: boolean;
}

export const Navigation: React.FC<NavbarProps> = ({ isLoggedIn }) => {
	return (
		<Fragment>
			<nav className="bg-gray-700 border-gray-200 px-2 sm:px-4 dark:bg-gray-900">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<Link href="/" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-6 mr-3 sm:h-9"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Anguirel
						</span>
					</Link>
					<div
						className="items-center justify-between w-full md:flex md:w-auto md:order-1"
						id="navbar-navigation-buttons"
					>
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<Link
								href="/"
								className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Home
							</Link>
							<Link
								href="/add-recipe"
								className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Add Recipe
							</Link>
						</ul>
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<div>
								{isLoggedIn ? (
									<button
										className="px-4 py-2 text-white bg-gray-400 rounded disabled:opacity-50"
										disabled={isLoggedIn}
									>
										Logout
									</button>
								) : (
									<button
										className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
										disabled={isLoggedIn}
									>
										Login/Signup
									</button>
								)}
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
