var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send_mail', function(req, res, next){
  const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'ns3538002@gmail.com',
      pass:'ypfo polt itad qcvk'
    }
  })
  
const mailOptions = {

  from:'ns3538002@gmail.com',
  to: req.body.mail,
  subject:'Testing Nodemailer',
  html:`<p>hello dhanpal sharma i am  your friends</p>`
  

  
}

transport.sendMail(mailOptions,(err)=>{
  if(err){
    console.log(err)

  }
  console.log('mail send')
  res.send('mail is sended to the current user') 

})


})



module.exports = router;
