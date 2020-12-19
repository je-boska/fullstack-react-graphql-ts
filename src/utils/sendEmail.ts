'use strict'
import nodemailer from 'nodemailer'

export async function sendEmail(to: string, html: string) {
  // let testAccount = await nodemailer.createTestAccount()

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    // temporary test details from nodemailer
    auth: {
      user: 'mmgsuldq7ted6e2j@ethereal.email',
      pass: 'mn352ZermWUAPXVwdJ',
    },
  })

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: to,
    subject: 'Change password',
    html: html,
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
