const API_BASE_URL = "http://localhost:8080";

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const login = async (credientials: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credientials),
  });
  if (!response.ok) throw new Error("Login Failed");
  return response.json();
};

export const signup = async (credientials: any) => {
  console.log("Sending signup request to:", `${API_BASE_URL}/auth/signup`);
  console.log("Payload:", credientials);
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credientials),
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Signup failed response:", errorText);
      throw new Error(`Signup Failed: ${response.status} ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Network or Server Error:", error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) throw new Error("Failed to send reset email");
  return response.json();
};

export const resetPassword = async (token: string, newPassword: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  });
  if (!response.ok) throw new Error("Failed to reset password");
  return response.json();
};
