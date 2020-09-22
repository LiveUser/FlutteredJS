# Fluttered.JS

A Flutter inspired JavaScript Library

Hecho en 🇵🇷 por Radamés J. Valentín Reyes

## Get Started with Fluttered.js



### Create a normal HTML Skeleton and leave the body empty

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    
  </body>
</html>
~~~



### Reference the fluttered.js library

Create a script tag in your html head and reference the fluttered.js file(contains the entire library).

~~~html
<script src="./flutteredJS/fluttered.js"></script>
~~~



### Create a JavaScript file to write your functionality on and reference it from your HTML head

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./flutteredJS/fluttered.js"></script>
    <script  src="./testFlut.js"></script>
  </head>
  <body>
    
  </body>
</html>
~~~

<strong>Note: </strong>from now on you only need to use your .js file to create your UI



### Starting your app

Everything starts with a Scaffold. This widget will take care of building all of the child widgets. The body will take a Fluttered widget as argument.

~~~javascript
Scaffold({
  body: SomeWidget(),
});
~~~

### A simple example

This code will create a Text() Widget and center it into the screen

~~~javascript
Scaffold({
  body: Center({
    child: Text({
      text: 'Some text here',
    }),
  }),
});
~~~

