function HomepageCard() {
	return (
		<div>
			<section className="pt-4 py-4 mx-12 flex items-center justify-center rounded dark:bg-gray-800">
				<div className="lg:w-1/2 mt-4 mx-6 mb-6 lg:mb-0 bg-white dark:bg-gray-800">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
						Anguirel - Bake with confidence
					</h1>
					<div className="h-1 w-20 bg-indigo-500 rounded"></div>
				</div>
				<p className="lg:w-1/2 mx-8 leading-relaxed text-gray-400 text-opacity-90">
					Browse my collection of tested recipes and whip up a delicious treat
					in your kitchen. From chocolate chip cookies to extravagant layer
					cakes, you'll find something to satisfy your cravings. Start baking
					today and experience the joy of creating a sweet and satisfying
					masterpiece from scratch.
				</p>
			</section>
		</div>
	);
}

export default HomepageCard;
