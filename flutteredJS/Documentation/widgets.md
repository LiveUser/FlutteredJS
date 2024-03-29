# Fluttered.JS

Flutter inspired JavaScript Library.

Hecho en 🇵🇷 por Radamés J. Valentín Reyes

## Widgets:

Every Widget is inspired by Flutter, however, it is not a literal copy of flutter and differs a little bit. All the Widgets take an object with the specified properties as argument to meet the aesthetics of Dart code for passing parameters.

<strong>Note: </strong> Unlike Flutter all of the widgets are functions. Also, all parameters have default values.

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


Stacks Children horizontally in a row

~~~javascript
Row({
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
    selectable: true, //A boolen value. Determines wether the text can be selected or not. Default is false.
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
  expandDirection: ExpandDirection.horizontal,
  child: Container({
    color: 'black',
    child: Text({
      text: "Fluttered Practice",
      color: 'white',
      textAlign: TextAlign.center,
    }),
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

### Link

Adds a link to the child. Just like a tag in html (literally just that).

~~~javascript
Link({
    child: Text({
       text: 'Go to google', 
    }),//A widget as child
    link: 'https://www.google.com', //A string as link
    openLink: OpenLink.newTab, //OpenLink enum as parameter
}),
~~~

### InputField

Get text or number input field. If the type is number the onChange will send a number as parameter, if it is text it will give a string.

~~~javascript
InputField({
    width: 20,
    height: 10,
    fontSize: 20,
    type: InputType.text, //Type of input, default is text
    color: 'red',
    padding: 10,
    borderSize: 2,
    borderColor: 'blue',
    borderStyle: BorderStyle.solid,
    initialValue: 'something', //Initial text field value
    borderRadius: 5,
    placeholder: 'E-mail',
    onChange: (newValue)=>{
        console.log(`New value is: ${newValue}`);
    },//A function that takes some argument as value
}),
~~~

### GestureDetector

Detects gestures and calls functions when the event is called.

- One finger sliding on the screen is interpreted as panning
- Two fingers on the screen trigger both onZoom and onRotate.

~~~javascript
GestureDetector({
    onTap: ()=>{
        alert('Don\'t touch me');
    },//Set a function as parameter
    onPan: (displacement)=>{
      flutteredGlobal.setValue('gesture',`Panned: (${displacement[0]},${displacement[1]})`);
    },//Sends an array as argument with the displacement in x and y axis. Position 0 is X displacement and Array position 1 is Y displacement
    onZoom: (zoom)=>{
        //Gives you as argument the distance change between fingers
        alert(zoom);
    },//Function with one positional parameter
    onRotate: (angle)=>{
      //angle is the change in degrees of the movement of the fingers
      flutteredGlobal.setValue('gesture',`Rotated: (${angle}°)`);
    },//A function taking a number as argument
    child: Text({
        text: 'Click Me',
    }),//Some fluttered.js widget
}),
~~~

### Future Builder
A widget for displaying different widgets while an asynchonous function gets executed.
Methods are provided for when:
- Function is loading
- Function throws an error
- Function execution succedes

Future parameter must be an asynchronous function that returns something.
The rest of the parameters must be functions that return Widgets.

~~~javascript
FutureBuilder({
  id: "uniqueName",
  future: async()=>{
    return "Test text";
  },
  onLoad: ()=>{
    return Text({
      text: "Loading data",
    });
  },
  onSuccess: (result)=>{
    return Text({
      text: result,
    });
  },
  onError: (error)=>{
    console.log(error);
  },
}),
~~~

### Stateful Widget
A widget that can be realoaded.

~~~javascript
StatefulWidget({
  uniqueName: "uniqueName",
  builder: ()=>{
    //Get date
    var date = new Date();
    //return Widget
    return Expanded({
      child: Row({
        children: [
          Expanded({
            child: Container({
              color: "black",
              child: Text({
                color: 'white',
                text: `Last update: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                textAlign: TextAlign.center,
              }),
            }),
          }),
        ],
      }),
    });
  },
}),
~~~

The function to call reload is SetState:
~~~javascript
SetState("uniqueName");
~~~