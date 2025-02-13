import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow max-w-md mx-auto text-center">
      {/* Immagine profilo */}
      <div className="flex flex-col items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/72889405?v=4"
          alt="Veronica Schembri"
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300"
          unoptimized
        />

        {/* Testo accanto */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">Veronica Schembri</h2>
          <p className="text-gray-600 text-sm">
            Front End Developer | Data Science & AI Enthusiast
          </p>
        </div>
      </div>

      {/* Sezione Social Media */}
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://www.veronicaschembri.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🌐 Sito
        </a>
        <a
          href="https://github.com/Pandagan-85"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/veronicaschembri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://www.instagram.com/schembriveronica/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          📸 Instagram
        </a>
      </div>
    </div>
  );
}
