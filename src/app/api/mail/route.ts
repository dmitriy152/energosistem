import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(
    req: NextRequest,
    res: NextResponse,
) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: "energosysteminfo@mail.ru", 
                pass: "tAtPebVusUPFqqinm3SV" 
            }
        });

        const body = await req.json();
        const { firstName, phone, comments } = body;
        const mailOptions = {
            from: "energosysteminfo@mail.ru",
            to: "energosysteminfo@mail.ru",
            subject: 'Заявка с сайта',
            text: `Name: ${firstName}\nPhone: ${phone}\nComments: ${comments}`
        };
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: "Error processing request" }, { status: 400 });
    }
}