import { C } from "./theme";

export const activityConfig = {
  payment: {
    icon: "cash-outline",
    iconColor: C.paidText,
    background: C.paidBg,
    amountColor: C.paidText,
  },

  expense: {
    icon: "wallet-outline",
    iconColor: "#EF4444",
    background: "#FEE2E2",
    amountColor: "#EF4444",
  },

  notice: {
    icon: "notifications-outline",
    iconColor: "#7C3AED",
    background: "#EDE9FE",
    amountColor: "#7C3AED",
  },
} as const;

export type ActivityType = "payment" | "expense" | "notice";

export interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  subtitle: string;
  amount: string;
  time: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    type: "payment",
    title: "Payment Received",
    subtitle: "Flat A-203 • Rahul Sharma",
    amount: "+₹3,000",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "notice",
    title: "Notice Published",
    subtitle: "Water supply maintenance",
    amount: "",
    time: "15 min ago",
  },
  {
    id: 3,
    type: "expense",
    title: "Expense Added",
    subtitle: "Garden Maintenance",
    amount: "-₹5,200",
    time: "1 hour ago",
  },
];