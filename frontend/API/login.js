async function loginUser(email, password) {
	try {const response = await API.post("/login", { email, password });
		localStorage.setItem("token", response.data.token);
		alert("Login successful");
	} catch (error) {
		alert(error.response?.data?.message || "Error logging in");
	}
}
