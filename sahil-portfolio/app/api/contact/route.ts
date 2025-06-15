import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "@/lib/email-template"
import { env } from "process"

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey)


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // This will be replaced with your domain
      to: [process.env.CONTACT_EMAIL || "sahilnawab.india@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      react: EmailTemplate({ name, email, subject, message }),
      replyTo: email, // This allows you to reply directly to the sender
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
