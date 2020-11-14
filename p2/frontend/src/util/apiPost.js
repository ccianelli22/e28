import axios from "axios"
export default async (data, url) => {
	let success = await axios({
		method: "POST",
		url: url,
		responseType: "json",
		data: data,
	})
	return success
}
