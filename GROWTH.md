# LOCX Industries — growth, analytics and promotion plan

Internal document. Do not publish as a page on the site.

## 1. Current constraint

Only **FreeChat 0.1.10** is in `02 - Approved for Sale`. Everything else is still in `01 - Packaged - Pending Approval`, except AisleSmith, which is still in verification.

Paid promotion and public launch posts should therefore lead with **FreeChat only**. Do not run ads or "buy" language for the other products until their release status changes. This is both the release-library rule and plain risk management.

Also note: the current site has `noindex` on every page and `robots.txt` with `Disallow: /`. That was added for anti-cloning. It also blocks search engines and AI answer crawlers from ever finding the site. **Before any launch or ad spend, remove `noindex` and set `robots.txt` back to `Allow: /`.** Otherwise you pay for traffic that search will never compound.

## 2. Analytics

Start with **Cloudflare Web Analytics**. It is free, cookieless, does not fingerprint visitors, and your domain is already proxied through Cloudflare, so it can be enabled with no code change.

1. Cloudflare dashboard → Web Analytics → Add a site → choose `locxgames.link`.
2. Confirm the domain is proxied (orange cloud). No script tag needed.
3. Track: page views by product page, referrer, country, and which product tiles get clicked.

What Cloudflare Web Analytics does **not** do: funnels, event goals, or per-visitor journeys. If you need those later:
- **Umami Cloud Hobby**: free, 100,000 events/month, one site, six months retention.
- **Plausible**: $9/month for 10,000 pageviews, cleaner dashboard, no free hosted tier.
- **PostHog**: large free tier (1M events), but heavier to set up.

Suggested events once you have Umami or Plausible: `view_product`, `click_download`, `click_contact`, `play_video`, `filter_products`.

KPIs for the first 90 days:
- 100 relevant visits/week to the site
- 15% click-through from the catalogue to a product page
- 5% of product-page visitors reach the contact action
- 20 early users or waitlist signups

## 3. Strongest products to push

Ranked by market pull, readiness and differentiation.

| Rank | Product | Why push it | Main competitors | Risk |
|---|---|---|---|---|
| 1 | **FreeChat** | Approved for sale. Broad audience: anyone wanting a free local ChatGPT alternative. Strong hook: no account, no API key, local models by the user. Five accents and a real window icon make it feel finished. | LM Studio (closed source, anonymous analytics on by default), Jan (Apache 2.0), Cherry Studio (~47k GitHub stars), AnythingLLM (~63k stars), Open WebUI (~146k stars), Msty ($149/user/year) | Very crowded category. Lead with "no account, no key, free", not generic "local AI". |
| 2 | **LOCX Cosmic** | Technical audience, strong demo, subscription login for Codex/Antigravity plus Team Coder, memory and activity stream. Good Show HN fit. | OpenCode (MIT, 75+ providers, ~208k stars), Claude Code, OpenAI Codex, Cursor, Devin Desktop, Antigravity | Could be dismissed as a wrapper. Emphasise orchestration, team runs and local keys. |
| 3 | **LOCX 3D Studio** | Highly visual, easy to demonstrate. Offline image-to-3D is a real pain point. | Meshy, Tripo, Luma, Stability AI, local ComfyUI workflows | Needs strong before/after renders and GPU claims verified. |
| 4 | **CodeQuest** | Unique: learn C++ by playing. Broad appeal to learners and educators. | Coding game niche: Screeps, CodeCombat, Human Resource Machine, educational YouTube | Must be playable before promotion. Needs a playable build and learning outcome proof. |
| 5 | **AisleSmith** | Blender Market / Superhive has high-intent search demand. Cheap to list. | ShelfBuilder, other Blender fixture generators | Niche; small ceiling but steady long-tail. |
| 6 | **LOCX Legal** | Real problem, but compliance-heavy. | Legal research tools | Highest liability. No paid promotion until claims and AI output are legally reviewed. |

## 4. Channels

Use one spike channel and one long-tail channel at a time. Two or three well-run channels beat launching everywhere.

