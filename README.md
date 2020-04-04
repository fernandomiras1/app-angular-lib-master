# Crear una librería Angular y subirla a NPM

Desarrollo de una libreria que suministra un set de componentes de angular, para ser re utilizado en varios de nuestros proyectos.

[Documentacion](https://medium.com/@insomniocode/creando-una-librer%C3%ADa-angular-y-subi%C3%A9ndola-a-npm-f78d212e8e71)

### Ejecutar demo local

Este repo contiene en si mismo una demo de los componentes, con solo ejecutar un:

```bash
$ ng serve --open # se abrira el browser con la demo corriendo
```

## 1 -  Creando una librería

Una vez creado el proyecto, nos posicionamos en la raíz, y en la terminal escribimos lo siguiente (el CLI de Angular nos proporciona un comando para crear una librería):

`ng generate library my-zumo`

Esto nos genera una librería localizada en “projects/my-lib”, como se muestra a continuación:


## Transpilando la librería

Una vez escrita nuestra librería, es hora de prepararla como librería genérica. El comando ng generate library nos crea un directorio en la cual podemos escribir una librería, pero solo es la preparación, falta transpilarla para hacerla una librería un poco más profesional y compatible. y para eso nos vamos a apoyar de ng-packagr, es un paquete que nos simplifica la creación/transpilación de librerías para Angular.
Instalamos ng-packagr.

Run `npm install ng-packagr`

En nuestro package.json del proyecto root my-project creamos un nuevo script, que nos ayudará a transpilar nuestra librería usando ng-packagr.

scrpit: ` "build:lib": "ng-packagr -p projects/my-zumo/ng-package.json"`

luego corremos el script creado con `npm run build:lib` Esto generará una carpeta dist en el proyecto raíz (my-project) con la librería transpilada.

## Antes de transpilar la librería
Antes de transpilar la librería, recomiendo hacer algunas modificaciones en el package.json que se encuentra dentro de nuestra librería (projects/my-lib), indicando la descripción, repositorio, autor y todo lo necesario para subir una librería a NPM (aquí les dejo las opciones que soporta el archivo package.json), crear el archivo LICENSE (ya sea que lo creen manual o desde el repositorio) y modificar el README.md indicando el uso de la librería. Vamos a modificar nuestro script (build:lib) para copiar el README.md y el archivo LICENSE en nuestra librería transpilada.

## Publicar la librerira local en formato (tgz)

En la libreria tenemos que ejecutar este comando para crear el zip

Run `$ npm run package`

es una sola vez 
npm install ../zumo-1.2.0.tgz 
luego npm install zumo  ( siempre ) 


