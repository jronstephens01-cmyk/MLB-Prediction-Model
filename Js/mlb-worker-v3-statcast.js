// MLB Odds + Statcast Proxy Worker — paste this into Cloudflare Workers editor
// Handles two upstream sources:
//   /odds/   → SharpAPI (live lines — existing)
//   /savant/ → Baseball Savant (Statcast leaderboard — NEW)

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // ── SharpAPI odds proxy ─────────────────────────────────────────────────
    if (url.pathname.startsWith('/odds/')) {
      const upstreamPath = url.pathname.replace('/odds', '');
      const upstreamUrl = new URL(`https://api.sharpapi.io${upstreamPath}`);
      url.searchParams.forEach((value, key) => upstreamUrl.searchParams.set(key, value));
      const upstreamRes = await fetch(upstreamUrl.toString(), {
        headers: { 'X-API-Key': env.ODDS_API_KEY }
      });
      const body = await upstreamRes.text();
      return new Response(body, {
        status: upstreamRes.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // ── Baseball Savant Statcast proxy ──────────────────────────────────────
    // Routes /savant/* → https://baseballsavant.mlb.com/*
    // Used for: /savant/leaderboard/statcast?type=batter&year=2026&min=25&csv=true
    //           /savant/leaderboard/statcast?type=pitcher&year=2026&min=10&csv=true
    if (url.pathname.startsWith('/savant/')) {
      const upstreamPath = url.pathname.replace('/savant', '');
      const upstreamUrl = new URL(`https://baseballsavant.mlb.com${upstreamPath}`);
      url.searchParams.forEach((value, key) => upstreamUrl.searchParams.set(key, value));
      const upstreamRes = await fetch(upstreamUrl.toString(), {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'text/csv,text/plain,*/*'
        }
      });
      const body = await upstreamRes.text();
      return new Response(body, {
        status: upstreamRes.status,
        headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' }
      });
    }

    return new Response('Not found. Use /odds/<path> or /savant/<path>', { status: 404 });
  }
};
