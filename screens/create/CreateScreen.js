import { createAppContainer, createStackNavigator } from 'react-navigation';
import CreateStep1Screen from './CreateStep1Screen'
import CreateStep2Screen from './CreateStep2Screen'

export default createAppContainer(createStackNavigator(
    {
        CreateStep1: CreateStep1Screen,
        CreateStep2: CreateStep2Screen,
    },
    {
        initialRouteName: 'CreateStep1'
    }
));
