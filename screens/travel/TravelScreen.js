import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import TravelInfoScreen from './TravelInfoScreen';

export default createAppContainer(createMaterialTopTabNavigator(
  {
      TravelInfo: { screen: TravelInfoScreen },
  },
//   {
//       animationEnabled: true,
//       swipeEnabled: true,
//       tabBarPosition: "bottom",
//       tabBarOptions: {
//           style: {
//             ...Platform.select({
//               ios:{
//                 backgroundColor:'white',
//               }
//             })
//           },
//           iconStyle: { height: 100 },
//           activeTintColor: '#000',
//           inactiveTintColor: '#d1cece',
//           upperCaseLabel: false,
//           showLabel: false,
//           showIcon: true,
//       }
//   }
));

