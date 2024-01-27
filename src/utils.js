import { format } from "date-fns";

export function getCurrentDate() {
  const currentDate = new Date();
  return format(currentDate, "MMMM d, yyyy");
}

export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
