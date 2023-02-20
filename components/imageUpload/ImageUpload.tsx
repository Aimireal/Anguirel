import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { UploadImage } from "utils/UploadImage";

interface Props {
	onImageUpload: (url: string) => void;
}
export function ImageUpload({ onImageUpload }: Props): JSX.Element {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState<boolean>(false);

	async function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (file !== undefined) {
			setSelectedFile(file);
		}
	}

	async function handleFormSubmitted(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (selectedFile) {
			setIsUploading(true);
			const url = await UploadImage(selectedFile);
			onImageUpload(url);
			setIsUploading(false);
		}
	}

	return (
		<form onSubmit={handleFormSubmitted}>
			<input
				className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
				accept="image/*"
				type="file"
				placeholder="Select File"
				onChange={handleFileSelected}
				disabled={isUploading}
			/>
			<button type="submit" disabled={!selectedFile || isUploading}>
				Upload to Anguirel
			</button>
		</form>
	);
}
