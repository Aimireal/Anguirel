import axios from "axios";

export async function UploadImage(imageFile: File): Promise<string> {
	const connectionString = process.env.IMGUR_CLIENT_ID ?? "";
	var formData = new FormData();
	formData.append("image", imageFile);

	try {
		const response = await axios.post(
			"https://api.imgur.com/3/upload",
			formData,
			{
				headers: {
					Authorization: `Client-ID ${connectionString}`,
				},
			}
		);
		return response.data.link;
	} catch (error) {
		console.error("Failed to upload image:", error);
		throw error;
	}
}
