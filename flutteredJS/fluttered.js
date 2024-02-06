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
  button: 'button',
  checkbox: 'checkbox',
  color: 'color',
  date: 'date',
  datetimeLocal: 'datetime-local',
  email: 'email',
  file: 'file',
  hidden: 'hidden',
  image: 'image',
  month: 'month',
  password: 'password',
  radio: 'radio',
  range: 'range',
  reset: 'reset',
  search: 'search',
  submit: 'submit',
  tel: 'tel',
  time: 'time',
  url: 'url',
  week: 'week',
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
  myColumn.style.borderRadius = object.borderRadius !== undefined? `${object.borderRadius}px`:'0%';
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
  const myRow = document.createElement('_row_');
  myRow.style.width = '100%';
  myRow.style.height = '100%';
  myRow.style.flexBasis = '100%';
  myRow.style.display = 'flex';
  myRow.style.flexDirection = `row${object.contentDirection || ContentDirection.default}`;
  myRow.style.flex = object.flex !== undefined? object.flex.toString():'1';
  myRow.style.backgroundColor = object.backgroundColor || '';
  myRow.style.padding = object.padding !== undefined? `${object.padding}px`:'0px';
  myRow.style.boxSizing = 'border-box';
  myRow.style.borderRadius = object.borderRadius !== undefined? `${object.borderRadius}px`:'0%';
  //This is horizontal alignment
  myRow.style.justifyContent = object.mainAxisAlignment || MainAxisAlignment.start;
  //This is vertical alignment
  myRow.style.alignItems = object.crossAxisAlignment || CrossAxisAlignment.start;
  //Populate the Column with children, childres is a reserved name of HTML element so I used kids instead
  this.kids = object.children || [];
  this.kids.forEach(HTMLelement => {
    myRow.appendChild(HTMLelement);
  });
  return myRow;
}
//--------------------
function Text(object = new Object(),){
  //I have to use the pre tag to preserve the spaces before and after span tags
  var myText = document.createElement('pre');
  myText.innerHTML = object.text || '';
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
  //Break text instead of overflowing
  myText.style.whiteSpace = 'pre-wrap';
  //Have a span like tag with a variablename as parameter to be a placeholder of  global variable display
  //The {{VariableName}} will be replaced with a custom span tag element and a variable property to define who it belongst to
  //To support displaying(updating) global variables replace {{varname}} with a span tag and varname
  const openingTag = [];
  const closingTag = [];
  var elementText = myText.innerHTML;
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
      //Load the initial value if it exists using flutteredGlobal.getValue()
      elementText = elementText.replace(variablePlaceholder,`<span varname="${variableNames[i]}">${flutteredGlobal.getValue(variableNames[i]) || ''}</span>`);
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
  //Add child if exists
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
function GestureDetector(object = new Object(),){
  if(object.child == undefined){
    throw 'GestureDetector with no child';
  }else{
    //Attach events that have been included
    if(typeof object.onTap == 'function'){
      object.child.addEventListener('click',object.onTap);
    }
    //Attach touch controls only when a touch function is added
    if(object.onPan !== undefined || object.onRotate !== undefined || object.onZoom !== undefined){
      var segment1 = null;
      var panOrigin = null;
      //Add the touch start event to save initial values
      object.child.addEventListener('touchstart',(event)=>{
        //Check How many fingers touched the screen
        if(event.changedTouches.length == 1){
          //Pan initial point
          //Save initial origin coordinates
          let x = event.changedTouches[0].pageX;
          let y = event.changedTouches[0].pageY;
          panOrigin = [x,y];
        }else if(event.changedTouches.length == 2){
          //Zoom initial segment
          let x1 = event.changedTouches[0].pageX;
          let y1 = event.changedTouches[0].pageY;
          let x2 = event.changedTouches[1].pageX;
          let y2 = event.changedTouches[1].pageY;
          segment1 = [[x1,y1],[x2,y2]];
        }else{

        }
      });
      //TouchMove to make calculations and call functions
      object.child.addEventListener('touchmove',(event)=>{
        if(event.changedTouches.length == 1){
          //Pan functionality
          if(typeof object.onPan == 'function'){
            //Calculate the distance between points
            let x2 = event.changedTouches[0].pageX;
            let y2 = event.changedTouches[0].pageY;
            //Calculate the displacement
            let deltaX = x2 - panOrigin[0];
            let deltaY = y2 - panOrigin[1];
            //Set the new coordinates as the origin
            panOrigin = [x2,y2];
            //Set as parameter and call the function
            object.onPan([deltaX,deltaY]);
          }
        }else if(event.changedTouches.length == 2){
          //Zoom and rotate functionality goes here
          if(segment1 == null){
            //Do not run the functions
          }else{
            if(typeof object.onZoom == 'function'){
              //Avoid calling the function with null value
              //a^2 + b^2 = c^2
              let deltaX1 = Math.pow(segment1[0][0] - segment1[1][0],2);
              let deltaY1 = Math.pow(segment1[0][1] - segment1[1][1],2);
              let distance1 = Math.sqrt(deltaX1 + deltaY1);
              //Calculate the distance for the new segment
              let deltaX2 = Math.pow(event.changedTouches[0].pageX - event.changedTouches[1].pageX,2);
              let deltaY2 = Math.pow(event.changedTouches[0].pageY - event.changedTouches[1].pageY,2);
              let distance2 = Math.sqrt(deltaX2 + deltaY2);
              //Calculate the difference in distance
              let diff = distance2 - distance1;
              object.onZoom(diff);
            }
            if(typeof object.onRotate == 'function'){
              let x1 = event.changedTouches[0].pageX;
              let y1 = event.changedTouches[0].pageY;
              let x2 = event.changedTouches[1].pageX;
              let y2 = event.changedTouches[1].pageY;
              //Calculate the midpoint
              let midpointX = (x1 + x2) / 2;
              let midpointY = (y1 + y2) / 2;
              //Calculate coordinates relative to the midpoint
                //I'm using the first finger as reference.
              let referenceX = x1 - midpointX;
              let referenceY = y1 - midpointY;
              //Calculate the angle
              let newAngle = Math.atan(
                Math.tan(referenceY/referenceX)
              );
              //Calculate Old midpoint
              let oldMidpointX = (segment1[0][0] + segment1[1][0]) / 2;
              let oldMidpointY = (segment1[0][1] + segment1[1][1]) / 2;
              //Calculate old references
              let oldReferenceX = segment1[0][0] - oldMidpointX;
              let oldReferenceY = segment1[0][1] - oldMidpointY;
              //Calculate the old angle
              let oldAngle = Math.atan(
                Math.tan(oldReferenceY / oldReferenceX)
              );
              //Calculate the angular difference
              let angleDelta = newAngle - oldAngle;
              //Convert radians to degrees
              angleDelta = angleDelta * 180 / Math.PI;
              //Call the callback function
              object.onRotate(angleDelta);
            }
          }
          //Set this coordinates as the new reference segment
          segment1 = [[event.changedTouches[0].pageX,event.changedTouches[0].pageY],[event.changedTouches[1].pageX,event.changedTouches[1].pageY]];
        }else{

        }
      });
      //TouchEnd to set values baack to its default
      object.child.addEventListener('touchend',()=>{
        segment1 = null;
        panOrigin = null;
      });
    }
    return object.child;
  }
}
//--------------------
function FutureBuilder(object = new Object()){
  if(object.future == null){
    throw "Must assign a future function";
  }
  if(typeof(object.future) != 'function'){
    throw "The parameter future must be a function";
  }
  //Create an element that will be replaced in the future
  var futureContainer = object.onLoad() || Center({
    child: Text({
      text: "Loading...",
    }),
  });
  try{
    object.future().then((result)=>{
      object.onSuccess(result);
      futureContainer.replaceWith(result);
    });
  }catch(error){
    object.onError(error);
  }
  //Return element
  return futureContainer;
}
//--------------------
var SavedStates = {};
//Set State function
function SetState(uniqueName){
  var widget = SavedStates[uniqueName]();
  widget.setAttribute("id", uniqueName);
  document.getElementById(uniqueName).replaceWith(widget);
}
//Stateful Widget
function StatefulWidget(object = new Object()){
  if(object.uniqueName == null){
    throw "Stateful Widget must have a uniqueName";
  }
  if(object.builder == null){
    throw "Stateful Widget must have a builder function that returns a Widget";
  }
  var builtWidget = object.builder();
  //Add uniqueName as element ID
  builtWidget.setAttribute("id", object.uniqueName);
  //Save function for when SetState gets called
  SavedStates[object.uniqueName] = object.builder;
  return builtWidget;
}
//--------------------