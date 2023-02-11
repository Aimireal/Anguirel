import { RecipeForm } from "@/components/recipeForm/RecipeForm";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AddRecipe() {
	const router = useRouter();

	// Req to backend API for adding new recipes
	const addRecipeHandler = async (data: any) => {
		await fetch("/api/new-recipe", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json; charset=utf8",
			},
		});
		router.push("/");
	};

	return (
		<Fragment>
			<RecipeForm addRecipeHandler={addRecipeHandler} />
		</Fragment>
	);
}

export default AddRecipe;
