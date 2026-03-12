import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/home/cta-section";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import { generateMetadata as genMeta } from "@/lib/seo-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return genMeta(
    post.title,
    post.excerpt,
    post.image.startsWith("/") ? undefined : post.image,
    [post.category, "blog", "Elegance Inspired"]
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <article className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          <div className="relative rounded-lg overflow-hidden aspect-video mb-10 bg-muted">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.body
              ? post.body.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))
              : null}
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </main>
  );
}
