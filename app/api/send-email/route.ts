import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, subject, name, email, phone, message, formType } = body

    // Import nodemailer dynamically to avoid server-side issues
    const nodemailer = (await import("nodemailer")).default

    // Create a transporter for Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER, // your Zoho email
        pass: process.env.EMAIL_PASSWORD, // your Zoho password or app-specific password
      },
    })

    // Format the email content based on form type
    let emailContent = ""
    let emailSubject = subject

    if (formType === "contact") {
      emailSubject = ` ${subject}`
      emailContent = `
        <h2>New Service Request</h2>
        <p><strong>Service Requested:</strong> ${subject}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `
    } else if (formType === "callback") {
      emailSubject = "Call Back Requested"
      emailContent = `
        <h2>New Call Back Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `
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