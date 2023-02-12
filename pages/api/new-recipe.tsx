import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { RecipeType } from "@/types/RecipeType";

const connectionString = process.env.DB_RECIPES_CONNECTION ?? "";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		res.status(405).send({ message: 'Only POST requests allowed' })
		return;
	}

	if (!req.body) {
		return;
	}

	const client = await MongoClient.connect(connectionString);

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

