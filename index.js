const express = require("express");
const route =require('./routes')
const app = express();
const passport = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;
var cookieParser = require('cookie-parser')
app.use(cookieParser());
const dotenv = require('dotenv')
dotenv.config();
const User = require('./Model/user')
const ConnectDb = require('./Config/Db')
      ConnectDb();
// body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
 }));

 // route init
 route(app);

var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, cb) {

      process.nextTick(function() {
        return cb(null, user);
      })
    });
    
    passport.deserializeUser(function(user, cb) {
      process.nextTick(function() {
        return cb(null, user);
      });
    });

 //login face
 passport.use(new FacebookStrategy({
      clientID: "3326950550962192",
      clientSecret: "14c78aef49be8a81354b125042b24b47",
      callbackURL: "https://f688-123-16-194-72.ap.ngrok.io/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      // User.create({ facebookId: profile.id }, function (err, user) {
        return cb(null, profile);
      // });
    }
  ));

  app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['email', 'manage_pages'] }));


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
  //   const saveuser = new User({username: req.user.displayName})
  // saveuser.save();
      console.log(req.user.accessToken)
    res.redirect('/api/hotels');
  });

const PORT = process.env.Port ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));