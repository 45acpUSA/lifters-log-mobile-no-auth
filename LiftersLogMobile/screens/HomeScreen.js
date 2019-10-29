import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';


export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%'}}>
      <View style={ styles.titleImageContainer }>
        <Image source={require('../assets/images/splashText.png')} style={ styles.titleImage } />
        <ScrollView
          style={ styles.container }
          contentContainerStyle={ styles.contentContainer }
        >
          <View style={ styles.helpContainer }>
            <Text style={ styles.helpText }>
              Hey there and thanks for checking out my first mobile app. I intend to get this app on the App Store and keep it
              <Text style={{ fontWeight: 'bold', color: '#fff' }}> FREE </Text>
              to use. In order to do that I need
              <Text style={{ fontStyle: 'italic', color: '#fff' }}> YOUR </Text>
              help! {'\n'}
              {'\n'}
              If you have comments about this app, feel free to email me at: {'\n'}
              <Text
                style={{ fontWeight: 'bold', color: '#fff' }}
                onPress={() => Linking.openURL(`mailto:mattauthedev@gmail.com`)}
              >
                mattauthedev@gmail.com
              </Text>
              {"\n"}
              If these comments include feedback or suggestions, please make sure to thoroughly explain yourself. {'\n'}
              {'\n'}
              {'\n'}
              The first thing I need your input on is what content to include on this home screen. What do
              <Text style={{ fontStyle: 'italic', color: '#fff' }}> you </Text>
              find most useful to supplement your training? {'\n'}
              {'\n'}
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{'\u2022'}</Text>Lifting Articles? Sources? {'\n'}
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{'\u2022'}</Text>Nutrition Articles? Sources? {'\n'}
              <Text style={{ fontWeight: 'bold', color: 'black' }}>{'\u2022'}</Text>Links to Lifting Technique Videos? {'\n'}
              {'\n'}
              The purpose of this is allows sponsored advertisements from reputable sources to show on this page. Very similar to MyFitnessPal. {'\n'}
              I also have fitness and nutrition articles I've written in the past during my time as a Crossfit Coach and Personal Trainer. {'\n'}
              {'\n'}
              If this is accomplished, you will see Version 1.0 of Lifter's Log published on the App Store and free to use. {'\n'}
              Version 1.0 will include all the functionality you see in this current project. {'\n'}
              {'\n'}
              Version 2.0 is also currently in the works. This version will include all the functionality from the web app version, including: Log In, Save PR's for lifts, quickly see percentage breakdowns of a lift based on your PR, and more!
            </Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  titleImageContainer: {
    flex: 1,
    paddingTop: 30
  },
  container: {
    flex: 1,
    paddingBottom: 20
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    lineHeight: 30,
  },
  helpContainer: {
    zIndex: 1,
    backgroundColor: 'rgba(170, 175, 179, 0.5)',
    padding: 7
  },
  helpText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Futura',
    color: '#06259e',
    textAlign: 'center',
  },
})
