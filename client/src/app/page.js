"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Next.js + Separate Backend</h1>
      <p>Server says: {message}</p>
    </div>
  );
}
