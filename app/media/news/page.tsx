import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import CTASection from "@/components/home/cta-section";

export const metadata: Metadata = generateMetadata(
  "News - Elegance Inspired Limited",
  "Insights on branding, design, and the psychology of colour. Stay informed with thought leadership from Elegance Inspired Limited.",
  "/images/news-og.jpg",
  ["news", "branding insights", "colour psychology", "brand strategy", "Elegance Inspired"]
);

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="News"
        description="Insights, thought leadership, and updates from Elegance Inspired Limited."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 max-w-4xl">
          <article>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Psychology of Colour in Branding
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <p>
                Colour is one of the most powerful tools in branding. Before a person reads a
                word, studies a logo, or understands a company's message, they respond to
                colour. It shapes first impressions, influences emotions, and helps people
                recognise and remember brands. For this reason, global brands treat colour
                choice as a strategic decision rather than a simple design preference.
              </p>
              <p>
                The psychology of colour in branding refers to how different colours
                influence human perception and behaviour. Research in marketing and
                behavioural science shows that colours can trigger emotional responses and
                associations. These responses often happen quickly and subconsciously. A
                carefully chosen colour can communicate trust, energy, luxury, or reliability
                even before a brand explains what it offers.
              </p>
              <p>
                Different colours tend to carry different psychological signals. Blue, for
                example, is widely associated with trust, stability, and professionalism.
                This is one reason many financial institutions and technology companies
                rely on blue in their branding. Red often communicates energy, urgency, and
                passion, which is why it is commonly used in industries that want to
                stimulate action or excitement. Green is frequently linked with growth,
                health, and sustainability, making it popular among brands in wellness,
                agriculture, and environmental sectors.
              </p>
              <p>
                However, effective branding goes beyond simply choosing a colour with a
                positive meaning. Context matters. Culture, industry norms, and audience
                expectations all influence how colour is interpreted. A colour that signals
                prestige in one market may represent something entirely different in
                another. Global brands, therefore, test and evaluate colour decisions
                carefully to ensure that they align with the audience they intend to reach.
              </p>
              <p>
                Consistency is another important principle. Once a brand establishes its
                colour identity, it should use it consistently across all touchpoints. This
                includes websites, packaging, advertising, and social media. Consistent
                colour use strengthens brand recognition and builds familiarity over time.
                Many of the world's most recognisable companies are instantly identified by
                their colour palettes even without seeing their logos.
              </p>
              <p>
                The psychology of colour also plays a role in guiding customer behaviour. In
                digital environments, colours can influence where people look, what they
                click, and how they feel while interacting with a brand. Strategic colour
                use in buttons, calls to action, and product displays can improve
                engagement and support clearer decision-making for customers.
              </p>
              <p>
                Ultimately, colour is not simply an aesthetic choice. It is a strategic
                asset that communicates meaning, builds emotional connections, and
                strengthens brand identity. When used thoughtfully and consistently, colour
                helps brands stand out in crowded markets and remain memorable in the
                minds of consumers.
              </p>
              <p>
                For organisations building or refining their brand identity, understanding
                the psychology of colour is essential. It ensures that visual choices
                support the brand's values, communicate the right message, and resonate
                with the audience the brand seeks to serve.
              </p>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
