import React from 'react'
import { View, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import t from 'tcomb-form-native'

const Form = t.form.Form

const Barbell = t.enums({
  Men: '45 lbs / 20.5 kgs',
  Women: '35 lbs / 16 kgs',
  Trainer: '15 lbs / 7 kgs'
})

const Attributes = t.struct({
  bbWeight: Barbell,
  fiftyFives: t.Number,
  fortyFives: t.Number,
  thirtyFives: t.Number,
  twentyFives: t.Number,
  fifteens: t.Number,
  tens: t.Number,
  fives: t.Number,
  twoPointFives: t.Number,
})

const defaultValues = {
  fiftyFives: 0,
  fortyFives: 0,
  thirtyFives: 0,
  twentyFives: 0,
  fifteens: 0,
  tens: 0,
  fives: 0,
  twoPointFives: 0
}

const options = {
  fields: {
    bbWeight: {
      label: 'Barbell Weight',
      error: 'Please input a number',
    },
    fiftyFives: {
      label: 'Number of 55 lb / 25 kg plates',
      error: 'Please input a number'
    },
    fortyFives: {
      label: 'Number of 45 lb / 20.5 kg plates',
      error: 'Please input a number',
    },
    thiryFives: {
      label: 'Number of 35 lb / 16 kg plates',
      error: 'Please input a number',
    },
    twentyFives: {
      label: 'Number of 25 lb / 11 kg plates',
      error: 'Please input a number',
    },
    fifteens: {
      label: 'Number of 15 lb / 7 kg plates',
      error: 'Please input a number',
    },
    tens: {
      label: 'Number of 10 lb / 4.5 kg plates',
      error: 'Please input a number',
    },
    fives: {
      label: 'Number of 5 lb / 2.3 kg plates',
      error: 'Please input a number',
    },
    twoPointFives: {
      label: 'Number of 2.5 lb / 1.1 kg plates',
      error: 'Please input a number',
    },
  }
}

export default class PlateMath extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayWeights: false,
      totalPounds: 0,
      totalKilos: 0,
    }
  }

  handlePlateFormPress = () => {
    let values = this.refs.plateForm.getValue()
    if (values) {
      this.handleTotalWeight(values)
      this.setState({
        displayWeights: !this.state.displayWeights
      })
    }
  }

  handleTotalWeight = plates => {
    const { bbWeight, fiftyFives, fortyFives, thirtyFives, twentyFives, fifteens, tens, fives, twoPointFives } = plates
    let barbell
    if (bbWeight === 'Men') {
      barbell = 45
    } else if (bbWeight === 'Women') {
      barbell = 35
    } else if (bbWeight === 'Trainer') {
      barbell = 15
    }
    let totalPounds = 
      barbell +
      (fiftyFives * 110) +
      (fortyFives * 90) +
      (thirtyFives * 70) +
      (twentyFives * 50) +
      (fifteens * 30) +
      (tens * 20) +
      (fives * 10) +
      (twoPointFives * 5)
    let totalKilos =
      Math.ceil(
        (barbell / 2.2) + 
        (fiftyFives * 50) +
        (fortyFives * 41) +
        (thirtyFives * 32) +
        (twentyFives * 22) +
        (fifteens * 14) +
        (tens * 9) +
        (fives * 4.6) +
        (twoPointFives * 2.2)
      )
    this.setState({
      totalPounds: totalPounds,
      totalKilos: totalKilos
    })
  }

  handleReset = () => {
    this.setState({
      displayWeights: false,
      totalPounds: 0,
      totalKilos: 0
    })
  }


  render() {
    const { displayWeights, totalPounds, totalKilos } = this.state
    return (
      <View>
        {!displayWeights &&
          <ScrollView keyboardShouldPersistTaps="handled">
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
                ref="plateForm"
                type={ Attributes }
                options={ options }
                value={ defaultValues }
              />
              <TouchableOpacity style={ styles.button } onPress={ this.handlePlateFormPress } underlayColor='#99d9f4'>
                <Text style={ styles.buttonText }>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        }
        {displayWeights &&
          <View style={ styles.container }>
            <View style={{ flexDirection: 'row'}}>
              <View style={ styles.weightContainer }>
                <Text style={ styles.weightText }>{totalPounds}</Text>
              </View>
              <View style={ styles.weightContainer }>
                <Text style={ styles.weightText }>{totalKilos}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={ styles.resetButton } onPress={ this.handleReset } underlayColor='#99d9f4'>
                <Text style={ styles.buttonText }>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
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
    backgroundColor: 'blue',
    marginTop: 5,
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
  resetContainer: {
    justifyContent: 'flex-start',
  },
  weightContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 20
  },
  weightText: {
    fontSize: 30
  },
})