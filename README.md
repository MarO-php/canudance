# CANUDANCE — official web experience

Next.js App Router + React Three Fiber + Three.js. Built as an immersive, crawlable site rather than a canvas-only landing page.

## Before production
1. Confirm the canonical domain. The code currently uses `https://canudance.com` as a placeholder canonical domain.
2. Add the real CANUDANCE logo assets if desired; the current wordmark is intentionally typographic so the site does not depend on scraping Instagram.
3. Replace any event details that change (access, ticketing, lineup, exact reveal language).
4. Add Google Search Console verification and submit `/sitemap.xml`.
5. Validate structured data with Google's Rich Results Test / URL Inspection after deployment.
6. Add a real analytics provider only after deciding on consent/privacy requirements.

## Run
npm install
npm run dev
