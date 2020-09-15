# Fluttered.JS

Flutter inspired JavaScript Library.

## Add the script to your HTML Head

~~~javascript
<script src="./flutteredJS/fluttered.js"></script>
~~~




## Example Web App
### Create Your Web App's Entry Point

~~~javascript
Scaffold({
  body: SomeWidget(),//Takes a widget as parameter
  
});
~~~

## Widgets:

Every Widget is inspired by Flutter, however, it is not a literal copy of flutter and differs a little bit. All the Widgets take an object with the specified properties as argument to meet the aesthetics of Dart code.

<strong>Note: </strong> Unlike Flutter all of the widgets need to be initialized with the <strong>new</strong> keyword since this is pure JavaScript. Also, all parameters have default values.

### Scaffold:

The app's entry point. It must always be called before anything else.

~~~javascript
Scaffold({
    body: Text({
        text: 'Hello Fluttered.JS world',
    }), //Takes a Fluttered Widget as Argument
    backgroundColor: 'red', //Any CSS color string is valid. rgb(255,255,255)
});
~~~

### Column:

Stacks Children vertically in a column

~~~javascript
Column({
    backgroundColor: 'red', //CSS color String, default is white
    children: [], //Array of Fluttered Widgets
    flex: 1, //Flex Number
    padding: 2, //Padding as a Number
    borderRadius: 20, //Border Radius 0 - 100 Decimal because it is in percent
    crossAxisAlignment: CrossAxisAlignment.start, //Use the CrossAxisAlignment enum assign a property
    mainAxisAlignment: MainAxisAlignment.start, //Use the MainAxisAlignment.start enum
    contentDirection: ContentDirection.default, //ContentDirection enum
  }),
~~~
### Text:

Returns a flexible container with the specified text string;

~~~javascript
Text({
	text: 'Hallo',
    textAlign: TextAlign.center,//Use the TextAlign enum
    padding: 5, //Padding
    backgroundColor: 'blue',//CSS color
    color: 'green', //CSS color for the text
    fontFamily: 'Impact',//Set fonts as you do in CSS
    fontSize: 45,
}),
~~~

### Sized Box

It only occupies space and because it has no no children it has no other  purpose in life :)'

~~~javascript
SizedBox({
    width: 50, //A number as input
    height: 40, //A number as input
}),
~~~

### Flex

Sets the flex number of its child.

~~~javascript
Flex({
    flex: 4, //Flex number to be set to the child element
    child: Text(), //Some Fluttered.JS widget
}),
~~~

### Container

Contains stuff. Pretty much like a <div> (it's exactly like that). Takes the dimensions of the child element unless dimensions are specified.

~~~javascript
Container({
    width: 40, //A number
    height: 12,
    color: 'red', //A CSS color
    padding: 10,
    margin: 20, //Number
}),
~~~

### Image

If you don't know  what this is for. Give up and choose another career.

~~~javascript

~~~

