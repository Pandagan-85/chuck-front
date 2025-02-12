# Frontend - Chuck Norris Jokes NLP Analysis

Questo progetto è il frontend per l'analisi delle battute di Chuck Norris utilizzando l'analisi del sentiment (NLP). Il frontend interagisce con un backend per recuperare le battute e visualizzarle con l'analisi del sentiment.

## Tecnologie Usate

- **React**: Biblioteca JavaScript per la costruzione dell'interfaccia utente.
- **Next.js**: Framework React per il rendering lato server (SSR) e la generazione di siti web statici.
- **Tailwind CSS**: Framework CSS per una progettazione reattiva e moderna.
- **TypeScript**: Superset di JavaScript che aggiunge tipizzazione statica per migliorare la qualità del codice.
- **Fetch API**: Per comunicare con il backend e recuperare le battute di Chuck Norris.
- **useState Hook**: Per gestire lo stato delle battute e delle operazioni di caricamento.

## Setup

1. Clona il repository:

   ```bash
   git clone https://github.com/Pandagan-85/chuck-norris-jokes
   cd chuck-norris-jokes/frontend
   ```

## Funzionalità

- Genera Battute: Cliccando sul pulsante “Genera 10 Battute”, verranno caricate e visualizzate le battute di Chuck Norris insieme all’analisi del sentiment.

- Sentiment Analysis: Le battute vengono analizzate utilizzando un modello NLP per determinare il sentiment (Positivo, Negativo, Neutro).
