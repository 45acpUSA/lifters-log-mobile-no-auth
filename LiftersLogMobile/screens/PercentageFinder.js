import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'

const Form = t.form.Form

const Attributes = t.struct({
  weight: t.Number,
  inKilos: t.Boolean,
  lowestPercent: t.Number,
  highestPercent: t.Number,
})

const displayKilos = t.struct({
  kilos: t.Boolean
})

const options = {}

export default class PercentageFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayTable: false,
      kilos: false,
    }
  }
  handlePress = () => {
    let attributes = this.refs.form.getValue()
    if (attributes) {
      this.handleTableData(attributes)
      this.setState({
        displayTable: !this.state.displayTable
      })
    }
  }

  handleTableData = attributes => {
    const { weight, inKilos, lowestPercent, highestPercent } = attributes
    const { kilos } = this.state
    let newWeight = parseInt(weight)
    let high = parseInt(highestPercent)
    let low = parseInt(lowestPercent)
    let tData = []
    let incrementor = high - low > 15 ? 5 : 1
    if (high - low > 0) {
      for (let i=low; i<=high; i+=incrementor) {
        let percent = `${i}%`
        tData.push(percent)
        let pounds = inKilos ? `${Math.ceil((newWeight * 2.2) * (i/100))} lbs` : `${Math.ceil(newWeight * (i/100))} lbs`
        tData.push(pounds)
        if (kilos) {
          let kilos = inKilos ? `${Math.ceil(newWeight * (i/100))} kgs` : `${Math.ceil((newWeight / 2.2) * (i/100))} kgs`
          tData.push(kilos)
        }
      }
      return tData.map((value, index) => {
        if (kilos) {
          if (index % 3 === 0) {
            return (
              <tr key={ index }>
                <td>{ value }</td>
                <td>{ tData[index+1] }</td>
                <td>{ tData[index+2] }</td>
              </tr>
            )
          }
        } else {
          if (index % 2 === 0) {
            return (
              <tr key={ index }>
                <td>{ value }</td>
                <td>{ tData[index+1] }</td>
              </tr>
            )
          }
        }
      })
    }
  }
    
  handleClearForm = () => {
    this.setState({
      attributes: {
        weight: '',
        kilos: '',
        inKilos: '',
        lowestPercent: '',
        highestPercent: ''
      }
    })
  }

  render() {
    return (
      <View>
        {!this.state.displayTable &&
          <View style={styles.container}>
            <Form
              ref="form"
              type={ Attributes }
            />
            <TouchableHighlight style={styles.button} onPress={ this.handlePress } underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </View>
        }
        {this.state.displayTable &&
          <Text>Hello World</Text>
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
  }
})