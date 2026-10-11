import { formatCurrency } from "@/lib/formatCurrency";

type PriceSummaryProps = {
  adults: number;
  childCount: number;
  adultPrice: number;
  childPrice: number;
  currency: string;
};

export default function PriceSummary({
  adults,
  childCount,
  adultPrice,
  childPrice,
  currency,
}: PriceSummaryProps) {
  const adultTotal = adults * adultPrice;
  const childTotal = childCount * childPrice;
  const total = adultTotal + childTotal;

  return (
    <div className="mt-6 border-t border-neutral-200 pt-5">
      <div className="space-y-3">
        <div className="flex justify-between gap-4 text-sm">
          <span className="text-foreground/60">
            Adults × {adults}
          </span>

          <span className="text-right text-foreground/90">
            {formatCurrency(adultTotal, currency)}
          </span>
        </div>

        {childCount > 0 && (
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-foreground/60">
              Children × {childCount}
            </span>

            <span className="text-right text-foreground/90">
              {formatCurrency(childTotal, currency)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-5">
        <span className="text-sm font-medium text-neutral-900">
          Estimated total
        </span>

        <span className="text-xl font-semibold text-neutral-900">
          {formatCurrency(total, currency)}
        </span>
      </div>
    </div>
  );
}
