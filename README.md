# PopX App

A pixel-perfect React implementation of the PopX mobile app UI — centered on the webpage like a mobile phone frame.

## Screens

1. **Welcome** — Landing page with Create Account & Login buttons
2. **Login** — Email + password form
3. **Create Account** — Full registration form with radio buttons
4. **Account Settings** — Profile page with avatar, name, and bio

## Tech Stack

- React 18
- Vite 5
- Plain CSS (no frameworks)

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
popx-app/
├── public/
│   └── profile.png          # Profile photo asset
├── src/
│   ├── pages/
│   │   ├── WelcomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── CreateAccountPage.jsx
│   │   └── AccountSettingsPage.jsx
│   ├── App.jsx              # Root component + navigation state
│   ├── index.css            # All styles
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Navigation Flow

Welcome → Create Account → Account Settings
Welcome → Login → Account Settings
