export function RecipeForm() {
	return (
		<form className="max-w-lg w-full-lg mx-auto">
			<div className="flex flex-wrap -mx-3 mb-6">
				<label className="block uppercase tracking-wide mx-auto text-gray-700 text-xs font-bold mb-2">
					Title
				</label>
				<input
					className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
					type="text"
					placeholder="title..."
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<label className="block uppercase tracking-wide mx-auto text-gray-700 text-xs font-bold mb-2">
					Image
				</label>
				<input
					className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
					type="text"
					placeholder="image..."
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<label className="block uppercase tracking-wide mx-auto text-gray-700 text-xs font-bold mb-2">
					Description
				</label>
				<input
					className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
					type="text"
					placeholder="description..."
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<label className="block uppercase tracking-wide mx-auto text-gray-700 text-xs font-bold mb-2">
					Details
				</label>
				<input
					className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
					type="text"
					placeholder="details..."
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 mx-auto">
					Submit Recipe
				</button>
			</div>
		</form>
	);
}
