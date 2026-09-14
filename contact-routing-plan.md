# Contact email routing

## Scope

Update the live C2 website's contact details and enquiry handling without changing its design, branding, existing page content, DNS, or Zoho account roles.

## Proposed behaviour — pending user confirmation

- Publish `info@corevolvix.com` for general enquiries and `director@corevolvix.com` for major projects and partnerships on the Contact page and footer.
- Add an enquiry type selector. General enquiries route to Info; major projects / partnerships route to Director. Do not invent a budget threshold.
- Prefer direct delivery through a server-side Zoho mail integration if the user approves and secure server credentials are available. Otherwise retain an explicitly labelled email-draft workflow; never claim a draft was sent.
- Test validation, routing, error handling, keyboard accessibility, and mobile layout.
- Publish only after the user confirms live deployment and checks pass; preserve unrelated changes.

## Work sequence

1. Confirm routing criteria, direct delivery versus email draft, and deployment preference.
2. Verify C2 repository and production deployment configuration; read relevant installed Next.js documentation.
3. Implement shared routing/contact configuration, contact links, and form behaviour.
4. If direct delivery is selected, validate the request and recipients on the server; keep authentication secrets server-only and configure them securely outside chat. Add abuse protection appropriate to the endpoint and fail safely when configuration is absent.
5. Run lint, build, routing tests and page checks. Verify live delivery only with authorized test submissions and actual receipt evidence.
6. Publish the approved update and report what is verified and any remaining setup.

## Current findings

- `D:/C2` is the clean standalone repository at `https://github.com/SongsBeats/C2.git`.
- Next.js 16.3.4 currently exports a static site to `out/`.
- The existing form opens a `mailto:hello@corevolvix.com` draft; there is no mail-sending backend.
- No mailbox/account deletion or extra licence purchase is needed for this website task.
