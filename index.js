/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUI from "./storybook";

AppRegistry.registerComponent(appName, () => __DEV__? StorybookUI : App);


