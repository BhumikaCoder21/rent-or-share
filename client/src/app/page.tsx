"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data: { message: string }) => setMessage(data.message))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error loading data");
      });
  }, []);

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">Next.js + Separate Backend</h1>
      <p className="mt-4">Server says: {message}</p>
    </main>
  );
}
