# NextStep AI — Your Second Brain for Career Success

## USAII Global AI Hackathon 2026
**Team Avenir** | **Qualifier Code: CO26-CD7CCEA8**
**Track:** AI for Life, Learning & Work | **Brief #3:** Second Brain / Productivity

---

### What It Does

NextStep AI is an AI-powered mock interview platform that acts as your personal career second brain. Upload your resume once, and it generates hyper-personalised interview questions, coaches your posture and eye contact in real time, catches every filler word you say, and delivers a full performance report you can download as a PDF.

---

### Features

- **AI-generated interview questions** — personalised from your resume via Groq (Llama models)
- **Real-time posture + eye contact tracking** — MediaPipe Pose runs entirely in your browser
- **Skeleton overlay** — colour-coded skeleton drawn live on your video feed
- **Penguin coach reactions** — Pengu reacts when you slouch, lose eye contact, or nail your posture
- **Live filler word detection** — tracks "um", "uh", "like", "basically", and more
- **Confidence score gauge** — composite of posture, eye contact, and filler penalty
- **Voice tone analysis** — Web Audio API measures vocal energy in real time
- **Question difficulty indicator** — Easy / Medium / Hard badge per question
- **Company-specific interview modes** — Google, Microsoft, Amazon (LP-focused), Apple, Netflix
- **Streak tracker** — builds a daily practice habit with local streak counting
- **Posture timeline graph** — canvas chart of your posture over the full interview
- **Downloadable PDF report** — one-click export of your full results page
- **No account, no server, no tracking** — everything stays in your browser

---

### Setup

1. Get a Groq API key from [console.groq.com](https://console.groq.com/)
2. Copy `.env.example` to `.env` and add your Groq API key
3. Copy `config.example.js` to `config.js`
4. Open `config.js` and replace `YOUR_GROQ_API_KEY_HERE` with your real Groq API key
5. Open `index.html` in **Chrome** (recommended for full Web Speech API support)
6. Allow camera + microphone permissions when prompted (only asked once at the start)
7. Upload your resume and start practicing!

> **Note:** The app works without a resume — it falls back to general questions. For the best experience, use Chrome 88+ on a desktop/laptop.

**Models Used:**
- **Technical interviews:** Llama 3.3 70B Versatile
- **Other interview types:** Llama 4 Maverick

---

### File Structure

```
nextstep-ai/
├── index.html          — Landing page + resume upload + streak tracker
├── setup.html          — Interview config, company selector, device check
├── interview.html      — Live interview with Pengu + all AI coaching features
├── results.html        — Feedback dashboard with posture timeline + PDF export
├── media-permissions.js — Shared camera/microphone permission helpers
├── config.js           — Your API key (gitignored)
├── config.example.js   — Template for config.js
└── README.md
```

---

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML / CSS / JavaScript |
| AI Questions & Feedback | Groq API (Llama 3.3 70B & Llama 4 Maverick) |
| Computer Vision | MediaPipe Pose (CDN) |
| Speech-to-Text | Web Speech API (browser-native) |
| Text-to-Speech | SpeechSynthesis API (browser-native) |
| Audio Analysis | Web Audio API (browser-native) |
| PDF Export | html2pdf.js (CDN) |
| Storage | localStorage only — nothing leaves the device |

---

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Speech Recognition | ✅ | ❌ | ❌ | ✅ |
| MediaPipe Pose | ✅ | ✅ | ✅ | ✅ |
| Web Audio | ✅ | ✅ | ✅ | ✅ |
| PDF Export | ✅ | ✅ | ✅ | ✅ |

**Recommended: Chrome for full feature support including speech recognition.**
Firefox/Safari users get a text fallback input for answers.

---

### Team

- **Hemanth HariHaran** — Co-founder, Developer
- **Atharv Bhosale** — Co-founder, Developer

**Team:** Avenir  
**Hackathon:** USAII Global AI Hackathon 2026  
**Brief:** #3 — AI for Second Brain / Productivity  
**Qualifier Code:** CO26-CD7CCEA8

---

### Privacy

- Camera and microphone streams never leave your browser
- Resume text is stored only in `localStorage` and cleared when you start a new session
- No user accounts, no analytics, no ads
- API calls go directly from your browser to Groq — no intermediary server

---

*© 2026 NextStep AI — Team Avenir. Built for USAII Global AI Hackathon 2026.*
