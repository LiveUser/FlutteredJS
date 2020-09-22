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
              onChange: (newValue)=>{
                flutteredGlobal.setValue('myUserName',newValue);
              },
            }),
          }),
          SizedBox({
            height: 20,
          }),
          ClickableText({
            text: 'Click Me',
            alertText: "Don't touch me",
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