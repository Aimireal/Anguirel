import Head from "next/head";

import { Fragment } from "react";

import { RecipeType } from "@/types/RecipeType";
import { RecipeItem } from "@/components/recipeItem/RecipeItem";
import { PropsType } from "@/types/PropsType";
import { MongoClient } from "mongodb";

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://aimireal:aFfgWkeoTgHECOtK@cluster0.3nmvr01.mongodb.net/?retryWrites=true&w=majority"
	);

	const recipesCollection = client.db("RecipeDatabase").collection("RecipeCollection");
	const dbData = await recipesCollection.find().toArray(); // Return all. Filtering system in another area later

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
		props: {
			recipes: recipes,
		},
		revalidate: 360,
	};
}

const Home = (props: PropsType) => {
	return (
		<Fragment>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="text-center">
				<h1 className="px-4 py-2 font-semibold">Recipes</h1>
			</div>

			{props.recipes.map((recipe: RecipeType) => (
				<div key={recipe.id} className="flex flex-col">
					<RecipeItem {...recipe} />
				</div>
			))}
		</Fragment>
	);
};

export default Home;

