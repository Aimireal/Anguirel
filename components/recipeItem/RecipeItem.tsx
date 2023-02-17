import { useRouter } from "next/router";
import { RecipeType } from "@/types/RecipeType";
import { Fragment } from "react";
import { IngredientsTable } from "../ingredientsTable/IngredientsTable";
import { IngredientsType } from "@/types/IngredientsType";

function RecipeItem(recipe: RecipeType) {
	const router = useRouter();
	const onNavigate = () => {
		router.push(`/${recipe.slug}`);
	};

	// Conditional rendering for recipe steps
	const hasDetails = Object.hasOwn(recipe, "details");
	const renderedDetails = () => {
		return recipe.details?.map((detail) => {
			return (
				<Fragment key={detail.id}>
					<label className="mx-4 uppercase tracking-wide text-gray-400 text-xs font-bold">
						Step: {detail.id + 1}
					</label>
					<p className="mx-4 mb-3 font-normal text-gray-500 dark:text-gray-400">
						{detail.text}
					</p>
				</Fragment>
			);
		});
	};

	return (
		<div className="mx-4 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
			<a key={recipe.id} href={recipe.slug} className="cursor-pointer">
				<img
					className="rounded-t h-72 w-full object-cover"
					src={recipe.image}
					alt={recipe.title}
				/>
				<figcaption className="p-4">
					<p className="text-lg mb-4 font-bold leading-relaxed text-gray-900 dark:text-white">
						{recipe.title}
					</p>
					<small className="leading-5 text-gray-700 dark:text-gray-400">
						{recipe.description}
					</small>
				</figcaption>
				{hasDetails === true ? null : (
					<div className="flex justify-center">
						<button
							onClick={onNavigate}
							className="inline-flex items-center px-3 py-2 mb-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Show Recipe
						</button>
					</div>
				)}
				{hasDetails === true ? (
					<Fragment>
						<div>{renderedDetails()}</div>
					</Fragment>
				) : null}
				{recipe.ingredients !== undefined && hasDetails === true ? (
					<Fragment>
						<div>
							<IngredientsTable
								ingredients={recipe.ingredients}
								onIngredientsChange={() => {}}
								viewMode={true}
							/>
						</div>
					</Fragment>
				) : null}
			</a>
		</div>
	);
}

export default RecipeItem;
