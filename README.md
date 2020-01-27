## React Native Simple Radio Button ##

### How to install ? ###

`npm i react-native-simple-radio-button-input`
or 
`yarn add react-native-simple-radio-button-input`


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

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected:false
    };
  }

  render() {
    return (
      <View>
        <Text> Test </Text>
        <RadioButton 
            color={'blue'}
            selected={this.state.selected}
            onPress={()=>{this.setState({
                    selected: !this.state.selected
                })
            }}
        />
      </View>
    );
  }
}

```

