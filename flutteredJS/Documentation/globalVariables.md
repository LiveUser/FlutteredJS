# Fluttered.JS

A Flutter inspired JavaScript Library

Hecho en 🇵🇷 por Radamés J. Valentín Reyes

## Global Variables



### Creating placeholders

In order to specify where the variable value must go we must create a variable value placeholder within a  text widget <strong>text:</strong> property like this.

~~~javascript
Text({
    text: 'I have ${{dollars}} in my account',
}),
~~~

<strong>Note:</strong> It must always be in the form {{ variableName }}

### Using methods from flutteredGlobal

flutteredGlobal is an object containing the methods required to update and retrieve global variables.

- Setting a variable with a value

  creates/changes the value of the variable and updates the UI wherever there is a variable placeholder.

  ~~~javascript
  //Takes as arguments 'variableName' as String and a variable value
  //flutteredGlobal.setValue(variableName,variableValue);
  flutteredGlobal.setValue('dollars',7);
  ~~~

- Retrieving a variable with a value

  returns the variable value. returns null if the value is undefined.

  ~~~javascript
  //Takes as arguments 'variableName' as String
  //flutteredGlobal.setValue(variableName,variableValue);
  flutteredGlobal.getValue('dollars');
  ~~~

  





