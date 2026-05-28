import "./PerformanceChart.css";

function PerformanceChart({ entries }) {
  if (!entries || entries.length === 0) {
    return <p className="chart-empty">Inga spel att visa ännu.</p>;
  }

  return (
    <div className="chart">
      {entries.map((entry, index) => {
        const percent = Math.round((entry.score / entry.total) * 100);

        const barColor =
          percent >= 70 ? "#4caf50" :
          percent >= 40 ? "#ff9800" :
          "#f44336";

        return (
          <div className="chart-bar-wrapper" key={index}>
            <div className="chart-bar-container">
              <div
                className="chart-bar"
                style={{ height: `${percent}%`, backgroundColor: barColor }}
                title={`${entry.name}: ${percent}%`}
              />
            </div>
            <span className="chart-label">{percent}%</span>
          </div>
        );
      })}
    </div>
  );
}

export default PerformanceChart;