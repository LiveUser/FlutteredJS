//Made by Radamés J. Valentín Reyes in Puerto Rico

/*Parameters
------------------------------------------------------------------------------------------------------------------------*/
var TextAlign = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};
var MainAxisAlignment = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
};
var CrossAxisAlignment = MainAxisAlignment;
var BorderStyle = {
  solid: 'solid',
  dotted: 'dotted',
  dashed: 'dashed',
  double: 'double',
  groove: 'groove',
  ridge: 'ridge',
  inset: 'inset',
  outset: 'outset',
  none: 'none',
  hidden: 'hidden',
};
var ContentDirection = {
  default: '',
  reverse: '-reverse',
};
var BoxFit = {
  fill: 'fill',
  contain: 'contain',
  cover: 'cover',
  scaleDown: 'scale-down',
  none: 'none',
};
var OpenLink = {
  thisTab: '_self',
  newTab: '_blank',
};
var InputType = {
  text: 'text',
  number: 'number',
};
/*Functions for the widgets
------------------------------------------------------------------------------------------------------------------------*/
  //Global variable functionality
  const flutteredGlobal = new Object();
  //Hold all the variables and values, Do not modify this directly
  flutteredGlobal._variables = new Object();
  //Update the value and all the places in the UI containing it
  flutteredGlobal.setValue = (variableName,variableValue)=>{
    //Update the value
    flutteredGlobal._variables[variableName] = variableValue;
    //Update the elements where it gets called by searching them
    const allSpans = document.getElementsByTagName('span');
    for(i=0; i < allSpans.length;i++){
      const thisElement = allSpans.item(i);
      //If element has my varname update its content
      if(thisElement.getAttribute('varname') == variableName){
        thisElement.innerHTML = `${variableValue}`;
      }else{

      }
    }
  };
  flutteredGlobal.getValue = (variableName)=>{
    //If it is undefined return null instead of undefined
    return flutteredGlobal._variables[variableName] === undefined?null:flutteredGlobal._variables[variableName];
  };
