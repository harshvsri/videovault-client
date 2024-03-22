import { API_URL } from "./data";

async function authenticate(route, formData) {
  try {
    const res = await fetch(`${API_URL}/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const resData = await res.json();
    // Save the user data to local storage
    localStorage.setItem("response", JSON.stringify(resData));
  } catch (error) {
    console.error("Error:", error);
  }
}

export default authenticate;
