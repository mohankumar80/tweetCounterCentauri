import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';


const Tweet: React.FC<{}> = () => {
  const [userInput, setUserInput] = useState<string>('');

  const textChangeHandler = (text: string) => {
    const newInput = text;
    setUserInput(newInput);
  }

  const chooseBgColor = () => {
    if(userInput.length > 280) {
      return { backgroundColor: 'lightpink', borderColor: 'red' }
    } else if (userInput.length === 280) {
      return { backgroundColor: 'lightblue', borderColor: 'blue' }
    } else if (userInput.length > 270) {
      return { backgroundColor: 'lightyellow',borderColor: 'gold' }
    } else {
      return { backgroundColor: 'lightgray', borderColor: 'black' }
    }
  }

  const chooseTextColor = () => {
    if(userInput.length > 280) {
      return { color: 'red' };
    } else if ( userInput.length === 280 ) {
      return { color: 'blue' };
    } else if( userInput.length > 270 ) {
      return { color: 'gold'};
    } else {
      return { color: 'black' };
    }
  }

  return (
    <View style={styles.tweetContainer}>
      <TextInput 
        value={userInput} 
        onChangeText={(text) => textChangeHandler(text)} 
        style={[styles.inputBoxStyle, chooseBgColor()]}
        multiline={true}
        numberOfLines={8}
      />
      <Text style={[styles.textStyle, chooseTextColor()]}>{280 - userInput.length} characters remaining</Text>
    </View>
  )
}


const App: React.FC<{}> = () => {
  return (
    <View style={styles.mainContainer}>
      <Tweet />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tweetContainer: {
    margin: 25,
    width: '95%',
  },
  inputBoxStyle: {
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: 'solid',
    textAlignVertical: 'top',
    fontSize: 20,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 15,
  },
})

export default App;
