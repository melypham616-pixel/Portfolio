// Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached;
// otherwise use the production domain Vercel provides at build time.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

export const SITE = {
  name: "Pham Thi My Duyen (Mely)",
  title: "Pham Thi My Duyen (Mely) | Meta Ads & Performance Marketing Portfolio",
  description:
    "Portfolio of Pham Thi My Duyen (Mely), a Meta Ads consultant in Ho Chi Minh City: performance creative, SEO, email marketing, case studies and campaign results.",
  keywords: [
    "Pham Thi My Duyen",
    "Mely",
    "marketing portfolio",
    "Meta Ads consultant",
    "Facebook Ads",
    "performance marketing",
    "performance creative",
    "SEO",
    "email marketing",
    "Klaviyo",
    "digital marketing Ho Chi Minh City",
  ],
  email: "phamduyen132001@gmail.com",
  linkedin: "https://www.linkedin.com/in/myduyen1/",
};
