# ASCII Art Gallery - MVP Execution Plan

Created: 2026-02-06

---

## Product One-Liner

**Developers and Discord users who waste time searching for ASCII art can now find, customize, and copy any text art in under 10 seconds.**

---

## Monetization Choice

**Google AdSense (Display Ads)**

Justification: High-intent users with immediate copy-paste needs create perfect conditions for display ads. No payment friction, immediate monetization from day 1, scales automatically with traffic. Target: $5-15 RPM with quality placements.

---

## MVP Scope (3 Core Actions)

1. **User can search and filter 200+ ASCII arts by category and tags**
2. **User can copy any ASCII art with one click**
3. **User can bookmark favorite arts and access them instantly**

That's it. Nothing else matters for the first paying dollar.

---

## Not Doing List

We are explicitly NOT building these in v1:

1. User accounts / authentication system
2. Custom ASCII art generator (too complex, low conversion)
3. Community submission system (moderation nightmare)
4. Discord bot integration
5. API endpoints
6. Multi-language support (i18n)
7. Browser extensions
8. Social sharing features
9. Comments or rating system
10. Mobile app (PWA is enough)
11. Admin dashboard
12. Analytics tracking (beyond Google Analytics)
13. Email notifications
14. Dark mode toggle (CSS media query only)
15. Animation or advanced effects

---

## 7-Day Execution Plan

### Day 1 (Feb 6): Foundation & Quick Wins
**Deliverable: SEO optimization + Core UX improvements**

Morning:
- Add Schema.org structured data (ItemList, CreativeWork) to all pages
- Implement proper aria-labels and accessibility attributes
- Fix mobile navigation with hamburger menu

Afternoon:
- Add "Popular ASCII Arts" section on homepage (hardcoded top 8)
- Implement empty search state with helpful message
- Add loading states to search functionality

Evening:
- Create 2 blog posts for SEO:
  - "How to Use ASCII Art in Discord (2026 Guide)"
  - "Top 50 Copy-Paste ASCII Art for Developers"

**Success Metric:** Lighthouse SEO score 100, mobile navigation works

---

### Day 2 (Feb 7): Favorites Feature
**Deliverable: LocalStorage-based bookmark system**

Morning:
- Create bookmark button component with heart icon
- Implement localStorage read/write logic
- Add visual feedback for bookmarked state

Afternoon:
- Create /favorites page showing all bookmarked arts
- Add "Remove from favorites" functionality
- Implement empty state for favorites page

Evening:
- Add bookmark count badge to header navigation
- Test across browsers (Chrome, Firefox, Safari)
- Add analytics events for bookmark actions

**Success Metric:** Users can bookmark, view, and remove favorites without bugs

---

### Day 3 (Feb 8): Tag Filtering System
**Deliverable: Tag-based discovery UI**

Morning:
- Extract all unique tags from ascii-arts.json
- Create tag cloud/pill UI component
- Implement tag click filtering logic

Afternoon:
- Add "Related Tags" section on detail pages
- Create tag combination filtering (AND logic)
- Add clear filters button

Evening:
- Optimize tag search performance
- Add URL query params for shareable filtered views
- Test filter combinations

**Success Metric:** Users can filter by multiple tags, URLs are shareable

---

### Day 4 (Feb 9): Performance & Polish
**Deliverable: Lazy loading + UX polish**

Morning:
- Implement Intersection Observer for lazy loading cards
- Load initial 20 cards, load more on scroll
- Add skeleton loading UI

Afternoon:
- Implement keyboard navigation (Tab, Enter, Esc)
- Add copy history (last 5 copied arts in localStorage)
- Create "Recent Copies" quick access section

Evening:
- Optimize Core Web Vitals (LCP, CLS, FID)
- Compress and optimize all assets
- Add Service Worker for offline support

**Success Metric:** LCP < 2.5s, initial load shows 20 cards instantly

---

