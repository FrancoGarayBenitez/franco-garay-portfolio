export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "franco.garay@email.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+52 123 456 7890",
  contactLocation:
    process.env.NEXT_PUBLIC_CONTACT_LOCATION || "Ciudad de México, México",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
} as const;
