const API_BASE_URL = "http://localhost:8080";

export const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Refresh access token using HttpOnly refresh token cookie
export const refreshAccessToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include", // Send HttpOnly cookies
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      return data.accessToken;
    }
    return null;
  } catch (err) {
    console.error("Token refresh failed:", err);
    return null;
  }
};

// Enhanced fetch with automatic token refresh on 401
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    ...options,
    credentials: "include", // Always send cookies
    headers: {
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  // If 401 Unauthorized, try to refresh token
  if (response.status === 401) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      // Retry original request with new token
      return fetch(url, {
        ...options,
        credentials: "include",
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newToken}`,
        },
      });
    } else {
      // Refresh failed, redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw new Error("Session expired");
    }
  }

  return response;
};

// Add logout function
export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });
  if (response.ok) {
    localStorage.removeItem("token");
  }
  return response;
};

export const login = async (credientials: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
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
      credentials: "include",
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
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) throw new Error("Failed to send reset email");
  return response.json();
};

export const resetPassword = async (token: string, newPassword: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  });
  if (!response.ok) throw new Error("Failed to reset password");
  return response.json();
};
