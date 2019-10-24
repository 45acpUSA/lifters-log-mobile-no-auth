import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={ styles.imageContainer }>
          <Image source={require('../assets/images/splashText.png')} style={ styles.titleImage } />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  titleImage: {
    width: '100%',
    alignSelf: 'center',
  },
  container: {
    flex: 1
  },
  contentContainer: {
    paddingTop: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
