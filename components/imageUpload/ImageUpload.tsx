import { ChangeEvent } from "react";

interface Props {
	onImageSelected: (file: File) => void;
}

export function ImageUpload({ onImageSelected }: Props): JSX.Element {
	function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
		const image = event.target.files?.[0];
		if (image !== undefined) {
            onImageSelected(image);
		}
	}

	return (
		<input
			className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
			accept="image/*"
			type="file"
			placeholder="Select File"
			onChange={handleFileSelected}
		/>
	);
}
