export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAge = (age: number): boolean => {
  const ageNumber = Number(age);
  return Number.isInteger(ageNumber) && ageNumber > 0;
};

export default { validateEmail, validateAge };
