El siguiente README tiene formato Markdown, favor de visualizarlo como tal antes de seguir leyendo.

### Guia de Instalacion del proyecto

+ Descargar el proyecto de Gitea.

+ Tener instalado PostgreSQL, npm, node.

+ Descargar dependencias de back-end usar siguiente comando dentro de la carpeta back-end:

```
proyecto-ADSW/back-end$ npm install
```

+ Descargar dependencias de front-end usar siguiente comando dentro de la carpeta front-end:

```
proyecto-ADSW/front-end$ npm install
```

+ Para poder conectarse a la base de datos es necesario crearla primero, con la siguientes especificaciones:

Nombre de usuario de psql: "postgres"

contraseña para este usuario: "proyecto-ADSW"

Nombre para BD: "proyecto-ADSW"

host: "localhost"

Puerto: "5432"

Dialecto: "postgres"

+ Una vez creada correctamente, es necesario correr las migraciones de Sequelize, dentro de la carpeta back-end, usar el siguiente comando:

```
proyecto-ADSW/back-end$ node_modules/.bin/sequelize db:migrate
```

+ Para poder usar el sistema es necesario iniciar el servidor back-end y front-end por separado

Dentro de la carpeta back-end, usar el comando:

```
proyecto-ADSW/back-end$ npm start
```

Dentro de la carpeta front-end, usar el comando:

```
proyecto-ADSW/front-end$ npm start
```

Una vez realizados todos estos pasos en el orden dado, se puede usar la pagina de manera correcta.

# Rutas

```/``` Login para usuarios y moderadores, si bien no es parte de una historia de usuario.
 Equivale a la historia de usuario 'Controlar Acceso'

```/adminlogin``` Vista donde los administradores 
se loguean para hacer uso de la plataforma, 
cabe destacar que no hay vista para el registro de usuarios, 
esto se hico como medida de seguridad 
para que no todas las personas puedan registrarse de usuario.

La unica manera de que se cree un nuevo administrador 
es haciendo una request a la ruta del BACKEND ```/adminregister```, proporcionando un email y contraseña con las cuales se podra loguear. 

Ademas se debe proporcionar una key que en este caso quedo 
como 'holaquepasoquepasochao', 
esto se utilizo para que no cualquiera pueda enviar 
requests a esta ruta, 
y solo los que conocen la clave podran 
registrar un nuevo administrador. 
Consideramos esto como una medida de seguridad 
y seria el equivalente a que el sysadmin de una institucion 
este a cargo de la creacion de administradores

```/register``` Registro de usuarios, sin esta vista no se podrian crear nuevos usuarios.

```/user``` Vista donde los usuarios envian comandos a los equipos/dispositivos. 
Equivale a la historia de usuario 'Ingresar Comando'.

```/admin``` Es donde se realiza la aprobacion o rechazo de usuarios registrados, proceso que solo puede
 ser llevado acabo por administradores.
Equivale a la historia de usuario 'Aprobar Usuarios'.