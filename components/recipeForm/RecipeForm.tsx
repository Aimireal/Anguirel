import { IngredientsType } from "@/types/IngredientsType";
import { RecipeDetails, RecipeType } from "@/types/RecipeType";
import { ChangeEvent, useRef, useState } from "react";
import { UploadImage } from "utils/UploadImage";
import { IngredientsTable } from "../ingredientsTable/IngredientsTable";

function RecipeForm(props: any) {
	const { addRecipeHandler } = props;

	// Form state
	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);
	const servingsRef = useRef<HTMLInputElement>(null);

	// Ingredients state
	const [ingredients, setIngredients] = useState<IngredientsType[]>([]);
	function handleIngredients(newIngredients: IngredientsType[]) {
		setIngredients(newIngredients);
	}

	// Recipe steps state
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

	const removeSteps = (e: any, index: number) => {
		e.preventDefault();
		let data = [...detailFields];
		data.splice(index, 1); // ToDO: Reactively update label ID's on change
		setDetailFields(data);
	};

	// File upload state
	const [imageURL, setImageURL] = useState<string>("");
	const handleFileSelect = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const imageFile = event.target.files && event.target.files[0];
		if (imageFile !== null) {
			const response = await UploadImage(imageFile);
			console.log("Image uploaded successfully");
			setImageURL(response);
		}
	};

	const recipeSubmitHandler = (e: any) => {
		e.preventDefault();
		const recipeDetails: RecipeDetails[] = detailFields;

		const recipeData: RecipeType = {
			slug: titleRef.current?.value.toLowerCase().replaceAll(" ", "-") ?? "",
			title: titleRef.current?.value ?? "",
			image: imageURL,
			description: descriptionRef.current?.value ?? "",
			servings: parseInt(servingsRef?.current?.value as string) || 0,
			details: recipeDetails,
			ingredients: ingredients,
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
						Image Upload
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="file"
						placeholder="Select File"
						onChange={handleFileSelect}
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
						ref={descriptionRef}
					/>
				</div>
				<div className="flex flex-wrap mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Servings
					</label>
					<input
						className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
						type="number"
						placeholder="Servings Count..."
						ref={descriptionRef}
					/>
				</div>
				<div className="flex flex-wrap mx-3 mb-6">
					<label className="block uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Ingredients
					</label>
					<IngredientsTable
						ingredients={ingredients}
						onIngredientsChange={handleIngredients}
						viewMode={false}
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
