
# PopX App

A pixel-perfect React implementation of the PopX mobile app UI — centered on the webpage like a mobile phone frame.

## Features & Improvements

- Modular, reusable React components (Button, InputField, RadioGroup, Spinner)
- PropTypes for type safety
- Error handling and accessibility improvements
- Modern, responsive UI with plain CSS
- Ready for deployment on Vercel (SPA routing supported)
- ESLint and Prettier for code quality


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

## Deploy on Vercel

1. Push your code to GitHub.
2. Connect your repo to Vercel (https://vercel.com/import).
3. Vercel auto-detects Vite. No extra config needed, but `vercel.json` is included for SPA routing.
4. Set any environment variables in the Vercel dashboard (see `.env` for example).
5. Deploy!

## Environment Variables

Create a `.env` file for environment-specific settings:

```
VITE_API_URL=https://api.example.com
```

## Linting & Formatting

Run ESLint:

```bash
npx eslint src
```

Run Prettier:

```bash
npx prettier --check .
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
