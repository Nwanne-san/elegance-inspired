"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "event-branding", name: "Event Branding" },
  { id: "office-signage", name: "Office Signage" },
  { id: "brand-identity", name: "Brand Identity Design" },
  { id: "corporate-gifts", name: "Corporate Gifts" },
  { id: "social-media-designs", name: "Social Media Designs" },
  { id: "social-media-management", name: "Social Media Management" },
  { id: "social-media-ad", name: "Social Media Ad" },
  { id: "billboard-placement", name: "Billboard Placement" },
  { id: "product-branding", name: "Product Branding" },
  { id: "printing", name: "Printing" },
  { id: "web-app-development", name: "Web/App Development" },
]

export default function PortfolioCategoriesClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Get the current category from URL or default to "all"
  const currentCategory = searchParams.get("category") || "all"

  const handleCategoryChange = (categoryId: string) => {
    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams)

    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    // Update the URL with the new search params
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "outline"}
          className={`rounded-full ${currentCategory === category.id ? "bg-primary hover:bg-primary/90" : ""}`}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
