import nodemailer from "nodemailer";

const email = "nodeproptech@gmail.com";
const pass = "ddmnwiofeuflbufy";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
