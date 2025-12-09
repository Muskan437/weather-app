# SuperiorWeather Livestream System – Milestone 1

This project is the UI framework and map routing structure for the SuperiorWeather Livestream System. It is intentionally lightweight: Vite + React (JavaScript), plain CSS, react-router-dom routing, and mock data so we can verify layout and map scaffolding ahead of the real assets/backend.

## Running the frontend

```bash
cd superiorweather-frontend
npm install
npm run dev
```

Routes available today:

- `/` – the Milestone 1 overview page with the CTA to head to maps.
- `/maps` – the index of ~45 placeholder map canvases (data drawn from `src/data/mapsConfig.json`).
- `/maps/:mapId` – renders the 16×9 `MapStage` with a placeholder background plus city labels scaled from the 1920×1080 grid.

City labels use the mock weather helpers in `src/utils/mockWeather.js`, so everything stays in-browser until the backend and real PNGs arrive in Milestone 2.

## Twilio demo & live SMS hooks

Twilio integration is isolated under `twilio-demo/` so you can experiment with the free trial before wiring alerts into the frontend/back-end pipeline later.

1. Create a free Twilio trial account at https://www.twilio.com/try-twilio and note the following credentials:

   - **Account SID** (`TWILIO_ACCOUNT_SID`)
   - **Auth Token** (`TWILIO_AUTH_TOKEN`)
   - **Twilio phone number** (`TWILIO_FROM_NUMBER`)
   - **Verified destination number** (`TWILIO_TO_NUMBER`)

2. Add those values to your `.env` file in the repository root (or export them in your shell). For example:

   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_FROM_NUMBER=+1YYY
   TWILIO_TO_NUMBER=+1ZZZ
   ```

3. Run the demo:

   ```bash
   cd twilio-demo
   npm install
   node twilioDemo.js
   ```

   The script sends a test SMS (“SuperiorWeather test message from the Milestone 1 SMS demo.”) and then logs the five most recent messages returned by the Twilio API.

This Twilio demo confirms the credentials are valid and that Twilio can reach your verified number. Later Milestones will pipe those alerts into the frontend via a backend service.
