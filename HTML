<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MLB Home Run Props</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --ink:#0F1B2D; --ink-2:#13233A; --turf:#16352B; --turf-2:#1F4A3A;
    --chalk:#F4F1EA; --chalk-dim:#C9C4B6; --clay:#C1502E; --clay-2:#E06A45;
    --mustard:#E8A33D; --cold:#4A6FA5; --line:rgba(244,241,234,0.12); --line-strong:rgba(244,241,234,0.22);
    --mono:'Space Mono',monospace; --display:'Teko',sans-serif; --body:'Inter',sans-serif;
  }
  *{box-sizing:border-box;}
  body{margin:0;background:var(--ink);color:var(--chalk);font-family:var(--body);-webkit-font-smoothing:antialiased;}
  ::selection{background:var(--mustard);color:var(--ink);}

  header{background:linear-gradient(180deg, var(--ink-2) 0%, var(--ink) 100%); border-bottom:1px solid var(--line-strong); padding:18px 16px 14px; position:sticky; top:0; z-index:50;}
  .header-row{display:flex; align-items:baseline; justify-content:space-between; gap:12px; flex-wrap:wrap;}
  .brand{display:flex; align-items:baseline; gap:10px;}
  .brand .dot{width:10px;height:10px;border-radius:50%;background:var(--clay);box-shadow:0 0 10px var(--clay);}
  h1{font-family:var(--display); font-weight:600; letter-spacing:0.5px; font-size:30px; margin:0; line-height:1; color:var(--chalk); text-transform:uppercase;}
  h1 span{color:var(--mustard);}
  .sub{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); letter-spacing:1px; text-transform:uppercase; margin-top:4px;}
  .header-controls{display:flex; gap:8px; align-items:center;}
  input[type="date"]{background:var(--ink); border:1px solid var(--line-strong); color:var(--chalk); font-family:var(--mono); font-size:13px; padding:8px 10px; border-radius:6px;}
  button{font-family:var(--body); font-weight:600; font-size:13px; cursor:pointer; border-radius:6px; border:1px solid var(--line-strong); background:var(--ink); color:var(--chalk); padding:8px 14px; transition:all .15s ease;}
  button:hover{border-color:var(--mustard); color:var(--mustard);}
  button.primary{background:var(--clay); border-color:var(--clay); color:var(--chalk);}
  button.primary:hover{background:var(--clay-2); border-color:var(--clay-2); color:var(--chalk);}
  button.ghost{background:transparent;}
  button:disabled{opacity:0.4; cursor:not-allowed;}

  nav.tabs{display:flex; gap:4px; padding:10px 16px 0; overflow-x:auto; background:var(--ink); border-bottom:1px solid var(--line);}
  .tab-btn{font-family:var(--display); font-size:18px; letter-spacing:0.5px; text-transform:uppercase; background:none; border:none; border-bottom:3px solid transparent; color:var(--chalk-dim); padding:8px 14px 10px; white-space:nowrap; border-radius:0;}
  .tab-btn:hover{color:var(--chalk); border-color:var(--line-strong);}
  .tab-btn.active{color:var(--mustard); border-color:var(--mustard);}
  .tab-btn.soon{opacity:0.45;}
  .tab-btn.soon:hover{color:var(--chalk-dim); border-color:transparent;}

  main{padding:16px; max-width:760px; margin:0 auto;}
  .panel{background:var(--ink-2); border:1px solid var(--line); border-radius:10px; padding:14px; margin-bottom:14px;}
  .panel-title{font-family:var(--display); font-size:20px; letter-spacing:0.5px; text-transform:uppercase; color:var(--chalk); margin:0 0 10px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px;}
  .panel-title small{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); text-transform:none;}
  .panel-desc{font-size:12px; color:var(--chalk-dim); margin:-4px 0 10px;}

  .soon-panel{text-align:center; padding:40px 16px; color:var(--chalk-dim);}
  .soon-panel .big{font-family:var(--display); font-size:34px; color:var(--chalk-dim); text-transform:uppercase;}

  .game-card{background:var(--turf); border:1px solid var(--line); border-radius:8px; padding:12px; margin-bottom:8px; cursor:pointer; transition:all .15s ease; display:flex; justify-content:space-between; align-items:center; gap:10px;}
  .game-card:hover{border-color:var(--mustard);}
  .game-card.selected{border-color:var(--mustard); background:var(--turf-2);}
  .game-matchup{font-family:var(--mono); font-size:14px; font-weight:700;}
  .game-meta{font-size:11px; color:var(--chalk-dim); margin-top:3px;}
  .badge-col{display:flex; flex-direction:column; gap:4px; align-items:flex-end;}
  .park-badge{font-family:var(--mono); font-size:11px; padding:3px 8px; border-radius:20px; border:1px solid var(--line-strong); white-space:nowrap;}
  .park-hot{color:var(--clay-2); border-color:var(--clay-2);}
  .park-neutral{color:var(--chalk-dim);}
  .park-cold{color:var(--cold); border-color:var(--cold);}
  .dome-badge{font-family:var(--mono); font-size:10px; padding:2px 7px; border-radius:20px; border:1px solid var(--line); color:var(--chalk-dim);}

  .field-row{margin-bottom:12px;}
  .field-row label{display:block; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:var(--chalk-dim); margin-bottom:5px;}
  select, .field-row input[type="number"], .field-row input[type="text"]{width:100%; background:var(--ink); border:1px solid var(--line-strong); color:var(--chalk); font-family:var(--body); font-size:14px; padding:9px 10px; border-radius:6px;}
  .two-col{display:grid; grid-template-columns:1fr 1fr; gap:10px;}
  .toggle-row{display:flex; align-items:center; gap:8px; font-size:12px; color:var(--chalk-dim); margin-bottom:10px;}
  .toggle-row input{accent-color:var(--mustard);}
  .weather-line{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); margin:-6px 0 10px; min-height:14px;}

  .readout{background:var(--ink); border:1px solid var(--line-strong); border-radius:10px; padding:18px; text-align:center; margin-top:6px;}
  .readout-label{font-family:var(--mono); font-size:11px; letter-spacing:2px; color:var(--chalk-dim); text-transform:uppercase;}
  .readout-number{font-family:var(--mono); font-size:52px; font-weight:700; line-height:1.1; margin:6px 0; letter-spacing:1px;}
  .readout-bar-track{height:10px; background:rgba(244,241,234,0.08); border-radius:6px; overflow:hidden; margin:10px 0 6px;}
  .readout-bar-fill{height:100%; border-radius:6px; transition:width .4s ease;}
  .readout-tag{display:inline-block; font-family:var(--display); font-size:18px; letter-spacing:1px; text-transform:uppercase; padding:3px 14px; border-radius:20px; margin-top:6px;}
  .stat-grid{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:14px;}
  .stat-box{background:var(--ink); border:1px solid var(--line); border-radius:6px; padding:8px 10px;}
  .stat-box .k{font-family:var(--mono); font-size:10px; color:var(--chalk-dim); text-transform:uppercase;}
  .stat-box .v{font-family:var(--mono); font-size:15px; font-weight:700; margin-top:2px;}

  .leaderboard-row{display:flex; align-items:center; gap:10px; padding:10px; border-bottom:1px solid var(--line); cursor:pointer;}
  .leaderboard-row:last-child{border-bottom:none;}
  .leaderboard-row:hover{background:rgba(244,241,234,0.04);}
  .rank{font-family:var(--mono); font-size:13px; color:var(--chalk-dim); width:22px; flex-shrink:0;}
  .lb-main{flex:1; min-width:0;}
  .lb-name{font-weight:700; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
  .lb-meta{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
  .lb-score{font-family:var(--mono); font-weight:700; font-size:15px; flex-shrink:0;}
  .progress-text{font-family:var(--mono); font-size:12px; color:var(--mustard); margin-top:8px;}

  .pick-row{display:flex; justify-content:space-between; align-items:center; gap:8px; padding:10px; border-bottom:1px solid var(--line); font-size:13px;}
  .pick-row:last-child{border-bottom:none;}
  .pick-main{flex:1;}
  .pick-name{font-weight:700;}
  .pick-meta{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); margin-top:2px;}
  .pick-status{font-family:var(--mono); font-size:11px; padding:3px 8px; border-radius:14px; white-space:nowrap;}
  .status-pending{color:var(--mustard); border:1px solid var(--mustard);}
  .status-win{color:#7CC68A; border:1px solid #7CC68A;}
  .status-loss{color:var(--chalk-dim); border:1px solid var(--line-strong);}
  .record-bar{display:flex; gap:14px; font-family:var(--mono); font-size:12px; color:var(--chalk-dim); margin-bottom:10px; padding-bottom:10px; border-bottom:1px solid var(--line);}
  .record-bar b{color:var(--chalk); font-size:14px;}

  details.debug{margin-top:6px;}
  details.debug summary{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); cursor:pointer;}
  .log-line{font-family:var(--mono); font-size:11px; color:var(--chalk-dim); padding:2px 0; border-bottom:1px dotted var(--line);}
  .log-line.err{color:var(--clay-2);}
  .log-line.ok{color:#7CC68A;}

  .empty-state{color:var(--chalk-dim); font-size:13px; text-align:center; padding:20px 10px;}
  .footer-note{text-align:center; color:var(--chalk-dim); font-size:11px; font-family:var(--mono); padding:20px 0 30px;}
</style>
</head>
<body>

<header>
  <div class="header-row">
    <div class="brand">
      <div class="dot"></div>
      <div>
        <h1>HR<span>•</span>Props</h1>
        <div class="sub">MLB Home Run Probability Dashboard</div>
      </div>
    </div>
    <div class="header-controls">
      <input type="date" id="datePicker">
      <button id="refreshBtn">Refresh</button>
    </div>
  </div>
</header>

<nav class="tabs">
  <button class="tab-btn active" data-tab="hr">HR Props</button>
  <button class="tab-btn soon" data-tab="ks" disabled>K's</button>
  <button class="tab-btn soon" data-tab="outs" disabled>Pitching Outs</button>
  <button class="tab-btn soon" data-tab="winners" disabled>Winners</button>
  <button class="tab-btn" data-tab="tracking">Tracking</button>
</nav>

<main>

  <!-- ============ HR PROPS TAB ============ -->
  <div id="tab-hr">

    <div class="panel">
      <div class="panel-title">Today's Slate <small id="slateCount"></small></div>
      <div id="gamesList"><div class="empty-state">Loading games…</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">Auto Scan</div>
      <div class="panel-desc">Ranks batters across today's slate by HR likelihood automatically. Uses season + last-15-game blended rates. Wind direction isn't applied here (unreliable without confirmed park orientation per-stadium) — only park factor and temperature are baked into the rank. Can take a while on a big slate.</div>
      <button class="primary" id="scanBtn" style="width:100%;">Scan Today's Slate</button>
      <div class="progress-text" id="scanProgress"></div>
      <div id="leaderboard" style="margin-top:10px;"></div>
    </div>

    <div class="panel">
      <div class="panel-title">Build Matchup <small>fine-tune a single pick</small></div>

      <div class="toggle-row">
        <input type="checkbox" id="manualMode">
        <label for="manualMode" style="margin:0; text-transform:none; font-family:var(--body); color:var(--chalk-dim);">
          Manual entry mode (use if live stats fail to load)
        </label>
      </div>

      <div class="field-row">
        <label>Batting Team</label>
        <select id="battingTeamSelect"><option value="">Select a game above first…</option></select>
      </div>
      <div class="field-row">
        <label>Batter</label>
        <select id="batterSelect" disabled><option value="">—</option></select>
      </div>
      <div class="field-row">
        <label>Opposing Pitcher</label>
        <select id="pitcherSelect" disabled><option value="">—</option></select>
      </div>

      <div id="manualFields" style="display:none;">
        <div class="two-col">
          <div class="field-row">
            <label>Batter HR / PA (e.g. .035)</label>
            <input type="number" step="0.001" id="manBatHRrate" placeholder="0.035">
          </div>
          <div class="field-row">
            <label>Pitcher HR/9</label>
            <input type="number" step="0.1" id="manPitHR9" placeholder="1.2">
          </div>
        </div>
      </div>

      <div class="two-col">
        <div class="field-row">
          <label>Park Factor</label>
          <select id="parkFactorSelect"></select>
        </div>
        <div class="field-row">
          <label>Wind (mph out to OF, − = in)</label>
          <input type="number" id="windInput" value="0" step="1">
        </div>
      </div>
      <button class="ghost" id="weatherBtn" type="button" style="margin-bottom:6px;">Get Live Weather for Selected Park</button>
      <div class="weather-line" id="weatherLine"></div>

      <div class="field-row">
        <label>Expected Plate Appearances Today</label>
        <input type="number" id="paInput" value="4.1" step="0.1">
      </div>

      <button class="primary" id="calcBtn" style="width:100%; margin-top:4px;">Calculate HR Likelihood</button>
    </div>

    <div class="panel" id="resultPanel" style="display:none;">
      <div class="panel-title">Readout</div>
      <div class="readout">
        <div class="readout-label">HR Likelihood — Game</div>
        <div class="readout-number" id="readoutNumber">--%</div>
        <div class="readout-bar-track"><div class="readout-bar-fill" id="readoutBar" style="width:0%;"></div></div>
        <div class="readout-tag" id="readoutTag">—</div>

        <div class="stat-grid">
          <div class="stat-box"><div class="k">Batter Rate (blended)</div><div class="v" id="outBatRate">--</div></div>
          <div class="stat-box"><div class="k">vs League Avg</div><div class="v" id="outBatRel">--</div></div>
          <div class="stat-box"><div class="k">Pitcher HR/9 (blended)</div><div class="v" id="outPitHR9">--</div></div>
          <div class="stat-box"><div class="k">vs League Avg</div><div class="v" id="outPitRel">--</div></div>
          <div class="stat-box"><div class="k">Park Factor</div><div class="v" id="outPark">--</div></div>
          <div class="stat-box"><div class="k">Temp Adj.</div><div class="v" id="outTemp">--</div></div>
          <div class="stat-box"><div class="k">Wind Adj.</div><div class="v" id="outWind">--</div></div>
          <div class="stat-box"><div class="k">Recent Form</div><div class="v" id="outRecent">--</div></div>
        </div>
      </div>
      <button id="savePickBtn" style="width:100%; margin-top:12px;">Save to Pick Tracking</button>
    </div>

    <details class="debug">
      <summary>Debug log</summary>
      <div id="debugLog"></div>
    </details>
  </div>

  <!-- ============ K's TAB (stub) ============ -->
  <div id="tab-ks" style="display:none;">
    <div class="panel soon-panel">
      <div class="big">K's — Coming Next</div>
      <div style="margin-top:8px; font-size:13px;">Pitcher strikeout props. Building this once HR props is dialed in.</div>
    </div>
  </div>

  <!-- ============ OUTS TAB (stub) ============ -->
  <div id="tab-outs" style="display:none;">
    <div class="panel soon-panel">
      <div class="big">Pitching Outs — Coming Soon</div>
      <div style="margin-top:8px; font-size:13px;">Innings/outs recorded props, after K's.</div>
    </div>
  </div>

  <!-- ============ WINNERS TAB (stub) ============ -->
  <div id="tab-winners" style="display:none;">
    <div class="panel soon-panel">
      <div class="big">Game Winners — Coming Soon</div>
      <div style="margin-top:8px; font-size:13px;">Moneyline / game prediction model, last on the roadmap.</div>
    </div>
  </div>

  <!-- ============ TRACKING TAB ============ -->
  <div id="tab-tracking" style="display:none;">
    <div class="panel">
      <div class="panel-title">Pick Record</div>
      <div class="record-bar">
        <div><b id="recWins">0</b> Wins</div>
        <div><b id="recLosses">0</b> Losses</div>
        <div><b id="recPending">0</b> Pending</div>
        <div><b id="recRate">--</b> Hit Rate</div>
      </div>
      <div id="picksList"><div class="empty-state">No saved picks yet. Build a matchup in HR Props and save it.</div></div>
    </div>
  </div>

  <div class="footer-note">MLB HR PROPS · v2 · Free public data via MLB Stats API + Open-Meteo</div>
</main>

<script>
/* =========================================================================
   CONFIG
   ========================================================================= */

// Rough park factors for home runs (1.00 = neutral). Illustrative starting
// points based on general ballpark characteristics, NOT pulled from live
// current-season data. Validate against real results and adjust over time.
const PARK_FACTORS = {
  COL:1.30, CIN:1.15, NYY:1.12, PHI:1.10, ATH:1.18, OAK:1.18,
  CHC:1.05, HOU:1.05, ARI:1.05, MIL:1.05, CWS:1.05, ATL:1.05,
  TEX:1.00, TOR:1.00, LAD:1.00, BOS:1.00,
  BAL:0.95, CLE:0.95, MIN:0.95, WSH:0.95, LAA:0.95,
  DET:0.90, KC:0.90, STL:0.90, PIT:0.90, TB:0.90,
  NYM:0.90, MIA:0.85, SD:0.85, SEA:0.85,
  SF:0.80
};

// Approximate venue coordinates, used for weather lookups only — precision
// is "city level", not exact GPS, which is plenty for a weather API call.
const VENUE_COORDS = {
  ARI:[33.4455,-112.0667], ATL:[33.8908,-84.4678], ATH:[38.5805,-121.5193], OAK:[38.5805,-121.5193],
  BAL:[39.2839,-76.6217], BOS:[42.3467,-71.0972], CHC:[41.9484,-87.6553], CWS:[41.8299,-87.6338],
  CIN:[39.0975,-84.5071], CLE:[41.4962,-81.6852], COL:[39.7559,-104.9942], DET:[42.3390,-83.0485],
  HOU:[29.7572,-95.3556], KC:[39.0517,-94.4803], LAA:[33.8003,-117.8827], LAD:[34.0739,-118.2400],
  MIA:[25.7781,-80.2197], MIL:[43.0280,-87.9712], MIN:[44.9817,-93.2776], NYM:[40.7571,-73.8458],
  NYY:[40.8296,-73.9262], PHI:[39.9061,-75.1665], PIT:[40.4469,-80.0057], SD:[32.7073,-117.1566],
  SF:[37.7786,-122.3893], SEA:[47.5914,-122.3325], STL:[38.6226,-90.1928], TB:[27.7683,-82.6534],
  TEX:[32.7473,-97.0945], TOR:[43.6414,-79.3894], WSH:[38.8730,-77.0074]
};

// Roofed parks. 'fixed' = always indoors, weather/wind irrelevant (e.g. Tropicana
// Field, currently a fixed dome). 'retractable' = roof status varies by game and
// we can't know it live here, so we show weather as informational only and don't
// auto-apply wind/temp effects for these parks.
const ROOF_STATUS = { TB:'fixed', TOR:'retractable', ARI:'retractable', HOU:'retractable', MIL:'retractable', TEX:'retractable', SEA:'retractable', MIA:'retractable' };

const LEAGUE_AVG_HR_RATE = 0.031; // ~ HR per PA, league-wide approx
const LEAGUE_AVG_HR9 = 1.25;      // ~ pitcher HR allowed per 9 IP, league-wide approx
const RECENT_GAMES_BATTER = 15;
const RECENT_STARTS_PITCHER = 5;
const RECENT_BLEND_WEIGHT = 0.5;  // how much weight recent form gets vs season, when sample is big enough

const API = "https://statsapi.mlb.com/api/v1";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

/* =========================================================================
   STATE
   ========================================================================= */
let state = {
  date: null,
  games: [],
  selectedGame: null,
  rosters: {},
  battingStatsCache: {},
  pitchingStatsCache: {},
  weatherCache: {}
};

/* =========================================================================
   UTIL
   ========================================================================= */
function todayStr(){ return new Date().toISOString().slice(0,10); }
function seasonYear(){ return (state.date || todayStr()).slice(0,4); }

function logDebug(msg, ok){
  const el = document.getElementById('debugLog');
  const line = document.createElement('div');
  line.className = 'log-line ' + (ok === false ? 'err' : ok === true ? 'ok' : '');
  line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  el.prepend(line);
}
async function safeFetchJSON(url, label){
  try{
    const res = await fetch(url);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    logDebug(`OK  ${label}`, true);
    return json;
  }catch(err){
    logDebug(`FAIL ${label} — ${err.message}`, false);
    return null;
  }
}
function pct(x){ return (x*100).toFixed(1) + '%'; }
function abbrForTeam(teamObj){ return (teamObj && (teamObj.abbreviation || teamObj.teamName)) || '???'; }

// run async tasks with limited concurrency
async function runChunked(items, worker, concurrency, onProgress){
  const results = [];
  let i = 0;
  async function next(){
    while(i < items.length){
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
      if(onProgress) onProgress(idx+1, items.length);
    }
  }
  const runners = Array.from({length: Math.min(concurrency, items.length)}, next);
  await Promise.all(runners);
  return results;
}

/* =========================================================================
   PARK FACTOR SELECT
   ========================================================================= */
function populateParkSelect(){
  const sel = document.getElementById('parkFactorSelect');
  sel.innerHTML = '';
  const neutral = document.createElement('option');
  neutral.value = 1.0; neutral.textContent = 'Neutral (1.00)';
  sel.appendChild(neutral);
  Object.keys(PARK_FACTORS).sort().forEach(abbr=>{
    const opt = document.createElement('option');
    opt.value = PARK_FACTORS[abbr];
    opt.dataset.abbr = abbr;
    opt.textContent = `${abbr} (${PARK_FACTORS[abbr].toFixed(2)})`;
    sel.appendChild(opt);
  });
}

/* =========================================================================
   SCHEDULE / GAMES
   ========================================================================= */
async function loadSchedule(dateStr){
  document.getElementById('gamesList').innerHTML = '<div class="empty-state">Loading games…</div>';
  document.getElementById('leaderboard').innerHTML = '';
  const url = `${API}/schedule?sportId=1&date=${dateStr}&hydrate=team,probablePitcher,venue`;
  const data = await safeFetchJSON(url, `schedule ${dateStr}`);
  const games = (data && data.dates && data.dates[0] && data.dates[0].games) || [];
  state.games = games;
  document.getElementById('slateCount').textContent = games.length ? `${games.length} games` : '';
  renderGames();
}

function renderGames(){
  const wrap = document.getElementById('gamesList');
  if(!state.games.length){
    wrap.innerHTML = '<div class="empty-state">No games found for this date (or schedule failed to load — try Refresh, or use Manual Mode below).</div>';
    return;
  }
  wrap.innerHTML = '';
  state.games.forEach(g=>{
    const away = g.teams.away.team, home = g.teams.home.team;
    const awayAbbr = abbrForTeam(away), homeAbbr = abbrForTeam(home);
    const pf = PARK_FACTORS[homeAbbr];
    const pfClass = pf == null ? 'park-neutral' : pf >= 1.05 ? 'park-hot' : pf <= 0.92 ? 'park-cold' : 'park-neutral';
    const pfLabel = pf == null ? 'PF —' : `PF ${pf.toFixed(2)}`;
    const roof = ROOF_STATUS[homeAbbr];
    const awayPitcher = g.teams.away.probablePitcher ? g.teams.away.probablePitcher.fullName : 'TBD';
    const homePitcher = g.teams.home.probablePitcher ? g.teams.home.probablePitcher.fullName : 'TBD';

    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gamePk = g.gamePk;
    card.innerHTML = `
      <div>
        <div class="game-matchup">${awayAbbr} @ ${homeAbbr}</div>
        <div class="game-meta">SP: ${awayPitcher} vs ${homePitcher}</div>
      </div>
      <div class="badge-col">
        <div class="park-badge ${pfClass}">${pfLabel}</div>
        ${roof ? `<div class="dome-badge">${roof==='fixed'?'Indoor':'Roof?'}</div>` : ''}
      </div>
    `;
    card.addEventListener('click', ()=> selectGame(g));
    wrap.appendChild(card);
  });
}

async function selectGame(g){
  state.selectedGame = g;
  document.querySelectorAll('.game-card').forEach(c=>{
    c.classList.toggle('selected', Number(c.dataset.gamePk) === g.gamePk);
  });

  const away = g.teams.away.team, home = g.teams.home.team;
  const battingSelect = document.getElementById('battingTeamSelect');
  battingSelect.innerHTML = `
    <option value="${away.id}|${away.abbreviation || away.teamName}">${away.name} (away)</option>
    <option value="${home.id}|${home.abbreviation || home.teamName}">${home.name} (home)</option>
  `;
  battingSelect.dataset.awayId = away.id;
  battingSelect.dataset.homeId = home.id;
  battingSelect.dataset.awayAbbr = away.abbreviation || away.teamName;
  battingSelect.dataset.homeAbbr = home.abbreviation || home.teamName;
  battingSelect.dataset.awayPitcherId = g.teams.away.probablePitcher ? g.teams.away.probablePitcher.id : '';
  battingSelect.dataset.awayPitcherName = g.teams.away.probablePitcher ? g.teams.away.probablePitcher.fullName : '';
  battingSelect.dataset.homePitcherId = g.teams.home.probablePitcher ? g.teams.home.probablePitcher.id : '';
  battingSelect.dataset.homePitcherName = g.teams.home.probablePitcher ? g.teams.home.probablePitcher.fullName : '';

  const homeAbbr = home.abbreviation || home.teamName;
  if(PARK_FACTORS[homeAbbr] != null){
    document.getElementById('parkFactorSelect').value = PARK_FACTORS[homeAbbr];
  }
  document.getElementById('weatherLine').textContent = '';

  await onBattingTeamChange();
}

async function onBattingTeamChange(){
  const battingSelect = document.getElementById('battingTeamSelect');
  const val = battingSelect.value;
  if(!val) return;
  const [teamId] = val.split('|');

  const roster = await loadRoster(teamId);
  const batterSelect = document.getElementById('batterSelect');
  batterSelect.innerHTML = '';
  roster.filter(p => p.position !== 'P').forEach(p=>{
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.fullName} (${p.position})`;
    batterSelect.appendChild(opt);
  });
  batterSelect.disabled = roster.length === 0;
  if(roster.length === 0){
    batterSelect.innerHTML = '<option value="">No roster loaded — try Manual Mode</option>';
  }

  const pitcherSelect = document.getElementById('pitcherSelect');
  const isAway = teamId === battingSelect.dataset.awayId;
  const oppPitcherId = isAway ? battingSelect.dataset.homePitcherId : battingSelect.dataset.awayPitcherId;
  const oppPitcherName = isAway ? battingSelect.dataset.homePitcherName : battingSelect.dataset.awayPitcherName;
  pitcherSelect.innerHTML = '';
  if(oppPitcherId){
    const opt = document.createElement('option');
    opt.value = oppPitcherId;
    opt.textContent = oppPitcherName + ' (probable)';
    pitcherSelect.appendChild(opt);
    pitcherSelect.disabled = false;
  }else{
    pitcherSelect.innerHTML = '<option value="">Probable pitcher TBD — use Manual Mode</option>';
    pitcherSelect.disabled = true;
  }
}

async function loadRoster(teamId){
  if(state.rosters[teamId]) return state.rosters[teamId];
  const url = `${API}/teams/${teamId}/roster?rosterType=active`;
  const data = await safeFetchJSON(url, `roster ${teamId}`);
  const roster = (data && data.roster || []).map(r=>({
    id: r.person.id, fullName: r.person.fullName, position: r.position ? r.position.abbreviation : '?'
  }));
  state.rosters[teamId] = roster;
  return roster;
}

/* =========================================================================
   STATS LOOKUPS (single player, season + gameLog in one call, parallel-safe)
   ========================================================================= */
function recentSplitRate(splits, n, type){
  // type: 'hitting' -> {hr, pa}; 'pitching' -> {hr, ip}
  if(!splits || !splits.length) return null;
  const recent = splits.slice(-n);
  if(type === 'hitting'){
    let hr=0, pa=0;
    recent.forEach(s=>{ hr += Number(s.stat.homeRuns||0); pa += Number(s.stat.plateAppearances||0); });
    return pa > 0 ? {hr, pa, rate: hr/pa} : null;
  } else {
    let hr=0, ip=0;
    recent.forEach(s=>{ hr += Number(s.stat.homeRuns||0); ip += parseFloat(s.stat.inningsPitched||0); });
    return ip > 0 ? {hr, ip, hr9: (hr/ip)*9} : null;
  }
}

async function getBatterStats(personId){
  if(state.battingStatsCache[personId]) return state.battingStatsCache[personId];
  const url = `${API}/people/${personId}/stats?stats=season,gameLog&group=hitting&season=${seasonYear()}`;
  const data = await safeFetchJSON(url, `hitting stats ${personId}`);
  const groups = (data && data.stats) || [];
  const seasonGroup = groups.find(g=>g.type && g.type.displayName==='season');
  const logGroup = groups.find(g=>g.type && g.type.displayName==='gameLog');
  const seasonStat = seasonGroup && seasonGroup.splits && seasonGroup.splits[0] && seasonGroup.splits[0].stat;
  if(!seasonStat) return null;
  const seasonPA = Number(seasonStat.plateAppearances || 0);
  const seasonHR = Number(seasonStat.homeRuns || 0);
  if(!seasonPA) return null;
  const seasonRate = seasonHR/seasonPA;

  const recent = logGroup ? recentSplitRate(logGroup.splits, RECENT_GAMES_BATTER, 'hitting') : null;
  let blendedRate = seasonRate;
  if(recent && recent.pa >= 30){
    blendedRate = (1-RECENT_BLEND_WEIGHT)*seasonRate + RECENT_BLEND_WEIGHT*recent.rate;
  }
  const result = { seasonRate, seasonPA, recentRate: recent ? recent.rate : null, recentPA: recent ? recent.pa : 0, blendedRate };
  state.battingStatsCache[personId] = result;
  return result;
}

async function getPitcherStats(personId){
  if(state.pitchingStatsCache[personId]) return state.pitchingStatsCache[personId];
  const url = `${API}/people/${personId}/stats?stats=season,gameLog&group=pitching&season=${seasonYear()}`;
  const data = await safeFetchJSON(url, `pitching stats ${personId}`);
  const groups = (data && data.stats) || [];
  const seasonGroup = groups.find(g=>g.type && g.type.displayName==='season');
  const logGroup = groups.find(g=>g.type && g.type.displayName==='gameLog');
  const seasonStat = seasonGroup && seasonGroup.splits && seasonGroup.splits[0] && seasonGroup.splits[0].stat;
  if(!seasonStat) return null;
  let seasonHR9 = seasonStat.homeRunsPer9;
  const seasonIP = parseFloat(seasonStat.inningsPitched || 0);
  if(seasonHR9 == null && seasonIP > 0){
    seasonHR9 = (Number(seasonStat.homeRuns||0) / seasonIP) * 9;
  }
  if(seasonHR9 == null) return null;

  const recent = logGroup ? recentSplitRate(logGroup.splits, RECENT_STARTS_PITCHER, 'pitching') : null;
  let blendedHR9 = Number(seasonHR9);
  if(recent && recent.ip >= 15){
    blendedHR9 = (1-RECENT_BLEND_WEIGHT)*Number(seasonHR9) + RECENT_BLEND_WEIGHT*recent.hr9;
  }
  const result = { seasonHR9: Number(seasonHR9), seasonIP, recentHR9: recent ? recent.hr9 : null, recentIP: recent ? recent.ip : 0, blendedHR9 };
  state.pitchingStatsCache[personId] = result;
  return result;
}

/* =========================================================================
   BATCH LOOKUPS (for Auto Scan — try hydrate batch first, fall back to
   individual calls per player if the batch shape doesn't come back as
   expected. Watch the debug log to see which path actually ran.)
   ========================================================================= */
async function getTeamHittersBatch(teamId){
  const url = `${API}/teams/${teamId}/roster?rosterType=active&hydrate=person(stats(group=[hitting],type=[season,gameLog],season=${seasonYear()}))`;
  const data = await safeFetchJSON(url, `batch hitters ${teamId}`);
  const roster = (data && data.roster) || [];
  const out = [];
  let batchWorked = false;

  roster.forEach(r=>{
    if(r.position && r.position.abbreviation === 'P') return;
    const person = r.person;
    const statsArr = (person && person.stats) || [];
    const seasonGroup = statsArr.find(s=>s.type && s.type.displayName==='season');
    const logGroup = statsArr.find(s=>s.type && s.type.displayName==='gameLog');
    const seasonStat = seasonGroup && seasonGroup.splits && seasonGroup.splits[0] && seasonGroup.splits[0].stat;
    if(!seasonStat || !Number(seasonStat.plateAppearances)) return;
    batchWorked = true;
    const seasonPA = Number(seasonStat.plateAppearances||0);
    const seasonHR = Number(seasonStat.homeRuns||0);
    const seasonRate = seasonHR/seasonPA;
    const recent = logGroup ? recentSplitRate(logGroup.splits, RECENT_GAMES_BATTER, 'hitting') : null;
    let blendedRate = seasonRate;
    if(recent && recent.pa >= 30) blendedRate = (1-RECENT_BLEND_WEIGHT)*seasonRate + RECENT_BLEND_WEIGHT*recent.rate;
    out.push({ id: person.id, fullName: person.fullName, position: r.position.abbreviation, seasonPA, seasonRate, blendedRate });
  });

  if(batchWorked){
    logDebug(`batch hitters ${teamId} parsed OK (${out.length} hitters)`, true);
    return out;
  }

  // fallback: individual calls, capped to first 9 non-pitcher roster spots
  logDebug(`batch hitters ${teamId} returned no usable stats — falling back to individual calls`, false);
  const candidates = roster.filter(r => !r.position || r.position.abbreviation !== 'P').slice(0, 9);
  const fallbackOut = [];
  for(const r of candidates){
    const s = await getBatterStats(r.person.id);
    if(s && s.seasonPA >= 10){
      fallbackOut.push({ id: r.person.id, fullName: r.person.fullName, position: r.position ? r.position.abbreviation : '?', seasonPA: s.seasonPA, seasonRate: s.seasonRate, blendedRate: s.blendedRate });
    }
  }
  return fallbackOut;
}

async function getPitchersBatch(ids){
  const validIds = ids.filter(Boolean);
  if(!validIds.length) return {};
  const url = `${API}/people?personIds=${validIds.join(',')}&hydrate=stats(group=[pitching],type=[season,gameLog],season=${seasonYear()})`;
  const data = await safeFetchJSON(url, `batch pitchers ${validIds.join(',')}`);
  const people = (data && data.people) || [];
  const out = {};
  let batchWorked = false;

  people.forEach(person=>{
    const statsArr = person.stats || [];
    const seasonGroup = statsArr.find(s=>s.type && s.type.displayName==='season');
    const logGroup = statsArr.find(s=>s.type && s.type.displayName==='gameLog');
    const seasonStat = seasonGroup && seasonGroup.splits && seasonGroup.splits[0] && seasonGroup.splits[0].stat;
    if(!seasonStat) return;
    let seasonHR9 = seasonStat.homeRunsPer9;
    const seasonIP = parseFloat(seasonStat.inningsPitched || 0);
    if(seasonHR9 == null && seasonIP > 0) seasonHR9 = (Number(seasonStat.homeRuns||0)/seasonIP)*9;
    if(seasonHR9 == null) return;
    batchWorked = true;
    const recent = logGroup ? recentSplitRate(logGroup.splits, RECENT_STARTS_PITCHER, 'pitching') : null;
    let blendedHR9 = Number(seasonHR9);
    if(recent && recent.ip >= 15) blendedHR9 = (1-RECENT_BLEND_WEIGHT)*Number(seasonHR9) + RECENT_BLEND_WEIGHT*recent.hr9;
    out[person.id] = { blendedHR9, seasonHR9: Number(seasonHR9) };
  });

  if(batchWorked){ logDebug(`batch pitchers parsed OK`, true); return out; }

  logDebug(`batch pitchers returned no usable stats — falling back to individual calls`, false);
  for(const id of validIds){
    const s = await getPitcherStats(id);
    if(s) out[id] = { blendedHR9: s.blendedHR9, seasonHR9: s.seasonHR9 };
  }
  return out;
}

/* =========================================================================
   WEATHER (Open-Meteo — free, no key, current conditions only)
   ========================================================================= */
async function getWeather(teamAbbr){
  if(state.weatherCache[teamAbbr] !== undefined) return state.weatherCache[teamAbbr];
  const roof = ROOF_STATUS[teamAbbr];
  if(roof === 'fixed'){
    const r = { isDome:true, note:'Indoor (fixed roof) — weather not a factor' };
    state.weatherCache[teamAbbr] = r;
    return r;
  }
  const coords = VENUE_COORDS[teamAbbr];
  if(!coords){ state.weatherCache[teamAbbr] = null; return null; }
  const [lat, lon] = coords;
  const url = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph`;
  const data = await safeFetchJSON(url, `weather ${teamAbbr}`);
  if(!data || !data.current_weather){ state.weatherCache[teamAbbr] = null; return null; }
  const cw = data.current_weather;
  const result = {
    isDome:false, retractable: roof === 'retractable',
    temp: cw.temperature, windSpeed: cw.windspeed, windDir: cw.winddirection,
    note: roof === 'retractable' ? 'Retractable roof — status unknown, treating as informational only' : null
  };
  state.weatherCache[teamAbbr] = result;
  return result;
}

function tempFactorFor(weather){
  // Mild, direction-agnostic effect: warmer air carries fly balls a bit further.
  // Skipped for domes/retractable parks since indoor conditions are roughly constant.
  if(!weather || weather.isDome || weather.retractable) return 1.0;
  const delta = weather.temp - 70;
  return Math.max(0.95, Math.min(1.08, 1 + delta*0.0015));
}

/* =========================================================================
   CONFIDENCE CALC
   ========================================================================= */
function calcConfidence({batRate, pitHR9, parkFactor, windMph, tempFactor, pa}){
  const windFactor = 1 + ((windMph||0) / 100);
  const batRel = batRate / LEAGUE_AVG_HR_RATE;
  const pitRel = pitHR9 / LEAGUE_AVG_HR9;
  const perPA = LEAGUE_AVG_HR_RATE * batRel * pitRel * parkFactor * windFactor * (tempFactor||1);
  const perPAClamped = Math.max(0, Math.min(perPA, 0.5));
  const gameProb = 1 - Math.pow(1 - perPAClamped, pa);
  return { gameProb, batRel, pitRel, windFactor, perPA: perPAClamped };
}
function tagForProb(p){
  if(p >= 0.20) return {label:'Strong', color:'var(--clay-2)'};
  if(p >= 0.12) return {label:'Lean', color:'var(--mustard)'};
  if(p >= 0.07) return {label:'Slight', color:'var(--chalk-dim)'};
  return {label:'Pass', color:'var(--cold)'};
}

/* =========================================================================
   SINGLE MATCHUP CALCULATION (parallel fetch)
   ========================================================================= */
async function runCalculation(){
  const manual = document.getElementById('manualMode').checked;
  const parkFactor = parseFloat(document.getElementById('parkFactorSelect').value || 1.0);
  const windMph = parseFloat(document.getElementById('windInput').value || 0);
  const pa = parseFloat(document.getElementById('paInput').value || 4.1);

  let batRate, pitHR9, batterName='Batter', pitcherName='Pitcher', recentNote='Manual entry';

  if(manual){
    batRate = parseFloat(document.getElementById('manBatHRrate').value);
    pitHR9 = parseFloat(document.getElementById('manPitHR9').value);
    if(isNaN(batRate) || isNaN(pitHR9)){ alert('Enter both manual stats first.'); return; }
  } else {
    const batterSelect = document.getElementById('batterSelect');
    const pitcherSelect = document.getElementById('pitcherSelect');
    const batterId = batterSelect.value, pitcherId = pitcherSelect.value;
    if(!batterId || !pitcherId){ alert('Pick a game, batter, and pitcher first — or switch on Manual Mode.'); return; }
    batterName = batterSelect.options[batterSelect.selectedIndex].textContent;
    pitcherName = pitcherSelect.options[pitcherSelect.selectedIndex].textContent;

    // fetch batter + pitcher stats in PARALLEL, not sequentially
    const [batStats, pitStats] = await Promise.all([getBatterStats(batterId), getPitcherStats(pitcherId)]);
    if(!batStats || !pitStats){ alert('Live stats failed to load for this player. Try Manual Mode instead.'); return; }
    batRate = batStats.blendedRate;
    pitHR9 = pitStats.blendedHR9;
    recentNote = batStats.recentPA >= 30 ? `L${RECENT_GAMES_BATTER} blended (${RECENT_BLEND_WEIGHT*100}%)` : 'Season only — low recent sample';
  }

  const battingSelect = document.getElementById('battingTeamSelect');
  const teamAbbr = (battingSelect.value || '').split('|')[1] || (battingSelect.dataset.homeAbbr);
  const weather = teamAbbr ? await getWeather(teamAbbr) : null;
  const tempFactor = tempFactorFor(weather);

  const calc = calcConfidence({batRate, pitHR9, parkFactor, windMph, tempFactor, pa});
  const tag = tagForProb(calc.gameProb);

  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('readoutNumber').textContent = pct(calc.gameProb);
  document.getElementById('readoutNumber').style.color = tag.color;
  document.getElementById('readoutBar').style.width = Math.min(calc.gameProb*100*3, 100) + '%';
  document.getElementById('readoutBar').style.background = tag.color;
  document.getElementById('readoutTag').textContent = tag.label;
  document.getElementById('readoutTag').style.color = tag.color;
  document.getElementById('readoutTag').style.border = `1px solid ${tag.color}`;

  document.getElementById('outBatRate').textContent = pct(batRate);
  document.getElementById('outBatRel').textContent = calc.batRel.toFixed(2) + 'x';
  document.getElementById('outPitHR9').textContent = pitHR9.toFixed(2);
  document.getElementById('outPitRel').textContent = calc.pitRel.toFixed(2) + 'x';
  document.getElementById('outPark').textContent = parkFactor.toFixed(2);
  document.getElementById('outTemp').textContent = tempFactor.toFixed(2) + 'x';
  document.getElementById('outWind').textContent = (windMph>=0?'+':'') + windMph + ' mph';
  document.getElementById('outRecent').textContent = recentNote;

  window.__lastCalc = {
    batterName, pitcherName, gameProb: calc.gameProb, tag: tag.label,
    gamePk: state.selectedGame ? state.selectedGame.gamePk : null, date: state.date
  };
}

async function handleGetWeather(){
  const battingSelect = document.getElementById('battingTeamSelect');
  const teamAbbr = (battingSelect.value || '').split('|')[1] || battingSelect.dataset.homeAbbr;
  if(!teamAbbr){ document.getElementById('weatherLine').textContent = 'Select a game first.'; return; }
  document.getElementById('weatherLine').textContent = 'Loading weather…';
  const w = await getWeather(teamAbbr);
  const el = document.getElementById('weatherLine');
  if(!w){ el.textContent = 'Weather unavailable — set wind manually.'; return; }
  if(w.isDome){ el.textContent = w.note; return; }
  el.textContent = `Live: ${Math.round(w.temp)}°F, wind ${Math.round(w.windSpeed)}mph from ${Math.round(w.windDir)}°${w.note ? ' — '+w.note : ''} (set the wind field's sign yourself based on this park's layout)`;
}

/* =========================================================================
   AUTO SCAN
   ========================================================================= */
async function runAutoScan(){
  if(!state.games.length){ alert('No games loaded for this date yet.'); return; }
  const scanBtn = document.getElementById('scanBtn');
  scanBtn.disabled = true;
  const progressEl = document.getElementById('scanProgress');
  document.getElementById('leaderboard').innerHTML = '';
  progressEl.textContent = `Scanning 0 / ${state.games.length} games…`;

  const allResults = [];

  await runChunked(state.games, async (g)=>{
    const away = g.teams.away.team, home = g.teams.home.team;
    const awayAbbr = abbrForTeam(away), homeAbbr = abbrForTeam(home);
    const parkFactor = PARK_FACTORS[homeAbbr] != null ? PARK_FACTORS[homeAbbr] : 1.0;
    const weather = await getWeather(homeAbbr);
    const tempFactor = tempFactorFor(weather);

    const awayPitcherId = g.teams.away.probablePitcher ? g.teams.away.probablePitcher.id : null;
    const homePitcherId = g.teams.home.probablePitcher ? g.teams.home.probablePitcher.id : null;
    const awayPitcherName = g.teams.away.probablePitcher ? g.teams.away.probablePitcher.fullName : 'TBD';
    const homePitcherName = g.teams.home.probablePitcher ? g.teams.home.probablePitcher.fullName : 'TBD';
    if(!awayPitcherId && !homePitcherId) return; // can't evaluate without at least one probable

    const pitcherStats = await getPitchersBatch([awayPitcherId, homePitcherId]);

    const [awayHitters, homeHitters] = await Promise.all([
      getTeamHittersBatch(away.id),
      getTeamHittersBatch(home.id)
    ]);

    // away batters face home pitcher; home batters face away pitcher
    if(homePitcherId && pitcherStats[homePitcherId]){
      awayHitters.forEach(h=>{
        if(h.seasonPA < 20) return;
        const calc = calcConfidence({batRate:h.blendedRate, pitHR9:pitcherStats[homePitcherId].blendedHR9, parkFactor, windMph:0, tempFactor, pa:4.1});
        allResults.push({ name:h.fullName, team:awayAbbr, opp:homePitcherName, prob:calc.gameProb, tag:tagForProb(calc.gameProb), gamePk:g.gamePk, date:state.date });
      });
    }
    if(awayPitcherId && pitcherStats[awayPitcherId]){
      homeHitters.forEach(h=>{
        if(h.seasonPA < 20) return;
        const calc = calcConfidence({batRate:h.blendedRate, pitHR9:pitcherStats[awayPitcherId].blendedHR9, parkFactor, windMph:0, tempFactor, pa:4.1});
        allResults.push({ name:h.fullName, team:homeAbbr, opp:awayPitcherName, prob:calc.gameProb, tag:tagForProb(calc.gameProb), gamePk:g.gamePk, date:state.date });
      });
    }
  }, 3, (done,total)=>{ progressEl.textContent = `Scanning ${done} / ${total} games…`; });

  allResults.sort((a,b)=> b.prob - a.prob);
  renderLeaderboard(allResults.slice(0,30));
  progressEl.textContent = `Done — ${allResults.length} batters evaluated across ${state.games.length} games.`;
  scanBtn.disabled = false;
}

function renderLeaderboard(results){
  const wrap = document.getElementById('leaderboard');
  if(!results.length){
    wrap.innerHTML = '<div class="empty-state">No results — probable pitchers or rosters may not be loaded yet for this date.</div>';
    return;
  }
  wrap.innerHTML = '';
  results.forEach((r,i)=>{
    const row = document.createElement('div');
    row.className = 'leaderboard-row';
    row.innerHTML = `
      <div class="rank">${i+1}</div>
      <div class="lb-main">
        <div class="lb-name">${r.name} <span style="color:var(--chalk-dim); font-weight:400;">(${r.team})</span></div>
        <div class="lb-meta">vs ${r.opp}</div>
      </div>
      <div class="lb-score" style="color:${r.tag.color};">${pct(r.prob)}</div>
    `;
    row.addEventListener('click', ()=>{
      window.__lastCalc = { batterName:r.name, pitcherName:r.opp, gameProb:r.prob, tag:r.tag.label, gamePk:r.gamePk, date:r.date };
      saveCurrentPick();
    });
    wrap.appendChild(row);
  });
  const hint = document.createElement('div');
  hint.className = 'panel-desc';
  hint.style.marginTop = '8px';
  hint.textContent = 'Tap a row to save it straight to Pick Tracking.';
  wrap.appendChild(hint);
}

/* =========================================================================
   PICK TRACKING
   ========================================================================= */
const PICKS_KEY = 'mlb_hr_picks';
function loadPicks(){ try{ return JSON.parse(localStorage.getItem(PICKS_KEY) || '[]'); }catch(e){ return []; } }
function savePicks(picks){ localStorage.setItem(PICKS_KEY, JSON.stringify(picks)); }

function saveCurrentPick(){
  const c = window.__lastCalc;
  if(!c){ alert('Run a calculation first.'); return; }
  const picks = loadPicks();
  picks.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,5),
    date: c.date, gamePk: c.gamePk, batterName: c.batterName, pitcherName: c.pitcherName,
    probability: c.gameProb, tag: c.tag, status: 'pending'
  });
  savePicks(picks);
  renderPicks();
}

