import { redirect } from 'next/navigation';

export async function GET() {
  const whatsappNumber = process.env.WA_NUMBER;
  
  if (!whatsappNumber) {
    // Fallback or error handling if the environment variable is missing
    return new Response('WhatsApp number not configured', { status: 500 });
  }

  redirect(`https://wa.me/${whatsappNumber}`);
}
