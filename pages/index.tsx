import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

import { RecipeType } from "@/types/RecipeType";
import { PropsType } from "@/types/PropsType";
import HomepageCard from "@/components/homepageCard/HomepageCard";
import RecipeGrid from "@/components/recipeGrid/recipeGrid";
import { DeviceQuery, DeviceType } from "utils/DeviceQuery";

export async function getStaticProps() {
	const connectionString = process.env.DB_RECIPES_CONNECTION ?? "";
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
			<div>
				{DeviceQuery() === DeviceType.mobile ? null : (
					<div>
						<HomepageCard />
					</div>
				)}
				<RecipeGrid recipes={props.recipes} />
			</div>
		</Fragment>
	);
};

export default Home;
