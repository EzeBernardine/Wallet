import useCustomHook from "./customHook";

export const isLogin = () => {
  const token = localStorage.getItem("token");
  return token?.length ;
};
