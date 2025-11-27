import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Функція для логіну
  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Робимо запит на тестовий сервер
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Якщо сервер повернув помилку
        throw new Error(data.error || "Помилка авторизації");
      }

      setLoading(false);
      console.log("Успішний логін! Токен:", data.token);
      alert("Ви успішно увійшли! Токен: " + data.token);
      
      
      return data;

    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  return { loginUser, loading, error };
};