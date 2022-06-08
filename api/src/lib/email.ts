import * as nodemailer from "nodemailer";
import { sendTestEmail } from "src/services/email";

interface Options {
  to: string | string[];
  subject: string;
  who: string;
  numbers: string;
  structure: string;
  dfunction: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail({
  to,
  subject,
  who,
  numbers,
  structure,
  dfunction,
  lastname,
  email,
  phone,
  message,
}: Options) {
  await sendTestEmail({
    emailAddress: to,
    subject: "",
    who: who,
    numbers: numbers,
    structure: structure,
    dfunction: dfunction,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message,
  });
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnathorized: false,
    },
    auth: {
      user: "bonjour@les-detritivores.co",
      pass: "Brazza33!",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "bonjour@les-detritivores.co",
    to: Array.isArray(to) ? to : [to], // list of receivers
    subject, // Subject line
    text: `[Devis] \n\n Vous êtes: ${who} \n Nombre de repas servis par j: ${numbers} \n Structure: ${structure}\n Fonction: ${dfunction}\n Nom: ${name}\n Prénom: ${lastname}\n Email: ${email}\n Téléphone: ${phone}\n\n${message}`,
    html: `[Devis] <br/><br/> Vous êtes: ${who} <br/> Nombre de repas servis par j: ${numbers} <br /> Structure: ${structure}<br /> Fonction: ${dfunction}<br /> Nom: ${name}<br /> Prénom: ${lastname}<br /> Email: ${email}<br /> Téléphone: ${phone}<br /><br />${message}`,
  });

  return info;
}
