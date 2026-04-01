import { NextResponse } from "next/server"
import {
  buildCallbackEmailHtml,
  buildContactEmailHtml,
} from "@/lib/email-template"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, subject, name, email, phone, message, formType, location, organization } = body

    // Import nodemailer dynamically to avoid server-side issues
    const nodemailer = (await import("nodemailer")).default

    // Create a transporter for Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    })


    let emailContent = ""
    let emailSubject = subject

    if (formType === "contact") {
      emailSubject = `New enquiry: ${subject || "Service request"}`
      emailContent = buildContactEmailHtml({
        subject: subject || "General",
        name: name || "",
        email: email || "",
        phone: phone || "Not provided",
        message: message || "",
      })
    } else if (formType === "callback") {
        emailSubject = "Call back requested — Elegance Inspired"
        emailContent = buildCallbackEmailHtml({
          name: name || "",
          phone: phone || "",
          email: email || undefined,
          organization: organization || undefined,
          location: location || undefined,
          message: message || undefined,
        })
      }

    if (!emailContent) {
      return NextResponse.json(
        { error: "Unsupported or missing form type" },
        { status: 400 }
      )
    }

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use your actual Zoho email address
      to,
      subject: emailSubject,
      html: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}