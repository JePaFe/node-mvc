const express = require("express");
const app = express();
var methodOverride = require('method-override')
const port = process.PORT || 3000;
const session = require('express-session')

app.use(session({
    secret: 'jksahfjkasfhjash',
    saveUninitialized: false,
    resave: false,
}))

const authUser = require('./middlewares/auth')

app.use(authUser)

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.redirect('/categorias')
})

app.use(require('./routes/auth'))
app.use(require('./routes/categorias'))

app.listen(port, () => console.log(`http://localhost:${port}`));
