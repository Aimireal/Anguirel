import { RecipeDetails, RecipeType } from "@/types/RecipeType";
import { useRef } from "react";

function RecipeForm(props: any) {
	const { addRecipeHandler } = props;

	const titleRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);
	const descRef = useRef<HTMLInputElement>(null);
	const detailsRef = useRef<HTMLInputElement>(null);

	const recipeSubmitHandler = (e: any) => {
		e.preventDefault();

		// ToDo: Change to a map of all details blocks (Recipe steps)
		const recipeDetails: RecipeDetails[] = [
			{
				id: 0,
				text: detailsRef.current?.value ?? "",
			},
		];

		const recipeData: RecipeType = {
			slug: titleRef.current?.value.toLowerCase().replaceAll(" ", "-") ?? "",
			title: titleRef.current?.value ?? "",
			image: imageRef.current?.value ?? "",
			description: descRef.current?.value ?? "",
			details: recipeDetails,
		};

		addRecipeHandler(recipeData);
	};

	return (
		<div className="min-h-screen bg-[url('../public/background.svg')]">
			<form
				className="max-w-lg w-full-lg mx-auto"
				onSubmit={recipeSubmitHandler}
			>
				<div className="flex flex-wrap mx-3 mb-6">
					<label className="mt-4 block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Recipe Name
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="text"
						placeholder="Recipe Name..."
						ref={titleRef}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Image URL
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="text"
						placeholder="Image URL..."
						ref={imageRef}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Description
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="text"
						placeholder="Description..."
						ref={descRef}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Details
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="text"
						placeholder="Details..."
						ref={detailsRef}
					/>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<button
						type="submit"
						className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 mx-auto"
					>
						Submit Recipe
					</button>
				</div>
			</form>
		</div>
	);
}

export default RecipeForm;
