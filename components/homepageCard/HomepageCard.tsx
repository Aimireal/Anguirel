function HomepageCard() {
	return (
		<section className="pt-4 flex items-center justify-center py-8 mx-12 rounded bg-white dark:bg-gray-800">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="mx-2 text-1xl sm:text-base font-extrabold leading-9 text-white sm:leading-10">
					Used by professional and home bakers, everywhere
				</h2>
				<p className="mx-2 mt-2 text-base sm:text-sm leading-7 text-white">
					Feel confident in using this selection of tried and true recipes
				</p>
			</div>
			<div className="mx-2 mt-4 text-center sm:text-sm sm:max-w-2xl sm:grid sm:grid-cols-3 sm:gap-8">
				<div>
					<p className="text-3xl sm:text-base font-extrabold leading-none text-white">
						8
					</p>
					<p className="mt-2 text-base sm:text-sm font-medium leading-6 text-white">
						Recipes
					</p>
				</div>
				<div className="mx-4 mt-4 sm:mt-0">
					<p className="text-3xl sm:text-base font-extrabold leading-none text-white">
						4
					</p>
					<p className="mt-2 text-base sm:text-sm font-medium leading-6 text-white">
						Categories
					</p>
				</div>
				<div className="mx-4 mt-4 sm:mt-0">
					<p className="text-3xl sm:text-base font-extrabold leading-none text-white">
						1
					</p>
					<p className="mt-2 text-base sm:text-sm font-medium leading-6 text-white">
						User
					</p>
				</div>
			</div>
			<div className="flex py-4 mx-2 mt-2 w-52">
				<button
					type="button"
					className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Sign Up
				</button>
			</div>
		</section>
	);
}

export default HomepageCard;
