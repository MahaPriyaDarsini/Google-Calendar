const router = require('express').Router();
const {google}=require('googleapis');
const GOOGLE_CLIENT_ID='687309219187-410k7qldibtr5u7lb5u0bd284aghl46m.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET='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'
const REFRESH_TOKEN='1//0gVtUG_2D8n6YCgYIARAAGBASNwF-L9IrhY2aRFg4zxHbMZYUGU-K-o-KGFMuUXu2iLlTX7fJ0YRj8miKrKfXXTEF6DUEzJ8aTxA'
const oauth2Client=new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000')


router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});
router.post('/create-tokens',async(req,res,next)=>{
  try{
    const {code}=req.body
    const tokens=await oauth2Client.getToken(code)
    res.send(tokens )
  }catch(error){
    next(error)
  } 
  })
router.post('/create-event',async(req,res,next)=>
{
  try
  {
const { summary,desc,location,StartDateTime,endDateTime }=
req.body
oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
 const calender=google.calendar('v3')
const response=await calender.events.insert({
  auth:oauth2Client,
calendarId:'primary',
requestBody:{
  summary:summary,
  desc:desc,
  location:location,
  colorId:'7',
  start:{
    dateTime:new Date(StartDateTime)
  },
  end:{
    dateTime:new Date(endDateTime)
  },
}

})
console.log(response)
res.send(response)}
catch(error)
{
  next(error)
}})

module.exports = router;
 