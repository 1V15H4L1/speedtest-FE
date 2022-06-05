import axios from "axios";

export const instance = axios.create({
	baseURL: "https://quiet-badlands-51927.herokuapp.com",
});
export let axiosConfig = {
	headers: {
		"Content-Type": "application/json",
		"x-access-token": "",
		"Access-Control-Allow-Origin": "*",
	},
};
export const Login = (body) => {
	return instance
		.post("/api/LogIn", body, axiosConfig)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

export const SignUp = (body) => {
	return instance
		.post("/api/SignUp", body, axiosConfig)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};
