import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0e1a;
    --surface: #111827;
    --surface2: #1a2235;
    --border: #1e2d45;
    --green: #00ff9d;
    --cyan: #00cfff;
    --orange: #ff7b2c;
    --pink: #ff4d8d;
    --yellow: #ffd426;
    --text: #e2e8f0;
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
    background: linear-gradient(135deg, #1a2235, #0f1829);
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
    background: #0a1f0f;
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
    background: #0a1f0f;
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
    background: #1f0a18;
    box-shadow: 0 0 12px #ff4d8d33;
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

  .thread-dot.warp-0 { background: #00ff9d33; border-color: var(--green); }
  .thread-dot.warp-1 { background: #00cfff33; border-color: var(--cyan); }
  .thread-dot.warp-2 { background: #ff7b2c33; border-color: var(--orange); }
  .thread-dot.warp-3 { background: #ff4d8d33; border-color: var(--pink); }

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
    background: #0a1f0f;
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

  .warp-card.ready { background: #00ff9d15; border-color: var(--green); color: var(--green); }
  .warp-card.stalled { background: #ff7b2c15; border-color: var(--orange); color: var(--orange); }
  .warp-card.executing { background: #ffd42630; border-color: var(--yellow); color: var(--yellow); animation: pulse 0.8s infinite alternate; }
  @keyframes pulse { from { opacity: 0.7; } to { opacity: 1; } }

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

  .legend-badge.ready { background: #00ff9d15; border-color: var(--green); color: var(--green); }
  .legend-badge.stalled { background: #ff7b2c15; border-color: var(--orange); color: var(--orange); }
  .legend-badge.executing { background: #ffd42630; border-color: var(--yellow); color: var(--yellow); }

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
    background: #00ff9d15;
  }

  .lane-cell.helper {
    border-color: var(--yellow);
    color: var(--yellow);
    background: #ffd42620;
  }

  .lane-cell.path-a {
    border-color: var(--cyan);
    color: var(--cyan);
    background: #00cfff15;
  }

  .lane-cell.path-b {
    border-color: var(--pink);
    color: var(--pink);
    background: #ff4d8d15;
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
    background: #00cfff18;
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

  @media (max-width: 900px) {
    .lane-panel,
    .warp-diagram {
      grid-template-columns: 1fr;
    }
  }
`;

const memData = [
  { name: "Registers", scope: "Per Thread", latency: "~1 cycle", size: "255 regs/thread", color: "#00ff9d", barWidth: "100%", managed: "Compiler" },
  { name: "Shared Memory", scope: "Per Block (SM)", latency: "~1–5 cycles", size: "48–100 KB/SM", color: "#00cfff", barWidth: "85%", managed: "Programmer" },
  { name: "L1 Cache", scope: "Per SM", latency: "~20 cycles", size: "Shared w/ SMEM", color: "#ffd426", barWidth: "65%", managed: "Hardware" },
  { name: "L2 Cache", scope: "Device-wide", latency: "~100 cycles", size: "~40 MB (A100)", color: "#ff7b2c", barWidth: "40%", managed: "Hardware" },
  { name: "Global Memory (DRAM)", scope: "Device-wide", latency: "~200+ cycles", size: "Tens of GB", color: "#ff4d8d", barWidth: "10%", managed: "Programmer" },
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

  const tabs = ["GPU Overview", "Execution Hierarchy", "Warp Scheduling", "Lanes in a Warp", "Memory Hierarchy"];

  // 128 threads in 4 warps of 32
  const threads = Array.from({ length: 128 }, (_, i) => ({ id: i, warp: Math.floor(i / 32) }));
  const lanes = Array.from({ length: 32 }, (_, i) => i);
  const selectedLaneScenario = laneScenarios[laneScenario];

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <div className="header">
          <h1>CUDA Architecture Reference</h1>
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
                          onClick={() => setActiveSM(activeSM === i ? null : i)}
                        >
                          <span className="sm-label">SM</span>
                          <span className="sm-num">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`sm-detail ${activeSM !== null ? "visible" : ""}`}>
                  <h4>SM {activeSM} — Internal Structure (Ampere)</h4>
                  <div className="sm-internals">
                    {[
                      { label: "CUDA Cores", value: "128", color: "var(--green)" },
                      { label: "FP64 Units", value: "64", color: "var(--cyan)" },
                      { label: "Tensor Cores", value: "4", color: "var(--pink)" },
                      { label: "Warp Schedulers", value: "4", color: "var(--yellow)" },
                      { label: "Shared Memory", value: "164 KB", color: "var(--orange)" },
                      { label: "Max Warps", value: "64", color: "var(--green)" },
                      { label: "Register File", value: "65,536 regs", color: "var(--cyan)" },
                      { label: "Max Threads", value: "2048", color: "var(--pink)" },
                      { label: "Max Blocks", value: "32", color: "var(--muted)" },
                    ].map((c, i) => (
                      <div key={i} className="sm-component">
                        <span className="c-label">{c.label}</span>
                        <span className="c-value" style={{ color: c.color }}>{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="annotation">
                <strong>Key insight:</strong> 108 SMs × 2048 threads/SM = <strong style={{ color: "var(--cyan)" }}>221,184 concurrent threads</strong> on an A100. The GPU hides memory latency by switching between the 64 warps resident on each SM, instead of making individual threads fast.
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
                                background: ["#00ff9d33","#00cfff33","#ff7b2c33","#ff4d8d33"][wi],
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
                <strong>Selected block {activeBlock}:</strong> 128 threads → 4 warps of 32. All threads in this block will be scheduled on the <strong style={{ color: "var(--green)" }}>same SM</strong>. They share that SM's shared memory and can call <code style={{ color: "var(--cyan)" }}>__syncthreads()</code>. Blocks in <em>different</em> positions must be treated as independent (no guaranteed execution order).
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
            </div>
          </div>
        )}

        {/* TAB 2: Warp Scheduling */}
        {tab === 2 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>Warp Scheduling on a Single SM — Latency Hiding</h3>
              <div className="warp-diagram">
                <div className="sm-box">
                  <span className="box-label">SM — Warp Pool (up to 64 warps)</span>
                  <div className="scheduler-row">
                    {["Sched 0", "Sched 1", "Sched 2", "Sched 3"].map((s, i) => (
                      <div key={i} className="scheduler">{s}</div>
                    ))}
                  </div>
                  <div className="warp-pool">
                    {warpStates.map(w => (
                      <div key={w.id} className={`warp-card ${w.state}`}>
                        {w.label}
                        <div style={{ fontSize: 8, marginTop: 2 }}>{w.state}</div>
                      </div>
                    ))}
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i + 16} className="warp-card stalled" style={{ opacity: 0.3 }}>
                        W{i + 16}
                        <div style={{ fontSize: 8, marginTop: 2 }}>idle</div>
                      </div>
                    ))}
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
                    <strong>Latency hiding (why occupancy matters!).:</strong> When W0 stalls on a memory fetch, the scheduler <em>immediately</em> switches to W1. No cycles are wasted, provided the warp pool is large enough.
                  </div>
                  <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                    <strong>Warp divergence:</strong> If threads within one warp take different branches of an <code style={{ color: "var(--cyan)" }}>if</code>, both paths execute serially with masking. Throughput halves for two-way divergence. Divergence <em>between</em> warps is free.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Lanes */}
        {tab === 3 && (
          <div className="diagram">
            <div className="gpu-schematic">
              <h3>Lanes Inside a Warp — SIMT Utilization and Cooperation</h3>
              <div className="lane-panel">
                <div className="lane-box">
                  <span className="box-label">WARP 0 (LANES 0–31)</span>
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
            </div>
          </div>
        )}

        {/* TAB 4: Memory Hierarchy */}
        {tab === 4 && (
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
                <strong>Core optimisation pattern:</strong> Load a tile of data from <span style={{ color: "#ff4d8d" }}>global memory</span> into <span style={{ color: "#00cfff" }}>shared memory</span> once. Reuse it many times from shared memory. This is the tile/cache pattern: trade one slow fetch for many fast reads. This is the basis of optimised matrix multiply, convolutions, etc.
              </div>
              <div className="annotation" style={{ marginTop: 8, borderLeftColor: "var(--pink)" }}>
                <strong>Note:</strong> <code style={{ color: "var(--cyan)" }}>malloc()</code> on the host allocates in CPU RAM. <code style={{ color: "var(--cyan)" }}>cudaMalloc()</code> allocates in GPU global memory. These are separate address spaces. Data must be explicitly transferred via <code style={{ color: "var(--cyan)" }}>cudaMemcpy()</code> or through unified memory.
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
