import { IngredientsTableType, IngredientsType } from "@/types/IngredientsType";
import { MeasurementType, measurementValues } from "@/types/MeasurementType";
import React, { Fragment, useState } from "react";

interface IngredientsTableProps {
	id: number;
	title: string;
	ingredients: IngredientsType[];
	onIngredientsChange: (ingredients: IngredientsTableType) => void;
	viewMode: boolean;
}

export const IngredientsTable: React.FC<IngredientsTableProps> = ({
	id,
	title,
	ingredients,
	onIngredientsChange,
	viewMode,
}) => {
	const [tableTitle, setTableTitle] = useState<string>(title);
	function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTableTitle(event.target.value);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: editableIngredients,
		});
	}

	const [editableIngredients, setEditableIngredients] =
		useState<IngredientsType[]>(ingredients);

	const handleNameChange = (index: number, name: string) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].name = name;
		setEditableIngredients(newIngredients);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: newIngredients,
		});
	};

	const handleAmountChange = (index: number, amount: number) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].quantity = amount;
		setEditableIngredients(newIngredients);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: newIngredients,
		});
	};

	const handleMeasurementChange = (
		index: number,
		measurement: MeasurementType
	) => {
		const newIngredients = [...editableIngredients];
		newIngredients[index].unit = measurement;
		setEditableIngredients(newIngredients);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: newIngredients,
		});
	};

	const handleAddRow = () => {
		const newIngredients: IngredientsType[] = [
			...editableIngredients,
			{ name: "", quantity: 0, unit: null },
		];
		setEditableIngredients(newIngredients);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: newIngredients,
		});
	};

	const handleRemoveRow = (index: number) => {
		const newIngredients: IngredientsType[] = [...editableIngredients];
		newIngredients.splice(index, 1);
		setEditableIngredients(newIngredients);
		onIngredientsChange({
			id: id,
			tableTitle: tableTitle,
			tableData: newIngredients,
		});
	};

	const titleDisplayComponent = () => {
		return (
			<label className="mt-6 block uppercase tracking-wide mx-auto text-gray-400 text-m font-bold mb-2">
				Ingredients: {tableTitle}
			</label>
		);
	};

	const titleInputComponent = () => {
		return (
			<input
				className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
				type="text"
				placeholder="For the..."
				onChange={handleTitleChange}
				value={tableTitle}
			/>
		);
	};

	return (
		<Fragment>
			<Fragment>
				{viewMode === true ? titleDisplayComponent() : titleInputComponent()}
			</Fragment>
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
						{viewMode === true ? null : (
							<th className="uppercase tracking-wide mx-auto text-gray-400 text-xs font-bold mb-2">
								Actions
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{editableIngredients.map((ingredient, index) => (
						<tr className="bg-gray-700" key={index}>
							<td>
								<input
									className="w-full py-2 px-3 rounded bg-gray-700 text-gray-200"
									type="text"
									disabled={viewMode}
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
									disabled={viewMode}
									value={ingredient.quantity}
									onChange={(e) => {
										e.preventDefault();
										handleAmountChange(index, Number(e.target.value));
									}}
								/>
							</td>
							<td>
								<select
									className="w-full py-2 px-3 rounded bg-gray-700 text-gray-200"
									value={ingredient.unit || ""}
									disabled={viewMode}
									onChange={(e) => {
										e.preventDefault();
										var value = e.target.value as MeasurementType
										handleMeasurementChange(index, value);
									}}
								>
									<option value="">...</option>
									{measurementValues.map((measurementValue) => (
										<option key={measurementValue} value={measurementValue}>
											{measurementValue}
										</option>
									))}
								</select>
							</td>
							{viewMode === true ? null : (
								<td>
									<button
										className="bg-red-500 text-white px-2 py-1 rounded-lg"
										disabled={viewMode}
										onClick={(e) => {
											e.preventDefault();
											handleRemoveRow(index);
										}}
									>
										Remove
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						{viewMode === true ? null : (
							<td colSpan={3}>
								<button
									className="bg-green-500 text-white px-2  py-1 rounded-lg"
									disabled={viewMode}
									onClick={(e) => {
										e.preventDefault();
										handleAddRow();
									}}
								>
									Add Ingredient
								</button>
							</td>
						)}
					</tr>
				</tfoot>
			</table>
		</Fragment>
	);
};
