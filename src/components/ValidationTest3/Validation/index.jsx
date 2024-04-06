export const Validation = (formInp) => {
  if (!formInp) {
    return "";
  }

  let errorMessage = "";

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Zа-яА-Я]+$/.test(value) || value.length < 2 || value.length > 50) {
          errorMessage = "Имя и Фамилия должны содержать только буквы и быть длиной от 2 до 50 символов.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = "Email должен быть валидным.";
        }
        break;
      case "password":
        if (value.length < 8) {
          errorMessage = "Пароль должен быть длиной не менее 8 символов.";
        } else if (!/[0-9]/.test(value)) {
          errorMessage = "Пароль должен содержать хотя бы одну цифру.";
        } else if (!/[a-z]/.test(value)) {
          errorMessage = "Пароль должен содержать хотя бы одну строчную букву.";
        } else if (!/[A-Z]/.test(value)) {
          errorMessage = "Пароль должен содержать хотя бы одну заглавную букву.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          errorMessage = "Пароль должен содержать хотя бы один специальный символ.";
        }
        break;
      case "confirmPassword":
        if (formInp.password !== value) {
          errorMessage = "Пароли не совпадают.";
        }
        break;
      case "birthday":
        const today = new Date();
        const birthdate = new Date(value);
        const age = today.getFullYear() - birthdate.getFullYear();
        if (age < 18) {
          errorMessage = "Возраст должен быть не меньше 18 лет.";
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  for (const [name, value] of Object.entries(formInp)) {
    errorMessage = validateField(name, value);
    if (errorMessage) {
      break;
    }
  }

  return errorMessage;
};