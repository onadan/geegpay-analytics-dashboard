import { BoxTick, Coin1, I3DRotate, ShoppingCart } from "iconsax-react";

export const overviewCardsData = [
  {
    name: "Total Order",
    amount: "350",
    stat: "23.5",
    profit: true,
    icon: BoxTick,
  },
  {
    name: "Total Refund",
    amount: "270",
    stat: "23.5",
    profit: false,
    icon: I3DRotate,
  },
  {
    name: "Average Sales",
    amount: "350",
    stat: "23.5",
    profit: false,
    icon: ShoppingCart,
  },
  {
    name: "Total Income",
    amount: 350000,
    stat: "23.5",
    profit: true,
    icon: Coin1,
  },
];

export const lastOrdersData = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    action: "View",
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    action: "View",
  },
  {
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    action: "View",
  },
  {
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    action: "View",
  },
  {
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    action: "View",
  },
];

export const topPlatformsData = [
    {name: "Book Bazaar", amount:"$2,500,000", stat: "+15%", width: 60},
    {name: "Artisan Aisle", amount:"$1,800,000", stat: "+10%", width: 50},
    {name: "Toy Troop", amount:"$1,200,000", stat: "+8%", width: 40},
    {name: "XStore", amount:"$600,000", stat: "+5%", width: 45},
]
