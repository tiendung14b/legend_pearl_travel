import axios from "axios";

const API_URL = "http://localhost:8888";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Registration failed");
  }
};

export const uploadAvatar = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}/upload-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Avatar upload failed");
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/token`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Login failed");
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Failed to fetch user");
  }
};
