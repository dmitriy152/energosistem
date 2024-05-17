import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',  // or any other email service you're using
    auth: {
        user: "energosysteminfo@gmail.com",  // your email
        pass: "energosystem123456789"   // your email password
    }
});

export async function POST(
    req: NextRequest,
    res: NextResponse,
) {
    try {
        const body = await req.json();
        const { firstName, phone, comments } = body;
        const mailOptions = {
            from: "energosysteminfo@gmail.com",            // sender address
            to: "energosysteminfo@gmail.com",  // list of receivers
            subject: 'Заявка с сайта',  // Subject line
            text: `Name: ${firstName}\nPhone: ${phone}\nComments: ${comments}` // plain text body
        };
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: "Error processing request" }, { status: 400 });
    }
}