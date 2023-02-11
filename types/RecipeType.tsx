export type RecipeType = {
	id: number;
	slug: string;
	title: string;
	image: string;
	description: string;
	details: RecipeDetails[];
};

export type RecipeDetails = {
    id: number;
    text: string;
}