import nodemailer from "nodemailer";

const email = "abdulrehman5067794@gmail.com";
const pass = "yddkruxjlrvnzrut";

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
