# Nexium_UmerRahman_Assign2

## Project Overview
This project is a Next.js application using Prisma ORM, Supabase PostgreSQL, and MongoDB for blog summarization and storage. It features API routes for summarizing blogs, searching, and CRUD operations on summaries.

## Features
- Blog summarization
- Urdu translation
- Search and CRUD for summaries
- MongoDB and PostgreSQL (Supabase) integration

## Technologies
- **Frontend:** Next.js 15 (App Router)
- **Backend:** Node.js + Prisma ORM
- **Databases:**
  - Supabase – PostgreSQL for structured summary storage
  - MongoDB Atlas – For full blog content
- **Other:**
  - Custom scraper for blog extraction
  - JavaScript-based Urdu translation logic

## Backend Logic: Extraction, Summarization, and Translation
- **Extraction:**
  - The backend uses a custom scraper (`src/lib/scraper.ts`) to fetch and extract the main content from the provided blog URL. This scraper parses the HTML and attempts to extract the main article text, filtering out navigation, ads, and unrelated content. The extraction is done programmatically using JavaScript.
- **Summarization:**
  - The extracted blog content is summarized using custom logic in the backend (`src/lib/summarizer.ts`). This may involve extracting the first few sentences, using heuristics to find the most relevant paragraphs, or applying simple text reduction rules. No AI or external language model is used; the summarization is rule-based and may not always capture the full nuance of the original content.
- **Translation:**
  - The English summary is translated to Urdu using a JavaScript Urdu dictionary (`src/lib/urduDictionary.ts`). This dictionary maps common English words to their Urdu equivalents. The translation logic attempts to replace words and phrases where possible and applies some basic Urdu grammar rules. However, the dictionary is limited and cannot cover all English words or complex sentence structures. As a result, some words may remain untranslated, and the Urdu output may be a mix of Urdu and English or may not be fully fluent. The translation is best-effort and intended for demonstration purposes only.
- **Storage:**
  - The summaries, along with metadata, are stored in Supabase PostgreSQL.
  - The full raw blog content is stored in MongoDB Atlas.

> **Note:** n8n is NOT used in this assignment. This is intentional to preserve the free trial for a future/grand project. All scraping and processing is handled directly in the backend code.

## How to Run

Start your Next.js App:

Install dependencies:
```sh
npm install
```

Start development server:
```sh
npm run dev
```

Runs at: [http://localhost:3000](http://localhost:3000)

## Project Structure
```
/src/app/api/summarize/route.ts         → Main API logic for summarization
/src/app/api/summaries/[id]/route.ts    → CRUD for summaries
/src/app/api/summaries/search/route.ts  → Search summaries
/src/lib/scraper.ts                     → Scraping logic
/src/lib/summarizer.ts                  → Summarization logic
/src/lib/urduDictionary.ts              → Urdu translation logic
/src/lib/prisma.ts                      → Prisma client
/prisma/schema.prisma                   → Supabase DB schema
/src/components/ui/                     → UI components
```
