import { Suspense } from "react"
import PortfolioGridClient from "./portfolio-grid-client"

export default function PortfolioGrid() {
  return (
    <section className="py-8 bg-background">
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200 animate-pulse"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        }
      >
        <PortfolioGridClient />
      </Suspense>
    </section>
  )
}
