# Fluttered.JS

Flutter inspired JavaScript Library.

Hecho en 🇵🇷 por Radamés J. Valentín Reyes

## Creating your own Fluttered.JS Components from Scratch

Unlike Google Flutter, Fluttered.JS is function based rather than object based and its completely done on JavaScript. With this, the project aims to be an alternative to Flutter by giving the ability to create Web Apps without the high requirements of compiling flutter code and thus enabling people without access to high end computers achieve the same quality of code. Since the project is entirely JavaScript Based you'll be able to enjoy the speed of running your code in the exact same time it takes to reload the browser.

### Creating the component

For this example you will see the Link Widget Source Code

~~~javascript
/*Create a function with the name of the component you want to create and take an object as argument and give it a default value of new Object() so that you can handle errors by checking if the properties are undefined*/
function Link(object = new Object(),){
  //Create an HTML element Node using the document.createElement function
  const myLink = document.createElement('a');
  //Set the properties from the object we are getting with the parameters and set a default value for the ones that are undefined
  myLink.href = object.link || '';
  //We can create enums to simplify assigning properties to the elements
  myLink.target = object.openLink || OpenLink.thisTab;
  myLink.style.textDecoration = 'none';
  if(object.child !== undefined){
    //Making the link's borderradius the same as its child
    myLink.style.borderRadius = object.child.style.borderRadius;
    //Here we are adding watever child node we are getting to the 
    myLink.append(object.child);
  }
  //You must always return the html element at the end of the function
  return myLink;
}
/*Now this can be called like 
Link({
	child: SomeWidget(),
	link: 'https://www.google.com',
});
*/

~~~

All of the elements are simply a function that returns an HTML element created by using document.createElement() method.

### How to create enums

Simply create an Object and associate a property with the value that should go into the field.

~~~javascript
//For the Text widget the enum looks like
var TextAlign = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};
//So that you can set your element's element.style.textAlign = TextAlign.center;
~~~