### Spike channels
- **Product Hunt**: best for FreeChat once there is a clear download path and a demo. Free to launch, needs 10–20 hours of prep. A top-10 finish can bring 100–500 visits/signups.
- **Show HN (Hacker News)**: best for LOCX Cosmic. Only post when people can actually try the build. Write it yourself without an LLM; Show HN restricts new accounts and AI-written posts.
- **Niche subreddits**: r/LocalLLaMA, r/selfhosted for FreeChat; r/programming, r/LocalLLaMA for Cosmic; r/blender for AisleSmith; r/learnprogramming for CodeQuest (check each sub's self-promotion rules first). Expect 20–100 signups in 1–3 days from the right sub.
- **Indie Hackers / DevHunt / Uneed / Peerlist**: secondary launch boards, spread across a week rather than all on one day.

### Long-tail channels
- **AI directories**: There's An AI For That, Futurepedia, Toolify, Lifto. These rank for "AI tool for X" searches and keep working after launch week.
- **AlternativeTo and SaaSHub**: free profiles that rank for "alternatives to LM Studio / Jan / OpenCode" searches.
- **YouTube / short-form demo**: real screen capture of the product working. For 3D Studio and CodeQuest this is the highest-value content.
- **Newsletter sponsorships**: small AI/dev newsletters, $25–$100 per post, where the creator shows the actual workflow.

### Paid ads
Start small and targeted:
- **Reddit ads** to specific subreddit audiences, $10–$30/day, for FreeChat and Cosmic. Avoid broad "AI" targeting.
- **Google Search ads** only for high-intent phrases like "free local chatgpt alternative no api key". Avoid competing on generic "AI chat".
- Skip display/banner ads and broad social reach at this stage. No retargeting pixel on this site yet.

## 5. Asset checklist before spending anything

- Real screenshots for every product (already done for FreeChat, Cosmic, 3D Studio, Storyboard Studio, LOCX Legal, CodeQuest).
- 30–60 second real demo video per product. FreeChat and Cosmic first.
- One-page product brief: what it is, who it is for, what is verified, what is not claimed.
- Download or waitlist path that actually works today. FreeChat is approved; others need a clear "coming when cleared" path.
- Pricing decision. FreeChat is positioned as free; the others need a price before ads claim value.
- UTM-tagged links for every channel so analytics can attribute referrers.

## 6. 90-day sequence

**Weeks 1–2:** fix indexing (`noindex`, robots.txt), enable Cloudflare Web Analytics, finish FreeChat demo video, create Product Hunt and directory profiles, build a list of 50–100 real contacts.

**Week 3:** Product Hunt launch for FreeChat. Same week: submit to 3 AI directories and AlternativeTo. Do not batch every channel on one day.

**Week 4:** Show HN for LOCX Cosmic if the build is demonstrable. Follow with r/LocalLLaMA and r/programming posts that explain the technical choice.

**Weeks 5–8:** start $10–$30/day Reddit ads for FreeChat, publish one real demo video per week, add SaaSHub and more AI directories. Measure which page and referrer converts.

**Weeks 9–12:** revisit 3D Studio and CodeQuest promotion only if their release status and playable builds are ready. Keep the long-tail channels running.

## 7. Audit integration (24 Nov 2026)

The website & sales conversion audit recommended a shift from studio-first to customer-first. Applied changes:

- Homepage hero is now outcome-led: "Create more. Keep control." with "Explore our products" and "Meet the creators".
- Navigation renamed from Releases to Products.
- Homepage now features AisleSmith with its real render and prerequisites, followed by a signed founder block for LK999 and AB696 and a Workbench Notes signup.
- A Trust & Support page now covers download verification, privacy, optional data transfers, known limits, updates, refunds and troubleshooting.
- Devlog entries now carry dates, authors and product links.
- The internal "Storefront / profile bio" label is gone; About now leads with "Independent by design."

Priority note: the audit ranks AisleSmith first and Storyboard Studio second as launch candidates. That is a strategic hypothesis, not a status change. AisleSmith is still in verification, so it can be promoted as a product but not sold until its gates close. FreeChat remains the only product approved for sale today.

Paid launch sequence: FreeChat first because it is approved; AisleSmith first for carousel-style launch content once verified; Storyboard Studio and 3D Studio after their release records are consistent and demos exist.

## 8. Sales funnel playbook integration

Applied the implementation playbook's safe, low-cost items:

- Newsletter now collects product interests with explicit unchecked consent. The mailto fallback lists the chosen interests until a real email provider is connected.
- AisleSmith, Storyboard Studio, 3D Studio, FreeChat, Cosmic and CodeQuest each have dedicated product interest options.
- Fixed the 3D Studio version conflict. The public record is now BUILD 1.0.0 everywhere.
- Added canonical URLs and Open Graph title, description and image to every page, plus /support in the sitemap.
- Added Support, Privacy, Licensing and commercial terms destinations. Support now carries factual download-verification, privacy, licensing and terms sections; no invented legal policy.
- Analytics event dictionary and weekly dashboard are defined in the playbook. Cloudflare Web Analytics is the first implementation step; no paid analytics yet.
- Product state still comes from the release library. Checkout stays closed until a product clears its gates and a payment provider is approved. FreeChat is the only approved product today.

Not built yet by design: custom checkout, accounts, subscriptions, CRM, automated email sequences, paid ads before a measured baseline, fake reviews, countdowns or purchase alerts.

## 9. Guardrails

- Only approved products get purchase language or paid ads.
- No invented reviews, customers, usage numbers or "best" claims.
- Keep the MIT notice for the bundled OpenCode runtime in FreeChat's distribution; it is already present at `resources/agent/LICENSE-opencode.txt`.
- Do not use the OpenCode logo or imply partnership.
- Keep model-provider and legal claims inside what the release notes actually verify.
