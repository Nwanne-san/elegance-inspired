import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config"
import { portfolioData } from "@/data/index"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioData.find((item) => item.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return generateSeoMetadata(
    `${project.title} - Portfolio | Elegance Inspired`,
    `${project.description}`,
    project.images[0],
    [...project.tags, project.client, "portfolio", "case study"],
  )
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = portfolioData.find((item) => item.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-bold text-lg">Client</h3>
                  <p>{project.client}</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Date</h3>
                  <p>{project.date}</p>
                </div>

                {project.location && (
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p>{project.location}</p>
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-lg">Category</h3>
                  <p>
                    {project.category
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link href="/contact">Discuss a Similar Project</Link>
              </Button>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
