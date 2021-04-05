# Clase 36

npm install express-validator

const { body, validationResult } = require('express-validator')

# Clase 35

sequelize-cli.cmd model:generate --name user --attributes email:string,password:string

sequelize-cli.cmd db:migrate

npm install bcrypt

npm install express-session

# Clase 34

npm init -y

npm install sequelize

npm install -g sequelize-cli

sequelize-cli.cmd init

sequelize-cli.cmd model:generate --name categoria --attributes nombre:string

npm install mysql2

sequelize-cli.cmd db:migrate

sequelize-cli.cmd db:migrate:undo

npm install express

npm install ejs

sequelize-cli.cmd seed:generate --name generate_categorias

- defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

sequelize-cli.cmd db:seed:all

npm install method-override

---

.gitignore

heroku login

git init

heroku git:remote -a jepafe-crud

git add .

git commit -am "make it better"

[Datatypes](https://sequelize.org/v5/manual/data-types.html)

## MVC

Modelo Vista Controlador

Modelo-vista-controlador (MVC) es un patrón de arquitectura de software. Para ello MVC propone la construcción de tres componentes distintos que son el modelo, la vista y el controlador, es decir, por un lado define componentes para la representación de la información, y por otro lado para la interacción del usuario.1​ Este patrón de arquitectura de software se basa en las ideas de reutilización de código y la separación de conceptos, características que buscan facilitar la tarea de desarrollo de aplicaciones y su posterior mantenimiento.

## Heroku