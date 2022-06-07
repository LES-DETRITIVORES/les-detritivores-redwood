import * as nodemailer from "nodemailer";

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
  console.log("Sending email to:", to);

  // create reusable transporter object using SendInBlue for SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your@email.com",
      pass: process.env.SEND_IN_BLUE_KEY,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Your Name" <your@email.com>',
    to: Array.isArray(to) ? to : [to], // list of receivers
    subject, // Subject line
    text: `[Devis] \n\n Vous êtes: ${who} \n Nombre de repas servis par j: ${numbers} \n Structure: ${structure}\n Fonction: ${dfunction}\n Nom: ${name}\n Prénom: ${lastname}\n Email: ${email}\n Téléphone: ${phone}\n\n${message}`,
    html: `[Devis] <br/><br/> Vous êtes: ${who} <br/> Nombre de repas servis par j: ${numbers} <br /> Structure: ${structure}<br /> Fonction: ${dfunction}<br /> Nom: ${name}<br /> Prénom: ${lastname}<br /> Email: ${email}<br /> Téléphone: ${phone}<br /><br />${message}`,
  });

  return info;
}
