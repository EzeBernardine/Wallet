import API from "./api";

export const isLogin = () => {
  const token = localStorage.getItem("token");

  let loggedIn;

  const check = async () => {
    //  check if there if the current user is logged in
    await API.get("/user/getuser", {
      headers: {
        Authorization: `${token?.replace(/['"]+/g, "")}`,
      },
    })
      .then((res) => {
        loggedIn = true;
      })
      .catch((err) => {
        loggedIn = false;
      });

    !loggedIn && localStorage.removeItem("token");
  };
  check();

  return token?.length > 10;
};
