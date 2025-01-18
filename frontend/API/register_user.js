async function registerUser(name, email, password) {
	try {
		const response = await API.post("/register", { name, email, password });
		alert(response.data.message);
	} catch (error) {
		alert(error.response?.data?.message || "Error registering");
	}
}
