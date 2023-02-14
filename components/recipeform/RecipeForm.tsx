import { IngredientsType } from "@/types/IngredientsType";
import { RecipeDetails, RecipeType } from "@/types/RecipeType";
import { ChangeEvent, useRef, useState } from "react";
import { IngredientsTable } from "../ingredientsTable/IngredientsTable";

function RecipeForm(props: any) {
	const { addRecipeHandler } = props;

	const titleRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);
	const descRef = useRef<HTMLInputElement>(null);

	// State for Steps
	const [detailFields, setDetailFields] = useState<RecipeDetails[]>([
		{ id: 0, text: "" },
	]);

	const handleStepsChange = (
		index: number,
		event: ChangeEvent<HTMLTextAreaElement>
	) => {
		let data = [...detailFields];
		data[index].text = event.target.value;
		setDetailFields(data);
	};

	const addSteps = (e: any) => {
		e.preventDefault();
		let newfield: RecipeDetails = {
			id: detailFields[detailFields.length - 1].id + 1,
			text: "",
		};
		setDetailFields([...detailFields, newfield]);
	};

	// ToDO: Reactively update label ID's on change
	const removeSteps = (e: any, index: number) => {
		e.preventDefault();
		let data = [...detailFields];
		data.splice(index, 1);
		setDetailFields(data);
	};

	const recipeSubmitHandler = (e: any) => {
		e.preventDefault();
		const recipeDetails: RecipeDetails[] = detailFields;

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
				<div className="flex flex-wrap mx-3 mb-6">
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
				<div className="flex flex-wrap mx-3 mb-6">
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
				<div className="flex flex-wrap mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Ingredients
					</label>
					<IngredientsTable
						ingredients={[]}
						onIngredientsChange={function (
							ingredients: IngredientsType[]
						): void {
							// throw new Error("Function not implemented.");
						}}
					/>
				</div>
				{detailFields.map((input, index) => {
					return (
						<div key={index}>
							<label className="mr-4 block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
								Step: {input.id + 1}
							</label>
							<div className="grid grid-flow-row mx-3 mb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
								<div className="col-span-1 flex flex-col">
									<textarea
										className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
										placeholder="What you did..."
										value={input.text}
										onChange={(event) => handleStepsChange(index, event)}
									/>
								</div>
								<div className="col-span-1 flex flex-col">
									<button
										onClick={(e) => removeSteps(e, index)}
										className="px-4 py-2 font-bold text-white bg-red-600 rounded-full hover:bg-red-800 mx-auto"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					);
				})}
				<div className="flex flex-wrap mx-3 mb-10">
					<button
						onClick={addSteps}
						className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 mx-auto"
					>
						Add Step
					</button>
				</div>
				<div className="flex flex-wrap my-6 mx-3 mb-6">
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
