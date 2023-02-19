import axios, { AxiosResponse } from "axios";

function fileToBase64(file: File): Promise<string | ArrayBuffer | null> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			const base64String = reader.result;
			resolve(base64String);
		};
		reader.onerror = (error) => reject(error);
	});
}

export async function UploadImage(imageFile: File): Promise<string> {
	const imgurId = "0f4d305139ce00e";
	const formData = new FormData();

	const base64Image = await fileToBase64(imageFile);

	if (base64Image !== null) {
		formData.append("image", base64Image?.toString());

		const response = await axios.post("https://api.imgur.com/3/upload", {
			headers: {
				Authorization: `Client-ID ${imgurId}`,
			},
			body: formData,
		});

		return response.data.data.link;
	}
	return "Error";
}
