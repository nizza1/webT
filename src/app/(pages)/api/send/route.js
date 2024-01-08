
/* require('dotenv').config()
const PASSWORD = process.env.password */

import { mailOptions, transporter } from "/config/nodemailer";

/* sollte SMTP stattdessen Port 587 nutzen  */

  const handler = async(req, res) => {

    if (req.method === 'POST'){
      const data = req.body;
      console.log(data);
      if (!data.theName ) {
        return res.status(400).json({message:'name is required'})
      }

      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: data.subject,
          text: 'this is a test string',
          html: `<h3>E-Mail : ${data.email}</h3> 
          <h4>Name : ${data.theName}</h4>
          <h3> message :<br>  <br> ${data.message}</h3>`
        })

        return res.status(200).json({ message: 'Ihre Nachricht wurde gesendet' });

      } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
      }
    }
  
     return res.status(405).json({ message: 'Method not allowed' });
  };
   export default handler
