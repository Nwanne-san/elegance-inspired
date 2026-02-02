import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import LegalPageLayout from "@/components/legal/legal-page-layout";

export const metadata: Metadata = generateMetadata(
  "Privacy Policy - Elegance Inspired Limited",
  "How Elegance Inspired Limited collects, uses, and protects your personal information.",
  undefined,
  ["privacy policy", "data protection", "personal data"]
);

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        className="!pb-6"
      />
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 !pt-7 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <LegalPageLayout>
            <p className="text-muted-foreground mb-8">
              This Privacy Policy describes how Elegance Inspired Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and protects the personal information of visitors to our website (www.eleganceinspired.org), clients who engage our branding and marketing services, and anyone who contacts us. We are committed to protecting your privacy and handling your data in accordance with applicable laws, including the Nigeria Data Protection Regulation (NDPR) where applicable.
            </p>

            <p className="text-muted-foreground mb-8">
              <strong>Last updated:</strong> Please review this policy periodically. We may update it from time to time and will post the revised version on this page with an updated &quot;Last updated&quot; date.
            </p>

            <h2>1. Who We Are</h2>
            <p>
              Elegance Inspired Limited is a corporate branding and marketing agency registered in Nigeria. Our website is www.eleganceinspired.org. For the purposes of this Privacy Policy, we are the data controller in respect of the personal information we collect through our website and in the course of providing our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Information you provide:</strong> When you contact us via our contact form, request a quote, subscribe to our newsletter, or engage our services, we may collect your name, email address, phone number, company name, job title, and any message or project details you provide.</li>
              <li><strong>Client and project information:</strong> When you become a client, we may collect additional information necessary to deliver our services, such as brand assets, business objectives, and communication preferences.</li>
              <li><strong>Automatically collected information:</strong> When you visit our website, we may automatically collect certain technical information, such as your IP address, browser type, device type, referring URL, and pages visited. This may be collected through cookies and similar technologies (see Section 6).</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide the services you request.</li>
              <li>Send you marketing communications (e.g. newsletter) where you have opted in. You can unsubscribe at any time.</li>
              <li>Manage and perform our contracts with you, including project delivery and invoicing.</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Comply with legal obligations and protect our rights.</li>
              <li>Send administrative messages (e.g. updates to our terms or this Privacy Policy).</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>
              We process your personal information where we have a lawful basis to do so, including: (a) your consent (e.g. for marketing or non-essential cookies); (b) performance of a contract with you; (c) our legitimate interests (e.g. improving our services, security, and fraud prevention), where such interests are not overridden by your rights; and (d) compliance with legal obligations.
            </p>

            <h2>5. Sharing and Disclosure of Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service providers:</strong> We may share data with trusted third parties who assist us in operating our website, sending emails, hosting data, or providing analytics (e.g. email delivery services, hosting providers). These parties are contractually required to protect your data and use it only for the purposes we specify.</li>
              <li><strong>Legal requirements:</strong> We may disclose your information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to the same privacy commitments.</li>
            </ul>

            <h2>6. Cookies and Similar Technologies</h2>
            <p>
              Our website may use cookies and similar technologies to remember your preferences, understand how you use our site, and improve your experience. You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website. We will only use non-essential (e.g. marketing or analytics) cookies where we have obtained your consent where required by law.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. For example, we may retain contact form submissions for a reasonable period to respond and follow up; client project data for the duration of the engagement and a period thereafter for legal and quality purposes; and marketing preferences until you unsubscribe or ask us to delete your data.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>9. Your Rights</h2>
            <p>
              Depending on applicable law (including the NDPR), you may have the right to:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
              <li><strong>Withdraw consent:</strong> Where we rely on consent, you may withdraw it at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details in Section 12. You also have the right to lodge a complaint with a supervisory authority if you believe our processing of your data violates applicable law.
            </p>

            <h2>10. International Transfers</h2>
            <p>
              Your information may be processed in Nigeria and, where we use service providers based elsewhere, in other countries. Where we transfer data outside Nigeria, we will ensure appropriate safeguards are in place as required by applicable law.
            </p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will take steps to delete it.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, or wish to exercise your rights, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:hello@eleganceinspired.org">hello@eleganceinspired.org</a></li>
              <li><strong>Website:</strong> <a href="https://www.eleganceinspired.org">www.eleganceinspired.org</a></li>
              <li><strong>Address:</strong> Abuja, Nigeria</li>
            </ul>

            <p className="mt-12 text-muted-foreground">
              Elegance Inspired Limited<br />
              <a href="https://www.eleganceinspired.org" className="text-primary hover:underline">www.eleganceinspired.org</a>
            </p>
          </LegalPageLayout>
        </div>
      </div>
      <Footer />
    </main>
  );
}
