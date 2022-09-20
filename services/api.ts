import { http } from "@/services/config";

const apiKey = "8d0820d305389e227a98654f6d37a551"

export default {
	getWeather: (city: string) => {
		return http.get(`weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`);
	}
};