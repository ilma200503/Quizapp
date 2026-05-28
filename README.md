#  Quizapp

En quiz-applikation byggd med React och Vite som hämtar frågor från Open Trivia DB.

---

##  Arbetsfördelning

| Person | Ansvar |
|--------|--------|
| Carl-Gunnar | ResultsPage – visar slutpoäng och sparar resultat till localStorage |
| Elsa | QuizPage – hämtar frågor från API och hanterar quiz-flödet |
| Ilma | HomePage, App.jsx, routing och komponentstruktur |
| Deniz | HighscorePage, CSS och design |
| Marcus | StatsPage, PerformanceChart och StatCard |

---

##  Projektstruktur

```
src/
├── components/
│   ├── HighScoreEntry.jsx
│   ├── Navbar.jsx
│   ├── PerformanceChart.jsx
│   ├── PerformanceChart.css
│   ├── StatsCard.jsx
│   └── StatsCard.css
├── pages/
│   ├── HomePage.jsx
│   ├── QuizPage.jsx
│   ├── ResultsPage.jsx
│   ├── HighscorePage.jsx
│   ├── StatsPage.jsx
│   └── StatsPage.css
├── App.jsx
└── main.jsx
```

---

##  Kom igång

### Installera beroenden
```bash
npm install
```

### Starta appen
```bash
npm run dev
```

---

##  Sidor

| Route | Sida | Beskrivning |
|-------|------|-------------|
| `/` | HomePage | Välj kategori, svårighetsgrad och antal frågor |
| `/quiz` | QuizPage | En fråga i taget med svarsalternativ |
| `/results` | ResultsPage | Visar slutpoäng och sparar till localStorage |
| `/highscore` | HighscorePage | Lista med sparade resultat |
| `/stats` | StatsPage | Statistik och diagram över tidigare spel |

---

## Teknik

- React
- Vite
- React Router DOM
- Open Trivia DB API
- localStorage för att spara resultat
