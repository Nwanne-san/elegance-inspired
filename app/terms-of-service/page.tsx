import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import LegalPageLayout from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generateMetadata(
  "Terms of Service - Elegance Inspired Limited",
  "Terms of Service for corporate branding and marketing services provided by Elegance Inspired Limited.",
  undefined,
  ["terms of service", "legal", "branding agency terms"]
);

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Terms of Branding Service"
        description="General terms governing our branding and marketing services."
        className="!pb-6"
      />
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 !pt-7 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <LegalPageLayout>
            <p className="text-muted-foreground mb-8">
              These Terms of Service (&quot;Agreement&quot;) are entered into by Elegance Inspired Limited (the &quot;Agency&quot;) and the entity or individual purchasing services (the &quot;Client&quot;). By engaging Elegance Inspired Limited, the Client agrees to be bound by the following terms.
            </p>

            <h2>Our Services</h2>
            <p>
              Elegance Inspired Limited provides professional corporate branding and marketing services, which may include but are not limited to:
            </p>
            <ul>
              <li><strong>Brand Identity:</strong> Logo design, typography, and visual systems.</li>
              <li><strong>Marketing Strategy:</strong> Campaign development, digital marketing, and market analysis.</li>
              <li><strong>Collateral Design:</strong> Print materials, digital assets, and brand guidelines.</li>
              <li><strong>Consultancy:</strong> Brand positioning and corporate communication strategy.</li>
            </ul>
            <p>The specific services provided will be detailed in a separate Statement of Work (SOW) or Invoice.</p>

            <h2>The Creative Process & Revisions</h2>
            <p>We pride ourselves on excellence and precision. To maintain our standards:</p>
            <ul>
              <li><strong>Feedback:</strong> The Client shall provide consolidated feedback within three (3) business days of receiving drafts.</li>
              <li><strong>Revision Limit:</strong> Unless otherwise stated in the SOW, our branding packages include two (2) rounds of refinements.</li>
              <li><strong>Out of Scope:</strong> Requests outside the original SOW (e.g., additional concepts or pivot in direction) will be billed at our standard hourly rate of 100,000 Naira.</li>
            </ul>

            <h2>Financial Terms</h2>
            <ul>
              <li><strong>Retainer/Deposit:</strong> A non-refundable commencement fee of 80% of the total project cost is required to secure a spot in our production calendar.</li>
              <li><strong>Milestones:</strong> For long-term marketing contracts, invoices are issued monthly or upon completion of project phases.</li>
              <li><strong>Final Delivery:</strong> High-resolution final assets will be released only upon receipt of final payment in full.</li>
              <li><strong>Late Payments:</strong> Invoices unpaid after 14 days will incur a late fee of 15% per month on the outstanding balance.</li>
            </ul>

            <h2>Intellectual Property (IP) Rights</h2>
            <p>We respect the value of original creative work. Ownership is handled as follows:</p>
            <ul>
              <li><strong>Drafts & Rejected Concepts:</strong> Remain the exclusive property of Elegance Inspired Limited.</li>
              <li><strong>Final Approved Design:</strong> Transferred to the Client upon final payment.</li>
              <li><strong>Agency Credit:</strong> The Agency reserves the right to showcase the work on eleganceinspired.org and in portfolios.</li>
            </ul>

            <h2>Confidentiality & Privacy</h2>
            <p>
              Elegance Inspired Limited acknowledges that it may have access to the Client&apos;s sensitive corporate information. We agree to maintain strict confidentiality and will not disclose any proprietary data to third parties without written consent, except as required by law.
            </p>

            <h2>Client Warranties</h2>
            <p>
              The Client represents that any text, images, or assets provided to the Agency are owned by the Client or that the Client has permission to use them. The Client agrees to indemnify Elegance Inspired Limited against any claims arising from the use of materials provided by the Client.
            </p>

            <h2>Project Delays & Abandonment</h2>
            <p>
              If a project is stalled by the Client for more than 30 days (i.e., failure to provide feedback or requested assets), the project will be deemed &quot;on hold&quot; and may be subject to a Restart Fee. If the delay exceeds 60 days, the project is considered abandoned, and all previous payments are forfeited.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Elegance Inspired Limited is not liable for any indirect, incidental, or consequential damages (such as loss of profits) resulting from the use of our branding or marketing materials. Our total liability is limited to the amount paid by the Client for the specific service in question.
            </p>

            <h2>Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of Nigeria, where Elegance Inspired Limited is registered.
            </p>

            <h2>Acceptance</h2>
            <p>
              Engagement with Elegance Inspired Limited via payment of a deposit or signing of a Statement of Work constitutes full acceptance of these Terms of Service.
            </p>

            {/* <p className="mt-12 text-muted-foreground">
              Elegance Inspired Limited<br />
              <a href="https://www.eleganceinspired.org" className="text-primary hover:underline">www.eleganceinspired.org</a>
            </p> */}
          </LegalPageLayout>
        </div>
      </div>
      <Footer />
    </main>
  );
}
