import React from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const Form = t.form.Form

const Attributes = t.struct({
  weight: t.Number,
  inKilos: t.Boolean,
  lowestPercent: t.Number,
  highestPercent: t.Number,
})

const options = {}

export default class PercentageFinder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayTable: false,
      kilos: false,
      weightsKg: [],
      tableHead: ['Percentage', 'Weight (in lbs)'],
      tableData: [],
    }
  }

  handlePercentFormPress = () => {
    let values = this.refs.percentageForm.getValue()
    if (values) {
      this.handleTableData(values)
      this.setState({
        displayTable: !this.state.displayTable
      })
    }
  }
  
  handleKiloToggle = value => {
    if (value) {
      this.handleTableDisplay(this.state.tableData)
    }
  }

  handleTableData = attributes => {
    const { weight, inKilos, lowestPercent, highestPercent } = attributes
    const { weightsKg, tableHead, tableData } = this.state
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

        let kilos = inKilos ? `${Math.ceil(newWeight * (i/100))} kgs` : `${Math.ceil((newWeight / 2.2) * (i/100))} kgs`
        weightsKg.push(kilos)
      }
      this.handleTableDisplay(tData)
    }
  }

  handleTableDisplay = array => {
    const { weightsKg, tableHead, tableData } = this.state
    if (tableData.length % 2 !== 0) {
      tableHead.push('Weight (in kgs)')
      let newTData = [].concat(...array)
      let temp = []
      let count = 0
      newTData.map((value, index) => {
        if (index % 2 > 0) {
          temp.push(value)
          temp.push(weightsKg[count])
          tableData.push(temp)
          temp = []
          count ++
        } else {
          temp.push(value)
        }
      })
    } else {
      array.map((value, index) => {
        let temp = []
        if (index % 2 === 0) {
          let nextValue = array[index+1]
          Array.prototype.push.apply(temp, [value, nextValue])
          tableData.push(temp)
          temp = []
        }
      })
    }
    this.handleClearForm()
    this.setState({ tableData })
  }
    
  handleClearForm = () => {
    this.setState({
      tableHead: ['Percentage', 'Weight (in lbs)'],
      tableData: [],
    })
    console.log(this.state.tableData)
  }

  render() {
    const tableDisplay = () => {
      return this.state.tableData.map((rowData, index) => (
        <Row
          key={ index }
          data={ rowData }
          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
          textStyle={ styles.tableText }
        />
      ))
    }

    return (
      <View>
        {!this.state.displayTable &&
          <View style={ styles.container }>
            <Form
              ref="percentageForm"
              type={ Attributes }
            />
            <TouchableHighlight style={ styles.button } onPress={ this.handlePercentFormPress } underlayColor='#99d9f4'>
              <Text style={ styles.buttonText }>Submit</Text>
            </TouchableHighlight>
          </View>
        }
        {this.state.displayTable &&
        <ScrollView>
          <View style={ styles.tableContainer }>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={ this.state.tableHead } style={ styles.tableHead } textStyle={ styles.tableText } />
              { tableDisplay() }
            </Table>
            <View style={ styles.kiloContainer }>
              <Text>Show Kilos</Text>
              <Form
                ref="kiloToggle"
                type={ t.Boolean }
                onChange={ this.handleKiloToggle }
              />
            </View>
          </View>
        </ScrollView>
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
  },
  kiloContainer: {
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  tableText: {
    margin: 6
  },
  row: {
    height: 40,
    backgroundColor: '#E7E6E1'
  },
})