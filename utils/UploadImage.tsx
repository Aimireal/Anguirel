export async function UploadImage(imageFile: File): Promise<string> {
	const formData = new FormData();
	formData.append("image", imageFile);

	const response = await fetch("https://api.imgur.com/3/image", {
		method: "POST",
		headers: {
			Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID ?? ""}`,
		},
		body: formData,
	});

	const json = await response.json();

	if (json.success) {
		return json.data.link;
	} else {
		throw new Error("Failed to upload image to Imgur");
	}
}
