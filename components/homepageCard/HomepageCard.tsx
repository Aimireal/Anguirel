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
					Are you ready to whip up something delicious in the kitchen? Get
					browsing my selection of tried and tested recipes for a sweet treat
					that will satisfy any craving! Pick from classic chocolate chip
					cookies to extravagant layer cakes, you'll be sure to find something
					that will impress your taste buds. Don't wait - start baking today and
					discover the joy of creating something sweet and satisfying from
					scratch.
				</p>
			</section>
		</div>
	);
}

export default HomepageCard;
