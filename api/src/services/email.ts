import { sendEmail } from "src/lib/email";

interface Options {
  emailAddress: string | string[];
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

export function sendTestEmail({
  emailAddress,
  who,
  numbers,
  structure,
  dfunction,
  lastname,
  email,
  phone,
  message,
}: Options) {
  const subject = "Test Email";
  return sendEmail({
    to: emailAddress,
    subject: subject,
    who: who,
    numbers: numbers,
    structure: structure,
    dfunction: dfunction,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message,
  });
}
