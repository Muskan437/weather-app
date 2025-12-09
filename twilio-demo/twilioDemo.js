/**
 * A small Twilio proof of concept to send a test SMS and log recent messages.
 * Fill the required environment variables before running this script.
 */

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_FROM_NUMBER,
  TWILIO_TO_NUMBER
} = process.env

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !TWILIO_TO_NUMBER) {
  console.error('Missing Twilio credentials. Please set all TWILIO_* environment variables.')
  process.exit(1)
}

const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

async function runDemo() {
  try {
    console.log('Sending a test SMS via Twilio...')
    const message = await twilio.messages.create({
      body: 'SuperiorWeather test message from the Milestone 1 SMS demo.',
      from: TWILIO_FROM_NUMBER,
      to: TWILIO_TO_NUMBER
    })

    console.log(`Message queued with SID ${message.sid} (status: ${message.status})`)

    console.log('\nFetching the 5 most recent messages:')
    const recentMessages = await twilio.messages.list({ limit: 5 })
    recentMessages.forEach((msg) => {
      console.log(
        `- [${msg.status}] ${msg.direction} ${msg.from} → ${msg.to}: ${msg.body.slice(0, 60)}`
      )
    })
  } catch (error) {
    console.error('Twilio demo failed:', error.message)
    process.exit(1)
  }
}

runDemo()
