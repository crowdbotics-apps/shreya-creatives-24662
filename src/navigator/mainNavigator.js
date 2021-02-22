import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList208260Navigator from '../features/ArticleList208260/navigator';
import ArticleList208259Navigator from '../features/ArticleList208259/navigator';
import ArticleList208258Navigator from '../features/ArticleList208258/navigator';
import ArticleList208241Navigator from '../features/ArticleList208241/navigator';
import ArticleList208240Navigator from '../features/ArticleList208240/navigator';
import ArticleList208239Navigator from '../features/ArticleList208239/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList208260: { screen: ArticleList208260Navigator },
ArticleList208259: { screen: ArticleList208259Navigator },
ArticleList208258: { screen: ArticleList208258Navigator },
ArticleList208241: { screen: ArticleList208241Navigator },
ArticleList208240: { screen: ArticleList208240Navigator },
ArticleList208239: { screen: ArticleList208239Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
