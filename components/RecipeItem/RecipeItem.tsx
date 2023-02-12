import { useRouter } from "next/router";

import { RecipeType } from "@/types/RecipeType";
import { Fragment } from "react";

export function RecipeItem(recipe: RecipeType) {
	const router = useRouter();
	const onNavigate = () => {
		router.push(`/${recipe.slug}`);
	};

	// Conditional rendering for recipe steps
	const hasDetails = Object.hasOwn(recipe, "details");
	const renderedDetails = () => {
		return recipe.details?.map((detail) => {
			return <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{detail.text}</p>;
		});
	};

	return (
		<div className="max-w-sm mx-auto bg-white border rounded-lg shadow dark:bg-gray-800">
			<a href="#">
				<img className="rounded-t-lg" src={recipe.image} alt={recipe.title} />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{recipe.title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{recipe.description}
				</p>
				{hasDetails === true ? null : (
					<button
						onClick={onNavigate}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Show Recipe
					</button>
				)}
				{hasDetails === true ? (
					<Fragment>
						<div>
							{renderedDetails()}
						</div>
					</Fragment>
				) : null}
			</div>
		</div>
	);
}
