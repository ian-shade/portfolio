## Setup

1. Add RESEND_API_KEY environment variable in .env.local
2. In the send-email.ts action file, change the "to" email to your own email
3. To enable Cloudflare uploads from the contact form, also add CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_IMAGES_TOKEN environment variables.

### Cloudflare setup

1. In the Cloudflare dashboard, enable **Images** for your account (Images → Overview → Enable if prompted).
2. Generate an API token with **Account → Cloudflare Images: Edit** permissions (My Profile → API Tokens → Create Custom Token). The token value becomes `CLOUDFLARE_IMAGES_TOKEN`.
3. Copy your Cloudflare **Account ID** from the Images → Overview page into `CLOUDFLARE_ACCOUNT_ID`.
4. Redeploy or restart the app so the new environment variables are loaded.
5. Optional: in the Images settings, configure delivery variants if you want Cloudflare to return specific sized URLs instead of the default `result.id` link.
