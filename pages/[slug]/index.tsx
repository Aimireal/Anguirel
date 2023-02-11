import RecipeItem from "@/components/recipeItem/RecipeItem";
import { RecipeType } from "@/types/RecipeType";
import { Document, MongoClient } from "mongodb";
import { Fragment } from "react";

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://aimireal:aFfgWkeoTgHECOtK@cluster0.3nmvr01.mongodb.net/?retryWrites=true&w=majority"
	);

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

	const client = await MongoClient.connect(
		"mongodb+srv://aimireal:aFfgWkeoTgHECOtK@cluster0.3nmvr01.mongodb.net/?retryWrites=true&w=majority"
	);

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
			<div className="flex flex-col">
				<RecipeItem {...props} />
			</div>
		</Fragment>
	);
}

export default RecipeDetails;
