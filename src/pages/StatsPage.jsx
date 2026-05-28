import { useState, useEffect } from "react";
import StatCard from "../components/StatsCard";
import PerformanceChart from "../components/PerformanceChart";
import "./StatsPage.css";

function StatsPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("highscores");
    const entries = raw ? JSON.parse(raw) : [];

    if (entries.length === 0) {
      setStats(null);
      return;
    }

    const totalGames = entries.length;

    const avgScore = Math.round(
      entries.reduce((sum, entry) => sum + (entry.score / entry.total) * 100, 0)
      / totalGames
    );

    const best = entries.reduce((a, b) =>
      a.score / a.total > b.score / b.total ? a : b
    );

    const worst = entries.reduce((a, b) =>
      a.score / a.total < b.score / b.total ? a : b
    );

    setStats({ totalGames, avgScore, best, worst, recentTen: entries.slice(-10) });
  }, []);

  if (!stats) {
    return (
      <div className="stats-empty">
        <h2>Ingen statistik ännu</h2>
        <p>Spela ett quiz så visas dina resultat här!</p>
      </div>
    );
  }

  return (
    <div className="stats-page">
      <h1>Din statistik</h1>

      <div className="stat-cards">
        <StatCard label="Antal spelade quiz" value={stats.totalGames} />
        <StatCard label="Snittpoäng" value={`${stats.avgScore}%`} />
        <StatCard
          label="Bästa resultat"
          value={`${stats.best.score}/${stats.best.total}`}
          sub={stats.best.name}
        />
        <StatCard
          label="Sämsta resultat"
          value={`${stats.worst.score}/${stats.worst.total}`}
          sub={stats.worst.name}
        />
      </div>

      <h2>Senaste 10 spelen</h2>
      <PerformanceChart entries={stats.recentTen} />
    </div>
  );
}

export default StatsPage;