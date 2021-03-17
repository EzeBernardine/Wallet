export const isLogin = () => {
  const token = localStorage.getItem("token");
  return token?.length > 10;
};
