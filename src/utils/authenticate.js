async function authenticate(route, formData) {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const res = await fetch(`${API_URL}/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const resData = await res.json();
    // Save the user data to local storage
    localStorage.setItem("response", JSON.stringify(resData));
  } catch (error) {
    console.error("Error:", error);
  }
}

export default authenticate;
