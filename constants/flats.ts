import {C} from "@/constants/theme"
import { Flat } from "../components/flats/FloorSection";

export const total_flats = 24
export const paid_flats = 13
export const flats_overdue = 6
export const statusConfig = {
  paid: {
    text: C.paidText,
    background: C.paidBg,
    color: C.paidText,
    icon: "checkmark-circle-outline",
  },

  pending: {
    text: C.pendingText,
    background: C.pendingBg,
    color: C.pendingText,
    icon: "time-outline",
  },

  overdue: {
    text: C.overdueText,
    background: C.overdueBg,
    color: C.overdueText,
    icon: "warning-outline",
  },
} as const;

export const floors = [
  {
    floor: "Floor 1",
    flats: [
      { flatNo: 101, status: "paid" },
      { flatNo: 102, status: "pending" },
      { flatNo: 103, status: "paid" },
      { flatNo: 104, status: "paid" },
      { flatNo: 105, status: "pending" },
      { flatNo: 106, status: "paid" },
      { flatNo: 107, status: "overdue" },
      { flatNo: 108, status: "paid" },
    ] satisfies Flat[],
  },
  {
    floor: "Floor 2",
    flats: [
      { flatNo: 201, status: "paid" },
      { flatNo: 202, status: "paid" },
      { flatNo: 203, status: "pending" },
      { flatNo: 204, status: "paid" },
      { flatNo: 205, status: "overdue"},
      { flatNo: 206, status: "pending" },
      { flatNo: 207, status: "paid" },
      { flatNo: 208, status: "overdue"}
    ] satisfies Flat[],
  },
  {
    floor: "Floor 3",
    flats: [
      { flatNo: 301, status: "paid" },
      { flatNo: 302, status: "pending" },
      { flatNo: 303, status: "paid" },
      { flatNo: 304, status: "overdue" },
      { flatNo: 305, status: "pending" },
      { flatNo: 306, status: "pending" },
      { flatNo: 307, status: "overdue" },
      { flatNo: 308, status: "paid" },
    ] satisfies Flat[],
  },
  {
    floor: "Floor 4",
    flats: [
      { flatNo: 401, status: "pending" },
      { flatNo: 402, status: "pending" },
      { flatNo: 403, status: "paid" },
      { flatNo: 404, status: "paid" },
      { flatNo: 405, status: "pending" },
      { flatNo: 406, status: "paid" },
      { flatNo: 407, status: "paid" },
      { flatNo: 408, status: "paid" },
    ] satisfies Flat[],
  },
];
