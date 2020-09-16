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
    borderRadius: 5, //A number from 0 to 100
    child: Text({
        text: 'Nada',
    }),//Takes a widget as parameter
}),
~~~

### Image

If you don't know  what this is for. Give up and choose another career.

Note: width and height are set by default to 100% of the parent element (which might give you an odd behavior). If you want to proportionally scale the image only set the width or the height and not both or use the boxFit property. By default the image gets contained.

~~~javascript
Image({
    width: 50,
    height: 80,
    boxFit: BoxFit.contain, //Use the BoxFit enum for an option
}),
~~~

### Expanded:

Makes the unset dimensions of the child 100% of the parent. If you want to constrain the width or the height just set it on the child and it will remain so.

~~~javascript
Expanded({
    child: Container({
        color: 'green',
        width: 20,
    }),
}),
~~~

### CircleAvatar:

A circular Widget that can hold a child (The child will be centered)

~~~javascript
CircleAvatar({
    backgroundColor: 'red',
    radius: 4,//A number(default is 0 so if it will be invisible if you don't assign any value)
    borderStyle: BorderStyle.solid, //Use the BorderStyle enum to set the style of the border
    borderWidth: 2,
    borderColor: 'green',
    child: Text({
        text: 'RJ',
    }),//A widget as child
}),
~~~

### Card

A container with pre-defined border radius and box-shadow. You can leave the parameters unset and it will take the defaults.

~~~javascript
Card({
    width: 200, //A number
    height: 100, //A number
    color: 'white', //Default is white. so you can leave it unspecified
    padding: 10, //Default is 0
    borderRadius: 10, //You can leave it to the default if you want
    shadowSize: 20, //The size of the box shadow
    shadowColor: 'green',//Default is black
    shadowHorizontalOffset: 5, //Shadow Horizontal displacement
    shadowVerticalOffset: -4, //Shadow vertical displacement
    shadowBlur: 10, //Number
    shadowSize: 10, //Size of the shadow
    child: Text({
        text: 'Hello World from Puerto Rico',
    }),//A fluttered Widget
}),
~~~



A circle with the specified child inside.