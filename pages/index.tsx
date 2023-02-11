import type { NextPage } from "next";
import Head from "next/head";

import { Fragment } from "react";

import { RecipeType } from "@/types/RecipeType";
import { RecipeItem } from "@/components/recipeItem/RecipeItem";

// Testdata
const RECIPE_POST: RecipeType[] = [
	{
		id: 1,
		slug: "cookies",
		title: "Cookies",
		image:
			"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
		description: "These are some tasty cookies",
		details: [
			{ id: 1, text: "Step 1... Stuff" },
			{ id: 2, text: "Step 2... Stuff" },
		],
	},
	{
		id: 2,
		slug: "brownie",
		title: "Brownie",
		image:
			"https://images.unsplash.com/photo-1610611424854-5e07032143d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJvd25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1800&q=60",
		description: "These are some fudgy brownies",
		details: [
			{ id: 1, text: "Step 1... Stuff" },
			{ id: 2, text: "Step 2... Stuff" },
		],
	},
	{
		id: 3,
		slug: "scones",
		title: "Scones",
		image:
			"https://images.unsplash.com/photo-1606946144557-0d04974df266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		description: "A delightful classic",
		details: [
			{ id: 1, text: "Step 1... Stuff" },
			{ id: 2, text: "Step 2... Stuff" },
		],
	},
];

const Home: NextPage = () => {
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

			{RECIPE_POST.map((recipe: RecipeType) => (
				<div key={recipe.id} className="flex flex-col">
					<RecipeItem {...recipe} />
				</div>
			))}
		</Fragment>
	);
};

export default Home;

