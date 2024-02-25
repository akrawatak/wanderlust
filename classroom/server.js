const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
 const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});
app.use(cookieParser("secret code"));

app.get("/register", (req, res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if (name === "anonymous"){
        req.flash("error", "user not registered");
    } else{
        req.flash("success", "user registered successfully!");
    }
    res.redirect("/hello");
});


app.get("/hello", (req, res) => {
    res.render("page.ejs", {name: req.session.name });
});

app.get("/test",(req,res)=>{
    res.send("test succesful");
});

app.get("/reqcount", (req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
    req.session.count =1;
    }
    res.send(`you sent a request ${req.session.count} times`);
});

app.get
app.get("/getsignedcookie", (req, res) => {
    res.cookie("madeIn", "India", {signed: true});
    res.send("Signed cookie sent");
});

app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verified");
});

app.get("/getcookies", (req, res) => {
    res.cookie("madeIn", "India");
    res.cookie("colour", "yellow");
    res.send("Some cookies sent");
});

app.get("/greet", (req, res) => {
    let {name = "anonymous"} = req.cookies;
    res.send(`Hi, ${name}!`);
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hello, I'm root.");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, (req, res) => {
    console.log("Server is listening to port 3000");
});