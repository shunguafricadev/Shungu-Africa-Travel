# Shungu Africa SEO and Indexability Audit

**Audit date:** 2026-10-13  
**Scope:** source inspection, a production build, a local crawl of the generated sitemap, representative live-site checks, image review, and limited public search-result sampling. No production deployment, DNS change, or account setting was changed.

## Summary

The source changes are implemented and locally verified, but the live site has not been updated. Before these changes, representative live unknown-slug pages returned HTTP 200 and the live sitemap contained 84 URLs. The rebuilt local production output now returns 404 for unknown slugs across all five detail-route families and has a 78-URL sitemap containing only pages intended to be indexable.

The local crawl checked all 78 sitemap URLs: each returned HTTP 200 and its canonical matched the sitemap URL. It also checked the six excluded utility and incomplete-article pages. These are local build results, not a claim that Google's index or the production deployment has changed.

The destination hero had an unrelated Norwegian-fjord image at a public URL. It has been replaced with a WebP frame from the site's existing safari video; the older optimized-path public URL was kept and updated to the same image. The homepage still renders a high-priority static image first and enables the decorative video only after page load, after a delay, and only on desktop when reduced motion is not requested.

## Source changes

- Five dynamic detail routes now define valid static slugs and set `dynamicParams = false`, so unknown destination, activity, package, transfer, and blog slugs resolve as not found.
- Blog entries without body content are `noindex,follow` and omitted from the sitemap. `/privacy` and `/legal` are also `noindex,follow` and omitted from the sitemap.
- The sitemap now has 9 section/home URLs and 69 data-backed detail URLs (41 activities, 13 destinations, 13 packages, and 2 transfers). Its homepage URL exactly matches the homepage canonical.
- The homepage hero now uses the Africa-relevant static image. The duplicate legacy public hero image URL remains available with the corrected image.
- The `/enquire` Suspense fallback now includes its page heading in the initial server-rendered HTML, rather than returning only a loading message.

## Verification

| Check | Result |
|---|---|
| `npm run build` | Passed on Next.js 16.3.8; TypeScript and static generation completed (94 generated pages). |
| Targeted ESLint on changed route, sitemap, legal/privacy, and hero files | Passed. |
| Local generated sitemap | Valid XML; 78 URLs; no `/privacy`, `/legal`, or incomplete blog articles. |
| Local sitemap crawl | 78/78 returned 200; 78/78 canonical URLs exactly matched; no canonical mismatches. |
| Page metadata inventory | All 84 audited URLs had a meta description and at least one H1 after the enquiry fallback fix; exact titles, descriptions, H1s, and lengths are in the page map. |
| Noindex pages | Privacy, legal, and all four contentless blog entries emit `noindex,follow`. |
| Unknown dynamic slugs | All five route types returned 404 locally; representative known slugs returned 200. |
| Live canonical redirects | The earlier live checks found HTTP, non-`www`, and legacy host variants redirecting to the preferred `https://www.shunguafrica.com` host. |
| Local cache headers | Hashed CSS and both self-hosted WOFF2 files returned `public, max-age=31536000, immutable`; public hero WebP returned `public, max-age=0`. The deployed Cloudflare edge policy was not inspected. |
| Responsive hero smoke check | The static hero image loaded at 1440px and 390px viewports with no horizontal overflow. The optional video was inserted on desktop but did not reach a playing/ready state in the automation browser; it returned HTTP 206, and the static fallback remained visible. Verify playback on supported real browsers before calling the video behavior fully validated. |
| Live post-change check | Not performed: the changes have not been deployed. |
| Lighthouse / PageSpeed post-change comparison | Not available. Unauthenticated PSI requests were rate-limited (HTTP 429); the production deployment is also unchanged. No LCP, FCP, CLS, or performance-score improvement is claimed. |

The complete locally crawled page-by-page results are in [`page-seo-map.csv`](./page-seo-map.csv). Image dimensions, source sizes, visible subjects, and delivery notes are in [`image-inventory.csv`](./image-inventory.csv).

The production HTML emits a high-priority responsive preload for one homepage hero image, while the decorative video is only inserted after load on desktop. The two site fonts are self-hosted through `next/font` and preloaded. Those source/build observations do not establish real-user Core Web Vitals. The underlying public image URL is revalidated by the local Next.js server; actual Cloudflare caching behavior remains unverified.

## Keyword and competitor research limits

[`keyword-map.csv`](./keyword-map.csv) is a proposed page-to-query map, not measured keyword research. Search volume, current rank, impressions, click-through rate, conversion data, and market-by-market demand were unavailable because Search Console, analytics, and keyword-planning accounts were not accessible. Priorities reflect topical fit and booking intent in the existing site, not estimated demand.

Two Bing result-page snapshots were reviewed on the audit date for “Zimbabwe safari tour operator” and “Victoria Falls tours Zimbabwe tour operator.” The visible results included aggregators/directories (SafariBookings, GetYourGuide, Viator, Africa Tour Operators, and Your African Safari) as well as local/operator examples (Rockfowl Safaris and Bubbles Tours & Safaris). These are discovery examples only: the results were localized, included paid placements, and are not a verified ranking report or a comprehensive competitor comparison. See [`competitor-serp-snapshot.csv`](./competitor-serp-snapshot.csv).

## Content and rollout priorities

The four existing blog records have no article body, although their cards contain summaries and dates. Their detail pages remain available, but are excluded from indexing and the sitemap until complete copy is supplied. In particular, the 2023/2024 titles should be fact-checked or updated rather than republished as current news. See [`content-roadmap.csv`](./content-roadmap.csv).

1. Review the proposed page/query map with the business and validate it against Search Console and booking data.
2. Supply accurate, reviewed article content and current dates before removing the blog `noindex` behavior.
3. Deploy the changes, submit the sitemap in Search Console, and verify live 404s, canonicals, robots directives, and sitemap URLs.
4. Re-run mobile and desktop PSI/Lighthouse on the deployed version under comparable test conditions. Record CrUX field data separately from lab measurements.
5. Confirm image licensing/source records and destination-specific image provenance. The About preview is described conservatively because its precise location is not established by the code.

The prioritized work and status are tracked in [`implementation-tracker.csv`](./implementation-tracker.csv).

## References

- [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central: Block Search indexing with `noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Google Search Central: Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Bing search snapshot: Zimbabwe safari tour operator](https://www.bing.com/search?q=Zimbabwe+safari+tour+operator)
- [Bing search snapshot: Victoria Falls tours Zimbabwe tour operator](https://www.bing.com/search?q=Victoria+Falls+tours+Zimbabwe+tour+operator)
