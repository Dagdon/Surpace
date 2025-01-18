async function resetPassword(token, newPassword) {
	try {
		const response = await API.post("/reset-password", { token, newPassword });
		alert(response.data.message);
	} catch (error) {
		alert(error.response?.data?.message || "Error resetting password");
	}
}
