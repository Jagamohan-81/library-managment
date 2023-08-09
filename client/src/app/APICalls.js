export const registerUser = async (userDetails) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
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
