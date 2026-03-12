"use client"

import { useState, useEffect, useCallback } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getPortfolioItem, getRelatedPortfolioItems } from "@/data/portfolio-data"
import CTASection from "@/components/home/cta-section"
import useEmblaCarousel from "embla-carousel-react"

// Note: generateMetadata has been moved to a separate file since
// this is now a client component and can't export server functions

type Props = {
  params: { id: string }
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = getPortfolioItem(params.id)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  })

  // Add these functions for carousel navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  // Add this effect to update the selected index
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  if (!project) {
    notFound()
  }

  // Get related projects
  const relatedProjects = getRelatedPortfolioItems(params.id, 3)

  // Ensure project has images array; prefer main image for hero, then all for gallery
  const projectImages = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];
  const heroImage = project.image || projectImages[0];

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
                {project.client && (
                  <div>
                    <h3 className="font-bold text-lg">Client</h3>
                    <p>{project.client}</p>
                  </div>
                )}

                {project.industry && (
                  <div>
                    <h3 className="font-bold text-lg">Industry</h3>
                    <p>{project.industry}</p>
                  </div>
                )}

                {project.date && (
                  <div>
                    <h3 className="font-bold text-lg">Date</h3>
                    <p>{project.date}</p>
                  </div>
                )}

                {project.location && (
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p>{project.location}</p>
                  </div>
                )}

                {project.category && (
                  <div>
                    <h3 className="font-bold text-lg">Category</h3>
                    <p>
                      {project.category
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </p>
                  </div>
                )}
              </div>

              {project.tags && project.tags.length > 0 && (
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
              )}

              {/* Project Details Section - Desktop */}
              <div className="hidden lg:block mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                {(project.challenge || project.solution || project.outcome) && (
                  <div className="space-y-4">
                    {project.challenge && (
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-primary">The Challenge</h3>
                        <p>{project.challenge}</p>
                      </div>
                    )}

                    {project.solution && (
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-primary">Our Solution</h3>
                        <p>{project.solution}</p>
                      </div>
                    )}

                    {project.outcome && (
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-primary">The Outcome</h3>
                        <p>{project.outcome}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                <Link href="/contact">Discuss a Similar Project</Link>
              </Button>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={heroImage || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section - Mobile */}
      <section className="py-8 bg-background lg:hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            {(project.challenge || project.solution || project.outcome) && (
              <div className="space-y-4">
                {project.challenge && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-primary">The Challenge</h3>
                    <p>{project.challenge}</p>
                  </div>
                )}

                {project.solution && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-primary">Our Solution</h3>
                    <p>{project.solution}</p>
                  </div>
                )}

                {project.outcome && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-primary">The Outcome</h3>
                    <p>{project.outcome}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {projectImages.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>

            {/* Carousel Container */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                  {projectImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {projectImages.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </button>
                  <button
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
                    onClick={scrollNext}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </button>
                </>
              )}

              {/* Pagination Dots */}
              {projectImages.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedIndex ? "bg-secondary w-4" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link href={`/portfolio/${relatedProject.id}`} key={relatedProject.id}>
                  <div className="group rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedProject.image || relatedProject.images?.[0] || "/placeholder.svg"}
                        alt={relatedProject.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{relatedProject.title}</h3>
                          <p className="text-white/80 line-clamp-2">{relatedProject.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{relatedProject.description}</p>
                      {relatedProject.client && (
                        <p className="text-sm font-medium">
                          Client: <span className="text-primary">{relatedProject.client}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  )
}
