# Template para la creación de sitios web con Webpack 4

Crea sitioas web estáticos, pero amplios con la potencia de Webpack 4, simplemente clónalo o descárgalo para utilizarlo y disfruta construyendo sitios web increíbles.

## Modo de uso

Clona este repositorio o descarga el archivo ZIP e inicializa tu proyecto instalando las dependencias vía NPM o Yarn

### Instalar dependencias

Instala las dependencias con:

```
npm install
```

o

```
yarn install
```

Esto agregará las dependencias de desarrollo necesarias para que el proyecto funcione y comiences a crear tu propio sitio web.

## Realizando pruebas

Puedes modicar los archivos de prueba para que te vayas familiarizando con el proceso de trabajo y después realices tus propias adecuaciones de acuerdo a las necesidades de tu proyecto

### Servidor de desarrollo

Este template funciona con el servidor de webpack *webpack-dev-server* y con la funcionalidad de poder tener acceso a la visualización del proyecto desde un dispositivo externo (pero conectado a la misma red), simplemente modifica en el archivo *webpack.config.js* la propiedad "host" con el valor de tu propia IP

```
host: 'put.your.own.IP'
```
Para conocer tu IP, accede a la terminal e ingresa el comando *ipconfig* y en el apartado IPV4 encontrarás la IP de tu equipo y es la que pondrás en la propiedad "host"

## Bugs

Si encuentras cualquier deficiencia o crees necesario añadir mejoras, envia un email a israel.edaurdopm@gmail.com y con haremos los ajustes necesarios para que este template sirva a la comunidad.
