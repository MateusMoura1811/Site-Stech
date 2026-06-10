import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Dados não enviados",
        }),
      };
    }

    const { name, email, company, service, message, number } = JSON.parse(event.body);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "moura.stechcompany@gmail.com",
      replyTo: email,
      subject: "Novo contato pelo site STECH",
      html: `
        <h2>Novo contato recebido</h2>

        <p><strong>Nome:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Numero:</strong> ${
          number || "Não informado"
        }</p>

        <p><strong>Empresa:</strong> ${
          company || "Não informado"
        }</p>

        <p><strong>Serviço de interesse:</strong> ${
          service || "Não informado"
        }</p>

        <p><strong>Mensagem:</strong></p>

        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    };
  }
};