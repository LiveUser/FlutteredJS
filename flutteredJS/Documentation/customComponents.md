# Fluttered.JS

A Flutter inspired JavaScript Library

Hecho en 🇵🇷 por Radamés J. Valentín Reyes

## Creating Custom Widgets

In order to create a Custom Fluttered.JS widget all you have to do is simply have a function that takes an Object as argument(so that you can use {propertyName:value,} like in flutter to set parameters)  and returns the Fluttered.JS Widgets.

~~~javascript
function ClickableText(object = new Object()){
  return GestureDetector({
    onTap: ()=>{
      //Handle undefined properties with the || , ternary operator or if statements to give default values
      alert(object.alertText || '');
    },
    child: Text({
      text: object.text || '',
    }),
  });
}
~~~

and now you can call this widget like this.

~~~javascript
ClickableText({
    text: 'Click Me',
    alertText: "Don't touch me",
}),
~~~