### Day 5 (Feb 10): AdSense Integration
**Deliverable: Monetization activated**

Morning:
- Activate Google AdSense account
- Implement ad units in prepared placeholders
- Set up ad.txt file

Afternoon:
- Test ad placement performance (above fold, below fold)
- Implement lazy loading for ads below fold
- A/B test ad sizes (728x90 vs 970x250)

Evening:
- Set up Google Analytics 4 with custom events
- Track key metrics: copies, searches, favorites, ad clicks
- Create conversion funnel dashboard

**Success Metric:** Ads displaying, no CLS impact, GA4 tracking all events

---

### Day 6 (Feb 11): Content & SEO Boost
**Deliverable: 3 more blog posts + internal linking**

Morning:
- Write 3 SEO-optimized blog posts:
  - "ASCII Art Copy Paste: Complete 2026 Collection"
  - "Kaomoji vs Emoji: Ultimate Guide"
  - "Text Art for Social Media (Twitter, Instagram, TikTok)"

Afternoon:
- Add blog listing page at /blog
- Implement internal linking strategy (blog → art pages)
- Add breadcrumbs to all pages

Evening:
- Submit sitemap to Google Search Console
- Create social media OG images for top 20 arts
- Set up dynamic OG image generation for art detail pages

**Success Metric:** 5 blog posts live, sitemap submitted, OG images working

---

### Day 7 (Feb 12): Launch & Distribution
**Deliverable: Public launch + marketing push**

Morning:
- Final QA testing (mobile, desktop, all browsers)
- Fix any critical bugs from testing
- Deploy to production via Netlify

Afternoon:
- Post launch announcement on:
  - Reddit (r/ascii, r/webdev, r/discordapp)
  - Hacker News (Show HN)
  - Product Hunt
  - Twitter/X with demo GIF

Evening:
- Monitor analytics and user behavior
- Respond to comments and feedback
- Create launch retrospective document
- Plan week 2 priorities based on data

**Success Metric:** 1,000+ visitors on launch day, ad revenue started

---

## Delegation Plan

**Next Agent: Frontend Developer**

**Task:**
"Implement the Day 1-3 features for ASCII Art Gallery. Specifically:

1. Add Schema.org structured data to BaseLayout.astro and art detail pages
2. Create a mobile hamburger menu component for navigation
3. Build a Favorites system using localStorage with these specs:
   - Heart icon button on each AsciiCard
   - /favorites page showing bookmarked arts
   - Persistent state across sessions
4. Implement tag filtering UI:
   - Extract unique tags from /src/data/ascii-arts.json
   - Create clickable tag pills
   - Support multiple tag filtering with URL params

Tech stack: Astro, TypeScript, Tailwind CSS. All code must be production-ready with error handling. Follow existing code style in the repo. Test on Chrome, Firefox, Safari."

---

## Definition of Done Checklist

Before launching, ALL of these must be true:

