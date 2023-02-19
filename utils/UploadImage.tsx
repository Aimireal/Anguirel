import axios, { AxiosResponse } from "axios";

export async function UploadImage(imageFile: File): Promise<string> {
	const clientId = process.env.IMGUR_CLIENT_ID;
	var formData = require("form-data");
	formData.append("image", imageFile);

	var config = {
		method: "post",
		url: "https://api.imgur.com/3/image",
		headers: {
			Authorization: "Client-ID " + clientId,
			...formData.getHeaders(),
		},
		data: FormData,
	};

	axios(config)
		.then(function (response) {
			console.log(response.data.link);
			return response.data.link;
		})
		.catch(function (error) {
			console.log(error);
		});

	return "";
}
