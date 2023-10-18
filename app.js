require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const client = require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);
const seedDB=require('./seed');
const seedDB1=require('./seed1');
const seedDB2=require('./seed2')
const Product = require('./controllers/Product');
const Arrival=require('./controllers/Arrival')
const Show=require('./controllers/Show')
const LocalStrategy=require('passport-local')
const passport=require('passport')
const passportLocalMongoose = require('passport-local-mongoose');
const User=require('./controllers/User')
var session = require('express-session')
const Razorpay=require('razorpay')

app.use(express.json())

app.use(passport.initialize())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB Connected Successfully")
})
.catch((err)=>{
    console.log(err)
})

seedDB();
seedDB1();
seedDB2();

app.get('/',(req,res)=>{
  res.render('login');
})

app.get('/products',async (req,res)=>{
  let latest=await Arrival.find({})
  let product=await Product.find({})
  res.render('index',{product,latest})
})



//SMS Sent Process

app.get('/sms',(req,res)=>{
    SMS();
    res.send(`<h1 style="color:green;display: flex;justify-content: center;align-items: center;margin-top:20%">SMS Sent Successfully On Your Mobile Number</h1>`)
})


function SMS(){
client.messages
  .create({
    body: 'Hello This Side Your Website Developer Arpit Jain. Your OTP is 3540',
    to: '+919927418990',
    to:'+919548824499',
    from: '+16787103293' 
  })
  .then((message) => console.log(message.sid))
  .catch((err)=>{console.log(err);})
}

app.get('/login',(req,res)=>{
    res.render('login')
})



app.get('/products/:id',async (req,res)=>{
  let {id}=req.params
  let related=await Show.find({})
  let found=await Product.findById(id)
  res.render('show',{found,related})
})

app.get('/product/:id',async (req,res)=>{
  let {id}=req.params
  let related1=await Show.find({})
  let found1=await Arrival.findById(id)
  res.render('show1',{related1,found1})
})


app.get('/payment/:id',async(req,res)=>{
  let {id}=req.params
  let find=await Product.findById(id)
  res.render('product',{find})
})

app.get('/login',(req,res)=>{
  res.render('login')
})



app.get('/register',(req,res)=>{
  res.render('register')
})


app.post('/register',async (req,res)=>{
  let {username,email,password}=req.body
  const user=new User({username,email})
  await User.register(user,password)
  res.redirect('/login')
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/products');
  });

  

  app.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });
  
  
const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is Connected Successfully at Port No ${port} arpit Jain`);
})