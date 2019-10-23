import React from 'react'
import { View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import t from 'tcomb-form-native'

const Form = t.form.Form

const Attributes = t.struct({
  bbWeight: t.Number,
  fiftyFives: t.Number,
  fortyFives: t.Number,
  thirtyFives: t.Number,
  twentyFives: t.Number,
  fifteens: t.Number,
  tens: t.Number,
  fives: t.Number,
  twoPointFives: t.Number,
})

const options = {
  fields: {
    bbWeight: {
      label: 'Barbell Weight',
      error: 'Please input a number',
    },
    fiftyFives: {
      label: 'Fifty Fives',
      error: 'Please input a number',
    },
    fortyFives: {
      label: 'Forty Fives',
      error: 'Please input a number',
    },
    thiryFives: {
      label: 'Thirty Fives',
      error: 'Please input a number',
    },
    twentyFives: {
      label: 'Twenty Fives',
      error: 'Please input a number',
    },
    twoPointFives: {
      label: 'Two and a Halves',
      error: 'Please input a number',
    },
  }
}

export default class PlateMath extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={ styles.container }>
            <Text h1 style={ styles.usageText }>How to Use:</Text>
            <Text h4 style={ styles.usageText}>1. Look at <Text style={{fontStyle: 'italic'}}>ONE SIDE</Text> of your barbell</Text>
            <Text h4 style={ styles.usageText}>2. Count the number of each plate per weight (e.g. 2 x 45, 2 x 10)</Text>
            <Text h4 style={ styles.usageText}>3. Fill in the form below with your numbers</Text>
            <Text h4 style={ styles.usageText}>4. Click 'Submit' to calculate the total weight on your barbell</Text>
          </View>

          <Divider style={ styles.divider } />

          <View style={ styles.container }>
            <Form
              ref="weightForm"
              type={ Attributes }
              options={ options }
            />
            <TouchableHighlight style={ styles.button } onPress={ this.handlePercentFormPress } underlayColor='#99d9f4'>
              <Text style={ styles.buttonText }>Submit</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  usageText: {
    padding: 5,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  divider: {
    backgroundColor: 'blue'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  resetButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },
  kiloContainer: {
    justifyContent: 'flex-end',
    bottom: 10,
  },
  resetContainer: {
    justifyContent: 'flex-start',
  },
})