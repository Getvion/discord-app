export const validateLoginForm = ({ mail, password }) => {
  return isMailValid(mail) && isPasswordValid(password);
};

export const validateRegisterForm = ({ mail, password, username }) => {
  return isMailValid(mail) && isPasswordValid(password) && isUsernameValid(username);
};

export const isMailValid = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const isPasswordValid = (password) => password.length > 6;
const isUsernameValid = (username) => username.length > 2 && username.length < 13;
