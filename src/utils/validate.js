export const validateData = (email, passWord) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passWord);
  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }
  if (!isPassWordValid) {
    return "Please enter a valid password.";
  }
  return null;
};
