import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { RecipeType } from "@/types/RecipeType";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).send({ message: 'Only POST requests allowed' })
		return;
	}

	if (!req.body) {
		console.log(`new-recipe: unexpected obj`);
		return;
	}

	const client = await MongoClient.connect(
		"mongodb+srv://aimireal:aFfgWkeoTgHECOtK@cluster0.3nmvr01.mongodb.net/?retryWrites=true&w=majority"
	);

	// Add our new recipe to the database, return success status
	const recipesCollection = client.db("RecipeDatabase").collection("RecipeCollection");

	const newRecipe = req.body as RecipeType;
	const result = await recipesCollection.insertOne({ ...newRecipe });

	client.close();

	res.status(201).json({
		post: result,
		message: "Recipe Added",
	});
}

