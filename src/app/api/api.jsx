import axios from "axios";

const API_URL = "https://batoreach-be.onrender.com";

// const API_URL = "http://localhost:8888";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Registration failed");
  }
};

export const uploadAvatar = async (avatar, token) => {
  try {
    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append('avatar', avatar);

    // Make a POST request to upload the avatar
    const response = await axios.post(`${API_URL}/upload-avatar`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    // Return the updated user details
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Upload failed:", error.response.data.detail);
    } else {
      console.error("Error occurred during upload:", error.message);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const login = async (usernameOrEmail, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/token`,
      {
        username: usernameOrEmail,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    // Set token type = Bearer and store the token in localStorage
    const { access_token } = response.data;
    console.log("Logged in successfully:", access_token);
    // Store the token in localStorage
    localStorage.setItem("token", access_token);
    return access_token;
  } catch (error) {
    if (error.response) {
      console.error("Login failed:", error.response.data.detail);
    } else {
      console.error("Error occurred during login:", error.message);
    }
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

export const logout = () => {
  try {
    localStorage.removeItem("token");
    console.log("Logged out successfully");
  } catch (error) {
    console.error("Error occurred during logout:", error.message);
  }
};
