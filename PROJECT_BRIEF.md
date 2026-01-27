# PROJECT BRIEF – UNIFI.ID

## 1. Purpose

Unifi.id is a people first smart building and decarbonisation platform.
The website must clearly communicate:
1. The problem with fragmented and reactive building management
2. How Unifi.id unifies safety, occupancy, energy, and compliance
3. How organisations move from waste and risk to control, savings, and verified outcomes

**Success means**
- A new visitor understands the value within 30 seconds
- Users naturally move to Platform, FireGuard, Energy, or Contact
- The structure supports future content without redesign

---

## 2. Non-Negotiables

- `PROJECT_BRIEF.md` is the single source of truth
- Do not invent new information architecture
- Reuse existing component patterns wherever possible
- New components are allowed only if they are generic and reusable
- Content must be conservative, credible, and compliance led
- No hype language or speculative claims
- Structure before styling

---

## 3. Brand and Product Principles

### Brand tone
- Calm
- Confident
- Expert
- Evidence based
- Financially literate

### Audience
- Estates Directors
- Facilities Managers
- Finance Directors
- Sustainability and ESG leads
- Public sector decision makers

### Core positioning

Unifi.id helps organisations stop wasting money and carbon through fragmented systems by delivering integrated, funded, and verifiable building intelligence and upgrades.

---

## 4. Information Architecture

### Primary routes
- `/`
- `/platform/overview`
- `/solutions/hub`
- `/solutions/fireguard`
- `/energy/hub`
- `/sectors`
- `/roles`
- `/resources`
- `/contact`

### Navigation logic
- Users can enter by problem, sector, role, or technology
- No dead ends
- Every page must lead to a logical next step

---

## 5. Page-by-Page Skeletons

### Homepage (`/`)

**Purpose**
- Orientation
- Credibility
- Clear routing

**Sections in order**
1. Hero with animated messaging and primary CTA
2. The challenge Unifi.id solves
3. Introducing Cortex
4. People first building management
5. Three track navigation
   - Platform
   - FireGuard
   - Energy
6. Sector and role pathways
7. Closing CTA
8. Footer

---

### Platform Overview – Cortex (`/platform/overview`)

**Purpose**
Explain Cortex as the intelligence layer that unifies all Unifi.id solutions.

**Structure**
- Hero with definition and value
- Capability overview
- What Cortex replaces
- Who Cortex is for
- CTA to solutions

**Positioning**
- Cortex is a decision system
- Not just software
- Not just dashboards

---

### Solutions Hub (`/solutions/hub`)

**Purpose**
Act as the main problem to solution index.

**Structure**
- Hero
- Filtered solution cards
- Routes to Cortex, FireGuard, and Energy

---

### FireGuard (`/solutions/fireguard`)

**Purpose**
Explain proactive and verifiable fire safety and compliance.

**Structure**
- Hero
- Risks of traditional fire safety
- FireGuard capabilities
- Sector relevance
- CTA

---

## 6. Content Rules

- Write for decision makers
- Focus on outcomes, risk reduction, and financial logic
- Avoid repeating the same copy across pages
- Use structured paragraphs
- Avoid long prose
- Every section must answer why this matters
- No statistics without an approved source

---

## 7. Platform and Component Logic

### Shared components
- HeroSection
- BenefitGrid
- TabNavigation
- SectorCards
- CTASection

### Rules
- Data driven rendering where possible
- Tabs must reuse the same card structures
- Sector and role logic must be consistent across pages
- One state per tab level
- No shared state across unrelated sections

---

## 8. Decarbonisation Microsite Logic

### Energy Hub (`/energy/hub`)

**Purpose**
Show how wasted energy spend can be redirected into funded upgrades.

**Top level tabs**
- Explore by Technology
- Explore by Sector

**Technology tabs**
- LED Lighting
- Heating and HVAC
- Solar and Renewables

**Each technology follows the same structure**
- Hero stats
- Intro explanation
- Benefits
- Risks and standards
- Sector applications
- CTA

**Sector depth**
- Education
- Corporate
- Public sector

**Education splits into**
- Higher education
- State schools
- MATs
- Independent schools
- Groups

**All sector content must address**
- Budget pressure
- Compliance
- Disruption risk

**Funding logic**
- No upfront capital
- Cashflow positive where applicable
- Conservative modelling only

---

## 9. Cortex Platform Logic

Cortex connects:
- Occupancy
- Fire safety
- Energy
- Compliance
- Reporting

**Principles**
- One system of record
- Verifiable data
- Decision support, not noise
- Supports people, not automation hype

---

## 10. Translation Rules

- English is built first
- Structure is locked before translation
- Chinese uses `/zh/...` routes
- Language switch preserves the current page when a translation exists
- If not available, route to the Chinese welcome page and clearly state the limitation

---

## 11. Performance, SEO, and Accessibility

### Performance
- Lighthouse score 90 or above on mobile
- Largest Contentful Paint under 2.5 seconds

### SEO
- Page titles and meta descriptions for all routes
- Open Graph metadata
- Canonical URLs
- Sitemap and robots

### Accessibility
- Keyboard navigation for all tabs and menus
- Visible focus states
- Color contrast compliance
- Reduced motion support

---

## 12. Implementation Instructions for Cursor

Every Cursor prompt must assume:
- This brief overrides all other context
- If something is missing, ask before inventing
- Extend existing patterns before creating new ones
- Maintain structural consistency across all pages

Always follow `PROJECT_BRIEF.md` as the source of truth.
