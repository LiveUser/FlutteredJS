Scaffold({
  body: Expanded({
    child: Container({
      padding: 40,
      color: '#C8A7C7',
      child: Column({
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        children:[
          Text({
            text: 'Your username is {{myUserName}}',
          }),
          SizedBox({
            height: 20,
          }),
          Expanded({
            child: InputField({
              height: 30,
              placeholder: 'UserName',
              type: InputType.text,
              onChange: (newValue)=>{
                flutteredGlobal.setValue('myUserName',newValue);
                SetState("lastUpdate");
              },
            }),
          }),
          StatefulWidget({
            uniqueName: "lastUpdate",
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
          SizedBox({
            height: 20,
          }),
          ClickableText({
            text: 'Click Me',
            alertText: "Don't touch me",
          }),
          GesturesTest(),
          Row({
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text({
                text: "Row item",
              }),
              Text({
                text: "Row item",
              }),
            ],
          }),
          FutureBuilder({
            id: "uniqueIdentifier",
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
        ],
      }),
    }),
  }),
});

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
function GesturesTest(){
  return GestureDetector({
    onRotate: (angle)=>{
      flutteredGlobal.setValue('gesture',`Rotated: (${angle}°)`);
    },
    child: Expanded({
      child: Container({
        color: '#ff7da7',
        borderRadius: 20,
        child: Center({
          child: Text({
            text: 'Gestures Test:\n{{gesture}}',
            color: 'white',
          }),
        }),
      }),
    })
  });
}