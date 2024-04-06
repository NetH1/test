export const Validation = (formInp, formData = formInp) => {
  if (!formInp) {
    return {};
  }

  let errors = {};

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Zа-яА-Я]+$/.test(value) || value.length < 2 || value.length > 50) {
          errors[name] = "Имя и Фамилия должны содержать только буквы и быть длиной от 2 до 50 символов.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors[name] = "Email должен быть валидным.";
        }
        break;
      case "password":
        if (
          value.length < 8 ||
          !/[0-9]/.test(value) ||
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(value)
        ) {
          errors[name] = "Пароль должен быть длиной не менее 8 символов, содержать хотя бы одну цифру, одну строчную букву, одну заглавную букву и один специальный символ.";
        }
        break;
      case "confirmPassword":
        if (formData.password !== value) {
          errors[name] = "Пароли не совпадают.";
        }
        break;
      case "birthday":
        const today = new Date();
        const birthdate = new Date(value);
        const age = today.getFullYear() - birthdate.getFullYear();
        if (age < 18) {
          errors[name] = "Возраст должен быть не менее 18 лет.";
        }
        break;
      default:
        break;
    }
  };

  for (const [name, value] of Object.entries(formInp)) {
    validateField(name, value);
  }

  return errors;
};