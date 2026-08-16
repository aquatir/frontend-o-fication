const Currency = {
  USD: "USD",
  AED: "AED",
} as const;

type Currency = (typeof Currency)[keyof typeof Currency]; // "USD" | "EUR"

const currencySymbols: Record<Currency, string> = {
  [Currency.USD]: "$",
  [Currency.AED]: "AED",
};

type Inflow = {
  date: Date;
  currency: Currency;
  amount: number;
};

const inflows: Inflow[] = [
  { date: new Date("2026-01-05"), currency: Currency.USD, amount: 1200 },
  { date: new Date("2026-02-10"), currency: Currency.USD, amount: 850 },
  { date: new Date("2026-03-01"), currency: Currency.AED, amount: 300 },
];

const cellClassName = "px-4 py-2 border border-gray-300";

const displayedList = inflows.map((item, index) => (
  <tr key={index} className="even:bg-gray-50">
    <td className={cellClassName}> {item.date.toLocaleDateString()}</td>
    <td className={cellClassName}>
      {" "}
      {item.amount}
      {currencySymbols[item.currency]}
    </td>
  </tr>
));

export default function InflowList() {
  return (
    <div>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className={cellClassName}>Date</th>
            <th className={cellClassName}>Amount</th>
          </tr>
        </thead>
        <tbody>{displayedList}</tbody>
      </table>
    </div>
  );
}
