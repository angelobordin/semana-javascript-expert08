export default class Service {
	#url;

	constructor(url) {
		this.#url = url;
	}

	async uploadFileToWebServer({ fileName, fileBuffer }) {
		const formData = new FormData();
		formData.append(fileName, fileBuffer);
		console.log("uploading file", fileName);
		debugger;
		const res = await fetch(this.#url, {
			method: "POST",
			body: formData,
		});

		console.assert(res.ok, "response is not ok", res);
		return res;
	}
}
