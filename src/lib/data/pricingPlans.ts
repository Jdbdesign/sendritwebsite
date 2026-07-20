export type PricingPlan = {
  tier: string;
  tagBg: string;
  tagColor: string;
  price: string;
  emails: string;
  limit: string;
  cta: string;
  popular?: boolean;
  includesLabel: string;
  features: string[];
};

const purple = { tagBg: "rgba(124,58,237,0.9)", tagColor: "#fff" };
const magenta = { tagBg: "linear-gradient(135deg,#9333EA,#C026D3)", tagColor: "#fff" };
const dark = { tagBg: "#1C1830", tagColor: "#EDEBF4" };

const raw: Array<Omit<PricingPlan, "tagBg" | "tagColor"> & { tagStyle: { tagBg: string; tagColor: string } }> = [
  {
    tier: "Free",
    tagStyle: dark,
    price: "$0",
    emails: "5,000 emails",
    limit: "200 emails per day",
    cta: "Get started free",
    includesLabel: "Features include:",
    features: ["1,000 contacts", "API, SMTP relay, webhooks", "Advanced email editor", "Basic statistics", "Form builder"],
  },
  {
    tier: "Starter",
    tagStyle: purple,
    price: "$15",
    emails: "10,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $15",
    includesLabel: "Everything from Free, plus:",
    features: ["2,000 contacts", "Brand kit", "Online support", "1 subaccount"],
  },
  {
    tier: "Essential",
    tagStyle: magenta,
    price: "$27",
    emails: "15,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $27",
    includesLabel: "Everything from Starter, plus:",
    features: [
      "Unlimited contacts",
      "Segmentation",
      "AI-assisted content creation",
      "500 email-address validations",
      "500 email previews",
      "Custom unsubscribe page",
    ],
  },
  {
    tier: "Essential",
    tagStyle: magenta,
    price: "$37",
    emails: "50,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $37",
    popular: true,
    includesLabel: "Everything from Starter, plus:",
    features: [
      "Unlimited contacts",
      "Segmentation",
      "AI-assisted content creation",
      "900 email-address validations",
      "500 email previews",
      "Custom unsubscribe page",
      "No Sendrit logo",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$105",
    emails: "100,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $105",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$250",
    emails: "250,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $250",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$470",
    emails: "500,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $470",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$500",
    emails: "1,000,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $500",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$2,500",
    emails: "5,000,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $2,500",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$5,000",
    emails: "10,000,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $5,000",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$12,500",
    emails: "25,000,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $12,500",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
  {
    tier: "Premium",
    tagStyle: purple,
    price: "$25,000",
    emails: "50,000,000 emails",
    limit: "No daily sending limit",
    cta: "Get started — $25,000",
    includesLabel: "Everything from Essential, plus:",
    features: [
      "Advanced statistics",
      "Automations",
      "Landing pages",
      "2,000 email previews",
      "Team & account management",
      "Priority support",
      "1 dedicated IP",
    ],
  },
];

export const pricingPlans: PricingPlan[] = raw.map(({ tagStyle, ...p }) => ({
  ...p,
  tagBg: tagStyle.tagBg,
  tagColor: tagStyle.tagColor,
}));
