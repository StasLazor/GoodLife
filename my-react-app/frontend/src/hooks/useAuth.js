import { useState } from "react";
// Імпортуємо методи з Firebase
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase"; // Імпортуємо наш файл налаштувань

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- ЛОГІН ---
  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Цей один рядок робить всю магію: перевіряє юзера в базі Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      setLoading(false);
      console.log("Успішний вхід:", user);
      
      // Отримуємо токен (Firebase генерує його сам)
      const token = await user.getIdToken();
      
      alert(`Успішний вхід через Firebase! Email: ${user.email}`);
      
      // Повертаємо об'єкт юзера
      return user;

    } catch (err) {
      setLoading(false);
      console.error(err);

      // Обробляємо помилки Firebase, щоб вивести зрозумілий текст
      let errorMessage = "Помилка авторизації";
      
      // Firebase повертає специфічні коди помилок
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        errorMessage = "Невірний email або пароль";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Забагато спроб. Спробуйте пізніше.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Некоректний формат email";
      }
      
      setError(errorMessage);
      throw err;
    }
  };

  // --- ВИХІД (LOGOUT) ---
  // Це бонус, але корисний для повноти картини
  const logoutUser = async () => {
    try {
      await signOut(auth);
      alert("Ви вийшли з системи");
    } catch (err) {
      console.error("Помилка при виході:", err);
    }
  };

  return { loginUser, logoutUser, loading, error };
};