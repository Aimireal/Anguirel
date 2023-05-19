import { MeasurementType } from "./MeasurementType";

export type IngredientsTableType = {
	id: number;
	tableTitle: string;
	tableData: IngredientsType[];
}

export type IngredientsType = {
	name: string;
	quantity: number;
	unit: MeasurementType | null;
}
