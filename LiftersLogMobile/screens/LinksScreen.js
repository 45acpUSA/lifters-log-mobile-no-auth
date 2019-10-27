import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import TouchableOpacity from 'react-native-platform-touchable'
import { Header, Divider } from 'react-native-elements'

export default function LinksScreen(props) {
  const { navigate } = props.navigation
  return (
    <ScrollView style={ styles.container }>

      <View>
        <TouchableOpacity
          style={ styles.options }
          onPress={() => navigate('PercentageFinder')}
          >
          <View style={ styles.optionTextContainer }>
            <Text style={ styles.optionText }>Percentage Finder</Text>
          </View>
        </TouchableOpacity>
        <View style={ styles.optionDescriptionContainer }>
          <Text style={ styles.optionDescription }>
            Percentage Finder allows you to quickly see your weight breakdown between the percentage range you provide so you can focus more on training and less on calculating.
          </Text>
        </View>
      </View>

      <Divider style={ styles.divider } />

      <View>
        <TouchableOpacity
          style={ styles.options }
          onPress={() => navigate('PlateMath')}
        >
          <View style={ styles.optionTextContainer }>
            <Text style={ styles.optionText }>Plate Math</Text>
          </View>
        </TouchableOpacity>
        <View style={ styles.optionDescriptionContainer }>
          <Text style={ styles.optionDescription }>
            Having trouble adding up all the tens you threw on your bar? What about those random change plates? Click on the link, follow the instructions and let us add your weights for you.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  header: 
    <Header
      backgroundColor='#626263'
      centerComponent={{ text: 'Mathematical', style: { color: '#fff' } }}
    />,
  
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  options: {
    backgroundColor: '#06259e',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionTextContainer: {
    
  },
  optionText: {
    fontSize: 50,
    marginTop: 1,
    textAlign: 'center',
    color: '#fff'
  },
  optionDescriptionContainer: {
    padding: 10
  },
  optionDescription: {
    fontSize: 20,
  },
  divider: {
    backgroundColor: 'white',
    padding: 5,
    margin: 30
  },
});
