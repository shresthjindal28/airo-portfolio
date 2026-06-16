import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields name, email, and message are missing." },
        { status: 400 }
      );
    }

    // Console log the email submission details (simulating email delivery)
    console.log("----------------------------------------");
    console.log("NEW PORTFOLIO MESSAGE RECEIVED:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "No Subject"}`);
    console.log(`Message:\n${message}`);
    console.log("----------------------------------------");

    // Optional: Add Resend or SendGrid setup here in production
    // Example:
    // await resend.emails.send({ from: 'onboarding@resend.dev', to: 'jindalshresth@gmail.com', subject, text: message });

    // Simulate short network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
