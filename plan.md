# Implementation Plan - Nansel Joel Personal Website

This plan outlines the steps to build a comprehensive personal website for Nansel Joel, a speaker, writer, and mentor. The website will be a multi-page React application using Vite, Tailwind CSS, and Shadcn UI components.

## Scope Summary
- **Home Page**: Hero, Intro, Featured Areas, Quote, About Preview, Projects Preview, Speaking, Testimonials, Final CTA.
- **About Page**: Full Bio, Mission, Vision.
- **Speaking Page**: Overview, Topics, Booking CTA.
- **Projects Page**: Detailed list of initiatives (Inspire and Impact Leadership Conference, Purpose Tour, etc.).
- **Books Page**: Resource list with "Coming Soon" statuses.
- **Blog Page**: Listing of transformational ideas/topics.
- **Contact Page**: Contact info and a functional-looking frontend form.
- **Common**: Responsive Navigation Header and Footer.

## Non-Goals
- Server-side persistence (No Supabase/Database).
- Real email sending (Frontend simulation only).
- CMS for blog posts (Hardcoded initial content).

## Assumptions & Open Questions
- Images: Since no specific images were provided, I will use placeholder images or relevant Unsplash stock photos.
- Theme: Will implement a clean, professional, and inspiring design (light/dark mode support if standard).

## Affected Areas
- `src/App.tsx`: Routing setup.
- `src/components/`: Navigation, Footer, Section layouts.
- `src/pages/`: Home, About, Speaking, Projects, Books, Blog, Contact.

## Phase 1: Foundation & Routing
- Install `react-router-dom` and `lucide-react`.
- Set up basic folder structure for `pages` and `components`.
- Configure routing in `src/App.tsx`.
- **Owner**: `frontend_engineer`

## Phase 2: Core Layout Components
- Create `Navbar` with mobile responsiveness.
- Create `Footer` with bio and quick links.
- Create a `PageLayout` or `Section` wrapper for consistent spacing.
- **Owner**: `frontend_engineer`

## Phase 3: Home Page Implementation
- Implement all sections: Hero, Short Intro, Featured Areas, Quote, About Preview, Projects Preview, Speaking Preview, Testimonials, Final CTA.
- Use Shadcn UI for cards, buttons, and carousels (if needed for testimonials).
- **Owner**: `frontend_engineer`

## Phase 4: Inner Pages (About, Speaking, Projects, Books)
- **About**: Content-heavy biographical layout.
- **Speaking**: List-based topics and clear CTA.
- **Projects**: Grid/List of initiatives with descriptions.
- **Books**: Resource cards with "Coming Soon" badges.
- **Owner**: `frontend_engineer`

## Phase 5: Blog & Contact
- **Blog**: Create a list of blog topics as cards.
- **Contact**: Implement the contact form with validation (using Shadcn `Form`, `Input`, `Textarea`).
- **Owner**: `frontend_engineer`

## Phase 6: Refinement & Polishing
- Review responsiveness on all pages.
- Add subtle animations (e.g., fade-ins).
- Final check of all text content against the requirements.
- **Owner**: `quick_fix_engineer`
