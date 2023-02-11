import { useRouter } from "next/router";

import { RecipeType } from "@/types/RecipeType";

export function RecipeItem(recipe: RecipeType) {
    const router = useRouter();
    const onNavigate = () => {
        router.push(`/${recipe.slug}`)
    }

	return (
		<div className="max-w-sm mx-auto my-2 overflow-hidden rounded shadow-lg">
			<img className="w-full h-60" src={recipe.image} alt={recipe.title}></img>
			<div className="px-6 py-4">
				<div className="mb-2 text-xl font-bold">{recipe.title}</div>
				<p className="text-base text-gray-700">{recipe.description}</p>
			</div>
			<div className="text-center">
				<button onClick={onNavigate} className="px-4 py-2 my-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
					Show More...
				</button>
			</div>
		</div>
	);
}
