Scaffold({
  body: Column({
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Expanded({
        child: Container({
          color: 'blue',
          height: 100,
          padding: 10,
          margin: 10,
          borderRadius: 20,
          child: Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children:[
              Image({
                width: 50,
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsmurfsfanon%2Fimages%2F1%2F10%2FGeneric_Smurf_Profile.jpg%2Frevision%2Flatest%3Fcb%3D20151121011441&f=1&nofb=1',
              }),
              SizedBox({
                width: 30,
              }),
              Text({
                text: 'Sexy Smurf Website: (+18)',
                color: 'white',
                selectable: false,
              }),
            ],
          }),
        }),
      }),
      Expanded({
        child: Container({
          child: Center({
            child: CircleAvatar({
              radius: 100,
              borderStyle: BorderStyle.dashed,
              borderWidth: 2,
              child: Expanded({
                child: Image({
                  boxFit: BoxFit.cover,
                  imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F564x%2F9a%2F3a%2F69%2F9a3a69997462ad7e4a27c695d25986c8.jpg&f=1&nofb=1',
                }),
              }),
            }),
          }),
        }),
      }),
      Card({
        height: 100,
        width: 500,
        child: Center({
          child: InputField({
            width: 150,
            height: 30,
            type: InputType.number,
            fontSize: 12,
            initialValue: 'Some value',
            borderRadius: 20,
            borderColor: 'green',
            placeholder: 'E-mail',
            onChange: (newValue)=>{
              
            },
          }),
        }),
      }),
      SizedBox({
        height: 30,
      }),
    ],
  }),
});