function renderPicks(){
  const picks = loadPicks();
  const wrap = document.getElementById('picksList');
  let wins=0, losses=0, pending=0;
  picks.forEach(p=>{ if(p.status==='win') wins++; else if(p.status==='loss') losses++; else pending++; });
  document.getElementById('recWins').textContent = wins;
  document.getElementById('recLosses').textContent = losses;
  document.getElementById('recPending').textContent = pending;
  const decided = wins+losses;
  document.getElementById('recRate').textContent = decided ? pct(wins/decided) : '--';

  if(!picks.length){
    wrap.innerHTML = '<div class="empty-state">No saved picks yet. Build a matchup in HR Props and save it.</div>';
    return;
  }
  wrap.innerHTML = '';
  picks.forEach(p=>{
    const row = document.createElement('div');
    row.className = 'pick-row';
    const statusClass = p.status==='win' ? 'status-win' : p.status==='loss' ? 'status-loss' : 'status-pending';
    row.innerHTML = `
      <div class="pick-main">
        <div class="pick-name">${p.batterName}</div>
        <div class="pick-meta">${p.date} · vs ${p.pitcherName} · ${pct(p.probability)} (${p.tag})</div>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <span class="pick-status ${statusClass}">${p.status}</span>
        ${p.status==='pending' ? `<button data-id="${p.id}" class="gradeBtn">Grade</button>` : ''}
      </div>
    `;
    wrap.appendChild(row);
  });
  document.querySelectorAll('.gradeBtn').forEach(btn=>{
    btn.addEventListener('click', ()=> gradePick(btn.dataset.id));
  });
}

