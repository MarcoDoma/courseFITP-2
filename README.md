# Corso IS1 2026 — App di Studio (Padel)

App mobile-first per prepararsi all'esame del **Corso di Formazione per Istruttori di 1° Livello (Padel) — FITP, A.A. 2026**.
Tutti i contenuti sono tratti integralmente dalle slide `Corso IS1 2026 Ultimo.pdf`.

## Cosa contiene
- **Home** — progresso generale, progresso per categoria, piano di studio in 7 giorni, consigli.
- **Sezioni** — 24 sezioni · 108 concetti con domanda, risposta e spiegazione. Categorie: Sistema & Bandi, Deontologia, Campo & Regole, Didattica, Tattica, Tecnica.
- **Flashcard** — ripasso a carte con auto-valutazione.
- **Quiz** — 20 domande a risposta multipla (come l'esame, 30 domande/30 min), con spiegazione di ogni errore e storico risultati.
- **Numeri** — 29 numeri chiave da memorizzare (misure campo e racchetta, percentuali, quote, ecc.).

Grafica: sfondo animato con campo da padel in Three.js, animazioni GSAP, tema chiaro/scuro. I progressi sono salvati in locale sul dispositivo.

## Come avviarla
La PWA richiede un piccolo web server locale (il service worker non parte da `file://`).

```bash
# dentro questa cartella
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Installare sul telefono (PWA)
1. Pubblica la cartella su un hosting HTTPS (es. GitHub Pages, Netlify) oppure aprila dal server locale sulla stessa rete.
2. **iPhone (Safari):** Condividi → *Aggiungi a Home*.
3. **Android (Chrome):** menu ⋮ → *Installa app* / *Aggiungi a schermata Home*.
L'icona (racchetta) comparirà tra le app e l'app funzionerà anche offline.

## Struttura file
```
index.html          shell dell'app + registrazione service worker
style.css           stili (tema chiaro/scuro)
data.js             contenuti: SECTIONS, NUMBERS_DATA, PLAN_DAYS
script.js           logica app + animazioni
manifest.json       manifest PWA
service-worker.js   cache offline dell'app
icons/              icone 192 / 512 / 512-maskable
```
