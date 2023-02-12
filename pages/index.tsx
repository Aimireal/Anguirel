import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

import { RecipeType } from "@/types/RecipeType";
import { PropsType } from "@/types/PropsType";
import RecipeItem from "@/components/recipeItem/RecipeItem";

const connectionString = process.env.DB_RECIPES_CONNECTION ?? "";

export async function getStaticProps() {
	const client = await MongoClient.connect(connectionString);

	const recipesCollection = client
		.db("RecipeDatabase")
		.collection("RecipeCollection");
	const dbData = await recipesCollection.find().toArray(); // Return all. Filtering system in another area later

	const recipes: RecipeType[] = dbData.map((item) => ({
		id: item._id.toString(),
		slug: item.slug,
		title: item.title,
		image: item.image,
		description: item.description,
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
				<title>Anguirel</title>
				<meta name="description" content="recipes" />
			</Head>
			<div className="min-h-screen bg-[url('../public/background.svg')]">
				<div className="grid grid-flow-row mx-9 gap-9 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{props.recipes.map((recipe: RecipeType) => (
						<div key={recipe.id} className="col-span-1 flex flex-col">
							<RecipeItem {...recipe} />
						</div>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
