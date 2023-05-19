import { ChangeEvent, useRef, useState } from "react";
import { UploadImage } from "utils/UploadImage";

interface Props {
	onImageUpload: (url: string) => void;
}

export const ImageUpload: React.FC<Props> = ({ onImageUpload }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File | null>(null);
	const [uploadStatus, setUploadStatus] = useState<
		"Select Image" | "Upload" | "Success"
	>("Select Image");

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files && event.target.files[0];
		if (selectedFile) {
			setFile(selectedFile);
			setUploadStatus("Upload");
		}
	};

	const handleUpload = async () => {
		if (file !== null) {
			const url = await UploadImage(file);
			onImageUpload(url);
			setUploadStatus("Success");
		}
	};

	const handleOpenFilePicker = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const buttonLabel =
		uploadStatus === "Select Image"
			? "Select Image"
			: uploadStatus === "Upload"
			? "Uploading..."
			: "Success";

	return (
		<div>
			<button
				className={`bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4${
					uploadStatus === "Success" && "opacity-50 cursor-not-allowed"
				}`}
				type="button"
				onClick={
					uploadStatus === "Success"
						? undefined
						: file
						? handleUpload
						: handleOpenFilePicker
				}
			>
				{buttonLabel}
			</button>
			<input
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				ref={fileInputRef}
				style={{ display: "none" }}
			/>
		</div>
	);
};
