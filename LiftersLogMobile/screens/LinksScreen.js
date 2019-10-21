import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable'

export default function LinksScreen(props) {
  const { navigate } = props.navigation
  return (
    <ScrollView style={styles.container}>
      <View>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => navigate('PercentageFinder')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/icon.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Percentage Finder</Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={() => navigate('PlateMath')}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/icon.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Plate Math</Text>
            </View>
          </View>
        </Touchable>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
