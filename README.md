El siguiente README tiene formato Markdown, favor de visualizarlo como tal antes de seguir leyendo.

### Guia de Instalacion del proyecto

+ Descargar el proyecto de Gitea.

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
proyecto-ADSW/front-end$ node_modules/.bin/sequelize db:migrate
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