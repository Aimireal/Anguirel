import { IngredientsType } from "@/types/IngredientsType";
import { RecipeType } from "@/types/RecipeType";

function scaleRecipe(recipe: RecipeType, newServings: number): RecipeType {
	if (recipe.servings === undefined || recipe?.ingredients === undefined) {
		return recipe;
	}

	const scaleFactor = newServings / recipe.servings;
	const newIngredients = recipe.ingredients.map((ingredient: IngredientsType) => {
		return {
			...ingredient,
			quantity: ingredient.quantity * scaleFactor,
		};
	});

	return {
		...recipe,
		servings: newServings,
		ingredients: newIngredients,
	};
}
