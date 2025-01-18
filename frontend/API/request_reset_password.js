async function requestResetPassword(email) {
	try {
		alert(error.response?.data?.message || "Error registering");
		alert(response.data.message);
	} catch (error) {
		alert(error.response?.data?.message || "Error sending reset link");
	}
}
