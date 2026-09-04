# School Frontend

Frontend for the school platform, built with React + TypeScript + Vite.

## Stack
- React 19
- TypeScript
- Vite
- React Router
- MUI + Emotion
- Axios
- Day.js
- Vitest + Testing Library

## Main Features
- Public pages: Home, Kids, Consultation
- Auth pages: Login, Register
- Forgot password flow (request + reset by link token)
- Protected Profile page
- Profile sections:
  - Book Free Trial
  - Upcoming Lessons
  - Past Lessons
  - Account (read-only)

## Routes
- `/`
- `/kids`
- `/consultation`
- `/login`
- `/register`
- `/forgot-password`
- `/profile` (protected)

## Requirements
- Node.js 20+
- npm 10+

## Setup
```bash
npm install
```

## Run in development
```bash
npm run dev
```
Default app URL: http://localhost:3000

## Scripts
```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
npm run test:watch
```

## API configuration
The app uses `VITE_API_BASE_URL` and defaults to `/api`.

With default Vite proxy in [vite.config.ts](vite.config.ts), `/api` requests are proxied to `http://127.0.0.1:8000`.

## Testing
- Unit/integration-style component tests are in `src/**/*.test.tsx`
- Uses `jsdom` environment and Testing Library utilities

## Folder structure
```text
src/
  api/
  components/
  context/
  data/
  pages/
  types/
  utils/
```