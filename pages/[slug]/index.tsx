import { Document, MongoClient } from "mongodb";
import { Fragment } from "react";
import { RecipeType } from "@/types/RecipeType";
import RecipeItem from "@/components/recipeItem/RecipeItem";

export async function getStaticPaths() {
	const connectionString = process.env.DB_RECIPES_CONNECTION ?? "";
	const client = await MongoClient.connect(connectionString);

	const recipesCollection = client
		.db("RecipeDatabase")
		.collection("RecipeCollection");

	const dbData = await recipesCollection
		.find({}, { projection: { slug: 1 } })
		.toArray();

	const recipes: RecipeType[] = dbData.map((item) => ({
		id: item._id.toString(),
		slug: item.slug,
		title: item.title,
		image: item.image,
		description: item.description,
		details: item.details,
	}));

	client.close();

	return {
		paths: recipes.map((recipe) => ({
			params: { slug: recipe.slug },
		})),
		fallback: false,
	};
}

export async function getStaticProps(context: Document) {
	const id = context.params.slug;
	const connectionString = process.env.DB_RECIPES_CONNECTION ?? "";
	const client = await MongoClient.connect(connectionString);

	const recipesCollection = client
		.db("RecipeDatabase")
		.collection("RecipeCollection");

	const request = await recipesCollection.findOne({ slug: id });

	client.close();

	if (request !== null) {
		const recipe: RecipeType = {
			slug: request.slug,
			title: request.title,
			image: request.image,
			description: request.description,
			details: request.details,
		};

		return {
			props: {
				title: recipe.title,
				image: request.image,
				description: request.description,
				details: request.details,
			},
		};
	}
}

export function RecipeDetails(props: RecipeType) {
	return (
		<Fragment>
			<div className="min-h-screen bg-[url('../public/background.svg')] flex flex-col">
				<RecipeItem {...props} />
			</div>
		</Fragment>
	);
}

export default RecipeDetails;
