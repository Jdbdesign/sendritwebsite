export type ProcessStep = {
  n: string;
  tab: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    tab: "Verify your list",
    body: "Upload contacts and Sendrit verifies every address in real time — invalid, risky, and disposable emails are flagged before they can hurt your sender reputation.",
  },
  {
    n: "02",
    tab: "Build your campaign",
    body: "Use the email builder — plain text or full HTML — with segmentation and custom fields, so every send feels built for its recipient, not blasted at them.",
  },
  {
    n: "03",
    tab: "Send with control",
    body: "Sending pattern and authentication — SPF, DKIM, DMARC — are managed together, so your volume never damages the reputation your next campaign depends on.",
  },
  {
    n: "04",
    tab: "Track what happens",
    body: "Every result streams into your dashboard live, so you know what is working before you plan the next send, not after.",
  },
];
