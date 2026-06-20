# NextStep AI — Your Second Brain for Career Success

## USAII Global AI Hackathon 2026
**Team Avenir** | **Qualifier Code: CO26-CD7CCEA8**
**Track:** AI for Life, Learning & Work | **Brief #3:** Second Brain / Productivity

---

### What It Does

NextStep AI is an AI-powered mock interview platform that acts as your personal career second brain. Upload your resume once, and it generates hyper-personalised interview questions, coaches your posture and eye contact in real time, catches every filler word you say, and delivers a full performance report you can download as a PDF.

---

### Features

- **AI-generated interview questions** — personalised from your resume via DeepSeek V4
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

1. Get a DeepSeek API key from [platform.deepseek.com](https://platform.deepseek.com/)
2. Rename `config.example.js` → `config.js`
3. Open `config.js` and replace `YOUR_DEEPSEEK_API_KEY_HERE` with your real key
4. Open `index.html` in **Chrome** (recommended for full Web Speech API support)
5. Allow camera + microphone permissions when prompted
6. Upload your resume and start practicing!

> **Note:** The app works without a resume — it falls back to general questions. For the best experience, use Chrome 88+ on a desktop/laptop.

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
| AI Questions & Feedback | DeepSeek V4 API (`deepseek-chat`) |
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

- **Atharv Bhosale** — Co-founder, Developer
- **Hemanth HariHaran** — Co-founder, Developer

**Team:** Avenir  
**Hackathon:** USAII Global AI Hackathon 2026  
**Brief:** #3 — AI for Second Brain / Productivity  
**Qualifier Code:** CO26-CD7CCEA8

---

### Privacy

- Camera and microphone streams never leave your browser
- Resume text is stored only in `localStorage` and cleared when you start a new session
- No user accounts, no analytics, no ads
- API calls go directly from your browser to DeepSeek — no intermediary server

---

*© 2026 NextStep AI — Team Avenir. Built for USAII Global AI Hackathon 2026.*
