# Private Cloudflare deployment

Production is served by the Cloudflare Worker `eco-brick-website-secure`, not GitHub Pages. Keep this repository private and GitHub Pages disabled.

Deploy the repository root with `npx wrangler deploy --config .cloudflare/wrangler.jsonc` after reviewing changes. Use an authorized Cloudflare account. Never enable workers.dev or preview URLs. Keep `assets.run_worker_first` enabled and the Access JWT verification intact.

Business-Plan assets belong under `Business-Plan/assets/`. Do not publish the model JSON, JS or CSS under public `/assets/`. The existing Data-Room Worker retains its more specific routes and is managed separately; this deployment does not contain its source.

Approve investors in Cloudflare Zero Trust > Access > Applications, using the existing Include > Emails rules. Business-Plan: eco BRICK Budget / Authorized Email Access. Data-Room: eco BRICK Investors / Investor Owner Access. Maintain the two lists separately. Use One-time PIN only. Never add Everyone, a broad email domain, or Bypass.

Verify unauthenticated requests cannot retrieve either protected page or the model assets, including alternate origins. Verify an approved user can sign in to both pages. The private repository history is preserved; previously downloaded copies cannot be recalled.
