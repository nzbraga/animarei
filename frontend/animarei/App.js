import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/page/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer >  
     <Routes />
    </NavigationContainer>
  );
}