import { IngredientsType } from "@/types/IngredientsType";
import React, { useState } from "react";

interface IngredientsTableProps {
	ingredients: IngredientsType[];
	onIngredientsChange: (ingredients: IngredientsType[]) => void;
}

export const IngredientsTable: React.FC<IngredientsTableProps> = ({
	ingredients,
	onIngredientsChange,
}) => {
	const [editableIngredients, setEditableIngredients] =
		useState<IngredientsType[]>(ingredients);

	const handleNameChange = (index: number, name: string) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].name = name;
		setEditableIngredients(newIngredients);
		onIngredientsChange(newIngredients);
	};

	const handleAmountChange = (index: number, amount: number) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].quantity = amount;
		setEditableIngredients(newIngredients);
		onIngredientsChange(newIngredients);
	};

	const handleMeasurementChange = (index: number, measurement: string) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].unit = measurement;
		setEditableIngredients(newIngredients);
		onIngredientsChange(newIngredients);
	};

	const handleAddRow = () => {
		const newIngredients: IngredientsType[] = [
			...editableIngredients,
			{ name: "", quantity: 0, unit: "" },
		];
		setEditableIngredients(newIngredients);
		onIngredientsChange(newIngredients);
	};

	const handleRemoveRow = (index: number) => {
		const newIngredients: IngredientsType[] = [...editableIngredients];
		newIngredients.splice(index, 1);
		setEditableIngredients(newIngredients);
		onIngredientsChange(newIngredients);
	};

	return (
		<table className="w-full">
			<thead>
				<tr>
					<th className="uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Ingredient
					</th>
					<th className="uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Amount
					</th>
					<th className="uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Unit
					</th>
					<th className="uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{editableIngredients.map((ingredient, index) => (
					<tr className="bg-gray-700" key={index}>
						<td>
							<input
								className="w-full py-2 px-3 rounded bg-gray-700 text-gray-200"
								type="text"
								value={ingredient.name}
								onChange={(e) => {
									e.preventDefault();
									handleNameChange(index, e.target.value);
								}}
							/>
						</td>
						<td>
							<input
								className="w-full py-2 px-3 rounded bg-gray-700 text-gray-200"
								type="number"
								value={ingredient.quantity}
								onChange={(e) => {
									e.preventDefault();
									handleAmountChange(index, Number(e.target.value));
								}}
							/>
						</td>
						<td>
							<input
								className="w-full py-2 px-3 rounded bg-gray-700 text-gray-200"
								type="text"
								value={ingredient.unit}
								onChange={(e) => {
									e.preventDefault();
									handleMeasurementChange(index, e.target.value);
								}}
							/>
						</td>
						<td>
							<button
								className="bg-red-500 text-white px-2 py-1 rounded-lg"
								onClick={(e) => {
									e.preventDefault();
									handleRemoveRow(index);
								}}
							>
								Remove
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={3}>
						<button
							className="bg-green-500 text-white px-2  py-1 rounded-lg"
							onClick={(e) => {
                                e.preventDefault();
								handleAddRow();
							}}
						>
							Add Ingredient
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};
