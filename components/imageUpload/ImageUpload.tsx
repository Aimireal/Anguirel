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

	async function handleUpload(event: FormEvent<HTMLButtonElement>) {
		event.preventDefault();

		if (selectedFile) {
			setIsUploading(true);
			const url = await UploadImage(selectedFile);
			onImageUpload(url);
			setIsUploading(false);
		}
	}

	return (
		<Fragment>
			<input
				className="appearance-none block w-full bg-gray-700 text-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-500"
				accept="image/*"
				type="file"
				placeholder="Select File"
				onChange={handleFileSelected}
				disabled={isUploading}
			/>
			<button
				className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 mx-auto"
				onClick={(e) => handleUpload(e)}
				disabled={!selectedFile || isUploading}
			>
				Upload to Anguirel
			</button>
		</Fragment>
	);
}
