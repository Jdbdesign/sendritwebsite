export type Stat = {
  target: number;
  decimals: number;
  suffix: string;
  gradient: string;
  label: string;
};

export const stats: Stat[] = [
  { target: 2.5, decimals: 1, suffix: "B+", gradient: "linear-gradient(120deg,#F472B6,#F0779A)", label: "Emails Delivered" },
  { target: 98.6, decimals: 1, suffix: "%", gradient: "linear-gradient(120deg,#F472B6,#C084FC)", label: "Deliverability Rate" },
  { target: 150, decimals: 0, suffix: "K+", gradient: "linear-gradient(120deg,#818CF8,#A78BFA)", label: "Active Users" },
  { target: 180, decimals: 0, suffix: "+", gradient: "linear-gradient(120deg,#A78BFA,#8B5CF6)", label: "Countries Reached" },
];
