import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { WalkthroughProvider } from 'react-native-walkthrough';
import AppIntroSlider from 'react-native-app-intro-slider';

import Navigation from './src/navigation';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description, Say something cool, Lorem ipsum bla bla bla',
    //image: require('./assets/1.jpg'),
    backgroundColor: '#4285f4'
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    //image: require('./assets/2.jpg'),
    backgroundColor: '#34a853'
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions Lorem ipsum bla bla bla",
    //image: require('./assets/3.jpg'),
    backgroundColor: '#ffbc05'
  }
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 24
  }
});

const App = function ({}) {
  const [showAppIntro, setShowAppIntro] = useState(true);

  const onSkip = useCallback(() => {
    setShowAppIntro(false);
  }, [setShowAppIntro]);

  const onDone = useCallback(() => {
    setShowAppIntro(false);
  }, [setShowAppIntro]);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        {/*        <Image source={item.image} />
         */}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }, []);

  if (showAppIntro) {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton
        showDoneButton
        showNextButton
        showPrevButton
        activeDotStyle={{ backgroundColor: '#ffffff' }}
        dotStyle={{ backgroundColor: '#eeeeee88' }}
      />
    );
  }

  return (
    <OverflowMenuProvider>
      <WalkthroughProvider>
        <Navigation />
      </WalkthroughProvider>
    </OverflowMenuProvider>
  );
};

export default App;
