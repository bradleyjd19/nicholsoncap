const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {

  sendEmail: function (req, res) {
    const {
      from,
      subject,
      text
    } = req.body;

    const msg = {
      to: "ncmi@nicholsoncap.com",
      from: from,
      subject: subject,
      text: text
    }

    sgMail.send(msg, (err, result) => {
      if (err) {
        res.json(err);
        return;
      }
      res.json(result);
    });
  }

}