import { Suspense } from "react";
import PortfolioCategoriesClient from "./portfolio-categories-client";

export default function PortfolioCategories() {
  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4 overflow-x-auto">
        <Suspense
          fallback={
            <div className="flex flex-wrap gap-2 justify-center">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-32 rounded-full bg-gray-200 animate-pulse"
                  ></div>
                ))}
            </div>
          }
        >
          <PortfolioCategoriesClient />
        </Suspense>
      </div>
    </section>
  );
}
