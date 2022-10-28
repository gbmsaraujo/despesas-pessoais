import axios from "axios";


export async function getAxios(url:string) {
	const data = axios.get(url);
	return data;
}
