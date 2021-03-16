import useCustomHook from "./customHook";

export const isLogin = () => {
  const token = localStorage.getItem("token");
  console.log(token, "token");
  return token?.length > 10;
};
