import Link from "next/link";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex justify-around px-4 py-2 bg-slate-600">
				<li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
					<Link href={"/"}>Home</Link>
				</li>
				<li className="px-4 py-2 font-bold text-white">
					<Link href={"/"}>Anguirel</Link>
				</li>
				<li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
					<Link href={"/add-recipe"}>Add Recipe</Link>
				</li>
			</ul>
		</nav>
	);
};
