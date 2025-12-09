# Twilio Demo

This folder hosts a tiny Node script that can send an SMS via Twilio and then log the most recent messages for reference. It is a sandbox for the future SuperiorWeather alert pipeline.

## Setup

1. From this directory, install dependencies:

   ```
   npm install
   ```

2. Provide valid Twilio trial credentials via environment variables:

   ```
   TWILIO_ACCOUNT_SID=ACxxxx
   TWILIO_AUTH_TOKEN=your_token
   TWILIO_FROM_NUMBER=+1XXX
   TWILIO_TO_NUMBER=+1YYY
   ```

## Running the demo

Once configured, run:

```
node twilioDemo.js
```

The script will:

- Send a test message: “SuperiorWeather test message from the Milestone 1 SMS demo.”
- Fetch and print the last five messages for quick verification.

This is only a standalone demo for Milestone 1 and intentionally keeps credentials out of version control. Real alerting will be wired in Milestone 2.