async function gradePick(id){
  const picks = loadPicks();
  const pick = picks.find(p=>p.id===id);
  if(!pick || !pick.gamePk){
    alert('No game data attached to this pick (was it built in Manual Mode?). Rebuild from a real game to enable auto-grading.');
    return;
  }
  const url = `${API}/game/${pick.gamePk}/boxscore`;
  const data = await safeFetchJSON(url, `boxscore ${pick.gamePk}`);
  if(!data){ alert('Could not load box score yet — game may not be final.'); return; }
  let hr = null;
  ['home','away'].forEach(side=>{
    const players = data.teams && data.teams[side] && data.teams[side].players;
    if(!players) return;
    Object.values(players).forEach(pl=>{
      if(pick.batterName.startsWith(pl.person.fullName)){
        const batting = pl.stats && pl.stats.batting;
        if(batting && batting.homeRuns != null) hr = batting.homeRuns;
      }
    });
  });
  if(hr == null){ alert('Could not find this batter in the box score (game may be in progress, or name match failed).'); return; }
  pick.status = hr > 0 ? 'win' : 'loss';
  savePicks(picks);
  renderPicks();
}

/* =========================================================================
   TABS
   ========================================================================= */
function wireTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    if(btn.disabled) return;
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      ['hr','ks','outs','winners','tracking'].forEach(t=>{
        document.getElementById('tab-'+t).style.display = (t === btn.dataset.tab) ? 'block' : 'none';
      });
      if(btn.dataset.tab === 'tracking') renderPicks();
    });
  });
}

/* =========================================================================
   INIT
   ========================================================================= */
function init(){
  populateParkSelect();
  wireTabs();

  const datePicker = document.getElementById('datePicker');
  datePicker.value = todayStr();
  state.date = datePicker.value;

  datePicker.addEventListener('change', ()=>{ state.date = datePicker.value; loadSchedule(state.date); });
  document.getElementById('refreshBtn').addEventListener('click', ()=> loadSchedule(state.date));
  document.getElementById('battingTeamSelect').addEventListener('change', onBattingTeamChange);
  document.getElementById('calcBtn').addEventListener('click', runCalculation);
  document.getElementById('savePickBtn').addEventListener('click', saveCurrentPick);
  document.getElementById('weatherBtn').addEventListener('click', handleGetWeather);
  document.getElementById('scanBtn').addEventListener('click', runAutoScan);
  document.getElementById('manualMode').addEventListener('change', (e)=>{
    document.getElementById('manualFields').style.display = e.target.checked ? 'block' : 'none';
  });

  loadSchedule(state.date);
  renderPicks();
}

init();
</script>
</body>
</html>
