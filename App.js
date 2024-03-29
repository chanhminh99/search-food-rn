import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screen/SearchScreen'
import ResultsShowScreen from './src/screen/ResultsShowScreen'
const navigatior = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
      headerMode: 'screen',
      cardStyle: {backgroundColor: '#FFFFFF'}
    }
  }
)

export default createAppContainer(navigatior)
