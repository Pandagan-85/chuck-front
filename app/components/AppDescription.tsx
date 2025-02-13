export default function AppDescription() {
  return (
    <div className="text-center max-w-2xl mx-auto my-4 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl text-gray-800 font-bold mb-2">
        📌 Descrizione dell’App
      </h2>
      <p className="text-gray-800">
        Questa app genera 10 battute casuali di Chuck Norris e ne analizza il
        tono usando il Natural Language Processing (NLP).
      </p>
      <ul className="text-gray-700 text-sm mt-2 space-y-1">
        <li>✅ Il frontend (Next.js) chiama il backend (FastAPI).</li>
        <li>
          ✅ Il backend recupera battute da <code>chucknorris.io</code>.
        </li>
        <li>
          ✅ Ogni battuta viene analizzata con <strong>NLTK</strong> (sentiment
          positivo, negativo o neutro).
        </li>
      </ul>
      <p className="text-gray-600 mt-3 text-xs">
        ⚠️ Nota: Se al click il caricamento è lento, è perché Render (il
        servizio che ho usato per il deploy del backend) disattiva il backend
        dopo inattività. Il primo avvio può richiedere ~50 secondi.
      </p>
    </div>
  );
}
