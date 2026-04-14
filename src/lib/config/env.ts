export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "francogaray2314@gmail.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+54 261 593-9115",
  contactLocation:
    process.env.NEXT_PUBLIC_CONTACT_LOCATION ||
    "Godoy Cruz, Mendoza, Argentina",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/FrancoGarayBenitez",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  gaId: process.env.NEXT_PUBLIC_GA_ID,
} as const;
