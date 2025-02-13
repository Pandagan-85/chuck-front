"use client";

import { useState } from "react";
import AboutMe from "./components/aboutme";
import AppDescription from "./components/AppDescription";
import Image from "next/image";

type Joke = {
  text: string;
  sentiment: "Positivo" | "Negativo" | "Neutro";
};

export default function Home() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJokes = async () => {
    setLoading(true);
    setError(null); // Reset degli errori prima di fare una nuova richiesta
    try {
      const response = await fetch(
        "https://chucknorris-jokes-w5df.onrender.com/jokes"
      ); // Usa l'URL del backend
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Errore nel recupero delle battute: ${errorData.message}`
        );
      }
      const data = await response.json();
      setJokes(data.jokes); // Assumendo che `data.jokes` sia una lista di battute
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(
          err.message || "C'è stato un errore nel caricamento delle battute."
        );
      } else {
        setError("C'è stato un errore sconosciuto.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-cyan-900 p-6">
      <h1 className="text-3xl font-bold mb-4">
        😂 Analisi NLP delle battute di Chuck Norris
      </h1>
      <Image
        src="/Chuck_norris_mia_illustrazione.png"
        alt="Chuck Norris"
        width={200}
        height={600}
        className=" border-gray-300"
        unoptimized
      />
      <button
        onClick={fetchJokes}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        {loading ? "Caricamento..." : "Genera 10 Battute"}
      </button>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {loading && (
        <p className="mt-4 text-blue-500">Caricamento delle battute...</p>
      )}

      <div className="mt-6 space-y-4 max-w-lg w-full mx-auto">
        {jokes.map((joke, index) => (
          <div
            key={index}
            className={`p-4 rounded shadow ${
              joke.sentiment === "Positivo"
                ? "bg-green-200"
                : joke.sentiment === "Negativo"
                ? "bg-red-200"
                : "bg-gray-200"
            }`}
          >
            <p className="font-bold text-neutral-950 text-lg">{joke.text}</p>
            <p className="font-bold text-gray-700">
              Sentimento: {joke.sentiment}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-6 min-h-screen bg-cyan-900">
        {/* Colonna 1 - Descrizione dell'App */}
        <div className="flex-1 max-w-lg">
          <AppDescription />
        </div>

        {/* Colonna 2 - About Me */}
        <div className="flex-1 max-w-lg">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
