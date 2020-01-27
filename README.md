## React Native Simple Radio Button ##

### How to install ? ###

`npm i react-native-simple-radio-button-input`

or 

`yarn add react-native-simple-radio-button-input`

![React Native Radio Button](https://image.prntscr.com/image/ZJ7QPKERROiWQYXAwBOAmA.png)


### Example ###

```
import RadioButton from 'react-native-simple-radio-button-input';

<RadioButton 
    color={'red'}
    selected={true}
    onPress={()=>{})}
/>
```

### Complete Example ###

```
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioButton from 'react-native-simple-radio-button-input';

const DATA = ['Student', 'Teacher'];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected:null
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', padding:15}}>

        {DATA.map(val=>(
        <View style={{flexDirection:'row', marginBottom:15, alignItems:'center'}}>
          <RadioButton 
              color={'blue'}
              selected={this.state.selected==val}
              onPress={()=>{this.setState({
                      selected: val
                  })
              }}
          />
            <Text style={{marginLeft:7}}> {val} </Text>
          </View>
        ))}

      </View>
    );
  }
}


```

