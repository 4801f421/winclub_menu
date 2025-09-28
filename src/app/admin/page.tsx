"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./global.css"; // مسیر CSS عمومی پروژه

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // ورود موفق → هدایت به داشبورد
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>ورود به پنل ادمین</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">ورود</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
