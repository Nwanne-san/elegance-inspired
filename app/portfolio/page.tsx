import React from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";
import CTASection from "@/components/home/cta-section";

export default function Portfolio() {
  return (
    <div>
        <Navbar/>
        <CTASection/>
        <Footer/>
    </div>
  )
}
