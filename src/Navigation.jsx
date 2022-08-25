import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { List } from './screens/List';
import { Photo } from './screens/Photo';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="List" 
        component={List} 
        options={{ title: 'Gallery' }} 
      />
      <Stack.Screen 
        name="Photo" 
        component={Photo} 
        options={{ title: 'Photo' }}  
      />
    </Stack.Navigator>
  </NavigationContainer>
);