/*Widgets
------------------------------------------------------------------------------------------------------------------------*/
//Scaffold is an initializer, no an actual widget or component, it simply appends the first element to the body and formats the document body
//--------------------
function Scaffold(object = new Object(),){
  if(object !== null && object.body != undefined){
    //Initialize everything after the whole document and assets have been loaded
    document.addEventListener('DOMContentLoaded', ()=>{
      //Remove body padding y hacer la caja 100% x 100%
      document.body.style.padding = '0';
      document.body.style.margin = '0';
      document.body.style.height = '100vh';
      document.body.style.width = '100%';
      //Defining the body as a flex breaks the code. Do not document.body.style.display = 'flex';
      //Generate a name
      document.body.append(object.body);
    });
  }else{
    throw 'Scaffold with empty body';
  }
}
//--------------------
function Column(object = new Object(),){
  const myColumn = document.createElement('_column_');
  myColumn.style.width = '100%';
  myColumn.style.height = '100%';
  myColumn.style.flexBasis = '100%';
  myColumn.style.display = 'flex';
  myColumn.style.flexDirection = `column${object.contentDirection || ContentDirection.default}`;
  myColumn.style.flex = object.flex !== undefined? object.flex.toString():'1';
  myColumn.style.backgroundColor = object.backgroundColor || '';
  myColumn.style.padding = object.padding !== undefined? `${object.padding}px`:'0px';
  myColumn.style.boxSizing = 'border-box';
  myColumn.style.borderRadius = object.borderRadius !== undefined? `${object.borderRadius}%`:'0%';
  //This is horizontal alignment
  myColumn.style.justifyContent = object.crossAxisAlignment || CrossAxisAlignment.start;
  //This is vertical alignment
  myColumn.style.alignItems = object.mainAxisAlignment || MainAxisAlignment.start;
  //Populate the Column with children, childres is a reserved name of HTML element so I used kids instead
  this.kids = object.children || [];
  this.kids.forEach(HTMLelement => {
    myColumn.appendChild(HTMLelement);
  });
  return myColumn;
}
//--------------------
function Row(object = new Object(),){
  const myRow = document.createElement('_Row_');
  myRow.style.width = '100%';
  myRow.style.height = '100%';
  myRow.style.flexBasis = '100%';
  myRow.style.display = 'flex';
  myRow.style.flexDirection = `row${object.contentDirection || ContentDirection.default}`;
  myRow.style.flex = object.flex !== undefined? object.flex.toString():'1';
  myRow.style.backgroundColor = object.backgroundColor || '';
  myRow.style.padding = object.padding !== undefined? `${object.padding}px`:'0px';
  myRow.style.boxSizing = 'border-box';
  myRow.style.borderRadius = object.borderRadius !== undefined? `${object.borderRadius}%`:'0%';
  //This is horizontal alignment
  myRow.style.justifyContent = object.crossAxisAlignment || CrossAxisAlignment.start;
  //This is vertical alignment
  myRow.style.alignItems = object.mainAxisAlignment || MainAxisAlignment.start;
  //Populate the Column with children, childres is a reserved name of HTML element so I used kids instead
  this.kids = object.children || [];
  this.kids.forEach(HTMLelement => {
    myRow.appendChild(HTMLelement);
  });
  return myRow;
}
//--------------------
function Text(object = new Object(),){
  var myText = document.createElement('_Text_');
  myText.innerText = object.text || '';
  myText.style.display = 'flex';
  //Horizontal Alignment
  myText.style.justifyContent = object.textAlign || TextAlign.left;
  myText.style.boxSizing = 'border-box';
  myText.style.padding = object.padding !== undefined ? `${object.padding}px`:'0px';
  myText.style.backgroundColor = object.backgroundColor || '';
  myText.style.color = object.color || '';
  myText.style.fontSize = object.fontSize !== undefined? `${object.fontSize}px`:'';
  myText.style.fontFamily = object.fontFamily || '';
  myText.style.userSelect = object.selectable == true?'auto':'none';
  //To support displaying(updating) global variables replace {{varname}} with a span tag and varname
  const openingTag = [];
  const closingTag = [];
  var elementText = myText.innerText;
    //Find opening and closing tags {{ and }}
    for(i = 0; i < elementText.length; i++){
      if(elementText.substring(i,i+2) == '{{'){
        //Add the index
        openingTag[openingTag.length] = i;
      }else if(elementText.substring(i,i+2) == '}}'){
        closingTag[closingTag.length] = i;
      }else{
        //Do nothing if its not a tag
      }
    }
    const  variableNames = [];
    //Find variable names
    for(i=0 ; i < openingTag.length;i++){
      //Add 2 to the openingTag index to ignore {{ and don't add anything to the closing to avoid including }}
      const myVar = elementText.substring((openingTag[i]+2),closingTag[i]);
      variableNames[variableNames.length] = myVar;
    }
    //Replace variable placeholder with span tags
    for(i=0;i<variableNames.length;i++){
      const variablePlaceholder = RegExp(`{{${variableNames[i]}}}`,'g');
      //Remove whitespace from variable name
      variableNames[i] = variableNames[i].replace(/ /g,'');
      elementText = elementText.replace(variablePlaceholder,`<span varname="${variableNames[i]}"></span>`);
    }
  //Update with the formatted text
  myText.innerHTML = elementText;
  return myText;
}
//--------------------
function Center(object = new Object(),){
  const myCenter = document.createElement('_center_');
  myCenter.style.width = '100%';
  myCenter.style.height = '100%';
  myCenter.style.flexBasis = '100%';
  myCenter.style.display = 'flex';
  myCenter.style.flexDirection = `column${object.contentDirection || ContentDirection.default}`;
  myCenter.style.flex = object.flex !== undefined? object.flex.toString():'1';
  myCenter.style.boxSizing = 'border-box';
  //This is horizontal alignment
  myCenter.style.justifyContent = MainAxisAlignment.center;
  //This is vertical alignment
  myCenter.style.alignItems = CrossAxisAlignment.center;
  myCenter.appendChild(object.child);
  return myCenter;
}
//--------------------
function SizedBox(object = new Object(),){
  const mySizedBox = document.createElement('_SizedBox_');
  mySizedBox.style.width = object.width !== undefined? `${object.width}px`:'0';
  mySizedBox.style.height = object.height !== undefined ? `${object.height}px`:'0';
  return mySizedBox;
}
//--------------------
function Flex(object = new Object(),){
  if(object.child !== undefined){
    const myFlex = object.child;
    myFlex.style.flex = object.flex !== undefined? `${object.flex}`:'1';
    return myFlex;
  }else{
    throw 'Flex with no child';
  }
}
//--------------------
function Container(object = new Object(),){
  var myContainer = document.createElement('_Container_');
  myContainer.style.display = 'flex';
  myContainer.style.flexDirection = 'column';
  myContainer.style.boxSizing = 'border-box';
  myContainer.style.borderRadius = object.borderRadius !== undefined ? `${object.borderRadius}px`:'0';
  //Change to defined dimensions if specified
  if(object.width !== undefined){
    myContainer.style.width = `${object.width}px`;
  }
  if(object.height !== undefined){
    myContainer.style.height = `${object.height}px`;
  }
  myContainer.style.backgroundColor = object.color || '';
  myContainer.style.padding = object.padding !== undefined? `${object.padding}px`:'0';
  //Add chilf if exists
  if(object.child !== undefined){
    myContainer.appendChild(object.child);
  }
  //Add margin by containing the element within a column
  if(object.margin !== undefined){
    const myMargin = document.createElement('_margin_');
    myMargin.style.display = 'flex';
    myMargin.style.flexDirection = 'column';
    myMargin.style.flex = '0';
    myMargin.style.boxSizing = 'border-box';
    myMargin.style.padding = `${object.margin}px`;
    //add margin to container
    myMargin.appendChild(myContainer);
    myContainer = myMargin;
  }

  return myContainer;
}
//--------------------
function Image(object = new Object(),){
  const myImage = document.createElement('img');
  myImage.src = object.imagePath || '';
  myImage.style.display = 'flex';
  //Be 100% by 100% by default, otherwise, set the dimensions
  if(object.width == undefined && object.height == undefined){
    
  }else{
    myImage.style.width = object.width !== undefined? `${object.width}px`:'';
    myImage.style.height = object.height !== undefined? `${object.height}px`:'';
  }
  //Set styling
  myImage.style.objectFit = object.boxFit || BoxFit.contain;
  
  return myImage;
}
//--------------------
function Expanded(object = new Object(),){
  if(object.child !== undefined){
    object.child.style.width = object.child.style.width == ''?'100%': object.child.style.width;
    object.child.style.height = object.child.style.height == ''?'100%':object.child.style.height;
  }else{
    throw 'Expanded widget has no child';
  }
  return object.child;
}
//--------------------
function CircleAvatar(object = new Object(),){
  const myCircleAvatar = document.createElement('_CircleAvatar_');
  myCircleAvatar.style.backgroundColor = object.backgroundColor || '';
  myCircleAvatar.style.width = object.radius !== undefined? `${object.radius * 2}px`:'0';//Multiply by 2 to get the diameter
  myCircleAvatar.style.height = object.radius !== undefined? `${object.radius * 2}px`:'0';
  //Borders for the circle
  myCircleAvatar.style.boxSizing = 'border-box';
  myCircleAvatar.style.borderStyle = `${object.borderStyle || BorderStyle.solid}`;
  myCircleAvatar.style.borderWidth = `${object.borderWidth || 0}px`;
  myCircleAvatar.style.borderColor = object.borderColor || 'black';
  //Hide the overflow
  myCircleAvatar.style.overflow = 'hidden';
  myCircleAvatar.style.borderRadius = '100%';
  if(object.child !== undefined){
    //Center the child
    const roundCenteredChild = Center({
      child: object.child,
    });
    //Use the Center widget to center the child within the circle
    myCircleAvatar.appendChild(roundCenteredChild);
  }
  return myCircleAvatar;
}
//--------------------
function Card(object = new Object(),){
  //A card is a container with predefined borderRadius and boxShadow
  //Leave the Container without margin so that it doesn't add a div for the 0 margin
  const myCard = Container({
    width: object.width,
    height: object.height,
    color: object.color || 'white',
    padding: object.padding || 0,
    borderRadius: object.borderRadius || 20,
  });
  //Add the shadow to the box
  myCard.style.boxShadow = `${object.shadowHorizontalOffset || 0}px ${object.shadowVerticalOffset || 0}px ${object.shadowBlur || 10}px  ${object.shadowSize || 0.3}px ${object.shadowColor || 'grey'}`;
  if(object.child !== undefined){
    myCard.append(object.child);
  }
  return myCard;
}
//--------------------
function Link(object = new Object(),){
  const myLink = document.createElement('a');
  myLink.href = object.link || '';
  myLink.target = object.openLink || OpenLink.thisTab;
  myLink.style.textDecoration = 'none';
  if(object.child !== undefined){
    myLink.style.borderRadius = object.child.style.borderRadius;
    myLink.append(object.child);
  }
  return myLink;
}
//--------------------
function InputField(object = new Object(),){
  const myInputField = document.createElement('input');
  //Basic Styling
  myInputField.style.boxSizing = 'border-box';
  myInputField.type = object.type || InputType.text;
  myInputField.style.width = object.width !== undefined? `${object.width}px`:'';
  myInputField.style.height = object.height !== undefined? `${object.height}px`:'';
  myInputField.style.fontSize = object.fontSize !== undefined?`${object.fontSize}px`:'';
  myInputField.style.color = object.color || '';
  myInputField.style.padding = object.padding !== undefined?`${object.padding}px`:'';
  myInputField.style.borderWidth = object.borderSize !== undefined? `${object.borderSize}px`:'';
  myInputField.style.borderColor = object.borderColor || '';
  myInputField.style.borderStyle = object.borderStyle || BorderStyle.solid;
  myInputField.value = object.initialValue || '';
  myInputField.style.borderRadius = object.borderRadius !== undefined? `${object.borderRadius}px`:'0';
  myInputField.style.outline = 'none';
  myInputField.placeholder = object.placeholder || '';
  //Attach event
  if(typeof object.onChange =='function'){
    myInputField.addEventListener('input',()=>{
      var inputValue = myInputField.value;
      //Do not call if the input is for number and it is not a number
      if(myInputField.type == InputType.number && Number(inputValue) !== NaN || myInputField.type == InputType.text){
        //If the inputtype is number send back a number
        object.onChange(myInputField.type == InputType.number?Number(inputValue):inputValue);
      }
    });
  }
  return myInputField;
}
//--------------------

//--------------------
//Have a span like tag with a variablename as parameter to be a placeholder of  global variable display
//The {{VariableName}} will be replaced with a custom span tag element and a variable property to define who it belongst to