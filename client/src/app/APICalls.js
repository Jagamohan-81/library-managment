export const registerUser = async (userDetails) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }
    );

    return await res.json(); // Return the JSON data for successful response
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
export const loginUser = async (userDetails) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/student/login`, //student log in
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }
    );
    return await res.json(); // Return the JSON data for successful response
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export const studeneDetails = async (userId) => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/student/user-details/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Set the token in the Authorization header
        },
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    throw error;
  }
};
export const allCourses = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/course/get-list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    return await data.data;
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    throw error;
  }
};

export const allCoursesById = async (id) => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/course/my-course/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    return await data.data;
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    throw error;
  }
};

export const allAssignmentsById = async (id) => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/course/my-assignments/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    return await data.data;
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    throw error;
  }
};
