import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../components/Main';
export const InitialRoutes = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
});

export const createRootNavigator = logged => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Main: {screen: InitialRoutes},
      },
      {
        initialRouteName: 'Main',
      },
    ),
  );
};
