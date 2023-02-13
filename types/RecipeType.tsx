export type RecipeType = {
	id?: string;
	slug: string;
	title: string;
	image: string;
	description: string;
	details?: RecipeDetails[];
	ingredients?: IngredientsType[];
};

export type RecipeDetails = {
    id: number;
    text: string;
}

export type IngredientsType = {
	category?: string;
	text: string;
	quantity: string;
}