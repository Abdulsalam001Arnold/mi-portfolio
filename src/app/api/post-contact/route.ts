import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactProps = {
  name?: string,
  email: string,
  message: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message }: ContactProps = body;
    if(email !== "" && message !== "") {

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.GMAIL_USER!, // your inbox
        subject: `New message from ${name || "Anonymous"}`,
        text: `
  You received a new message:
  
  Name: ${name || "N/A"}
  Email: ${email}
  Message: ${message}
        `,
      });

        return NextResponse.json({success: true, message: 'Contact submitted successfully!'}, {status: 201})
    }

    return NextResponse.json({success: false, message: 'Email and message is required'}, {status: 400})
  } catch (err) {
    console.error(err);
    return NextResponse.json({success: false, message: 'Internal server error, please try again'}, {status: 500})

  }
}
