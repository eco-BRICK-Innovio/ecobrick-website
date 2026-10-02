# Private Cloudflare deployment

Production, including Business-Plan and Data-Room, is served by the Cloudflare Worker `eco-brick-website-secure`, not GitHub Pages. Keep this repository private and GitHub Pages disabled.

Run `node .cloudflare/preflight.cjs` before deploying the repository root with `npx wrangler deploy --config .cloudflare/wrangler.jsonc`. The preflight checks all protected PDF files against their recorded SHA-256 values. Use an authorized Cloudflare account. Never enable workers.dev or preview URLs. Keep `assets.run_worker_first` enabled and the Access JWT verification intact.

Business-Plan assets belong under `Business-Plan/assets/`. Do not publish the model JSON, JS or CSS under public `/assets/`. Data-Room PDFs belong under `Data-Room/docs/`. The four production routes all use this protected Worker; the former `eco-brick-investors` Worker is preserved for recovery and has no production route assigned. Each protected area validates its own Access audience; approval to one area does not authorize the other.

The original PDFs and technology video in SharePoint retain owner access only. Investor links use the protected Cloudflare copies. The original 197629293-byte MP4 is stored as ten byte-preserving segments under Data-Room/video-parts to satisfy the static-asset size limit. The Worker exposes one video/mp4 URL under Data-Room/docs, with GET/HEAD and single byte-range support for playback and seeking. Both the video URL and segment URLs require the Data-Room Access audience. video-manifest.json records the source and segment hashes; preflight verifies both before deployment. Do not move video segments outside the protected Data-Room path.

Approve investors in Cloudflare Zero Trust > Access > Applications, using the existing Include > Emails rules. Business-Plan: eco BRICK Budget / Authorized Email Access. Data-Room: eco BRICK Investors / Investor Owner Access. Maintain the two lists separately. Use One-time PIN only. Never add Everyone, a broad email domain, or Bypass.

Verify unauthenticated requests cannot retrieve either protected page or the model assets, including alternate origins. Verify an approved user can sign in to both pages. The private repository history is preserved; previously downloaded copies cannot be recalled.

Video binary segments could not be saved through the GitHub web upload interface (size rejection). Before redeploying from this repository, restore Data-Room/video-parts from the complete local eco-BRICK-protected-site-backup-2026-10-02.zip or reconstruct the segments from the owner-only original MP4. Preflight intentionally refuses deployment if any segment is missing. The deployed Cloudflare copy is complete and was verified by an authenticated full download and live playback.
