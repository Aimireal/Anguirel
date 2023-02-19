import axios, { AxiosResponse } from "axios";

export async function UploadImage(imageFile: File): Promise<string> {
	const imgurId = "0f4d305139ce00e";
	const formData = new FormData();
	formData.append("image", imageFile);

	const response = await axios.post("https://api.imgur.com/3/image", {
		headers: {
			Authorization: `Client-ID ${imgurId}`,
		},
		body: formData,
	});
	
	return response.data.data.link;
}
