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

    const n8nwebhook = "https://primary-production-3d85.up.railway.app/webhook/contact-form"
    if(email !== "" && message !== "") {

      await fetch(n8nwebhook, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email,
              message,
              name
          })
      })

        return NextResponse.json({success: true, message: 'Message sent successfully!'})
    }

    return NextResponse.json({success: false, message: 'Email and message is required'}, {status: 400})
  } catch (err) {
    console.error(err);
    return NextResponse.json({success: false, message: 'Internal server error, please try again'}, {status: 500})

  }
}
