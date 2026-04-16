import { useEffect, useRef, useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #f8fafc;
    --surface: #ffffff;
    --surface2: #f1f5f9;
    --border: #cbd5e1;
    --green: #009959;
    --cyan: #0077aa;
    --orange: #c95c10;
    --pink: #c4245e;
    --yellow: #9c7400;
    --text: #1e293b;
    --muted: #64748b;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Syne', sans-serif;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--sans); }

  .app {
    min-height: 100vh;
    padding: 32px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: 40px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 24px;
  }

  .header h1 {
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--cyan);
    font-family: var(--mono);
    margin-bottom: 8px;
  }

  .header h2 {
    font-size: 28px;
    font-weight: 800;
    color: var(--text);
    line-height: 1.1;
  }

  .tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 32px;
    background: var(--surface);
    padding: 4px;
    border-radius: 8px;
    border: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .tab {
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.15s;
  }

  .tab:hover { color: var(--text); background: var(--surface2); }
  .tab.active { background: var(--surface2); color: var(--cyan); border: 1px solid var(--border); }

  .diagram { animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

  /* ---- DIAGRAM 1: GPU Overview ---- */
  .gpu-schematic {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
  }

  .gpu-schematic h3 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 20px;
  }

  .gpu-body {
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 20px;
    position: relative;
  }

  .gpu-label {
    position: absolute;
    top: -11px;
    left: 20px;
    background: var(--surface);
    padding: 0 8px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--cyan);
    letter-spacing: 0.1em;
  }

  .gpu-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    align-items: flex-start;
  }

  .memory-block {
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border: 1px solid var(--orange);
    border-radius: 8px;
    padding: 12px 16px;
    text-align: center;
    flex-shrink: 0;
  }

  .memory-block .label {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 4px;
  }

  .memory-block .value {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--text);
    font-weight: 600;
  }

  .sm-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    flex: 1;
  }

  .sm-chip {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 4px;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s;
    position: relative;
  }

  .sm-chip:hover, .sm-chip.active {
    border-color: var(--green);
    background: #e8f5ee;
  }

  .sm-chip .sm-label {
    font-family: var(--mono);
    font-size: 8px;
    color: var(--muted);
    display: block;
    margin-bottom: 3px;
  }

  .sm-chip .sm-num {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--green);
    font-weight: 600;
  }

  .sm-detail {
    margin-top: 16px;
    background: #e8f5ee;
    border: 1px solid var(--green);
    border-radius: 8px;
    padding: 16px;
    display: none;
  }

  .sm-detail.visible { display: block; }

  .sm-detail h4 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .sm-internals {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .sm-component {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 10px;
    text-align: center;
  }

  .sm-component .c-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    display: block;
    margin-bottom: 3px;
  }

  .sm-component .c-value {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
  }

  .interface-bar {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 16px;
    text-align: center;
    margin-bottom: 12px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.08em;
  }

  /* ---- DIAGRAM 2: Execution Hierarchy ---- */
  .hierarchy {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .h-level {
    display: flex;
    align-items: stretch;
    gap: 0;
  }

  .h-label {
    width: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
  }

  .h-label span {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: right;
  }

  .h-connector {
    width: 2px;
    background: var(--border);
    flex-shrink: 0;
    align-self: stretch;
  }

  .h-content {
    flex: 1;
    padding: 12px 0 12px 16px;
  }

  .grid-box {
    background: var(--surface);
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .grid-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .blocks-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .block-box {
    background: var(--surface2);
    border: 1px solid var(--pink);
    border-radius: 8px;
    padding: 10px;
    min-width: 120px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .block-box:hover, .block-box.sel {
    border-color: var(--pink);
    background: #fce8f0;
    box-shadow: 0 0 12px #c4245e22;
  }

  .block-box .bb-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--pink);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    display: block;
  }

  .threads-mini {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2px;
  }

  .thread-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: all 0.1s;
  }

  .thread-dot.warp-0 { background: #bbf7d0; border-color: var(--green); }
  .thread-dot.warp-1 { background: #bae6fd; border-color: var(--cyan); }
  .thread-dot.warp-2 { background: #fed7aa; border-color: var(--orange); }
  .thread-dot.warp-3 { background: #fbcfe8; border-color: var(--pink); }

  .warp-legend {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .warp-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
  }

  .warp-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }

  /* ---- DIAGRAM 3: Warp execution on SM ---- */
  .warp-diagram {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .sm-box {
    background: var(--surface);
    border: 2px solid var(--green);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .sm-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--green);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .scheduler-row {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
  }

  .scheduler {
    flex: 1;
    background: #e8f5ee;
    border: 1px solid var(--green);
    border-radius: 6px;
    padding: 6px;
    text-align: center;
    font-family: var(--mono);
    font-size: 9px;
    color: var(--green);
  }

  .warp-pool {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }

  .warp-card {
    border-radius: 5px;
    padding: 6px 4px;
    text-align: center;
    font-family: var(--mono);
    font-size: 9px;
    border: 1px solid;
    cursor: pointer;
    transition: all 0.15s;
  }

  .warp-card.ready { background: #d1fae5; border-color: var(--green); color: var(--green); }
  .warp-card.stalled { background: #ffedd5; border-color: var(--orange); color: var(--orange); }
  .warp-card.executing { background: #fef9c3; border-color: var(--yellow); color: var(--yellow); animation: pulse 0.8s infinite alternate; }
  .warp-card.idle { background: #f1f5f9; border-color: var(--muted); color: var(--muted); }
  .warp-card.selected {
    outline: 1px solid var(--cyan);
    box-shadow: 0 0 0 2px #0077aa26;
    transform: translateY(-1px);
  }
  @keyframes pulse { from { opacity: 0.7; } to { opacity: 1; } }

  .warp-dropdown {
    margin-top: 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface2);
    padding: 10px;
  }

  .warp-dropdown-title {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }

  .warp-dropdown-line {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--text);
    line-height: 1.5;
  }

  .warp-legend-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
  }

  .warp-legend-box h4 {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .legend-badge {
    padding: 3px 8px;
    border-radius: 4px;
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 600;
    border: 1px solid;
    min-width: 70px;
    text-align: center;
  }

  .legend-badge.ready { background: #d1fae5; border-color: var(--green); color: var(--green); }
  .legend-badge.stalled { background: #ffedd5; border-color: var(--orange); color: var(--orange); }
  .legend-badge.executing { background: #fef9c3; border-color: var(--yellow); color: var(--yellow); }

  .legend-desc {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    line-height: 1.5;
  }

  .stat-row {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .stat-chip {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-family: var(--mono);
  }

  .stat-chip .s-label {
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 2px;
  }

  .stat-chip .s-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--cyan);
  }

  /* ---- DIAGRAM 4: Lanes within a warp ---- */
  .lane-panel {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 16px;
  }

  .lane-box {
    background: var(--surface);
    border: 2px solid var(--cyan);
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .lane-box .box-label {
    position: absolute;
    top: -10px;
    left: 12px;
    background: var(--surface);
    padding: 0 6px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--cyan);
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .lane-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 6px;
    margin-bottom: 12px;
  }

  .lane-cell {
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 4px;
    text-align: center;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    background: var(--surface2);
    transition: all 0.15s;
  }

  .lane-cell.active {
    border-color: var(--green);
    color: var(--green);
    background: #d1fae5;
  }

  .lane-cell.helper {
    border-color: var(--yellow);
    color: var(--yellow);
    background: #fef9c3;
  }

  .lane-cell.path-a {
    border-color: var(--cyan);
    color: var(--cyan);
    background: #dbeafe;
  }

  .lane-cell.path-b {
    border-color: var(--pink);
    color: var(--pink);
    background: #fce8f0;
  }

  .lane-cell.idle {
    opacity: 0.45;
  }

  .lane-controls {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .lane-btn {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 8px 6px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .lane-btn:hover {
    color: var(--text);
    border-color: var(--cyan);
  }

  .lane-btn.active {
    color: var(--cyan);
    border-color: var(--cyan);
    background: #dbeafe;
  }

  .lane-info {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .lane-info h4 {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--cyan);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .lane-note {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text);
    line-height: 1.5;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 10px;
  }

  /* ---- DIAGRAM 5: Memory hierarchy ---- */
  .mem-hierarchy {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mem-level {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--border);
    cursor: default;
    transition: all 0.15s;
  }

  .mem-level:hover { border-color: var(--cyan); transform: translateX(4px); }

  .mem-bar-wrap {
    flex: 1;
    height: 8px;
    background: var(--surface2);
    border-radius: 4px;
    overflow: hidden;
  }

  .mem-bar {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .mem-info {
    display: flex;
    flex-direction: column;
    min-width: 140px;
  }

  .mem-name {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .mem-scope {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .mem-stats {
    display: flex;
    gap: 16px;
    min-width: 200px;
  }

  .mem-stat {
    text-align: right;
  }

  .mem-stat .ms-label {
    font-family: var(--mono);
    font-size: 8px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
  }

  .mem-stat .ms-value {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
  }

  /* Annotations */
  .annotation {
    background: var(--surface2);
    border-left: 3px solid var(--yellow);
    padding: 10px 14px;
    border-radius: 0 6px 6px 0;
    margin-top: 16px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text);
    line-height: 1.6;
  }

  .annotation strong {
    color: var(--yellow);
  }

  .section-title {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 16px;
  }

  /* ---- Launch Syntax & dim3 ---- */
  .syntax-display {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px 18px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
    line-height: 1.9;
    margin-bottom: 12px;
  }
  .syntax-display .kw { color: var(--cyan); }
  .syntax-display .cm { color: var(--muted); font-style: italic; }
  .syntax-display .fn { color: var(--orange); }
  .syntax-display .num { color: var(--green); }

  .example-tabs { display: flex; gap: 6px; margin-bottom: 12px; }
  .example-tab {
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.15s;
  }
  .example-tab.active { color: var(--cyan); border-color: var(--cyan); background: #dbeafe; }
  .example-tab:hover { color: var(--text); }

  .grid-vis-wrap {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  .mini-grid-container { flex-shrink: 0; }
  .mini-grid-label {
    font-family: var(--mono);
    font-size: 9px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    display: block;
  }
  .mini-grid { display: inline-grid; gap: 3px; }
  .mini-block {
    width: 54px; height: 42px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface2);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 2px;
    cursor: pointer; transition: all 0.15s; font-family: var(--mono);
  }
  .mini-block:hover, .mini-block.selb { border-color: var(--cyan); background: #dbeafe; }
  .mini-block .mb-label { font-size: 7px; color: var(--muted); text-transform: uppercase; }
  .mini-block .mb-coords { font-size: 9px; color: var(--cyan); }

  .thread-detail-panel {
    flex: 1; min-width: 240px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; padding: 14px;
  }
  .thread-detail-panel h4 {
    font-family: var(--mono); font-size: 10px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .thread-grid-vis { display: inline-grid; gap: 3px; margin-bottom: 10px; max-width: 100%; }
  .tcell {
    width: 30px; height: 26px;
    border: 1px solid var(--border); border-radius: 3px;
    background: var(--surface2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 7px; color: var(--muted);
    flex-direction: column; gap: 1px;
  }
  .tcell.warp-even { background: #bbf7d0; border-color: var(--green); color: var(--green); }
  .tcell.warp-odd  { background: #bae6fd; border-color: var(--cyan);  color: var(--cyan);  }

  .layer-strip { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; }
  .layer-card {
    border: 1px solid var(--border); border-radius: 8px;
    padding: 10px 12px; background: var(--surface2);
  }
  .layer-card .lc-z {
    font-family: var(--mono); font-size: 9px; color: var(--pink);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; display: block;
  }

  /* ---- Bank Conflicts ---- */
  .bank-section { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border); }
  .bank-mode-row { display: flex; gap: 8px; margin-bottom: 14px; align-items: center; flex-wrap: wrap; }
  .bank-btn {
    padding: 7px 14px; border-radius: 6px;
    border: 1px solid var(--border); background: var(--surface2); color: var(--muted);
    font-family: var(--mono); font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.08em; cursor: pointer; transition: all 0.15s;
  }
  .bank-btn.b-conflict { border-color: var(--pink); color: var(--pink); background: #fce8f0; }
  .bank-btn.b-ok { border-color: var(--green); color: var(--green); background: #d1fae5; }
  .bank-vis { overflow-x: auto; padding-bottom: 8px; }
  .bank-col-heads { display: flex; gap: 2px; margin-bottom: 3px; margin-left: 52px; }
  .bank-ch {
    width: 24px; text-align: center;
    font-family: var(--mono); font-size: 7px; color: var(--muted); flex-shrink: 0;
  }
  .bank-row-wrap { display: flex; gap: 2px; margin-bottom: 2px; align-items: center; }
  .bank-row-lbl {
    width: 48px; font-family: var(--mono); font-size: 8px; color: var(--muted);
    text-align: right; padding-right: 4px; flex-shrink: 0;
  }
  .bcell {
    width: 24px; height: 24px; border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 7px; font-weight: 600;
    flex-shrink: 0; border: 1px solid;
    transition: background 0.25s, border-color 0.25s;
  }

  /* ---- SM Sub-Partition View ---- */
  .sm-shared-bar { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
  .sm-shared-chip {
    background: var(--surface); border: 1px solid var(--orange); border-radius: 6px;
    padding: 6px 10px; font-family: var(--mono); font-size: 9px; color: var(--orange);
    flex: 1; min-width: 120px; text-align: center;
  }
  .sm-subparts {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 10px;
  }
  .subpart {
    border: 1px solid var(--border); border-radius: 8px; padding: 8px;
    background: var(--surface); cursor: pointer; transition: all 0.15s;
  }
  .subpart:hover { border-color: var(--cyan); }
  .subpart.sp-active { border: 2px solid var(--cyan); background: #f0f7ff; }
  .sp-header {
    font-family: var(--mono); font-size: 8px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; font-weight: 600;
  }
  .sp-core-grid {
    display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px; margin-bottom: 5px;
  }
  .core-dot { width: 9px; height: 9px; border-radius: 2px; background: #bbf7d0; border: 1px solid var(--green); }
  .sp-badges { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
  .sp-badge { font-family: var(--mono); font-size: 8px; color: var(--muted); display: flex; align-items: center; gap: 3px; }
  .sp-badge-dot { width: 7px; height: 7px; border-radius: 2px; flex-shrink: 0; }
  .sp-warp-slots { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
  .sp-warp-slot {
    border: 1px solid var(--border); border-radius: 2px; padding: 1px 0;
    text-align: center; font-family: var(--mono); font-size: 6px;
    color: var(--muted); background: var(--surface2);
  }
  .sp-detail-box {
    border: 2px solid var(--cyan); border-radius: 8px; padding: 12px;
    background: #f0f7ff; margin-top: 4px;
  }
  .sp-detail-box h5 {
    font-family: var(--mono); font-size: 10px; color: var(--cyan);
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .sp-thread-map { display: grid; grid-template-columns: repeat(32, 1fr); gap: 1px; margin-bottom: 4px; }
  .sp-thread-lane {
    height: 18px; background: #bbf7d0; border: 1px solid var(--green); border-radius: 2px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 5px; color: var(--green);
  }
  .sp-core-row { display: grid; grid-template-columns: repeat(32, 1fr); gap: 1px; margin-bottom: 8px; }
  .sp-core-cell { height: 14px; background: #d1fae5; border: 1px solid var(--green); border-radius: 2px; }

  @media (max-width: 900px) {
    .lane-panel,
    .warp-diagram,
    .sm-subparts {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const memData = [
  { name: "Registers", scope: "Per Thread", latency: "~1 cycle", size: "255 regs/thread", color: "#009959", barWidth: "100%", managed: "Compiler" },
  { name: "Shared Memory", scope: "Per Block (SM)", latency: "~1–5 cycles", size: "48–100 KB/SM", color: "#0077aa", barWidth: "85%", managed: "Programmer" },
  { name: "L1 Cache", scope: "Per SM", latency: "~20 cycles", size: "Shared w/ SMEM", color: "#9c7400", barWidth: "65%", managed: "Hardware" },
  { name: "L2 Cache", scope: "Device-wide", latency: "~100 cycles", size: "~40 MB (A100)", color: "#c95c10", barWidth: "40%", managed: "Hardware" },
  { name: "Global Memory (DRAM)", scope: "Device-wide", latency: "~200+ cycles", size: "Tens of GB", color: "#c4245e", barWidth: "10%", managed: "Programmer" },
];

const warpStates = [
  { id: 0, state: "executing", label: "W0" },
  { id: 1, state: "ready", label: "W1" },
  { id: 2, state: "stalled", label: "W2" },
  { id: 3, state: "ready", label: "W3" },
  { id: 4, state: "stalled", label: "W4" },
  { id: 5, state: "ready", label: "W5" },
  { id: 6, state: "executing", label: "W6" },
  { id: 7, state: "stalled", label: "W7" },
  { id: 8, state: "ready", label: "W8" },
  { id: 9, state: "stalled", label: "W9" },
  { id: 10, state: "ready", label: "W10" },
  { id: 11, state: "stalled", label: "W11" },
  { id: 12, state: "ready", label: "W12" },
  { id: 13, state: "executing", label: "W13" },
  { id: 14, state: "stalled", label: "W14" },
  { id: 15, state: "ready", label: "W15" },
];

const laneScenarios = [
  {
    label: "Full Warp",
    title: "All 32 lanes do useful work",
    detail: "Classic SIMT map: each lane handles one contiguous element, maximizing memory coalescing and throughput.",
    stats: [
      { label: "Active lanes", value: "32 / 32" },
      { label: "Issue efficiency", value: "~100%" },
      { label: "Typical pattern", value: "map / stencil" },
    ],
    laneClass: () => "active",
  },
  {
    label: "Reduction",
    title: "Warp reduction, lane 0 commits result",
    detail: "Every lane contributes a partial value via shuffle operations; lane 0 performs the single global write or atomic.",
    stats: [
      { label: "Contributing lanes", value: "32 / 32" },
      { label: "Global writes", value: "1 per warp" },
      { label: "Benefit", value: "fewer atomics" },
    ],
    laneClass: (lane) => (lane === 0 ? "helper" : "active"),
  },
  {
    label: "Divergence",
    title: "Branch divergence serializes execution",
    detail: "Half the lanes take one path and half take another. The warp runs both paths serially with masking.",
    stats: [
      { label: "Path A lanes", value: "16" },
      { label: "Path B lanes", value: "16" },
      { label: "Effective throughput", value: "~50%" },
    ],
    laneClass: (lane) => (lane < 16 ? "path-a" : "path-b"),
  },
  {
    label: "Broadcast/Vote",
    title: "One lane serves the warp",
    detail: "Lane 0 can load once and broadcast via shuffle, or aggregate a warp vote result before one control decision.",
    stats: [
      { label: "Loader lane", value: "lane 0" },
      { label: "Consumers", value: "31 peers" },
      { label: "Redundant loads", value: "reduced" },
    ],
    laneClass: (lane) => (lane === 0 ? "helper" : "active"),
  },
];

export default function App() {
  const [tab, setTab] = useState(0);
  const [activeSM, setActiveSM] = useState(null);
  const [activeBlock, setActiveBlock] = useState(0);
  const [laneScenario, setLaneScenario] = useState(0);
  const [activeWarp, setActiveWarp] = useState(null);
  const [gridExample, setGridExample] = useState(0);
  const [selectedGridBlock, setSelectedGridBlock] = useState(null);
  const [bankMode, setBankMode] = useState(0);
  const [activeSMSubPart, setActiveSMSubPart] = useState(null);
  const smDetailRef = useRef(null);

  const tabs = ["GPU Overview", "Execution Hierarchy", "Warps and Lanes", "Memory Hierarchy"];

  // 128 threads in 4 warps of 32
  const threads = Array.from({ length: 128 }, (_, i) => ({ id: i, warp: Math.floor(i / 32) }));
  const lanes = Array.from({ length: 32 }, (_, i) => i);
  const selectedLaneScenario = laneScenarios[laneScenario];
  const warpPool = [
    ...warpStates,
    ...Array.from({ length: 16 }, (_, i) => ({ id: i + 16, state: "idle", label: `W${i + 16}` })),
  ];
  const selectedWarp = warpPool.find((w) => w.id === activeWarp) || null;

  useEffect(() => {
    if (tab !== 0 || activeSM === null) return;
    smDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSM, tab]);

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <div className="header">
          <h1>CUDA Architecture Reference (NVIDIA A100)</h1>
          <h2>GPU Execution Model — Visual Diagrams</h2>
        </div>

        <div className="tabs">
          {tabs.map((t, i) => (
            <button key={i} className={`tab ${tab === i ? "active" : ""}`} onClick={() => setTab(i)}>
              {t}
            </button>
          ))}
        </div>

        {/* TAB 0: GPU Overview */}
        {tab === 0 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>NVIDIA GPU — Schematic Architecture (Ampere A100 scale)</h3>
              <div className="interface-bar">↕ PCIe / NVLink Interface to CPU Host</div>
              <div className="gpu-body">
                <span className="gpu-label">GPU DEVICE</span>
                <div className="gpu-row">
                  <div className="memory-block">
                    <span className="label">Global Mem</span>
                    <span className="value">80 GB HBM2e</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Streaming Multiprocessors — click any SM to inspect
                    </div>
                    <div className="sm-grid">
                      {Array.from({ length: 108 }, (_, i) => (
                        <div
                          key={i}
                          className={`sm-chip ${activeSM === i ? "active" : ""}`}
                          onClick={() => { setActiveSM(activeSM === i ? null : i); setActiveSMSubPart(null); }}
                        >
                          <span className="sm-label">SM</span>
                          <span className="sm-num">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div ref={smDetailRef} className={`sm-detail ${activeSM !== null ? "visible" : ""}`}>
                  <h4>SM {activeSM} — Ampere Sub-Partition Architecture</h4>

                  {/* Shared resources bar */}
                  <div className="sm-shared-bar">
                    <div className="sm-shared-chip">
                      <div style={{ color: "var(--muted)", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>On-chip (SMEM + L1)</div>
                      192 KB total — up to 164 KB as shared mem
                    </div>
                    <div className="sm-shared-chip">
                      <div style={{ color: "var(--muted)", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Register File</div>
                      256 KB = 65,536 × 32-bit regs
                    </div>
                    <div className="sm-shared-chip">
                      <div style={{ color: "var(--muted)", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Capacity limits</div>
                      64 warps · 2048 threads · 32 blocks
                    </div>
                  </div>

                  {/* 4 Sub-partitions */}
                  <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    4 sub-partitions — click one to see warp→core mapping
                  </div>
                  <div className="sm-subparts">
                    {[0, 1, 2, 3].map((sp) => (
                      <div key={sp} className={`subpart ${activeSMSubPart === sp ? "sp-active" : ""}`}
                        onClick={() => setActiveSMSubPart(activeSMSubPart === sp ? null : sp)}>
                        <div className="sp-header">Sub-Part {sp} · Sched {sp}</div>
                        {/* 32 CUDA FP32/INT32 cores */}
                        <div className="sp-core-grid">
                          {Array.from({ length: 32 }, (_, c) => <div key={c} className="core-dot" />)}
                        </div>
                        <div className="sp-badges">
                          <div className="sp-badge">
                            <div className="sp-badge-dot" style={{ background: "#bae6fd", border: "1px solid #0077aa" }} />
                            16 FP64 units
                          </div>
                          <div className="sp-badge">
                            <div className="sp-badge-dot" style={{ background: "#fbcfe8", border: "1px solid #c4245e" }} />
                            1 Tensor Core (3rd gen)
                          </div>
                        </div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 7, color: "var(--muted)", marginBottom: 3 }}>16 resident warp slots:</div>
                        <div className="sp-warp-slots">
                          {Array.from({ length: 16 }, (_, w) => (
                            <div key={w} className="sp-warp-slot">W{sp * 16 + w}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sub-partition detail on click */}
                  {activeSMSubPart !== null && (
                    <div className="sp-detail-box">
                      <h5>Sub-Partition {activeSMSubPart} — how one warp executes</h5>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 6 }}>
                        32 threads of one warp dispatch to 32 CUDA cores simultaneously (SIMT):
                      </div>
                      <div className="sp-thread-map">
                        {Array.from({ length: 32 }, (_, t) => (
                          <div key={t} className="sp-thread-lane" title={`Thread ${t}`}>{t}</div>
                        ))}
                      </div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "var(--muted)", marginBottom: 4, textAlign: "center" }}>
                        ↓ 1-to-1: each thread lane → one CUDA core
                      </div>
                      <div className="sp-core-row">
                        {Array.from({ length: 32 }, (_, c) => (
                          <div key={c} className="sp-core-cell" title={`Core ${c}`} />
                        ))}
                      </div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text)", lineHeight: 1.6 }}>
                        <strong style={{ color: "var(--cyan)" }}>Scheduler {activeSMSubPart}</strong> selects one ready warp per clock and issues its instruction to all 32 cores at once. If the chosen warp stalls (e.g. on a memory load), the scheduler instantly switches to another of its 16 resident warps — zero idle cycles provided there are enough warps to cover latency. The 3 other sub-partitions do the same independently and in parallel.
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="annotation">
                <strong>Key insight:</strong> 108 SMs × 2048 threads/SM = <strong style={{ color: "var(--cyan)" }}>221,184 concurrent threads</strong> on an A100. Each SM has 4 independent sub-partitions, each with its own warp scheduler, 32 CUDA cores, and 16 warp slots. The GPU hides memory latency by rotating between resident warps rather than making individual threads fast. <strong style={{ color: "var(--orange)" }}>→ See the Execution Hierarchy tab</strong> for how grids and blocks decompose into warps that land on these SMs.
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: Execution Hierarchy */}
        {tab === 1 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>CUDA Execution Hierarchy — Grid → Block → Thread → Warp</h3>
              <div className="grid-box" style={{ marginBottom: 16 }}>
                <span className="box-label">GRID (kernel launch)</span>
                <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  gridDim.x up to 2³¹−1 &nbsp;|&nbsp; gridDim.y, .z up to 2¹⁶−1
                </div>
                <div className="blocks-row">
                  {Array.from({ length: 6 }, (_, bi) => (
                    <div
                      key={bi}
                      className={`block-box ${activeBlock === bi ? "sel" : ""}`}
                      onClick={() => setActiveBlock(bi)}
                    >
                      <span className="bb-label">Block ({bi}, 0, 0)</span>
                      <div className="threads-mini">
                        {Array.from({ length: 128 }, (_, ti) => (
                          <div
                            key={ti}
                            className={`thread-dot ${activeBlock === bi ? `warp-${Math.floor(ti / 32)}` : ""}`}
                          />
                        ))}
                      </div>
                      {activeBlock === bi && (
                        <div className="warp-legend">
                          {["W0 (0–31)", "W1 (32–63)", "W2 (64–95)", "W3 (96–127)"].map((w, wi) => (
                            <div key={wi} className="warp-pill">
                              <div className={`warp-dot warp-${wi}`} style={{
                                background: ["#bbf7d0","#bae6fd","#fed7aa","#fbcfe8"][wi],
                                border: `1px solid ${["var(--green)","var(--cyan)","var(--orange)","var(--pink)"][wi]}`
                              }} />
                              {w}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="block-box" style={{ border: "1px dashed var(--border)", opacity: 0.4 }}>
                    <span className="bb-label" style={{ color: "var(--muted)" }}>…more blocks</span>
                  </div>
                </div>
              </div>
              <div className="annotation">
                <strong>Selected block {activeBlock}:</strong> 128 threads → 4 warps of 32. All threads in this block are scheduled on the <strong style={{ color: "var(--green)" }}>same SM</strong>, distributed across its 4 sub-partitions (up to 16 warps each). They share that SM's shared memory and can call <code style={{ color: "var(--cyan)" }}>__syncthreads()</code>. Blocks in <em>different</em> grid positions run independently with no guaranteed execution order. <strong style={{ color: "var(--orange)" }}>→ See the GPU Overview tab</strong> to explore the SM sub-partition and warp scheduler structure.
              </div>
              <div className="stat-row">
                {[
                  { label: "blockDim.x,y ≤", value: "1024" },
                  { label: "blockDim.z ≤", value: "64" },
                  { label: "threads/block ≤", value: "1024" },
                  { label: "warp size", value: "32" },
                ].map((s, i) => (
                  <div key={i} className="stat-chip">
                    <span className="s-label">{s.label}</span>
                    <span className="s-value">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* ---- Launch Syntax & Grid/Block Visualizer ---- */}
              <div style={{ marginTop: 28, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
                <div className="section-title">Kernel Launch Syntax — &lt;&lt;&lt; grid, block &gt;&gt;&gt;</div>
                <div className="syntax-display">
                  <span className="kw">dim3</span> grid(<span className="num">Gx</span>, <span className="num">Gy</span>, <span className="num">Gz</span>);&nbsp;&nbsp;<span className="cm">// number of blocks per dimension</span><br/>
                  <span className="kw">dim3</span> block(<span className="num">Bx</span>, <span className="num">By</span>, <span className="num">Bz</span>);&nbsp;&nbsp;<span className="cm">// threads per block per dimension</span><br/>
                  <span className="fn">myKernel</span>&lt;&lt;&lt;grid, block&gt;&gt;&gt;(args);&nbsp;&nbsp;<span className="cm">// launch kernel on GPU</span>
                </div>

                <div className="example-tabs">
                  {["1D — array", "2D — image", "3D — volume"].map((label, idx) => (
                    <button key={idx} className={`example-tab ${gridExample === idx ? "active" : ""}`}
                      onClick={() => { setGridExample(idx); setSelectedGridBlock(null); }}>
                      {label}
                    </button>
                  ))}
                </div>

                {/* 1D example */}
                {gridExample === 0 && (
                  <>
                    <div className="syntax-display">
                      <span className="cm">// Process 128 elements: 4 blocks × 32 threads each</span><br/>
                      <span className="kw">dim3</span> grid(<span className="num">4</span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// gridDim.x = 4</span><br/>
                      <span className="kw">dim3</span> block(<span className="num">32</span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// blockDim.x = 32</span><br/>
                      <span className="cm">// int i = blockIdx.x * 32 + threadIdx.x;</span>
                    </div>
                    <div className="grid-vis-wrap">
                      <div className="mini-grid-container">
                        <span className="mini-grid-label">Grid — 4 blocks along x</span>
                        <div className="mini-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                          {Array.from({ length: 4 }, (_, i) => (
                            <div key={i} className={`mini-block ${selectedGridBlock === i ? "selb" : ""}`}
                              onClick={() => setSelectedGridBlock(selectedGridBlock === i ? null : i)}>
                              <span className="mb-label">block</span>
                              <span className="mb-coords">({i})</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginTop: 6 }}>
                          Click a block to inspect its threads
                        </div>
                      </div>
                      {selectedGridBlock !== null && (
                        <div className="thread-detail-panel">
                          <h4>Block {selectedGridBlock} — 32 threads (1 warp)</h4>
                          <div className="thread-grid-vis" style={{ gridTemplateColumns: "repeat(8, 1fr)" }}>
                            {Array.from({ length: 32 }, (_, t) => (
                              <div key={t} className="tcell warp-even">
                                <div>T{t}</div>
                                <div style={{ fontSize: 5, opacity: 0.8 }}>{selectedGridBlock * 32 + t}</div>
                              </div>
                            ))}
                          </div>
                          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", lineHeight: 1.7 }}>
                            <span style={{ color: "var(--green)" }}>threadIdx.x</span>: 0 → 31<br/>
                            <span style={{ color: "var(--cyan)" }}>blockIdx.x</span>: {selectedGridBlock}<br/>
                            Global id = {selectedGridBlock} × 32 + [0…31] = <strong style={{ color: "var(--text)" }}>{selectedGridBlock * 32}…{selectedGridBlock * 32 + 31}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* 2D example */}
                {gridExample === 1 && (
                  <>
                    <div className="syntax-display">
                      <span className="cm">// Process a 1024×1024 image: 64×64 grid of 16×16-thread blocks</span><br/>
                      <span className="kw">dim3</span> grid(<span className="num">64</span>, <span className="num">64</span>);&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// 4096 blocks total</span><br/>
                      <span className="kw">dim3</span> block(<span className="num">16</span>, <span className="num">16</span>);&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// 256 threads/block, 8 warps</span><br/>
                      <span className="cm">// col = blockIdx.x*16 + threadIdx.x;&nbsp; row = blockIdx.y*16 + threadIdx.y;</span>
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 8 }}>
                      Showing a 4×4 corner of the full 64×64 grid — click a block
                    </div>
                    <div className="grid-vis-wrap">
                      <div className="mini-grid-container">
                        <span className="mini-grid-label">Grid corner (4 × 4 of 64 × 64 blocks)</span>
                        <div className="mini-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                          {Array.from({ length: 16 }, (_, i) => {
                            const bx = i % 4, by = Math.floor(i / 4);
                            return (
                              <div key={i} className={`mini-block ${selectedGridBlock === i ? "selb" : ""}`}
                                onClick={() => setSelectedGridBlock(selectedGridBlock === i ? null : i)}>
                                <span className="mb-label">block</span>
                                <span className="mb-coords">({bx},{by})</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {selectedGridBlock !== null && (() => {
                        const bx = selectedGridBlock % 4, by = Math.floor(selectedGridBlock / 4);
                        return (
                          <div className="thread-detail-panel">
                            <h4>Block ({bx},{by}) — 16×16 = 256 threads, 8 warps</h4>
                            <div className="thread-grid-vis" style={{ gridTemplateColumns: "repeat(16, 1fr)" }}>
                              {Array.from({ length: 256 }, (_, t) => {
                                const tx = t % 16, ty = Math.floor(t / 16);
                                const warpId = Math.floor(t / 32);
                                return (
                                  <div key={t} className={`tcell ${warpId % 2 === 0 ? "warp-even" : "warp-odd"}`}
                                    title={`threadIdx=(${tx},${ty})`}>
                                    <div style={{ fontSize: 5 }}>{tx},{ty}</div>
                                  </div>
                                );
                              })}
                            </div>
                            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", lineHeight: 1.7 }}>
                              col = {bx}×16 + threadIdx.x = <strong style={{ color: "var(--text)" }}>{bx * 16}…{bx * 16 + 15}</strong><br/>
                              row = {by}×16 + threadIdx.y = <strong style={{ color: "var(--text)" }}>{by * 16}…{by * 16 + 15}</strong><br/>
                              <span style={{ color: "var(--green)" }}>■</span> even warps &nbsp;
                              <span style={{ color: "var(--cyan)" }}>■</span> odd warps (threads 0–31 laid out left→right, then next row)
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </>
                )}

                {/* 3D example */}
                {gridExample === 2 && (
                  <>
                    <div className="syntax-display">
                      <span className="cm">// Process a 32×32×8 volume: 2×2×2 grid of 16×16×4-thread blocks</span><br/>
                      <span className="kw">dim3</span> grid(<span className="num">2</span>, <span className="num">2</span>, <span className="num">2</span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// 8 blocks total</span><br/>
                      <span className="kw">dim3</span> block(<span className="num">16</span>, <span className="num">16</span>, <span className="num">4</span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm">// 1024 threads/block</span><br/>
                      <span className="cm">// z = blockIdx.z*4 + threadIdx.z;&nbsp; y = ...&nbsp; x = ...;</span>
                    </div>
                    <div className="layer-strip">
                      {Array.from({ length: 2 }, (_, z) => (
                        <div key={z} className="layer-card">
                          <span className="lc-z">z-layer {z}</span>
                          <div style={{ display: "inline-grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
                            {Array.from({ length: 4 }, (_, i) => {
                              const bx = i % 2, by = Math.floor(i / 2);
                              return (
                                <div key={i} style={{
                                  width: 46, height: 36,
                                  border: `1px solid ${z === 0 ? "#0077aa" : "#7c3aed"}`,
                                  borderRadius: 5,
                                  background: z === 0 ? "#bae6fd" : "#e9d5ff",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  flexDirection: "column", gap: 2, fontFamily: "var(--mono)",
                                }}>
                                  <span style={{ fontSize: 7, color: "var(--muted)" }}>block</span>
                                  <span style={{ fontSize: 9, color: z === 0 ? "#0077aa" : "#7c3aed" }}>({bx},{by},{z})</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 6, paddingLeft: 8 }}>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--muted)", lineHeight: 1.8 }}>
                          8 blocks total (2×2×2)<br/>
                          Each block: 16×16×<span style={{ color: "var(--pink)" }}>4</span> = 1024 threads<br/>
                          threadIdx has .x, .y, <span style={{ color: "var(--pink)" }}>.z</span><br/>
                          blockIdx has .x, .y, <span style={{ color: "var(--pink)" }}>.z</span>
                        </div>
                      </div>
                    </div>
                    <div className="annotation">
                      <strong>3D grids map naturally to volume data:</strong> simulations, medical imaging (CT/MRI), fluid dynamics. Each spatial axis maps to one CUDA dimension. The global index formula extends to three axes: <code style={{ color: "var(--cyan)" }}>gx = blockIdx.x * blockDim.x + threadIdx.x</code>, and independently for y and z. Warp layout is still along the x-axis first — threads with consecutive threadIdx.x are in the same warp.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Warps and Lanes */}
        {tab === 2 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>Warps and Lanes on a Single SM — Scheduling, Divergence, Cooperation</h3>
              <div className="warp-diagram">
                <div className="sm-box">
                  <span className="box-label">SM — Warp Pool (up to 64 warps)</span>
                  <div className="scheduler-row">
                    {["Sched 0", "Sched 1", "Sched 2", "Sched 3"].map((s, i) => (
                      <div key={i} className="scheduler">{s}</div>
                    ))}
                  </div>
                  <div className="warp-pool">
                    {warpPool.map((w) => (
                      <div
                        key={w.id}
                        className={`warp-card ${w.state} ${activeWarp === w.id ? "selected" : ""}`}
                        onClick={() => setActiveWarp(w.id)}
                      >
                        {w.label}
                        <div style={{ fontSize: 8, marginTop: 2 }}>{w.state}</div>
                      </div>
                    ))}
                  </div>
                  <div className="warp-dropdown">
                    <div className="warp-dropdown-title">
                      {selectedWarp ? `${selectedWarp.label} selected` : "Select a warp"}
                    </div>
                    <div className="warp-dropdown-line">
                      {selectedWarp ? (
                        <>
                          State: <strong style={{ color: "var(--cyan)" }}>{selectedWarp.state}</strong>. Click another warp in the pool to inspect it and sync the lane view below.
                        </>
                      ) : (
                        <>Click any warp in the pool to unhide its lane-level visualization below.</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="warp-legend-box">
                  <h4>Warp States</h4>
                  <div className="legend-item">
                    <div className="legend-badge executing">Executing</div>
                    <div className="legend-desc">Actively issuing instructions this clock cycle. 4 warps max simultaneously (one per scheduler).</div>
                  </div>
                  <div className="legend-item">
                    <div className="legend-badge ready">Ready</div>
                    <div className="legend-desc">All operands available. Eligible to be picked by a warp scheduler next cycle.</div>
                  </div>
                  <div className="legend-item">
                    <div className="legend-badge stalled">Stalled</div>
                    <div className="legend-desc">Waiting on global memory (~200 cycles), a dependency, or a sync barrier. Cannot execute.</div>
                  </div>
                  <div className="annotation" style={{ marginTop: 8 }}>
                    <strong>Latency hiding (why occupancy matters!):</strong> When W0 stalls on a memory fetch, the scheduler <em>immediately</em> switches to W1. No cycles are wasted, provided the warp pool is large enough.
                  </div>
                  <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                    <strong>Warp divergence:</strong> If threads within one warp take different branches of an <code style={{ color: "var(--cyan)" }}>if</code>, both paths execute serially with masking. Throughput halves for two-way divergence. Divergence <em>between</em> warps is free.
                  </div>
                </div>
              </div>
              {selectedWarp && (
                <>
                  <div className="lane-panel" style={{ marginTop: 16 }}>
                    <div className="lane-box">
                      <span className="box-label">{selectedWarp.label} (LANES 0–31)</span>
                      <div className="lane-grid">
                        {lanes.map((lane) => (
                          <div
                            key={lane}
                            className={`lane-cell ${selectedLaneScenario.laneClass(lane)}`}
                          >
                            L{lane}
                          </div>
                        ))}
                      </div>
                      <div className="lane-controls">
                        {laneScenarios.map((scenario, idx) => (
                          <button
                            key={scenario.label}
                            className={`lane-btn ${laneScenario === idx ? "active" : ""}`}
                            onClick={() => setLaneScenario(idx)}
                          >
                            {scenario.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="lane-info">
                      <h4>{selectedLaneScenario.title}</h4>
                      <div className="lane-note">{selectedLaneScenario.detail}</div>
                      <div className="lane-note">
                        Active warp context: <strong style={{ color: "var(--cyan)" }}>{selectedWarp.label}</strong> in state{" "}
                        <strong style={{ color: "var(--cyan)" }}>{selectedWarp.state}</strong>.
                      </div>
                      <div className="stat-row" style={{ marginTop: 0 }}>
                        {selectedLaneScenario.stats.map((s) => (
                          <div key={s.label} className="stat-chip" style={{ flex: 1 }}>
                            <span className="s-label">{s.label}</span>
                            <span className="s-value" style={{ fontSize: 12 }}>{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="annotation">
                    <strong>Practical rule:</strong> Keep lanes active together whenever possible. Restrict work to lane 0 only when it removes expensive operations (atomics, global writes, or redundant loads).
                  </div>
                  <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                    <strong>Lane-aware performance checks:</strong> Watch branch efficiency and warp execution efficiency in Nsight Compute. If they drop, lanes are likely idle or diverged.
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: Memory Hierarchy */}
        {tab === 3 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>GPU Memory Hierarchy — Speed vs Capacity</h3>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Bar width ∝ relative speed (inverse latency)
              </div>
              <div className="mem-hierarchy">
                {memData.map((m, i) => (
                  <div key={i} className="mem-level" style={{ background: `${m.color}08` }}>
                    <div className="mem-info">
                      <span className="mem-name" style={{ color: m.color }}>{m.name}</span>
                      <span className="mem-scope">{m.scope}</span>
                    </div>
                    <div className="mem-bar-wrap">
                      <div className="mem-bar" style={{ width: m.barWidth, background: m.color }} />
                    </div>
                    <div className="mem-stats">
                      <div className="mem-stat">
                        <span className="ms-label">Latency</span>
                        <span className="ms-value" style={{ color: m.color }}>{m.latency}</span>
                      </div>
                      <div className="mem-stat">
                        <span className="ms-label">Size</span>
                        <span className="ms-value" style={{ color: "var(--text)", fontSize: 11 }}>{m.size}</span>
                      </div>
                      <div className="mem-stat">
                        <span className="ms-label">Managed by</span>
                        <span className="ms-value" style={{ color: "var(--muted)", fontSize: 10 }}>{m.managed}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="annotation" style={{ marginTop: 16 }}>
                <strong>Core optimisation pattern:</strong> Load a tile of data from <span style={{ color: "#c4245e" }}>global memory</span> into <span style={{ color: "#0077aa" }}>shared memory</span> once. Reuse it many times from shared memory. This is the tile/cache pattern: trade one slow fetch for many fast reads. This is the basis of optimised matrix multiply, convolutions, etc.
              </div>
              <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                <strong>Note:</strong> <code style={{ color: "var(--cyan)" }}>malloc()</code> on the host allocates in CPU RAM. <code style={{ color: "var(--cyan)" }}>cudaMalloc()</code> allocates in GPU global memory. These are separate address spaces. Data must be explicitly transferred via <code style={{ color: "var(--cyan)" }}>cudaMemcpy()</code> or through unified memory.
              </div>

              {/* ---- Shared Memory Bank Conflicts ---- */}
              <div className="bank-section">
                <div className="section-title">Shared Memory — Bank Conflicts</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text)", lineHeight: 1.7, marginBottom: 14 }}>
                  Shared memory is divided into <strong style={{ color: "var(--cyan)" }}>32 banks</strong>, each 4 bytes wide (one float). Within a single warp, accesses to <strong style={{ color: "var(--pink)" }}>different banks happen in parallel</strong>. Accesses to the <strong style={{ color: "var(--pink)" }}>same bank are serialised</strong> — a <em>bank conflict</em>. The classic fix: pad the array's inner dimension by 1.
                </div>

                <div className="bank-mode-row">
                  <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Array declared as:
                  </span>
                  <button className={`bank-btn ${bankMode === 0 ? "b-conflict" : ""}`} onClick={() => setBankMode(0)}>
                    float A[32][32] — conflict
                  </button>
                  <button className={`bank-btn ${bankMode === 1 ? "b-ok" : ""}`} onClick={() => setBankMode(1)}>
                    float A[32][33] — no conflict
                  </button>
                </div>

                <div className="bank-vis">
                  <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--muted)", marginBottom: 6 }}>
                    Cell = bank index. Formula: bank(row, col) = (row × {bankMode === 0 ? 32 : 33} + col) % 32. Colour = bank identity (8 colours for banks 0–7 of 32).
                  </div>
                  <div className="bank-col-heads">
                    {Array.from({ length: 8 }, (_, c) => (
                      <div key={c} className="bank-ch">col {c}</div>
                    ))}
                    {bankMode === 0 && (
                      <div style={{ fontFamily: "var(--mono)", fontSize: 7, color: "var(--pink)", marginLeft: 8, alignSelf: "center" }}>
                        ← one colour per column = one bank per column = conflict!
                      </div>
                    )}
                    {bankMode === 1 && (
                      <div style={{ fontFamily: "var(--mono)", fontSize: 7, color: "var(--green)", marginLeft: 8, alignSelf: "center" }}>
                        ← diagonal pattern = every thread hits a different bank
                      </div>
                    )}
                  </div>
                  {Array.from({ length: 8 }, (_, row) => {
                    const width = bankMode === 0 ? 32 : 33;
                    return (
                      <div key={row} className="bank-row-wrap">
                        <div className="bank-row-lbl">T{row} / r{row}</div>
                        {Array.from({ length: 8 }, (_, col) => {
                          const bank = (row * width + col) % 32;
                          const ci = bank % 8;
                          const palette = [
                            { bg: "#bbf7d0", bd: "#009959", tx: "#009959" },
                            { bg: "#bae6fd", bd: "#0077aa", tx: "#0077aa" },
                            { bg: "#fed7aa", bd: "#c95c10", tx: "#c95c10" },
                            { bg: "#fbcfe8", bd: "#c4245e", tx: "#c4245e" },
                            { bg: "#fef9c3", bd: "#9c7400", tx: "#9c7400" },
                            { bg: "#e9d5ff", bd: "#7c3aed", tx: "#7c3aed" },
                            { bg: "#ccfbf1", bd: "#0d9488", tx: "#0d9488" },
                            { bg: "#fce7f3", bd: "#be185d", tx: "#be185d" },
                          ];
                          const p = palette[ci];
                          return (
                            <div key={col} className="bcell"
                              style={{ background: p.bg, borderColor: p.bd, color: p.tx }}
                              title={`bank ${bank}`}>
                              {bank}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 10, marginTop: 10, marginLeft: 52,
                    color: bankMode === 0 ? "var(--pink)" : "var(--green)",
                  }}>
                    {bankMode === 0
                      ? "↑ Width 32: every row in column j maps to bank j. All 8 (→ 32) threads hit the same bank — 32-way conflict, 32× slower."
                      : "↑ Width 33: diagonal pattern (bank = (row+col) % 32). Each thread hits a different bank — zero conflicts, full bandwidth."}
                  </div>
                </div>

                <div className="annotation" style={{ marginTop: 14 }}>
                  <strong>Why it works:</strong> with width 33, the offset of element <code style={{ color: "var(--cyan)" }}>A[row][col]</code> is <code style={{ color: "var(--cyan)" }}>row×33 + col</code>. Since 33 ≡ 1 (mod 32), each successive row shifts the bank by 1 — producing 32 distinct banks for 32 threads. Cost: one wasted float per row, i.e. 128 bytes per 32-row block of shared memory.
                </div>
                <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                  <strong>Diagnose with Nsight Compute:</strong> "L1/TEX cache throughput" and "shared memory bank conflicts" counters. Conflicts appear most often in <em>transpose kernels</em>, <em>tiled matrix multiply</em>, and <em>reduction/scan trees</em> that read columns of a row-major shared array.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
