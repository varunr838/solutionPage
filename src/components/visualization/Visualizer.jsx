import React, { useState } from 'react';

export default function Visualizer({ steps = [] }) {
  const [current, setCurrent] = useState(0);

  if (!steps.length) return null;

  return (
    <section className="section-card" id="visualization">
      <div className="section-header">
        <h2 className="section-title">Step-by-Step Visualization</h2>
      </div>
      <div className="visual-diagram">
        <svg width="100%" height="400" viewBox="0 0 800 400">
          {steps[current].svg}
        </svg>
      </div>
      <div className="visualization-controls">
        <div className="step-indicator">{current + 1} / {steps.length}</div>
        <div className="control-buttons">
          <button className="btn-control" onClick={() => setCurrent(c => c - 1)} disabled={current === 0}>Back</button>
          <button className="btn-control" onClick={() => setCurrent(c => c + 1)} disabled={current === steps.length - 1}>Next</button>
        </div>
      </div>
      <div className="algorithm-steps">
        {steps.map((s, i) => (
          <div key={i} className={`step-item ${i === current ? 'active' : ''}`}>
            <div className="step-number">{i + 1}</div>
            <div className="step-text">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}