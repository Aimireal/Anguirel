import axios from "axios";

const clientId = process.env.IMGUR_CLIENT_ID;

export async function UploadImage(imageFile: File): Promise<string> {
	var formData = new FormData();
	formData.append("image", imageFile);

	try {
		const response = await axios.post(
			"https://api.imgur.com/3/image",
			formData,
			{
				headers: {
					Authorization: "Client-ID " + clientId,
				},
			}
		);
		return response.data.link;
	} catch (error) {
		console.error("Failed to upload image:", error);
		throw error;
	}
}
