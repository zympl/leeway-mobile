import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './src/styled/theme';
import {ThemeProvider} from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  const hideSplashScreen = () => {
    RNBootSplash.hide();
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider
        animationType="zoom-in"
        successColor="#339900"
        dangerColor="#cc3300"
        warningColor="#ffcc00"
        swipeEnabled>
        <SafeAreaProvider>
          <NavigationContainer onReady={hideSplashScreen}>
            <MainStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
