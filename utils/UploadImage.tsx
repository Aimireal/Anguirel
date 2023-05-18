import axios from "axios";

export async function UploadImage(file: File): Promise<string> {
	try {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ml_default");

		const response = await axios.post(
			`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
			formData
		);

		return response.data.secure_url;
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error;
	}
}
