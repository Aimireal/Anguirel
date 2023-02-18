export type IngredientsTableType = {
	tableTitle: string;
	tableData: IngredientsType[];
}

export type IngredientsType = {
	name: string;
	quantity: number;
	unit: string;
}
