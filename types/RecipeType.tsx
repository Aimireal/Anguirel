import { IngredientsType } from "./IngredientsType";

export type RecipeType = {
	id?: string;
	slug: string;
	title: string;
	image: string;
	description: string;
	servings?: number;
	details?: RecipeDetails[];
	ingredients?: IngredientsType[];
};

export type RecipeDetails = {
    id: number;
    text: string;
}
