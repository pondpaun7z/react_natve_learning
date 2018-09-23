import { createStackNavigator } from 'react-navigation'

import PageOne from './containers/PageOne'
import PageTwo from './containers/PageTwo'

export const Navigator = new createStackNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
},{
  initialRouteName: 'PageOne',
})


