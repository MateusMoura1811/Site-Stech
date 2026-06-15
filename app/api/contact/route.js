import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  //  Colocado aqui dentro para a Vercel não quebrar o build procurando a chave antes da hora
  const resend = new Resend(p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDYJGJtJ1A9eaixsoZ/r0DNXHMvzBj9JxmYCTPjbC8ydSfIhYiASlBD7krNmNOt3i0uGPbCPI9v+cJ0GzOGw6nu/Cwdu6lpFwpSCGT8tN8Yau6nsANeNZYlV7UG8hT8GvIXEYBMBTBCnFNzy16cKUzBCzfb6HaD96jYE/bx1Y+wHQIDAQAB);

  try {
    const body = await request.json();
    const { name, email, company, service, message, number } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Campos obrigatórios ausentes" },
        { status: 400 }
      );
    }

    // Envio com o Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "moura.stechcompany@gmail.com; mateusenrico1@hotmail.com",
      replyTo: email,
      subject: "Novo contato pelo site STECH",
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Número:</strong> ${number || "Não informado"}</p>
        <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
        <p><strong>Serviço de interesse:</strong> ${service || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}