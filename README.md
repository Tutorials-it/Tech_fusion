# ResQTwin Frontend

ResQTwin is a hospital climate-resilience command center for exploring floods, heatwaves, and storms across infrastructure, resources, failure chains, and mitigation actions.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Lucide React
- Recharts
- @xyflow/react

## Setup

1. Install dependencies.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_API_BASE_URL` to the backend URL when available.
4. Run `npm run dev`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Pages

- `/login`
- `/dashboard`
- `/dashboard/digital-twin`
- `/dashboard/simulator`
- `/dashboard/failure-chains`
- `/dashboard/mitigation`
- `/dashboard/comparison`
- `/dashboard/resources`
- `/dashboard/reports`
- `/dashboard/settings`

## API Endpoints

- `GET /api/hospital`
- `GET /api/weather`
- `POST /api/simulate`
- `POST /api/mitigate`
- `GET /api/scenarios/compare`
- `GET /api/resources`

## Demo Mode

When the backend is unavailable or the API base URL is omitted, the app can run against labeled demo data. Demo results are clearly marked and can be toggled from Settings.
