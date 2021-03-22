const express = require("express");
const app = express();
var methodOverride = require('method-override')
const port = process.PORT || 3000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.use(require('./routes/categorias'))

app.listen(port, () => console.log(`http://localhost:${port}`));
