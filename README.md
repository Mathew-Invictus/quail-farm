# 🐦 Hickey Family Ranch — Quail Farm Manager

A simple, fast farm management app built with plain HTML/CSS/JS + Supabase.

## Pages

| Page | File | Purpose |
|------|------|---------|
| Dashboard | `index.html` | KPIs + recent activity overview |
| Hatch Log | `hatch.html` | Track every incubation batch |
| Egg Log | `eggs.html` | Daily egg collection (AM/PM) |
| Mortality | `mortality.html` | Log losses with cause tracking |
| Feed & Cost | `feed.html` | Feed purchases + cost tracking |
| Health | `health.html` | Treatments, vaccines, vet visits |
| Sales | `sales.html` | Egg and bird sales / revenue |

## Stack

- **Frontend**: Plain HTML, CSS, Vanilla JS — no build step required
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel

## Setup

1. Create a Supabase project and run the SQL in `schema.sql`
2. Update `js/supabase.js` with your Project URL and publishable key
3. Push to GitHub and connect to Vercel — it deploys automatically

## Local Development

Just open `index.html` in a browser — no server needed.
