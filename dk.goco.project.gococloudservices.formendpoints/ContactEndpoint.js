/**
 * Checks if the domain email is send to is whitelisted
 *
 * @param mail String of email including domain and user.
 */

function whitelisted(mail){
  var predicate = false
  var domain = mail.split('@')[1].toLowerCase()

  const fs = require('fs');
  var whitelists = JSON.parse(fs.readFileSync('whitelist.json', 'utf8'));
  whitelists.forEach(e => {
    if(domain==e){
      predicate = true
    }
  }); 
  return predicate
}

const EmailGenerator = require("./emailtemplates/EmailGenerator.js")


/**
 * Sends an email using Nodemailer and data from the request
 * and environment variables.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
function handlePOST(req, res) {
  res.set("Access-Control-Allow-Origin", "*");

  if (!req.body.subject || !req.body.text || !req.body.to || !req.body.from) {
    res.status(422).send({
      error: {
        code: 422,
        message: "Missing arguments. ",
        subject: req.body.subject||undefined,
        from: req.body.from ||undefined,
        text: req.body.text||undefined,
        to: req.body.to||undefined,
        from: req.body.from||undefined
      }
    });
    return;
  }

  if (!whitelisted(req.body.to)) {
    res.status(422).send({
      error: {
        code: 426,
        message: "The email "+req.body.to+" is not whitelisted. Upgrade from service user is required"
      }
    });
    return;
  }

  const nodeMailer = require("nodemailer");

  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_ADDRESS,
      serviceClient: process.env.CLIENT_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: req.body.to,
    subject: "Ny mail på din hjemmeside fra: '"+req.body.from+"' - GOCO Cloud Services",
    html: EmailGenerator.newMessageTemplate(req.body.from, req.body.subject, req.body.text)
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      res.status(200).send({
        data: {
          code: 200,
          message: "Mail sent"
        }
      });
    })
    .catch(e => {
      res.status(500).send({
        error: {
          code: 500,
          message: e.toString()
        }
      });
    });
}

/**
 * Send response to OPTIONS requests
   Set CORS headers for preflight requests
   Allows POSTs from any origin with the Content-Type header
   and caches preflight response for 3600s
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
function handleOPTIONS(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  res.status(204).end();
}

/**
 * Responds only to OPTIONS or POST requests.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.sendMail = (req, res) => {
  switch (req.method) {
    case "OPTIONS":
      handleOPTIONS(req, res);
      break;
    case "POST":
      handlePOST(req, res);
      break;
    default:
      res.status(405).send({
        error: {
          code: 405,
          message: "Wrong HTTP method"
        }
      });
      break;
  }
};
