export type RecipeType = {
	id?: string;
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