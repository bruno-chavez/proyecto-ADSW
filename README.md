### To Do

+ Hay que decidir si se va a programar en español o no, en terminos de variables, comentarios, etc.

+ Faltan hacer historias de usuario.

+ Determinar que parte hara cada uno.

+ Definir atributos para tablas de usuario y acciones.

+ Rutas necesarias: 'login', 'register' y 'home' para el usuario

## Tips varios
+ Para instalar todas las dependencias del proyecto solo usar npm install en la carpeta back-end y front-end

+ Si usan Webstorm y tienen errores con los metodos get que no estan definidos sigan esto:

If you're using WebStorm 7 EAP, the workaround is to configure TypeScript stubs:

     Open Settings | JavaScript | Libraries
     click "Download"
     select "TypeScript community stubs"
     select express and click "Download and Install".


After that most express methods should be resolved.

+ Para empezar con Postgre y Sequelize:

https://www.robinwieruch.de/postgres-express-setup-tutorial/