- [ ] User can find any ASCII art in under 10 seconds via search or tags
- [ ] Copy button works on all major browsers (Chrome, Firefox, Safari)
- [ ] Favorites persist across browser sessions with no bugs
- [ ] Mobile experience is smooth with hamburger menu
- [ ] Lighthouse score: 90+ on all metrics (Performance, SEO, Accessibility)
- [ ] AdSense displaying ads and tracking revenue
- [ ] Zero console errors on homepage and detail pages
- [ ] 5 SEO blog posts live and indexed
- [ ] Core Web Vitals pass (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- [ ] Google Analytics tracking all key events (copy, search, bookmark, page views)
- [ ] Site works offline with Service Worker fallback
- [ ] Product Hunt launch scheduled with description and screenshots

---

## Success Metrics (Week 1)

**Traffic Goals:**
- Day 1: 1,000 visitors (launch day)
- Day 7: 500 daily average
- Week 1 total: 5,000+ visitors

**Engagement Goals:**
- Average session: 2+ minutes
- Bounce rate: < 60%
- Pages per session: 3+
- Copy action: 40%+ of visitors

**Revenue Goals:**
- AdSense approval granted
- $10+ revenue in first week (baseline)
- RPM: $5+ (will optimize in week 2)

**SEO Goals:**
- 5 blog posts indexed by Google
- 50+ impressions from organic search
- 3+ backlinks from Reddit/HN

---

## Risk Mitigation

**Risk 1: AdSense approval delay**
- Mitigation: Apply on Day 1, use placeholder ads until approved
- Fallback: Use affiliate links to developer tools (GitHub, Discord Nitro)

**Risk 2: Low launch day traffic**
- Mitigation: Pre-schedule posts on Reddit, HN, Product Hunt
- Fallback: Paid promotion via Reddit ads ($50 budget)

**Risk 3: Technical bugs on launch**
- Mitigation: Full QA testing on Day 7 morning
- Fallback: Keep rollback build ready, monitor error tracking

**Risk 4: localStorage limits (5MB)**
- Mitigation: Store only art IDs, not full content
- Fallback: Alert user at 80% capacity

---

## Week 2 Priorities (Based on Data)

**If traffic is high but engagement is low:**
- Improve onboarding (tooltip tour)
- Add "Trending" and "New" sections
- Implement copy success tracking

**If traffic is low:**
- Double down on SEO (10 more blog posts)
- Build Discord bot for viral growth
- Launch on more platforms (Designer News, Indie Hackers)

**If monetization is low:**
- Optimize ad placements via heatmaps
- Test different ad formats
- Add affiliate links to blog posts

**If everything is working:**
- Start building custom ASCII art generator
- Plan API for developers
- Consider premium tier ($2/month, ad-free)

---

## Philosophy Reminders

1. **Shipping beats perfection** - Launch on Day 7 no matter what
2. **Data beats opinions** - Make week 2 decisions based on GA4 metrics
3. **Revenue beats vanity metrics** - Focus on conversion, not just traffic
4. **Speed beats features** - Cut scope ruthlessly if timeline slips
5. **Users beat assumptions** - Listen to feedback, iterate fast

---

**Plan Owner:** Product Manager
**Execution Owner:** Frontend Developer
**Launch Date:** February 12, 2026
**Review Date:** February 19, 2026 (1 week post-launch)

---

## Appendix: Technical Specifications

### Schema.org Implementation

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ASCII Art Gallery",
  "description": "200+ copy-paste ASCII art for Discord, social media, and messaging",
  "numberOfItems": 206,
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "name": "Happy Cat",
      "text": "ASCII art content here",
      "genre": "ASCII Art",
      "keywords": "cat, cute, simple"
    }
  ]
}
```

### LocalStorage Data Structure

```typescript
interface FavoritesData {
  version: string; // "1.0"
  favorites: string[]; // Array of art IDs
  lastUpdated: number; // Timestamp
}

interface CopyHistory {
  artId: string;
  copiedAt: number;
  title: string;
}
```

### Analytics Events

```javascript
// Track copy action
gtag('event', 'copy_art', {
  'art_id': 'happy-cat',
  'category': 'animals',
  'method': 'button_click'
});

// Track bookmark
gtag('event', 'bookmark_art', {
  'art_id': 'happy-cat',
  'action': 'add' // or 'remove'
});

// Track search
gtag('event', 'search', {
  'search_term': 'cat',
  'results_count': 12
});
```

### Tag Filter URL Structure

```
/ascii-art-gallery/?tags=cat,cute
/ascii-art-gallery/?tags=simple&category=animals
/ascii-art-gallery/?q=dog&tags=cute
```

---

**End of Execution Plan**

This plan is designed for a solo developer working full-time. If working part-time, extend to 14 days. If blocked on AdSense approval, continue with alternative monetization while waiting.

The goal is simple: **Ship a working product in 7 days that generates the first dollar of revenue.**

Everything else is a distraction.
