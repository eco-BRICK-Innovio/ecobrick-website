# Private Cloudflare deployment

Production, including Business-Plan and Data-Room, is served by the Cloudflare Worker `eco-brick-website-secure`, not GitHub Pages. Keep this repository private and GitHub Pages disabled.

Run `node .cloudflare/preflight.cjs` before deploying the repository root with `npx wrangler deploy --config .cloudflare/wrangler.jsonc`. The preflight checks all protected PDF files against their recorded SHA-256 values. Use an authorized Cloudflare account. Never enable workers.dev or preview URLs. Keep `assets.run_worker_first` enabled and the Access JWT verification intact.

Business-Plan assets belong under `Business-Plan/assets/`. Do not publish the model JSON, JS or CSS under public `/assets/`. Data-Room PDFs belong under `Data-Room/docs/`. The four production routes all use this protected Worker; the former `eco-brick-investors` Worker is preserved for recovery and has no production route assigned. Each protected area validates its own Access audience; approval to one area does not authorize the other.

The original PDFs in SharePoint retain owner access only; investor PDF links use the protected Cloudflare copies. The external technology video is still pending separate permission remediation and must not be described as secured until that work is verified.

Approve investors in Cloudflare Zero Trust > Access > Applications, using the existing Include > Emails rules. Business-Plan: eco BRICK Budget / Authorized Email Access. Data-Room: eco BRICK Investors / Investor Owner Access. Maintain the two lists separately. Use One-time PIN only. Never add Everyone, a broad email domain, or Bypass.

Verify unauthenticated requests cannot retrieve either protected page or the model assets, including alternate origins. Verify an approved user can sign in to both pages. The private repository history is preserved; previously downloaded copies cannot be recalled.
