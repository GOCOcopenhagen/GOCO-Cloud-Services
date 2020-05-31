const nodeMailer = require("nodemailer");

const GMAIL_ADDRESS = "anton@goco.dk"
const CLIENT_ID = "113103033628093148826"
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMJlbIxPEP3IjT\nppYQtCfafq9YVnp5yg7KsjOfnw0SCwgvDaXj02lCp/AQ8+rN+zQWhqQNOZBU100W\n83GkrybLJiwH29hXFqItfJIkW2jsRvd64klBG0a+zoEpG/QU6NZ66RzWR0QEsvcq\nb90PLAhnl2iXyMqT60zaudBJv4QISfhBt/emfXQXhw2lRrQomoyaO/RZ/iYn5rAW\nPGcXcxWvvBSEiMt86PUXDOMJ80+dsD3mXz7rcKwPHEEdOr6yAzRRBVNt7Z2++FY1\nzF7g02fV0SR77ZPRTaIJl5+5t2uQEffGPVD9DMDIkh5M3KeeRQiCGarI+dtbJ5iU\n4gwZ4gT3AgMBAAECggEARDW3H2O2C4+q49SwJSqcekODwKc8Sr75TD5YQ0f4LQQk\nmtwbhlCXxd6otnFZDbOWBsS7wXNvRvmc10NFwDmJY60AXyvUT9zPGRWbGqy0FOXt\nQFClGyzK6WvD+gFN/0KAjxaePPYYwt0s+i/gE3ap5DrRho1fKicfSaF1934W1lGP\nGUhcJXHw/59ipMSCpLHYmQGAc/5YGJJcx0/tkC8uh/g4i3lM3IpodfA332CFt+oQ\nx6FokVrE39Xp6kVV+Rm5V2cWMewfdADXLVK3v11Olzb5Yy6PZvjVOunFK1pGQlT0\nwT7/RdJ5uNhL1EdlzbAZavhn6WpW7rE7x9rVNkNzOQKBgQD9t5twXJoei9TCF9Il\nJ4sF/YtW9gYjMHXsUq1zWgapjHRLVUlH19qbDNvUmS8f146EeGONkrfzawmqAe7B\nfbhKzsgI6GjbOBgQBsJVnzqurJz9RWcuddrbSpe7BZA31lWqHRqiSAwvxirbvFLF\niEwoIL9f1/78+6O6AnCMDqEtQwKBgQDN/I/bLK7BDOnoFTjk5XDH2aJqnDqOaEQT\nxRfnMa7Lzec5G2X/VqQFamPGTKjdB+uKJ4TKvg5bGuRI5Bmn8pqX8D9mc5SqxOHZ\nsD0gHIMDcKow8Csm2bKhelN42hXnXSa2+MQ2WWrGElCSR4xlUUJFn9f8MTI7ztj2\noZx50rsUPQKBgQCWq12kmWlw8Gs1pD3IkLYPpaUEzG+SoCm3YNXeZb0FHQLG5evx\nvS712uoFU77XcwQQiQndvh59cLg5fJJT15wE2M2T9KioXqRziAAKJtgLeTh1c6y1\nu4lvptl6V/BwKFmQ/12ct5p9GHrFKQ4ifjFztxbPDQ9BHxL42JALrHhszwKBgQCs\nIfhdIZPPg2kcJk/rB8kdWMMe7/sG8h6hnryA2MXHTgOBd2He5JogZG2IUptySaIN\nS0Tu36/Ddk96khLWhCen/H4esUt1AR3y+hG6edkJ0OaICsskphteUYjbnvNa6j7l\n/DCLcmGFr9xgwSWTrToCULb+6mWeERbB0v+d1fm7yQKBgBvGdrBzHg2dFBrxlbt1\nV6Y3e9Uw957GEHN2Lp0HCBxmdawENL64hq10C8by1WaN2AURgaL4KyeE2srMqJW+\nWg9f3z+bTswXTxGdFrxzr5TPD1uFWKHDhe3pz5ppf1l3shbDN3t1flQLIJn4Kxm/\nE+xStAiWZ5zYZD6HQwN8j2IH\n-----END PRIVATE KEY-----\n"

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_ADDRESS||GMAIL_ADDRESS ,
    serviceClient: process.env.CLIENT_ID||CLIENT_ID,
    privateKey: PRIVATE_KEY.replace(/\\n/g, "\n")
  }
});

const mailOptions = {
  from: req.body.from || process.env.MAIL_FROM,
  to: req.body.to || process.env.MAIL_TO,
  bcc: req.body.bcc || process.env.MAIL_BCC,
  subject: req.body.subject,
  text: req.body.text
};


exports.sendMail = (req, res) => {
  
}
