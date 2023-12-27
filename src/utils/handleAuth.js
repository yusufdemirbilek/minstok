export const login = async (username, password) => {
  const loginData = await fetch("http://localhost:8080/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  localStorage.setItem("username", username);
  const data = await loginData.json();
  if (data?.message !== "Invalid Password!" && data?.accessToken !== null) {
    localStorage.setItem("auth", data.accessToken);
    localStorage.setItem("username", data.username);

    return data;
  }
  return data;
};
export const register = async (
  firstName,
  lastName,
  username,
  email,
  password,
  roles
) => {
  const loginData = await fetch("http://localhost:8080/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,

      password,
    }),
  });
  const data = await loginData.json();
  localStorage.setItem("data", data);
  return data;
};
export const logout = async () => {
  localStorage.clear();
  window.location.href = "/login";
};
export const auth = async () => {
  const loginData = await fetch("http://localhost:3001/authorize", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });
  const data = await loginData.json();
  if (data?.message === "success") {
    return data;
  }
};
