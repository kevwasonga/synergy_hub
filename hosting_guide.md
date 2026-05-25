# Render Hosting Guide — Synergy Hub Africa

## Prerequisites

- A [Render](https://render.com) account (free tier works)
- This repository pushed to **GitHub** (already done)

---

## One-Click Deploy (render.yaml)

The project includes a `render.yaml` — skip to **Manual Deploy** below or use Render's Blueprint if supported.

---

## Manual Deploy Steps

### 1. Create a New Web Service

1. Log in to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your **GitHub** account
4. Select the `synergy_hub` repository
5. Configure:

| Setting | Value |
|---------|-------|
| **Name** | `synergy-hub-africa` (or your choice) |
| **Region** | Pick closest to your audience (e.g. Frankfurt) |
| **Branch** | `master` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn -w 4 -b 0.0.0.0:$PORT app:app` |
| **Plan** | **Free** (or paid if you need a custom domain) |

### 2. Set Environment Variables (if needed)

No required env vars. The app reads `PORT` automatically — Render sets this.

### 3. Deploy

Click **"Create Web Service"**. Render will:
- Pull your code
- Install dependencies (from `requirements.txt`)
- Start the server via `gunicorn` (from `Procfile`)

Deployment takes ~2–3 minutes on first run.

---

## Post-Deployment

- Your site will be live at: `https://synergy-hub-africa.onrender.com` (or your chosen name)
- Render provides a free `.onrender.com` domain
- To use a **custom domain**: go to your service → **Settings** → **Custom Domain**

---

## Updates

Every time you `git push` to `master`, Render automatically redeploys.

To trigger a manual redeploy: Dashboard → Service → **Manual Deploy** → **Clear Build Cache & Deploy**

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check `pip install -r requirements.txt` runs locally |
| App crashes at start | Check logs: Dashboard → Service → **Logs** |
| Images not loading | Verify paths use `url_for('static', filename='...')` |
| Port binding error | Ensure `$PORT` is used in the start command |

---

## Files Included

| File | Purpose |
|------|---------|
| `Procfile` | Tells Render how to start the app |
| `requirements.txt` | Python dependencies (Flask + gunicorn) |
| `app.py` | Flask application entry point |
