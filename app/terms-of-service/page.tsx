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
        title="Terms of Social Media Communications Service"
        description="Supplemental terms for our Social Media Management and Communications services."
        className="!pb-6 !max-wl !bg-transparent mx-auto"
      />
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 !pt-7 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <LegalPageLayout>
            <p className="text-muted-foreground mb-8">
              These Supplemental Terms apply specifically to Social Media
              Management and Communications services provided by Elegance
              Inspired Limited.
            </p>
            <p className="text-muted-foreground mb-8">
              These Terms of Service (&quot;Agreement&quot;) are entered into by
              Elegance Inspired Limited (the &quot;Agency&quot;) and the entity
              or individual purchasing services (the &quot;Client&quot;). By
              engaging Elegance Inspired Limited, the Client agrees to be bound
              by the following terms.
            </p>

            <h2>Scope of Social Media Services</h2>
            <p>
              The Agency will manage the Client&apos;s social media presence on
              platforms specified in the Invoice or SOW (e.g., Facebook,
              LinkedIn, Instagram, X). Services include:
            </p>
            <ul>
              <li>
                <strong>Content Creation:</strong> Development of copywriting,
                graphics designs and short-form videos.
              </li>
              <li>
                <strong>Scheduling & Publishing:</strong> Posting content
                according to an agreed-upon calendar.
              </li>
              <li>
                <strong>Community Management:</strong> Monitoring and responding
                to comments/messages.
              </li>
              <li>
                <strong>Social Listening:</strong> Monitoring brand mentions and
                industry trends.
              </li>
            </ul>

            <h2>The Approval Workflow</h2>
            <p>
              To ensure all communications reflect the &quot;Elegance
              Inspired&quot; standard of quality:
            </p>
            <ul>
              <li>
                <strong>Content Calendar:</strong> The Agency will provide a
                monthly content calendar 7 days before the start of the
                following month.
              </li>
              <li>
                <strong>Client Approval:</strong> The Client must approve or
                provide feedback on the calendar within 3 business days.
              </li>
              <li>
                <strong>Silence as Approval:</strong> If no feedback is received
                within the timeframe, the Agency reserves the right to proceed
                with scheduling to maintain the brand&apos;s consistency.
              </li>
              <li>
                <strong>Last-Minute Requests:</strong> Requests for
                &quot;instant&quot; or &quot;real-time&quot; posts must be made
                via WhatsApp or Slack platforms and are subject to availability.
              </li>
            </ul>

            <h2>Community Management & Tone of Voice</h2>
            <ul>
              <li>
                <strong>Brand Voice:</strong> All communications will strictly
                adhere to the &quot;Brand Voice Guidelines&quot; established
                during onboarding.
              </li>
              <li>
                <strong>Engagement Limits:</strong> The Agency will respond to
                standard inquiries. Highly technical, legal, or sensitive
                customer service issues will be escalated to the Client&apos;s
                designated contact for a drafted response.
              </li>
            </ul>

            <h2>Crisis Communications</h2>
            <p>
              In the event of a &quot;Social Media Crisis&quot; (e.g., negative
              viral sentiment, PR incident, or security breach):
            </p>
            <ul>
              <li>The Agency will notify the Client immediately.</li>
              <li>
                The Agency will pause all scheduled &quot;business as
                usual&quot; content.
              </li>
              <li>
                Strategic response services during a crisis may incur additional
                &quot;Emergency Consulting&quot; fees if the scope exceeds the
                monthly retainer.
              </li>
            </ul>

            <h2>Account Access & Security</h2>
            <ul>
              <li>
                <strong>Platform Access:</strong> The Client shall grant the
                Agency &quot;Editor&quot; or &quot;Agency&quot; level access via
                official tools (e.g., Meta Business Suite, LinkedIn Page Admin).
              </li>
              <li>
                <strong>Password Hygiene:</strong> For security, the Agency
                recommends the use of a password manager. The Agency is not
                liable for account breaches caused by the Client&apos;s internal
                security failures.
              </li>
              <li>
                <strong>Third-Party Tools:</strong> The cost of third-party
                scheduling or reporting software (e.g., Hootsuite, Sprout
                Social) is typically covered by the Agency.
              </li>
            </ul>

            <h2>Advertising & Ad Spend</h2>
            <ul>
              <li>
                <strong>Management Fee:</strong> The Agency&apos;s fee covers
                the management and creation of social ads if stated in the SOW.
              </li>
              <li>
                <strong>Ad Spend:</strong> The actual budget paid to platforms
                (Meta, LinkedIn, etc.) is the sole responsibility of the Client.
                The Client must link a valid payment method directly to the ad
                account.
              </li>
            </ul>

            <h2>Performance & Warranties</h2>
            <p>
              While Elegance Inspired Limited uses industry-leading strategies
              to grow reach and engagement:
            </p>
            <ul>
              <li>
                <strong>No Guarantee of Virality:</strong> The Agency does not
                guarantee specific follower counts, &quot;viral&quot; success,
                or specific sales conversions, as social media algorithms are
                controlled by third-party platforms.
              </li>
              <li>
                <strong>Platform Changes:</strong> The Agency is not responsible
                for sudden changes in platform API, policy, or algorithm shifts
                that may affect content performance.
              </li>
            </ul>

            <h2>Content Ownership</h2>
            <ul>
              <li>
                <strong>Final Posts:</strong> All published content created for
                the Client belongs to the Client upon payment.
              </li>
              <li>
                <strong>Native Files:</strong> Source files (e.g., raw Photoshop
                or video project files) remain the property of the Agency unless
                otherwise negotiated.
              </li>
            </ul>

            <h2>Platform Actions and Account Availability</h2>
            <ul>
              <li>
                <strong>Third-Party Ownership:</strong> The Client acknowledges
                that social media platforms (including but not limited to Meta,
                LinkedIn, X, and Google) are third-party entities not owned or
                controlled by Elegance Inspired Limited.
              </li>
              <li>
                <strong>Platform Discretion:</strong> These platforms reserve
                the right to suspend, shadow-ban, or permanently remove accounts
                at their sole discretion, often through automated systems. The
                Agency shall not be held liable for any loss of access, loss of
                data, loss of followers, or loss of revenue resulting from
                platform-initiated actions (e.g., &quot;de-platforming&quot; or
                suspension).
              </li>
              <li>
                <strong>Compliance Efforts:</strong> While the Agency agrees to
                act in good faith and adhere to known platform &quot;Terms of
                Service&quot; and &quot;Community Guidelines,&quot; the Agency
                does not guarantee that a platform will not take adverse action
                against the Client&apos;s account.
              </li>
              <li>
                <strong>Account Recovery:</strong> In the event of an account
                take-down or technical lockout, the Agency will make reasonable
                commercial efforts to assist the Client in the recovery process.
                However, the Agency cannot guarantee successful restoration, as
                final authority rests with the platform provider.
              </li>
              <li>
                <strong>Force Majeure:</strong> Platform outages or permanent
                account closures by the provider are considered &quot;Force
                Majeure&quot; events. Such events do not relieve the Client of
                the obligation to pay for work already performed by the Agency
                leading up to the event.
              </li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of Nigeria, where Elegance Inspired Limited is
              registered.
            </p>

            <h2>Acceptance</h2>
            <p>
              Engagement with Elegance Inspired Limited via payment of a deposit
              or signing of a Statement of Work constitutes full acceptance of
              these Terms of Service.
            </p>
          </LegalPageLayout>
        </div>
      </div>
      <PageHeader
        title="Terms of Branding Service"
        description="General terms governing our branding and marketing services."
        className="!pb-6"
      />
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 !pt-7 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <LegalPageLayout>
            <p className="text-muted-foreground mb-8">
              These Terms of Service (&quot;Agreement&quot;) are entered into by
              Elegance Inspired Limited (the &quot;Agency&quot;) and the entity
              or individual purchasing services (the &quot;Client&quot;). By
              engaging Elegance Inspired Limited, the Client agrees to be bound
              by the following terms.
            </p>

            <h2>Our Services</h2>
            <p>
              Elegance Inspired Limited provides professional corporate branding
              and marketing services, which may include but are not limited to:
            </p>
            <ul>
              <li>
                <strong>Brand Identity:</strong> Logo design, typography, and
                visual systems.
              </li>
              <li>
                <strong>Marketing Strategy:</strong> Campaign development,
                digital marketing, and market analysis.
              </li>
              <li>
                <strong>Collateral Design:</strong> Print materials, digital
                assets, and brand guidelines.
              </li>
              <li>
                <strong>Consultancy:</strong> Brand positioning and corporate
                communication strategy.
              </li>
            </ul>
            <p>
              The specific services provided will be detailed in a separate
              Statement of Work (SOW) or Invoice.
            </p>

            <h2>The Creative Process & Revisions</h2>
            <p>
              We pride ourselves on excellence and precision. To maintain our
              standards:
            </p>
            <ul>
              <li>
                <strong>Feedback:</strong> The Client shall provide consolidated
                feedback within three (3) business days of receiving drafts.
              </li>
              <li>
                <strong>Revision Limit:</strong> Unless otherwise stated in the
                SOW, our branding packages include two (2) rounds of
                refinements.
              </li>
              <li>
                <strong>Out of Scope:</strong> Requests outside the original SOW
                (e.g., additional concepts or pivot in direction) will be billed
                at our standard hourly rate of 100,000 Naira.
              </li>
            </ul>

            <h2>Financial Terms</h2>
            <ul>
              <li>
                <strong>Retainer/Deposit:</strong> A non-refundable commencement
                fee of 80% of the total project cost is required to secure a
                spot in our production calendar.
              </li>
              <li>
                <strong>Milestones:</strong> For long-term marketing contracts,
                invoices are issued monthly or upon completion of project
                phases.
              </li>
              <li>
                <strong>Final Delivery:</strong> High-resolution final assets
                will be released only upon receipt of final payment in full.
              </li>
              <li>
                <strong>Late Payments:</strong> Invoices unpaid after 14 days
                will incur a late fee of 15% per month on the outstanding
                balance.
              </li>
            </ul>

            <h2>Intellectual Property (IP) Rights</h2>
            <p>
              We respect the value of original creative work. Ownership is
              handled as follows:
            </p>
            <ul>
              <li>
                <strong>Drafts & Rejected Concepts:</strong> Remain the
                exclusive property of Elegance Inspired Limited.
              </li>
              <li>
                <strong>Final Approved Design:</strong> Transferred to the
                Client upon final payment.
              </li>
              <li>
                <strong>Agency Credit:</strong> The Agency reserves the right to
                showcase the work on eleganceinspired.org and in portfolios.
              </li>
            </ul>

            <h2>Confidentiality & Privacy</h2>
            <p>
              Elegance Inspired Limited acknowledges that it may have access to
              the Client&apos;s sensitive corporate information. We agree to
              maintain strict confidentiality and will not disclose any
              proprietary data to third parties without written consent, except
              as required by law.
            </p>

            <h2>Client Warranties</h2>
            <p>
              The Client represents that any text, images, or assets provided to
              the Agency are owned by the Client or that the Client has
              permission to use them. The Client agrees to indemnify Elegance
              Inspired Limited against any claims arising from the use of
              materials provided by the Client.
            </p>

            <h2>Project Delays & Abandonment</h2>
            <p>
              If a project is stalled by the Client for more than 30 days (i.e.,
              failure to provide feedback or requested assets), the project will
              be deemed &quot;on hold&quot; and may be subject to a Restart Fee.
              If the delay exceeds 60 days, the project is considered abandoned,
              and all previous payments are forfeited.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Elegance Inspired Limited is not liable for any indirect,
              incidental, or consequential damages (such as loss of profits)
              resulting from the use of our branding or marketing materials. Our
              total liability is limited to the amount paid by the Client for
              the specific service in question.
            </p>

            <h2>Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of Nigeria, where Elegance Inspired Limited is
              registered.
            </p>

            <h2>Acceptance</h2>
            <p>
              Engagement with Elegance Inspired Limited via payment of a deposit
              or signing of a Statement of Work constitutes full acceptance of
              these Terms of Service.
            </p>
          </LegalPageLayout>
        </div>
      </div>
      <Footer />
    </main>
  );
}
