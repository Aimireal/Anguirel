import axios, { AxiosResponse } from "axios";

export async function UploadImage(imageFile: File): Promise<string> {
	const formData = new FormData();
	formData.append("image", imageFile);

	const response = await axios.post("https://api.imgur.com/3/image", {
		headers: {
			Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID ?? ""}`,
		},
		body: formData,
	});
	
	return response.data.data.link;
}
