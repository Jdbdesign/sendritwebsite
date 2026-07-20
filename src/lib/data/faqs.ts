export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is Sendrit Bulk Email?",
    a: "Sendrit is an all-in-one platform for creating, sending, and tracking bulk email campaigns. It combines a drag-and-drop builder, advanced automation, and real-time analytics so you can connect with your audience at scale.",
  },
  {
    q: "How many emails can I send with Sendrit?",
    a: "Sending volume scales with your plan — from 5,000 emails on Free up to 50,000,000 on the largest Premium tier, with no daily sending limit on paid plans.",
  },
  {
    q: "Does Sendrit keep my emails out of spam?",
    a: "Sendrit verifies your list before you send, configures SPF, DKIM, and DMARC correctly from the start, and monitors your sender reputation continuously — so your mail lands in real inboxes.",
  },
  {
    q: "Can I automate my campaigns?",
    a: "Yes. Automations on Premium plans let you trigger sequences from sign-ups, expirations, and specific actions, so the right message goes out at the right time without manual work.",
  },
  {
    q: "Does Sendrit support integrations with other tools?",
    a: "Yes. Sendrit connects with tools like Mailchimp, Slack, Zapier, WordPress, Shopify, and custom webhooks to keep your data in sync across your stack.",
  },
];
