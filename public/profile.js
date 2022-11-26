const profileNameDOM = document.querySelector(".client-name");

addEventListener("DOMContentLoaded", async (e) => {
  //   const data = await axios.post("/api/auth/login", {
  //     email: "not-denys@gmail.com",
  //     password: "3234234",
  //   });
  let data = await axios.get("/profile", {
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVueXMiLCJzdXJuYW1lIjoiRm9rYSIsImVtYWlsIjoibm90LWRlbnlzQGdtYWlsLmNvbSIsInVzZXJJRCI6IjYzODE1MGY3ZTJjNjJlYmU3M2I2Y2JjYSIsImlhdCI6MTY2OTQxOTMzNywiZXhwIjoxNjcyMDExMzM3fQ.-XaPxtRo7N-moASD_DJc9X-xccmLdqALmwg5paxSFFE",
    },
  });
  const userData = data.data.user;
  console.log(userData);
  profileNameDOM.innerHTML = userData.name;
});
