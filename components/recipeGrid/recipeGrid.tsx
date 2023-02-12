import { PropsType } from "@/types/PropsType";
import { RecipeType } from "@/types/RecipeType";
import RecipeItem from "../recipeItem/RecipeItem";

function RecipeGrid(props: PropsType) {
	return (
		<div className="grid grid-flow-row mx-9 gap-9 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{props.recipes.map((recipe: RecipeType) => (
				<div key={recipe.id} className="col-span-1 flex flex-col">
					<RecipeItem {...recipe} />
				</div>
			))}
		</div>
	);
}

export default RecipeGrid;
